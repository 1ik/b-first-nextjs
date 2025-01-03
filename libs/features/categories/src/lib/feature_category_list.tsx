import { useDelete, useGet } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Loader } from "@bfirst/components-loader";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Feature component that displays list of categories.
 */
export function FeatureCategoryList() {

  const TABLE_COLUMNS: TableColumnDef[] = [
    {
      key: "id",
      colKey: "id",
      title: "ID",
      width:"10%",
      className: "hidden sm:block",
      render: (row) => {
        return (
          <Typography variant="small" color="blue-gray" className="font-normal hidden sm:block">
            {row.id}
          </Typography>
        );
      },
    },
    {
      key: "name",
      colKey: "name",
      title: "Category",
      width: "40%",
    },
    {
      key: "createdAt",
      colKey: "created_at",
      title: "Created At",
      width: "30%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {moment(row["created_at"]).format(`YYYY-MM-DD hh:mm a`)}
          </Typography>
        );
      },
    },
    {
      key: "updatedAt",
      colKey: "updated_at",
      title: "Updated At",
      width: "20%",
      className: "md:block hidden",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70 hidden md:block">
            {moment(row["updated_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "created_by",
      colKey: "created_by",
      title: "Created By",
      width: "25%",
    },
    {
      key: "action",
      colKey: "id",
      title: "Action",
      width: "40%",
      className: "text-right",
      render: (row) => {
        return (
          <div className="flex items-end  md:gap-4 gap-2 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to remove the category ?"
              confirmHandler={<Icon name="trash" />}
            >
              Delete
            </ConfirmButton>
            <Link to={`${row.id}`}>
              <Icon name="pencil"></Icon>
            </Link>
          </div>
        );
      },
    },
  ];

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch, isPending } = useGet(`api/v1/categories?page=${currentPage}&size=20`);
  const { request, isSuccess } = useDelete(`api/v1/categories/${deleteId}`);

  const handleDelete = function (id: number) {
    setDeleteId(id);
    request();
  };

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <Table
      columns={TABLE_COLUMNS}
      data={data.data}
      pagination={{
        currentPage,
        lastPage: data.meta.last_page,
        pageChanged: (page: number) => {
          setCurrentPage(page);
        },
      }}
    />
  );
}

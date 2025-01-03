import { useDelete, useGet } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "@bfirst/components-loader";

/**
 * Feature component that displays list of authors.
 */
export function FeatureAuthorList() {
 
  const TABLE_COLUMNS: TableColumnDef[] = [
    {
      key: "id",
      colKey: "id",
      title: "ID",
      width: "10%",
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
      title: "Author",
      width: "40%",
    },
    {
      key: "createdAt",
      colKey: "created_at",
      title: "Created At",
      width: "25%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {moment(row["created_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "updatedAt",
      colKey: "updated_at",
      title: "Updated At",
      width: "20%",
      className : "hidden md:block",
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
      width: "30%",
      className: "text-right",
      render: (row) => {
        return (
          <div className="flex items-end  md:gap-4 gap-2 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to remove the author ?"
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

  const [deleteId, setDeleteId] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch, isPending } = useGet(`api/v1/authors?page=${currentPage}&size=20`);
  const { request, isSuccess } = useDelete(`api/v1/authors/${deleteId}`);

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
        lastPage: data?.meta.last_page,
        pageChanged: (page: number) => {
          setCurrentPage(page);
        },
      }}
    />
  );
}

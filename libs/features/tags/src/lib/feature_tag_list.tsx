import { useDelete, useGet } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Feature component that displays list of tags.
 */
export function FeatureTagList() {

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
      title: "Tag",
      width: "30%",
    },
    {
      key: "createdAt",
      colKey: "created_at",
      title: "Created At",
      width: "25%",
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
      width: "25%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {moment(row["updated_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "action",
      colKey: "id",
      title: "Action",
      width: "30%",
      className: "text-right",
      render: (row) => {
        return (
          <div className="flex items-end gap-4 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to remove the tag ?"
              confirmHandler={<Icon name="trash" />}
            >
              Delete
            </ConfirmButton>
            <Link to={`${row.id}`}>
              <Icon name="pencil" />
            </Link>
          </div>
        );
      },
    },
  ];

  const [deleteId, setDeleteId] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useGet(`api/v1/tags?page=${currentPage}&size=20`);
  const { request, isSuccess } = useDelete(`api/v1/tags/${deleteId}`);

  const handleDelete = function (id: number) {
    setDeleteId(id);
    request();
  };

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);

  if (!data) {
    return <></>;
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

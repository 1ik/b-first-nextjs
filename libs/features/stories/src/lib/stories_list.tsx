import { useDelete, useGet } from "@bfirst/api-client";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Icon } from "@bfirst/components-icon";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useState } from "react";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Link } from "react-router-dom";

export function StoriesList() {
  const TABLE_COLUMNS: TableColumnDef[] = [
    {
      key: "id",
      colKey: "id",
      title: "ID",
      width: "10%",
    },
    {
      key: "title",
      colKey: "title",
      title: "Title",
      width: "50%",
      render: (row) => {
        return (
          <div>
            <a
              href={`https://bangladeshfirst.com/news/${row.id}/${row.title
                .replaceAll(" ", "-")
                .replace(/[^\w\s-]/g, "")
                .toLowerCase()}`}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="small" color="blue-gray" className="font-normal">
                {row.title}
              </Typography>
            </a>
          </div>
        );
      },
    },
    {
      key: "createdAt",
      colKey: "created_at",
      title: "Created At",
      width: "20%",
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
              message="Do you want to remove the stories ?"
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

  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGet(`api/v1/stories?page=${currentPage}&size=20`);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setDeleteId(id);
    request();
  };

  const { request } = useDelete(`api/v1/stories/${deleteId}`);

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

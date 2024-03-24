import { useDelete, useGet, usePut } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useState } from "react";
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
      width: "10%",
    },
    {
      key: "name",
      colKey: "name",
      title: "Category",
      width: "20%",
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
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGet(`api/v1/categories?page=${currentPage}&size=20`);

  const handleDelete = function (id: number) {
    setDeleteId(id);
    request();
  };

  const handleUpdate = function (input: string, id: number) {
    console.log("hi");
  };
  const { request } = useDelete(`api/v1/categories/${deleteId}`);

  if (!data) {
    return <></>;
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

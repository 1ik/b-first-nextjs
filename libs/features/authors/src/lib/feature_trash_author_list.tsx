import { useDelete, useGet, usePut } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";
import { Spinner } from "@bfirst/material-tailwind";
export function FeatureTrashAuthorList() {
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
      title: "Name",
      width: "50%",
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
      key: "deletedAt",
      colKey: "deleted_at",
      title: "Deleted At",
      width: "20%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {moment(row["deleted_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "action",
      colKey: "id",
      title: "Action",
      width: "20%",
      className: "text-right",
      render: (row) => {
        return (
          <div className="flex items-end gap-4 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to permanently remove the author ?"
              confirmHandler={<Icon name="trash" />}
            >
              Delete
            </ConfirmButton>
            <ConfirmButton
              onConfirm={() => handleRestore(row.id)}
              message="Do you want to restore the author ?"
              confirmHandler={<Icon name="restore" />}
            >
              Restore
            </ConfirmButton>
          </div>
        );
      },
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [restoreId, setRestoreId] = useState<number | null>(null);

  const { data, refetch, isPending } = useGet(`api/v1/trash-items/author`);
  const { request: deleteRequest, isSuccess: deleteSuccess } = useDelete(`api/v1/delete-trash-item/author/${deleteId}`);
  const { request: restoreRequest, isSuccess: restoreSuccess } = usePut(
    `api/v1/restore-trash-item/author/${restoreId}`
  );

  const handleDelete = (id: number) => {
    setDeleteId(id);
    deleteRequest();
  };

  const handleRestore = (id: number) => {
    setRestoreId(id);
    restoreRequest(null);
  };

  useEffect(() => {
    if (deleteSuccess || restoreSuccess) {
      refetch();
    }
  }, [deleteSuccess, restoreSuccess]);

  if (isPending) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner className="h-10 w-10 text-gray-900/50" />
      </div>
    );
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

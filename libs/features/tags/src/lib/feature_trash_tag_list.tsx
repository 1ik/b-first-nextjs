import { useDelete, useGet, usePut } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";

export function FeatureTrashTagList() {
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
      title: "Name",
      width: "50%",
    },
    {
      key: "createdAt",
      colKey: "created_at",
      title: "Created At",
      width: "28%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70 md:pt-0 pt-4">
            {moment(row["created_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "deletedAt",
      colKey: "deleted_at",
      title: "Deleted At",
      width: "28%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70 md:pt-0 pt-4">
            {moment(row["deleted_at"]).format("YYYY-MM-DD hh:mm a")}
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
          <div className="flex items-end gap-2 md:gap-4 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to permanently remove the tag ?"
              confirmHandler={<Icon name="trash" />}
            >
              Delete
            </ConfirmButton>
            <ConfirmButton
              onConfirm={() => handleRestore(row.id)}
              message="Do you want to restore the tag ?"
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

  const { data, refetch } = useGet(`api/v1/trash-items/tag?page=${currentPage}&size=20`);
  const { request: deleteRequest, isSuccess: deleteSuccess } = useDelete(`api/v1/delete-trash-item/tag/${deleteId}`);
  const { request: restoreRequest, isSuccess: restoreSuccess } = usePut(`api/v1/restore-trash-item/tag/${restoreId}`);

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

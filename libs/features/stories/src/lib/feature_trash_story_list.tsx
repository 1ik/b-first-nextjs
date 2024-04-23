import { useDelete, useGet, usePut } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";

export function FeatureTrashStoryList() {
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
      width: "45%",
    },
    {
      key: "authors",
      colKey: "authors",
      title: "Authors",
      width: "38%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {row.authors.map((author: { name: string }) => author.name).join(", ")}
          </Typography>
        );
      },
    },
    {
      key: "deletedAt",
      colKey: "deleted_at",
      title: "Deleted At",
      width: "20%",
      className: "hidden md:block",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70 hidden md:block">
            {moment(row["deleted_at"]).format("YYYY-MM-DD hh:mm a")}
          </Typography>
        );
      },
    },
    {
      key: "created_by",
      colKey: "created_by",
      title: "Created By",
      width: "15%",
    },
    {
      key: "action",
      colKey: "id",
      title: "Action",
      width: "20%",
      className: "text-right",
      render: (row) => {
        return (
          <div className="flex items-end md:gap-4 gap-2 justify-end w-full">
            <ConfirmButton
              onConfirm={() => handleDelete(row.id)}
              message="Do you want to permanently remove the story ?"
              confirmHandler={<Icon name="trash" />}
            >
              Delete
            </ConfirmButton>
            <ConfirmButton
              onConfirm={() => handleRestore(row.id)}
              message="Do you want to restore the story ?"
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

  const { data, refetch } = useGet(`api/v1/trash-items/story?page=${currentPage}&size=20`);
  const { request: deleteRequest, isSuccess: deleteSuccess } = useDelete(`api/v1/delete-trash-item/story/${deleteId}`);
  const { request: restoreRequest, isSuccess: restoreSuccess } = usePut(`api/v1/restore-trash-item/story/${restoreId}`);

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

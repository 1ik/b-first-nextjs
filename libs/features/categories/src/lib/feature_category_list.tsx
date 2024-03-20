import { useDelete, useGet, usePut } from "@bfirst/api-client";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useState } from "react";
import {  DeleteModal, UpdateModal } from "@bd-first/components/confirm-modal";
import { useQueryClient } from "@tanstack/react-query";

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
            <DeleteModal itemName="category" onClick={()=>handleDelete(row.id)}/>
            <UpdateModal itemName="category" onSubmit={(data: any)=>handleEdit(row.id, data)}/>
          </div>
        );
      },
    },
  ];

  const [deleteId, setDeleteId] = useState<null | number>(null);
  const [updateId, setUpdateId] = useState<null | number>(null);
  const [currentPage, setCurrentPage] = useState(1);

  function handleDelete(id: number) {
    setDeleteId(id);
    deleteReq();
  }

  function handleEdit(id: number, data:any) {
    setUpdateId(id);
    updateReq({name: data.updatedInput})
  }

  const queryClient = useQueryClient();
  function handleSuccess() {
    queryClient.invalidateQueries({queryKey:[`api/v1/categories?page=${currentPage}&size=20`]})
  }
  const {request: deleteReq} = useDelete(`api/v1/categories/${deleteId}`, handleSuccess);
  const {request: updateReq} = usePut(`api/v1/categories/${updateId}`, handleSuccess)
  const { data } = useGet(`api/v1/categories?page=${currentPage}&size=20`);

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

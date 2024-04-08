import { useDelete, useGet } from "@bfirst/api-client";
import { ConfirmButton } from "@bfirst/components-confirm-button";
import { Icon } from "@bfirst/components-icon";
import { Table, TableColumnDef } from "@bfirst/components-table";
import { Typography } from "@bfirst/material-tailwind";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@bfirst/material-tailwind";

interface FeatureStoryListProps {
  searchInput?: string;
}

export function FeatureStoryList({ searchInput }: FeatureStoryListProps) {
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
      key: "authors",
      colKey: "authors",
      title: "Authors",
      width: "30%",
      render: (row) => {
        return (
          <Typography variant="small" className="font-normal leading-none opacity-70">
            {row.authors.map((author) => author.name).join(", ")}
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
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const { data, refetch, isPending: isLoading } = useGet(`api/v1/stories?page=${currentPage}&size=20`);
  const { request, isSuccess } = useDelete(`api/v1/stories/${deleteId}`);

  // Story Search
  const { data: searchList, isPending } = useGet(`api/v1/stories?title=${searchInput}`);

  const handleDelete = (id: number) => {
    setDeleteId(id);
    request();
  };

  useEffect(() => {
    if (isSuccess) refetch();
  }, [isSuccess, refetch]);


  if (!searchList) {
    return <></>;
  }

  if (isPending) {
    return <></>;
  }
  
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner className="h-10 w-10 text-gray-900/50"/>
      </div>
    );
  }
  return (
    <Table
      columns={TABLE_COLUMNS}
      data={searchInput ? searchList?.data : data?.data}
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

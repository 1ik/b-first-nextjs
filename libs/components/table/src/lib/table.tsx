/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@bfirst/material-tailwind";
import { Typography } from "@material-tailwind/react";

export interface TableColumnDef {
  key?: string;
  title?: string;
  colKey: string;
  width?: string;
  className?: string;
  style?: string;
  render?: (data: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumnDef[];
  data: any[];
  pagination?: {
    currentPage: number;
    pageChanged(page: number): void;
  };
}

export const Table: React.FC<TableProps> = ({ columns, data, pagination }) => {
  return (
    <table className="w-full h-full flex flex-col w-full table-auto text-left">
      <thead className="h-12 w-full position-sticky">
        <tr className="w-full flex flex-row">
          {columns.map((col) => (
            <th
              key={col.key}
              style={{ width: col.width }}
              className={"border-b border-blue-gray-100 bg-blue-gray-50 p-4 flex-grow-1 " + col.className || ""}
            >
              <Typography variant="small" color="blue-gray" className="font-bold leading-none opacity-70">
                {col.title}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex-1 overflow-scroll w-full">
        {data.map((row, index) => {
          const isLast = index === data.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 flex items-center";

          return (
            <tr key={index} className="w-full flex">
              {columns.map((column, index) => {
                const value = row[column.colKey];
                return (
                  <td className={classes} style={{ width: column.width }}>
                    {column.render ? (
                      column.render(row)
                    ) : (
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {value}
                      </Typography>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className="border-b border-blue-gray-100">
        <div className="p-3 flex items-center justify-between border-t border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {pagination?.currentPage} of 10
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === 1}
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage + 1);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </tfoot>
    </table>
  );
};

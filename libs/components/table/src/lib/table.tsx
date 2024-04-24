/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@bfirst/material-tailwind";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@bfirst/components-icon";

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
    lastPage: number;
    pageChanged(page: number): void;
  };
}

export const Table: React.FC<TableProps> = ({ columns, data, pagination }) => {
  return (
    <table className="w-full h-full flex flex-col table-auto text-left">
      <thead className="md:h-12 w-full position-sticky">
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
      <tbody className="flex-1 overflow-y-scroll md:w-full">
        {data.map((row, index) => {
          const isLast = index === data.length - 1;
          const classes = isLast ? "sm:p-4" : "sm:p-4 border-b border-blue-gray-50 flex items-center";

          return (
            <tr key={index} className="w-full flex">
              {columns.map((column, index) => {
                const value = row[column.colKey];
                return (
                  <td key={index} className={classes} style={{ width: column.width }}>
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
        <tr className="p-3 flex items-center justify-between border-t border-blue-gray-50">
          <td>
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page {pagination?.currentPage} of {pagination?.lastPage}
            </Typography>
          </td>
          <td className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === 1}
              className="md:block hidden"
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === 1}
              className="block md:hidden m-0 p-0 border-0"
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage - 1);
              }}
            >
              <Icon size={22} name="leftArrow" variant="text" />
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === pagination?.lastPage}
              className="md:hidden block m-0 p-0 border-0"
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage + 1);
              }}
            >
              <Icon size={22} name="rightArrow" variant="text" />
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === pagination?.lastPage}
              className="hidden md:block"
              onClick={() => {
                pagination && pagination.pageChanged(pagination.currentPage + 1);
              }}
            >
              Next
            </Button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

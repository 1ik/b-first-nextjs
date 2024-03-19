import { Button } from "@bfirst/material-tailwind";
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Created At", "Updated At", "Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function CategoryList() {
  return (
    <table className="w-full h-full flex flex-col w-full table-auto text-left">
      <thead className="h-12 w-full position-sticky">
        <tr className="w-full flex flex-row">
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              style={{ width: "25%" }}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 flex-grow-1"
            >
              <Typography variant="small" color="blue-gray" className="font-bold leading-none opacity-70">
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex-1 overflow-scroll w-full">
        {TABLE_ROWS.map(({ name, job, date }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={name} className="w-full flex">
              <td className={classes} style={{ width: "25%" }}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className={classes} style={{ width: "25%" }}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className={classes} style={{ width: "25%" }}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className={classes} style={{ width: "25%" }}>
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot className="border-b border-blue-gray-100">
        <div className="p-3 flex items-center justify-between border-t border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </div>
      </tfoot>
    </table>
  );
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CurrentDate() {
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = monthsOfYear[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `${dayOfWeek}, ${month} ${date}, ${year}`;

  return <div className="text-xs text-red-700 font-semibold ml-1.5 translate-y-[-4px] self-start">{formattedDate}</div>;
}

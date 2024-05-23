export default function filterOutOTD(item: { categories: { name: string }[] }) {
  return item.categories?.[0].name !== "On_This_Day";
}

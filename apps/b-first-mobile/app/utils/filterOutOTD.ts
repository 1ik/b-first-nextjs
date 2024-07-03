export default function filterOutOTD(item: { categories: { name: string }[] }) {
    return !item?.categories?.find((c) => c?.name === "On_This_Day");
  }
  
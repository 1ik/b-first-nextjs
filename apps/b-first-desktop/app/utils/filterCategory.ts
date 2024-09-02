export default function filterCategory(data: { categories?: { name: string }[] }[], ...categories: string[]) {
  return data?.filter((item) => !item?.categories?.find((el) => categories.find((c) => el?.name === c)));
}

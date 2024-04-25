// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const newsUrl = (news: any) =>
  `/news/${news.id}/${news.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCategoryNames = (item: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return item?.categories?.map((m: any) => m?.name).join(", ");
};

// export const newsUrl = (news: any) => `/news/${news.id}/${news.slug}`;

export const newsUrl = (news: any) =>
  `/news/${news.id}/${news.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

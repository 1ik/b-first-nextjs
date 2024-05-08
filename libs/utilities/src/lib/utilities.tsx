export const getImageUrl = (path: string, w?: number, h?: number) => {
  if (!w) {
    w = 1600;
  }
  if (!h) {
    h = 900;
  }

  const baseUrl = `https://images.bangladeshfirst.com`;
  return baseUrl + `/resize?width=${w}&height=${h}&format=webp&quality=85&path=${path}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNewsUrl = (news: any) =>
  `/news/${news.id}/${news.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

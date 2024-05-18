export const getImageUrl = (path: string, w?: number, h?: number, q?: number) => {
  if (!w) {
    w = 1600;
  }
  if (!h) {
    h = 900;
  }
  if (!q) {
    q = 85;
  }

  const baseUrl = `https://images.bangladeshfirst.com`;
  return baseUrl + `/smartcrop?width=${w}&height=${h}&format=webp&quality=${q}&path=${path}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNewsUrl = (news: any) =>
  `/news/${news.id}/${news.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

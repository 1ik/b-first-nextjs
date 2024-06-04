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

  const baseUrl = `https://images.bfirst.news`;
  return baseUrl + `/smartcrop?width=${w}&height=${h}&format=webp&quality=${q}&path=${path}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNewsUrl = (news: any) =>
  `/news/${news?.id}/${news?.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

export const cropText = (text: string, maxWords?: number) => {
  if (!maxWords) maxWords = 20;

  if (text.split(" ").length <= maxWords) return text;

  return `${text.split(" ").slice(0, maxWords).join(" ")} ...`;
};

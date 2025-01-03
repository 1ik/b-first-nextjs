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

export const getAdsUrl = (path: string) => {
  const baseUrl = `https://backend.bangladeshfirst.com`;
  return baseUrl + `/${path}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNewsUrl = (news: any) => {
  let slug: string;

  if (news?.categories?.find((c: { name: string }) => c.name === "Video_Gallery")) {
    slug = "video_gallery";
  } else if (news?.categories?.find((c: { name: string }) => c.name === "Photo_Gallery")) {
    slug = "photo_gallery";
  } else {
    slug = news?.categories?.[0].name.toLowerCase();
  }
  return `/${slug}/${news?.id}/${news?.title
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;
};

export const getAuthorProfileUrl = (author: any) =>
  `/author/${author?.id}/${author?.name
    .replaceAll(" ", "-")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()}`;

export const cropText = (text: string, maxWords?: number) => {
  if (!maxWords) maxWords = 20;

  if (text?.split(" ").length <= maxWords) return text;

  return `${text?.split(" ").slice(0, maxWords).join(" ")} ...`;
};

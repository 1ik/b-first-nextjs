export const getImageUrl = (path: string, w?: number, h?: number) => {
  if (!w) {
    w = 1600;
  }
  if (!h) {
    h = 900;
  }

  const baseUrl = `https://images.bfirst.news`;
  return baseUrl + `/resize?width=${w}&height=${h}&format=webp&quality=85&path=${path}`;
};

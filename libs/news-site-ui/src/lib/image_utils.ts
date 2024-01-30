export const getImageUrl = (path: string, w?: number, h?: number) => {
  if (!w) {
    w = 300;
  }
  if (!h) {
    h = 200;
  }
  return `https://imaginary.bangladeshfirst.com/crop?width=${w}&height=${h}&quality=80&type=webp&path=${path}`;
};

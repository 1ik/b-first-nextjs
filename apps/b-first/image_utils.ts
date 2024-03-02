/* export const getImageUrl = (path: string, w?: number, h?: number) => {
  if (!w) {
    w = 1600;
  }
  if (!h) {
    h = 900;
  }
  return `https://imaginary.bangladeshfirst.com/crop?width=${w}&height=${h}&quality=80&type=webp&path=${path}`;
};
 */

export const getImageUrl = (path: string, w?: number, h?: number) => {
  if (!w) {
    w = 1600;
  }
  if (!h) {
    h = 900;
  }
  return `https://bfirst.sgp1.cdn.digitaloceanspaces.com/${path}`;
};

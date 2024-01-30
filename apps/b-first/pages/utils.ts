export const maxText = (text: string, length = 10) => {
  if (text.length > length) {
    return `${text.substr(0, length)}...`;
  }
  return text;
};

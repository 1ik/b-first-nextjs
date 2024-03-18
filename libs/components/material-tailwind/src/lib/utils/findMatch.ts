function findMatch(data: any[], find: string | undefined, defaultValue: string): any {
  const founded = data.findIndex((el: any) => el === find);

  return founded >= 0 ? find : defaultValue;
}

export default findMatch;

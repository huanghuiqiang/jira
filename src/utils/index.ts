export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: Object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  console.log("result", result);
  return result;
};

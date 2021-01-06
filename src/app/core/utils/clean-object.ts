export const cleanObject = (obj) => {
  obj = { ...obj };
  return Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? cleanObject(v) : v }), {});
};

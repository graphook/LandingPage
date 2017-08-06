export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const cloneAssign = (obj, assignment = {}, keysToDelete = []) => {
  const cloned = clone(obj);
  keysToDelete.forEach((key) => {
    delete cloned[key];
  });
  return Object.assign(cloned, assignment);
};

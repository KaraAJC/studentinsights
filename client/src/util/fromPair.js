// in place of updating lodash to v4
export default function fromPair(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
};

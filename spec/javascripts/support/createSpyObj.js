export default function createSpyObj(name, methods) {
  return methods.reduce((object, key) => {
    object[key] = jest.fn();
    return object;
  }, {});
}
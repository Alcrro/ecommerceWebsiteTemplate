export const incrementalNumber = () => {
  let number = -1;

  function inner() {
    number++;
    return number;
  }

  return inner;
};

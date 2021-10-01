const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`no element is selected ${selection} this`);
};

export default getElement;

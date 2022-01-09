import {
  DOUGH_LIST,
  SIZE_LIST,
  SAUCE_LIST,
  INGREDIENT_LIST,
} from "@/common/constants";

export const normalizeDough = (items) =>
  items.map((doughItem) => ({
    ...doughItem,
    value: DOUGH_LIST.find(({ name }) => doughItem.name === name)?.value,
  }));

export const normalizeSizes = (items) =>
  items.map((sizeItem) => ({
    ...sizeItem,
    value: SIZE_LIST.find(({ name }) => sizeItem.name === name)?.value,
  }));

export const normalizeSauces = (items) =>
  items.map((sauceItem) => ({
    ...sauceItem,
    value: SAUCE_LIST.find(({ name }) => sauceItem.name === name)?.value,
  }));

export const normalizeIngredients = (items) =>
  items.map((ingredientItem) => ({
    ...ingredientItem,
    value: INGREDIENT_LIST.find(({ name }) => ingredientItem.name === name)
      ?.value,
  }));

export const getCurrentItems = () => {
  const currentItems = {};

  INGREDIENT_LIST.forEach(({ value }) => {
    currentItems[value] = 0;
  });

  return currentItems;
};

export const getCountClass = (count) => {
  if (count === 1) {
    return "";
  }

  const postfix = count === 2 ? "second" : "third";

  return ` pizza__filling--${postfix}`;
};

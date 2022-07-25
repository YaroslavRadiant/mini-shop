import { createSelector } from "reselect";

export const getProductsInCartSelector = (state) => state.cart;

export const getSumOfCity = createSelector(
  getProductsInCartSelector,
  (products) => {
    if (products) {
      return products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
    } else return 10;
  }
);

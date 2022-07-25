export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CLEAR_ALL_CART = "CLEAR_ALL_CART";
export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";

export const addProductToCart = (payload) => {
  return { type: ADD_PRODUCT_TO_CART, payload };
};

export const clearAllCart = () => {
  return { type: CLEAR_ALL_CART };
};
export const increaseAmount = (payload) => {
  return { type: INCREASE_AMOUNT, payload };
};
export const decreaseAmount = (payload) => {
  return { type: DECREASE_AMOUNT, payload };
};

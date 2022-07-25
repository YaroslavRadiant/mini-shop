import {
  ADD_PRODUCT_TO_CART,
  CLEAR_ALL_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      if (state.cart.find((item) => item.key === action.payload.key)) {
        const newCart = state.cart.map((item) =>
          item.key === action.payload.key
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return { ...state, cart: newCart };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
      };
    }
    case CLEAR_ALL_CART: {
      return { ...state, cart: [] };
    }
    case INCREASE_AMOUNT: {
      const newCart = state.cart.map((item) =>
        item.key === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      return { ...state, cart: newCart };
    }
    case DECREASE_AMOUNT: {
      const newCart = state.cart.map((item) =>
        item.key === action.payload
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      const filteredCart = newCart.filter((el) => el.amount > 0);

      return { ...state, cart: filteredCart };
    }
    default:
      return state;
  }
};

export default cartReducer;

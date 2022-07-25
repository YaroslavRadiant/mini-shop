import {
  ADD_PRODUCT_TO_CART,
  CLEAR_ALL_CART,
  INCREASE_AMOUNT,
} from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case CLEAR_ALL_CART: {
      return { ...state, cart: [] };
    }
    case INCREASE_AMOUNT: {
      console.log(action);
      const prod = state.cart.findIndex((el) => el.key === action.key);

      return { ...state, cart: [...state.cart, prod.amount + 1] };
    }
    default:
      return state;
  }
};

export default cartReducer;

import { ADD_PRODUCT_TO_CART } from "../actions/cartActions";


const initialState = { card: {} };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART: {
        return {};
      }
      default:
        return state;
    }
};

export default cartReducer;

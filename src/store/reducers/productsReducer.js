import { ADD_ALL_PRODUCTS } from "../actions/productsActions";

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_PRODUCTS: {
      return Object.values(action.payload);
    }
    default:
      return state;
  }
};

export default productsReducer;

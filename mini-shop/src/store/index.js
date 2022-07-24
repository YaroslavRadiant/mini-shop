import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "count",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistedReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);

const persistor = persistStore(store);
export { persistor };

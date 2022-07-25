import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import CartPage from "./pages/cart/CartPage";
import ProductsPage from "./pages/products/ProductsPage";
import "./App.css";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes className="rout-section">
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import CartPage from "./pages/cart/CartPage";
import ProductsPage from "./pages/products/ProductsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes className="rout-section">
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

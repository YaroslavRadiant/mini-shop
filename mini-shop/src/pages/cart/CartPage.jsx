import React from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import "./cartPage.css";

export default function CartPage() {
  return (
    <div>
      <div className="pageMargin">
        <div className="cartPageBlock">
          <div className="itemsBlock">
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
          </div>
          <div className="formBlock"></div>
        </div>
      </div>
    </div>
  );
}

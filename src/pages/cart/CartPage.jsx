import React from "react";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import "./cartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { clearAllCart } from "../../store/actions/cartActions";
import { getSumOfCity } from "../../store/reducers/selectors";
import UserFormComponent from "../../components/UserFormComponent/UserFormComponent";

export default function CartPage() {
  const productsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderProductsInCart = (card) => {
    return <ProductInCart card={card} />;
  };

  return (
    <div>
      <div className="pageMargin">
        <div className="cartPageBlock">
          <div className="itemsBlock">
            {productsInCart.cart.length ? (
              productsInCart.cart.map(renderProductsInCart)
            ) : (
              <p>Cart is empty</p>
            )}
            <p className="TotalPrice">Total: {getSumOfCity(productsInCart)}$</p>
          </div>
          <div className="formBlock">
            <UserFormComponent />
            <button
              className="clearCartButton"
              onClick={() => dispatch(clearAllCart())}
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

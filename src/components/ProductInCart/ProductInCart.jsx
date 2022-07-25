import React from "react";
import "./productInCart.css";
import { useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
} from "../../store/actions/cartActions";
import { PropTypes } from "prop-types";

export default function ProductInCart({ card }) {
  const dispatch = useDispatch();
  const { name, description, price, amount, key } = card;

  return (
    <div className="productInCart">
      <div className="imageBlock">
        <p>Image not found</p>
      </div>
      <div className="valueBlock">
        <p>{name}</p>
        <p>{description}</p>
        <p>{price * amount}$</p>
      </div>
      <div className="amountBloc">
        <button onClick={() => dispatch(decreaseAmount(key))}>-</button>
        <p>{amount}</p>
        <button onClick={() => dispatch(increaseAmount(key))}>+</button>
      </div>
    </div>
  );
}

ProductInCart.propTypes = {
  card: PropTypes.object,
};

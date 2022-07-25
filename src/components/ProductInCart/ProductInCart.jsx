import React from "react";
import "./productInCart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
} from "../../store/actions/cartActions";

export default function ProductInCart({ card }) {
  const { name, description, price, amount, key } = card;
  const dispatch = useDispatch();
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

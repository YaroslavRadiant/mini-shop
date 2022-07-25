import React from "react";
import "./productCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/actions/cartActions";

export default function ProductCard({ name, description, price, el }) {
  const dispatch = useDispatch();
  return (
    <div className="productCard">
      <div className="imagePlace">
        <p>Image not found</p>
      </div>
      <div className="productInformation">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Ціна: {price}$</p>
        <button
          className="buyButton"
          onClick={() => dispatch(addProductToCart({ ...el, amount: 1 }))}
        >
          Купити\додати
        </button>
      </div>
    </div>
  );
}

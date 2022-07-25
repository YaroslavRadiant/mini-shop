import React from "react";
import "./productCard.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/actions/cartActions";
import { PropTypes } from "prop-types";

export default function ProductCard({ name, description, price, el }) {
  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(el));
  };

  return (
    <div className="productCard">
      <div className="imagePlace">
        <p>Image not found</p>
      </div>
      <div className="productInformation">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Ціна: {price}$</p>
        <button className="buyButton" onClick={handleAddProductToCart}>
          Купити\додати
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  el: PropTypes.object,
};

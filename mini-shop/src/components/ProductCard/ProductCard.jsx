import React from "react";
import "./productCard.css";

export default function ProductCard({ name, description, price }) {
  return (
    <div className="productCard">
      <div className="imagePlace">
        <p>Image not found</p>
      </div>
      <div className="productInformation">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Ціна: {price}$</p>
        <button className="buyButton">Купити\додати</button>
      </div>
    </div>
  );
}

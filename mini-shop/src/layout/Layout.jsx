import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import { useDispatch, useSelector } from "react-redux";
import { getSumOfCity } from "../store/reducers/selectors";

export default function Layout() {
  const productsInCart = useSelector((state) => state.cart);
  return (
    <>
      <header>
        <NavLink to="/products">Products</NavLink>
        <div className="cartHeaderSection">
          {getSumOfCity(productsInCart) ? (
            <p>{getSumOfCity(productsInCart)}$</p>
          ) : null}
          <NavLink to="/cart">
            <button>Cart</button>
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

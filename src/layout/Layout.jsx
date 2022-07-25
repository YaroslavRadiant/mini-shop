import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import { useSelector } from "react-redux";
import { getSumOfCity } from "../store/reducers/selectors";
import logo from "../assets/images/pngegg.png";

export default function Layout() {
  const productsInCart = useSelector((state) => state.cart);
  return (
    <>
      <header>
        <NavLink to="/products">
          <img alt="Logo" src={logo}></img>
        </NavLink>
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

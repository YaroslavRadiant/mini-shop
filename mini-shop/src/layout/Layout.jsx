import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          <button>Cart</button>
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}

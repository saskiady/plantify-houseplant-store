import React from "react";
import { useSelector } from "react-redux";

export default function Header({ onNavigate }) {
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <header className="header">
      <div className="header-left" onClick={() => onNavigate("landing")} style={{cursor:"pointer"}}>
        <h1 className="brand">Plantify</h1>
      </div>

      <nav className="nav">
        <button className="nav-btn" onClick={() => onNavigate("products")}>Products</button>
        <button className="nav-btn" onClick={() => onNavigate("cart")}>
          🛒 Cart <span className="cart-count">{totalCount}</span>
        </button>
      </nav>
    </header>
  );
}

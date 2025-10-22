import React from "react";

export default function ProductCard({ product, onAdd, disabled }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.name} className="thumb" />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="category">{product.category}</p>
        <button className="add-btn" onClick={() => onAdd(product)} disabled={disabled}>
          {disabled ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

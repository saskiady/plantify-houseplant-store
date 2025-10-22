import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cartSlice";

export default function CartPage({ onContinue }) {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const entries = Object.entries(items); // [ [id, {product, quantity}], ...]

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <p>Total items: <strong>{totalCount}</strong></p>
        <p>Total price: <strong>${totalPrice.toFixed(2)}</strong></p>
      </div>

      {entries.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={onContinue} className="primary">Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {entries.map(([id, { product, quantity }]) => (
              <div className="cart-item" key={id}>
                <img src={product.thumbnail} alt={product.name} className="cart-thumb" />
                <div className="cart-details">
                  <h4>{product.name}</h4>
                  <p>Unit Price: ${product.price.toFixed(2)}</p>
                  <p>Quantity: {quantity}</p>
                </div>
                <div className="cart-controls">
                  <button onClick={() => dispatch(increase(id))}>+</button>
                  <button onClick={() => dispatch(decrease(id))}>-</button>
                  <button onClick={() => dispatch(removeItem(id))}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="secondary" onClick={() => alert("Coming Soon")}>Checkout</button>
            <button className="primary" onClick={onContinue}>Continue Shopping</button>
          </div>
        </>
      )}
    </div>
  );
}

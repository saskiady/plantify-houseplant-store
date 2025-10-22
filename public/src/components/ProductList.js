import React, { useMemo } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // group categories
  const categories = useMemo(() => {
    const map = {};
    products.forEach((p) => {
      if (!map[p.category]) map[p.category] = [];
      map[p.category].push(p);
    });
    return map;
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="categories">
        {Object.entries(categories).map(([cat, items]) => (
          <section key={cat} className="category-section">
            <h3>{cat}</h3>
            <div className="product-grid">
              {items.map((product) => {
                const disabled = !!cartItems[product.id];
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAdd}
                    disabled={disabled}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

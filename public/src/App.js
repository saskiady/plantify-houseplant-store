import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  const [route, setRoute] = useState("landing"); // "landing" | "products" | "cart"

  const navigate = (to) => {
    setRoute(to);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Header onNavigate={navigate} />
      <main className="main">
        {route === "landing" && <LandingPage onStart={() => navigate("products")} />}
        {route === "products" && <ProductList />}
        {route === "cart" && <CartPage onContinue={() => navigate("products")} />}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Plantify — Houseplant Store</p>
      </footer>
    </div>
  );
}

export default App;

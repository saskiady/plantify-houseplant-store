import React from "react";

export default function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <div className="landing-bg" />
      <div className="landing-content">
        <h2>Welcome to Plantify</h2>
        <p>
          Plantify is a cozy online shop for houseplants. Find carefully curated plants perfect for
          homes and offices — from easy succulents to statement trees.
        </p>
        <button className="primary" onClick={onStart}>Get Started</button>
      </div>
    </div>
  );
}

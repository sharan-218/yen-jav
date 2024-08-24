import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="main-home">
      <section className="hero-section">
        <h1 id="title">YenJav</h1>
        <p id="sub-title">
          Flavor Meets Convenience: Your Daily Cuisine & Grocery Essentials!
        </p>
        <a href="#about" id="more">
          Know more
          <span className="material-symbols-outlined">north_east</span>
        </a>
      </section>
    </div>
  );
};

export default Home;

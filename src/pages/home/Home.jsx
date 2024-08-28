import React from "react";
import heroBg from "../../assets/hero-bg2.webp";
// import heroBgCompressed from "../../assets/hero-bg2-compressed.webp";
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
      <img src={heroBg} alt="background-image" id="hero-bg" />
    </div>
  );
};

export default Home;

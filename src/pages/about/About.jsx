import React from "react";
import img1 from "../../assets/about-img1.jpg";
import img2 from "../../assets/about-img2.jpg";
import img3 from "../../assets/about-img3.jpg";
import "./about.css";
import DescribeCard from "../../components/describeCard/DescribeCard";
const About = () => {
  return (
    <section id="about">
      <div className="about-description">
        <h2 id="about-subtitle">About Us</h2>
        <div className="description-container">
          <p className="about-description">
            At YenJav, we are passionate about bringing the vibrant and diverse
            flavors of India directly to your doorstep. As a family-run
            business, our mission is to offer a unique culinary experience that
            combines traditional morning meals, flavorful evening street food,
            and fresh grocery essentials.
          </p>
          <br />
          <p className="about-description">
            <strong>Morning Delights</strong>: Start your day with our carefully
            crafted morning meals, designed to be both delicious and nutritious.
            Each dish is prepared with love and the finest ingredients to ensure
            you have a perfect start to your day.
          </p>
          <br />
          <p className="about-description">
            <strong>Evening Flavors</strong>: In the evening, indulge in our
            selection of spicy Indian street food and savory dishes. Our menu is
            a celebration of authentic Indian flavors, offering something
            special for every palate.
          </p>
          <br />
          <p className="about-description f-para">
            "As a family business, we take pride in every aspect of our service,
            from the quality of our food to the satisfaction of our customers.
            Our commitment to excellence and personalized service is what sets
            us apart."
          </p>
        </div>
      </div>
      <div className="about-header">
        <h2 id="about-title">What is in the box?</h2>
      </div>
      <div className="about-body">
        <div className="describe-card-wrapper">
          <DescribeCard
            description="Start your day with our freshly prepared, delicious meals, delivered right to your door. Enjoy the perfect blend of taste and nutrition every morning."
            image={img1}
            cardTitle="Savor the Morning"
          />
          <DescribeCard
            description="Indulge in our variety of spicy Indian street food and flavorful dishes, crafted to make your evenings unforgettable."
            image={img2}
            cardTitle="Spice Up Your Evenings"
          />
          <DescribeCard
            description="Get the freshest vegetables and everyday household items delivered to you. Your daily essentials, just a click away"
            image={img3}
            cardTitle="Essentials Delivered"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

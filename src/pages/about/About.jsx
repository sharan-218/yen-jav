import React from "react";
import img1 from "../../assets/about-img1.jpg";
import img2 from "../../assets/about-img2.jpg";
import img3 from "../../assets/about-img3.jpg";
import drink1 from "../../assets/drinks1.jpg";
import drink2 from "../../assets/drinks2.jpg";
import drink3 from "../../assets/drinks3.jpg";
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
        <h2 className="about-title">What is in the box?</h2>
      </div>
      <div className="about-body">
        <div className="describe-card-wrapper">
          <DescribeCard
            description="Start your day with our freshly prepared, delicious meals, delivered right to your door. Enjoy the perfect blend of taste and nutrition."
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

        <section className="drinks-section">
          <div className="about-header">
            <h2 className="about-title">Drinks and Beverages</h2>
          </div>
          <div className="drinks-card-wrapper">
            <DescribeCard
              image={drink1}
              cardTitle="Classic Chai Bliss"
              description="Enjoy our Classic Chai, made with a special mix of spices and tea. It's a warm, comforting drink that's perfect for any time of day."
            />
            <DescribeCard
              image={drink3}
              cardTitle="Artisan Coffee Creations"
              description="Discover our selection of Hot Indian Drinks, featuring a variety of traditional beverages like Masala Tea and Thandai."
            />
            <DescribeCard
              image={drink2}
              cardTitle="Hot Indian Elixirs"
              description="Enjoy our range of drinks, including tea, coffee, and traditional Indian hot beverages. Each drink is made to be delicious and satisfying."
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;

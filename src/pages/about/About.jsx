import React from "react";
import img1 from "../../assets/about-img1.jpg";
import img2 from "../../assets/about-img2.jpg";
import img3 from "../../assets/about-img3.jpg";
import "./about.css";
import DescribeCard from "../../components/describeCard/DescribeCard";
const About = () => {
  return (
    <section id="about">
      <div className="about-header">
        <h1 id="about-title">What is in the box?</h1>
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

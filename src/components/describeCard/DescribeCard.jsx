import React from "react";
import "./describeCard.css";
const DescribeCard = ({ description, image, cardTitle, cardClass }) => {
  return (
    <div className={cardClass ? cardClass : "describe-card"}>
      <h2 className="cardTitle">{cardTitle}</h2>
      <p className="description">{description}</p>
      {/* Photo by Pixabay: https://www.pexels.com/photo/spoons-with-seasonings-277253/ */}
      {/* Photo by ready made: https://www.pexels.com/photo/vegetable-on-white-ceramic-plate-3987334/ */}
      {/* Photo by sarthak : https://www.pexels.com/photo/delicious-indian-dumplings-with-herbs-and-red-pepper-4331491/ */}
      {/* Photo by Olena Bohovyk: https://www.pexels.com/photo/sliced-orange-fruit-in-clear-drinking-glass-3323682/ */}
      {/* Photo by Charlotte May: https://www.pexels.com/photo/masala-tea-with-spices-on-table-5946612/ */}
      <div className="image-wrapper">
        <img src={image} className="card-image" loading="lazy" />
      </div>
    </div>
  );
};

export default DescribeCard;

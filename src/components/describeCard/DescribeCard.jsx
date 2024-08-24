import React from "react";
import "./describeCard.css";
const DescribeCard = ({ description, image, cardTitle }) => {
  return (
    <div className="describe-card">
      <h2 className="cardTitle">{cardTitle}</h2>
      <p className="description">{description}</p>
      {/* Photo by Pixabay: https://www.pexels.com/photo/spoons-with-seasonings-277253/ */}
      {/* Photo by ready made: https://www.pexels.com/photo/vegetable-on-white-ceramic-plate-3987334/ */}
      {/* Photo by sarthak : https://www.pexels.com/photo/delicious-indian-dumplings-with-herbs-and-red-pepper-4331491/ */}
      <div className="image-wrapper">
        <img src={image} className="card-image" />
      </div>
    </div>
  );
};

export default DescribeCard;

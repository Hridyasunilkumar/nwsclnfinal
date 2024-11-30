import React, { useState } from "react";

const Card = ({ image, title, sectiontitle, itemtitlelead }) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true); // If the image fails to load, set the error state to true
  };

  const fullImageURL = image.startsWith("http") ? image : `https://www.mathrubhumi.com${image}`;

  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={imgError ? "https://via.placeholder.com/150" : fullImageURL} // Fallback image if error
          alt={title}
          className="card-image"
          onError={handleError} // Trigger handleError when image fails
        />
      </div>
      <div className="card-content">
        <div className="sectiontitle">{sectiontitle}</div>
        <div className="card-title">{title}</div>
        <div className="itemtitlelead">{itemtitlelead}</div>
      </div>
    </div>
  );
};

export default Card;
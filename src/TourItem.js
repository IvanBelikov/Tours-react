import React, { useState } from "react";

import icon from "./more-than.png";

const TourItem = ({ image, name, price, info, removeTourItem }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <article className="tour-item">
      <div className="tour-image-area">
        <div className="cover">
          <img src={icon} alt="More icon" className="icon" />
        </div>
        <img src={image} alt="Tour" className="tour-image" />
      </div>
      <div className="item-content">
        <div className="tour-row">
          <h3 className="tour-name">{name}</h3>
          <p className="tour-price">{price}$</p>
        </div>
        <p className="tour-info">
          {isReadMore ? `${info} ` : `${info.substring(0, 200)}... `}
          <button
            className="read-more-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="not-interested-btn" onClick={removeTourItem}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourItem;

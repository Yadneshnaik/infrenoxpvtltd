import React, { useState } from "react";
import "./OfferBanner.css"; // Import CSS for animations

const OfferBanner = () => {
  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing the banner
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render the banner if it's not visible

  return (
    <div className="offer-banner">
      <div className="offer-content">
        <p>🎄 Christmas Cheer Alert! Get Up to 50% Off on All Services! 🎅 Limited Time Only – Don’t Miss Out!</p>
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;

import React, { useState, useEffect } from "react";
import "./OfferBanner.css"; // Import CSS for animations

const OfferBanner = () => {
  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Check local storage to see if the banner should be hidden
  useEffect(() => {
    const bannerClosed = localStorage.getItem("offerBannerClosed");
    if (bannerClosed) {
      setIsVisible(false);
    }
  }, []);

  // Handle closing the banner
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("offerBannerClosed", "true");
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

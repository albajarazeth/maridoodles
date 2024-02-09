import React from "react";
import "./App.css";
import PixelHeart from "./assets/giphy-heart .gif";

const FloatingHearts = () => {
  return (
    <div className="floating-container">
      {/* Hearts floating from bottom to top */}
      <div className="heart-container top-to-bottom">
        <div className="heart heart-one">
          <img width={"100rem"} src={PixelHeart} />
        </div>
      </div>

      {/* Hearts floating from top to bottom */}
      <div className="heart-container bottom-to-top">
        <div className="heart heart-two">
          <img width={"100rem"} src={PixelHeart} />
        </div>
      </div>
    </div>
  );
};

export default FloatingHearts;

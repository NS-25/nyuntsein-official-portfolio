import React from "react";

const StarBackground: React.FC = () => {
  return (
    <div className="bg-sky" aria-hidden="true">
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
    </div>
  );
};

export default StarBackground;

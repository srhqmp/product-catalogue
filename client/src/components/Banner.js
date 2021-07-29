import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-banner w-full h-banner bg-cover bg-top">
      <div className="orange-box h-box bg-primary w-full md:w-box absolute bottom-20 flex items-center">
        <h2 className="banner banner-text whitespace-nowrap ml-11">The perfect outfit for summer</h2>
      </div>
    </div>
  );
};

export default Banner;

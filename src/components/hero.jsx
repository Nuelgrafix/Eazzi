import React from "react";
import HeroSideBar from "./heroSideBar";
import HeroSwiper from "./heroSwiper";
const Hero = () => {
  return (
    <>
      <div className="flex gap-[14px]">
        <HeroSideBar />
        <HeroSwiper />
      </div>
    </>
  );
};

export default Hero;

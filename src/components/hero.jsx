import React from "react";
import HeroSideBar from "./heroSideBar";
import HeroSwiper from "./heroSwiper";
const Hero = () => {
  return (
    <>
      <div className="flex gap-[17px] w-full">
        <HeroSideBar />
        <HeroSwiper />
      </div>
    </>
  );
}

export default Hero;

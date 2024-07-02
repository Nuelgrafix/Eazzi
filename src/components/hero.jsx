import HeroSideBar from "./heroSideBar";
import HeroSwiper from "./heroSwiper";
const Hero = () => {
  return (
    <>
      <div className="flex gap-[17px] mt-20 w-full  ">
        <HeroSideBar />
        <HeroSwiper />
      </div>
    </>
  );
};

export default Hero;

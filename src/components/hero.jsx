import HeroSideBar from "./heroSideBar";
import HeroSwiper from "./heroSwiper";
const Hero = ({ setFilterKeyword }) => {
  //const [keyword, setKeyword] = useState('');
  return (
    <>
      <div className="flex gap-[17px] mt-20 w-full  ">
        <HeroSideBar setFilterKeyword={setFilterKeyword} />
        <HeroSwiper />
      </div>
    </>
  );
};

export default Hero;

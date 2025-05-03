import Products from "./products"; 
import { Link } from "react-router-dom";
import Slider from "react-slick";
import star from "/Image/Star 6.svg";
import useGetStores from "../storedashboard/storedashboardhooks/useGetStore";

const ProductLocation = (filterKeyword) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0, 
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { stores } = useGetStores();

  return (
    <section className="overflow-hidden">
      {/* Newest Products Section */}
      <div className="mt-[2rem]">
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9] md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px] font-tekInter">
              Newest product here
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>
          <Link to="/product/see-more" className="md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px] flex gap-2 font-tekInter cursor-pointer">
            See more <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>
        <div className="bg-[#FFB164] md:bg-productBg w-full">
          <Products filterKeyword={filterKeyword} />
        </div>
      </div>

      {/* Top Selling Stores Section */}
      <div>
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[0.5rem]">
          <h1 className="text-[#fff] font-[400] text-[18px] leading-[19px] font-tekInter">
          Top Selling Store
          </h1>
          <Link to="/otherstores" className="text-[#fff] font-[600] text-[16px] leading-[24px] flex gap-2 font-tekInter">
            View all stores <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        {/* Desktop View */}
        <div className="md:flex justify-center gap-5 pb-[3rem] p-[2rem] hidden">
          {stores.slice(0, 3).map((s, index) => (
            <div key={s.id} className={`bg-[#E0E0E0] p-[1rem] ${index === 0 ? "md:w-[600px] h-[533px]" : "lg:w-[600px] h-[252px]"} flex ${index === 0 ? "flex-col" : "items-center gap-3"}`}>
              <img src={s.profile_image} alt="store" className={`${index === 0 ? "w-full h-[357px]" : "lg:w-[269px] h-[217px]"} rounded-[5px]`} />
              <div className="flex flex-col items-start pl-2">
                <h1 className="text-[#181818] font-[700] lg:text-[24px] md:text-[20px] leading-[36px] font-tekInter">
                  {s.store_name}
                </h1>
                <p className="text-[#181818] font-[400] text-[20px] leading-[36px] font-tekInter">
                  {s.store_address}
                </p>
                <span className="text-[#333333] font-[400] text-[16px] leading-[19px] font-tekInter flex gap-1 items-center">
                  <img src={star} alt="star" className="rounded-[50%] w-[13px] h-[13px]" /> 4.2 (380) Opens; {s.working_hours}
                </span>
                <button className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400] text-center bg-mainBlue text-[16px] mt-[1rem]">
                  <Link to={`/topstoresdetails/${s.id}`}>Enter Store</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View with Slider */}
      <div className="md:hidden w-full space-x-10">
        <Slider {...settings} className="gap-3 flex p-[1rem] rounded-[5px] mx-4">
          {stores.map((s) => (
            <div key={s.id} className="flex flex-col shadow-locationShad bg-gray-200 p-[1rem] rounded-[16px] border border-[#A9BCFF] mx-4 my-6 w-full max-w-[350px]">
              <img src={s.profile_image} alt="store" className="w-full h-[274px] object-cover rounded-t-[16px]" />
              <div className="p-3">
                <h1 className="text-[#181818] font-bold text-[24px] leading-[36px] font-tekInter pt-2">
                  {s.store_name}
                </h1>
                <p className="text-[#181818] font-[400] text-[20px] leading-[36px] font-tekInter">
                  {s.store_address}
                </p>
                <span className="text-[#333333] font-[400] text-[16px] leading-[19px] font-tekInter flex gap-1 items-center">
                  <img src={star} alt="star" className="rounded-[50%] w-[13px] h-[13px]" /> 4.2 (380) Opens; {s.working_hours}
                </span>
                <button className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400] text-center bg-mainBlue text-[16px] mt-[1rem]">
                  <Link to={`/topstoresdetails/${s.id}`}>Enter Store</Link>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductLocation;

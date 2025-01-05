import Products from "./products";

import store from "/Image/store.png";
// import storess from "/Image/stores.png";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import star from "/Image/Star 6.svg";
import useGetStores from "../storedashboard/storedashboardhooks/useGetStore";

const ProductLocation = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const { stores} =  useGetStores()



  return (
    <section className="overflow-hidden">
      {/* trending products */}


      <div className="mt-[2rem]">
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9]  md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
              Newest product here
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter cursor-pointer">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <div className="bg-[#FFB164]  md:bg-productBg w-full">
          <Products />
        </div>
        
      </div>

      {/* location */}


 
      <div >
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[0.5rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[18px] leading-[19px]  font-tekInter">
              Top selling stores
            </h1>
          </div>

          <Link to="/otherstores">
            <h1 className="text-[#fff]  font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
              View all stores
              <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
            </h1>
          </Link>

          {/* desktop button */}
        </div>


{/* desktop view */}

{
  stores.slice(0, 3).map((s, index) => {
    if (index === 0) {
      // First box (wide box for the first item)
      return (
        <div
          key={s.id}
          className="md:flex justify-center gap-5 pb-[3rem] p-[2rem] hidden"
        >
          <div className="flex-col md:w-[600px] w-[100%] h-[533px] bg-[#E0E0E0] p-[1rem]">
            <img
              src={s.cac_image}
              alt="stores-pics"
              className="md:w-[630px] w-[100%] lg:h-[357px] h-[295px]"
            />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px] font-tekInter pt-[1rem]">
              {s.store_name}
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px] font-tekInter">
              {s.store_address}
            </p>
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
              <span className="text-[#333333] font-[400] text-[16px] leading-[19px] font-tekInter flex gap-1 items-center">
                <img
                  src={star}
                  alt="star_pics"
                  className="rounded-[50%] w-[13px] h-[13px]"
                />{" "}
              {s.working_hours}
              </span>
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
                items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                <Link to={`/topstoresdetails/${s.id}`}>Enter Store</Link>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (index === 1 || index === 2) {
      // Second box (smaller stacked boxes for the second and third items)
      return (
        <div
          key={s.id}
          className="flex justify-around items-center lg:w-[600px] sm:w-[420px] w-[100%] h-[252px] bg-[#E0E0E0] mb-[2rem]"
        >
          <img
              src={s.cac_image}
            alt="stores-pics"
            className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px] rounded-[5px]"
          />
          <div className="flex flex-col items-start pl-2">
            <h1 className="text-[#181818] font-[700] lg:text-[24px] md:text-[20px] leading-[36px] font-tekInter">
              {s.store_name}
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px] font-tekInter">
              {s.store_address}
            </p>
            <span className="text-[#333333] font-[400] text-[16px] leading-[19px] font-tekInter flex gap-1 items-center">
              <img
                src={star}
                alt="star_pics"
                className="rounded-[50%] w-[13px] h-[13px]"
              />{" "}
               {s.working_hours}
            </span>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
              items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              <Link to={`/topstoresdetails/${s.id}`}>Enter Store</Link>
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  })
}

      </div>



   



      {/* body with slider which when in sm is displayed */}
      <div className="md:hidden  w-[100%]  space-x-10 grid grid-cols-1">
        <Slider {...settings} className="gap-3 flex p-[1rem] rounded-[5px]">


          {
 stores.map((s)=>{
  return (

 
          <div  key={s.id}
            className="flex flex-col   shadow-locationShad bg-red-500 relative
           p-[1rem] rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={s.cac_image} alt="stores-pics" className="w-[90%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
            {s.store_name}
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
             {s.store_address}
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
              <img
                src={star}
                alt="star_pics"
                className=" rounded-[50%] w-[13px] h-[13px]"
              />{" "}
              4.2 (380) Opens; 8am - 8pm
            </span>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
             <Link to={`/topstoresdetails/${s.id}`}>Enter Store</Link>
            </button>
          </div>


)
})

}

          {/* second box red*/}
          <div
            className="flex flex-col  ml-[1rem]  shadow-locationShad
        bg-green-500 p-[1rem] relative rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
              Top selling stores
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
              <img
                src={star}
                alt="star_pics"
                className=" rounded-[50%] w-[13px] h-[13px]"
              />{" "}
              4.2 (380) Opens; 8am - 8pm
            </span>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              <Link to="/topstoresdetails">Enter Store</Link>
            </button>
          </div>


        </Slider>
      </div>
      
    </section>
  );
};

export default ProductLocation;

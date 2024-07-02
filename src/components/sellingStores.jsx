

import store from "/Image/store.png";
import stores from "/Image/stores.png";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import star from "/Image/Star 6.svg"



const SellingStores = () => {

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


  return (
   <section  className="overflow-hidden">

      {/* stores around my location */}
      <div>
         {/* heading */}
         <div className="max-w-[100%] flex justify-between items-center  gap-1 h-[73px] bg-secondOrange border-b-4 border-mainBlue px-[0.5rem]">

        <div className="flex items-center ">
          <h1 className="text-[#fff] font-[400] text-[18px] leading-[19px]  font-tekInter flex flex-col sm:flex-row gap-1">
      Stores around <span>my location </span>
          </h1>
        </div>


<Link to="/otherstores">
<h1 className="text-[#fff] w-[100%]  font-[600] text-[16px] leading-[24px] flex md:gap-2 gap-0 font-tekInter ">
          View all stores
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </h1>
</Link>
      

        {/* desktop button */}
      </div>

      <div className="md:flex  justify-center gap-5 pb-[3rem] p-[2rem]  hidden">

      
{/* first box */}
<div className=" flex-col md:w-[600px] w-[100%] h-[533px]  bg-[#E0E0E0] p-[1rem]">
  <img
    src={store}
    alt="stores-pics"
    className="md:w-[630px] w-[100%] lg:h-[357px] h-[295px]"
  />
  <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
  Top selling stores
  </h1>
  <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
    No 10 Lekki phase 1
  </p>

  <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start ">
    <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>
    <button
      className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
    >
  Enter Store
             
    </button>
  </div>
</div>

{/* second box */}

<div className="flex-col w-[600px] gap-3">

  <div className=" flex justify-around items-center lg:w-[600px] sm:w-[420px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]">
    <img
      src={stores}
      alt="stores-pics"
      className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
    />
  <div className="flex  flex-col items-start pl-2">
              <h1 className="text-[#181818] font-[700] lg:text-[24px] md:text-[20px] leading-[36px]  font-tekInter">
              Top selling stores
              </h1>
              <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
                No 10 Lekki phase 1
              </p>
              <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
              Enter Store
              </button>
            </div>

  </div>

  <div className=" flex justify-around lg:w-[600px] sm:w-[420px] w-[100%] h-[252px] items-center  bg-[#E0E0E0]">
    <img
      src={stores}
      alt="stores-pics"
      className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
    />

<div className="flex  flex-col items-start pl-2">
              <h1 className="text-[#181818] font-[700] lg:text-[24px] md:text-[20px] leading-[36px]  font-tekInter">
              Top selling stores
              </h1>
              <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
                No 10 Lekki phase 1
              </p>
              <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
              Enter Store
              </button>
            </div>

  </div>
</div>

</div>


      </div>


            {/* body with slider which when in sm is displayed */}
            <div className="md:hidden w-[100%] p-2">
        <Slider {...settings} className="gap-3 flex p-[1rem]  rounded-[5px]">
          {/* first box */}
          <div
            className="flex flex-col w-[200px] px-4   shadow-locationShad
           bg-[#F9F9F9] p-[1rem] rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[90%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
              Top selling stores 
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>

            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
                <Link href="/storesdetails">Enter Store</Link>
            </button>
          </div>

          {/* second box red*/}
          <div
            className="flex flex-col w-[200px] ml-[1rem]  shadow-locationShad
        bg-[#F9F9F9] p-[1rem] relative rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
              Top selling stores
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>

            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              <Link href="/storesdetails">Enter Store</Link>
             
            </button>
          </div>

          {/* third box */}
          <div
            className="flex flex-col  w-[200px] ml-[2rem]  shadow-locationShad
           bg-[#F9F9F9] p-[1rem] rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
              Top selling stores
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>

            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              <Link href="/storesdetails">Enter Store</Link>
             
            </button>
          </div>

          {/* fourth box brown */}
          <div
            className="flex flex-col w-[200px] ml-[3rem] z-[-1]  relative shadow-locationShad
           bg-[#f9f9f9] p-[1rem]   rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
              Top selling stores
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>

            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
            <Link href="/storesdetails">Enter Store</Link>
            </button>
          </div>
        </Slider>
      </div>

    
   </section>
  )
}

export default SellingStores
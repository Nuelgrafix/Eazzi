import store from "/Image/store.png";
import stores from "/Image/stores.png";

import Slider from "react-slick";
import Map from "./map"

import star from "/Image/Star 6.svg"


import { useState } from "react"
import { Link } from "react-router-dom";



const Location = () => {


  const [mapClick, setMapCLick] = useState(false)
  const handleMap  = () => {

      setMapCLick(!mapClick)

  }

  
  





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
    <section>
 
         {/* Full-screen Map */}
         {mapClick &&  
<div>
<div className="rounded-[50%] bg-red-500  w-[24px] h-[24px] flex justify-center items-center ">
        <button className="text-black text-[20px] items-center justify-center"><i className="ri-close-line"></i></button>
      </div>
    <Map />

</div>


   }


      {/* heading */}
      <div className="max-w-[100%] flex justify-between items-center h-[73px] md:bg-mainBlue bg-[#F9F9F9] border-b-4 border-secondOrange px-[0.5rem]">
        <div className="flex items-center gap-3 px-1 w-[100%]">
          <h1 className="md:text-[#fff] hidden md:flex text-[#181818] font-[400] md:text-[18px] text-[16px] leading-[19px]  font-tekInter">
            Stores found around Ajah,Lagos
          </h1>
          <h1 className="md:text-[#fff] flex md:hidden text-[#181818] font-[400] md:text-[18px] 
          text-[16px] leading-[19px]  font-tekInter w-[100%]">
            Stores found in Ajah,Lagos
          </h1>
        </div>

        <button className=" md:bg-[#f9f5ff] bg-transparent md:border-1  border-0 border-[#f9f5ff]
         w-[196px]  h-[44px]  text-mainBlue font-[600] text-[14px] leading-[16px] 
         gap-2 font-tekInter flex  items-center justify-center flex-row-reverse"  onClick={handleMap}>
          <i className="ri-map-pin-line md:text-mainBlue text-secondOrange text-[16px]"></i>
          <h1  className="md:text-mainBlue text-secondOrange flex gap-1">Change <span className="hidden md:flex">Location</span></h1>
        </button>

        {/* desktop button */}
      </div>

      {/* body */}
      <h1  className="font-[400] bg-[#A9BCFF] md:bg-transparent md:text-[32px] text-[18px] md:text-[#FF7F00] 
      text-[#FFFFFF] md:leading-[48px] leading-[19px] font-tekInter md:px-[1rem] pt-[1rem] px-1">5 - 10km Awawy from your current Location</h1>

      {/* first column */}
      <div className="md:flex  justify-center gap-5 pb-[3rem] p-[2rem]  hidden">

      
{/* first box */}
<div className=" flex-col md:w-[600px] w-[100%] h-[535px] bg-[#E0E0E0] p-[1rem]">
  <img
    src={store}
    alt="stores-pics"
    className="md:w-[630px] w-[100%] h-[357px]"
  />
  <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
  Amed’s Store - Lagos
  </h1>
  <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
    No 10 Lekki phase 1
  </p>

  <div className="flex justify-between items-center ">
    <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>
    <button
      className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
    >
       <Link to="/storesdetails">Enter Store</Link>
             
    </button>
  </div>
</div>

{/* second box */}

<div className="flex-col w-[600px] gap-3">

  <div className=" flex justify-around items-center lg:w-[600px] sm:w-[450px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]">
    <img
      src={stores}
      alt="stores-pics"
      className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
    />

    <div className="flex  flex-col items-start ">
      <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
      Amed’s Store - Lagos
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
         <Link to="/storesdetails">Enter Store</Link>
             
      </button>
    </div>
  </div>

  <div className=" flex justify-around lg:w-[600px] sm:w-[450px] w-[100%] h-[252px] items-center  bg-[#E0E0E0]">
    <img
      src={stores}
      alt="stores-pics"
      className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
    />

    <div className="flex  flex-col items-start">
      <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
      Amed’s Store - Lagos
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
         <Link to="/storesdetails">Enter Store</Link>
             
      </button>
    </div>
  </div>
</div>

</div>



{/* second column */}
<div className="md:flex  justify-center gap-5 pb-[3rem] p-[2rem]  hidden">

        {/* first box */}
        <div className=" flex-col md:w-[600px] w-[100%] h-[535px] bg-[#E0E0E0] p-[1rem]">
          <img
            src={store}
            alt="stores-pics"
            className="md:w-[630px] w-[100%] h-[357px]"
          />
          <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
          Amed’s Store - Lagos
          </h1>
          <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
            No 10 Lekki phase 1
          </p>

          <div className="flex justify-between items-center ">
          <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter flex gap-1 items-center">
    <img src={star}  alt="star_pics" className=" rounded-[50%] w-[13px] h-[13px]" />
        {" "}
        4.2 (380) Opens; 8am - 8pm
    </span>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              <Link to="/storesdetails">Enter Store</Link>
            </button>
          </div>
        </div>

        {/* second box */}

        <div className="flex-col w-[600px] gap-3">

          <div className=" flex justify-around items-center lg:w-[600px] sm:w-[450px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]">
            <img
              src={stores}
              alt="stores-pics"
              className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start ">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
              Amed’s Store - Lagos
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
                <Link to="/storesdetails">Enter Store</Link>
              </button>
            </div>
          </div>

          <div className=" flex justify-around lg:w-[600px] sm:w-[450px] w-[100%] h-[252px] items-center  bg-[#E0E0E0]">
            <img
              src={stores}
              alt="stores-pics"
              className="lg:w-[269px] sm:w-[200px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
              Amed’s Store - Lagos
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
                <Link to="/storesdetails">Enter Store</Link>
              </button>
            </div>
          </div>
        </div>

      </div>


{/* third column */}
      <div className="md:flex  justify-center gap-5 pb-[3rem] px-[2.5rem]  hidden">

      <div className=" flex justify-around items-center md:w-[580px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]  mr-1 ">
            <img
              src={stores}
              alt="stores-pics"
              className="md:w-[269px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start ">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
              Amed’s Store - Lagos
              </h1>
              <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              Amed’s Store - Lagos
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
                <Link to="/storesdetails">Enter Store</Link>
              </button>
            </div>
          </div>

          <div className=" flex justify-around items-center md:w-[600px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]   ml-1">
            <img
              src={stores}
              alt="stores-pics"
              className="md:w-[269px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start ">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
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
              <Link to="/storesdetails">Enter Store</Link>
              </button>
            </div>
          </div>

      </div>
      



      {/* body with slider which when in sm is displayed */}
      <div className="md:hidden w-[100%] p-2 bg-[#A9BCFF]">
        <Slider {...settings} className="gap-3 flex p-[1rem]  rounded-[5px]">
          {/* first box */}
          <div
            className="flex flex-col w-[200px] px-4   shadow-locationShad
           bg-[#F9F9F9] p-[1rem] rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[90%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
            Amed’s Store - Lagos
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
            Amed’s Store - Lagos
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
             <Link to="/storesdetails">Enter Store</Link>
            </button>
          </div>

          {/* third box */}
          <div
            className="flex flex-col  w-[200px] ml-[2rem]  shadow-locationShad
           bg-[#F9F9F9] p-[1rem] rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
            Amed’s Store - Lagos
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
             <Link to="/storesdetails">Enter Store</Link>
            </button>
          </div>

          {/* fourth box brown */}
          <div
            className="flex flex-col w-[200px] ml-[3rem] z-[-1]  relative shadow-locationShad
           bg-[#f9f9f9] p-[1rem]   rounded-[16px] border-1 border-[#A9BCFF]"
          >
            <img src={store} alt="stores-pics" className="w-[100%] h-[274px]" />
            <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
            Amed’s Store - Lagos
            </h1>
            <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
              No 10 Lekki phase 1
            </p>

            <p className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter">
              <i className="ri-star-s-line  text-[11px]">
                {" "}
                4.2 (380) Opens; 8am - 8pm
              </i>
            </p>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              Enter Store
            </button>
          </div>
        </Slider>
      </div>

      
    </section>
  );
};

export default Location;

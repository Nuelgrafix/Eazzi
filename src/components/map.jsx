
import GoogleComponent2 from "../googlemap/GoogleMap2"
import location from "/Image/location.png"
import warningicon from "/Image/warning_icon.svg"

import { useState } from "react"

const Map = () => {


  const [hideMap, setHideMap] = useState(false)

  const toggleHideMap = () => {
    setHideMap(!hideMap);
  };



  return (

<section className="fixed inset-0 flex z-[1000] items-center justify-center  rounded-[20px]">

  <div className="flex flex-col md:w-[1024px] md:h-[550px]  bg-[#fff] relative items-center justify-center mt-[4rem]  h-full w-full">
    {/* google component */}
    <div className="w-[100%] flex items-center justify-center">
      <GoogleComponent2 />
      
    </div>

    <div className="flex flex-col text-center items-center shadow-lg justify-center 
     bg-[#fff] w-[833px] h-[293px]  mb-[5rem]  
    mt-[-2rem] relative z-10">      <button onClick={toggleHideMap} className="rounded-[50%] z-[1500px] bg-red-400 fixed w-[24px] h-[24px] items-center flex justify-center top-[-1rem] left-10">
    <i className="ri-close-line text-black flex items-center text-[20px] justify-center cursor-pointer"></i>
    </button>
      <h1 className="pt-[1rem] w-[400px] font-[400] text-[24px] leading-[36px] pb-[0.5rem]">Enter a Location do you prefer to shop from</h1>

      <div className="w-[522px] h-[42px] border-2  px-2 border-[#D0D5DD] outline-none flex items-center">

      <img src={location} alt="location_icon" className="w-[20px] h-[20px]" />
        <input type="text" placeholder="Enter new location" className="flex-grow p-2  outline-none border-none bg-transparent" />
       
      </div>

      <div className="flex gap-3 mt-4">
        <button className="w-[249px] h-[50px] border-2 border-[#1843E2] bg-mainBlue rounded-[5px] text-[#fff] text-[18px] leading-[28px] font-[600]">
          Share this location
        </button>
        <button className="w-[249px] h-[50px] border-2 border-[#1843E2] bg-[#fff] rounded-[5px] text-mainBlue text-[18px] leading-[28px] font-[600]">
          Go back to previous
        </button>
      </div>

      <div className="mt-4 pb-[1rem] flex items-center justify-center">

      <img src={warningicon} alt="warning_icon" className="w-[16px] h-[16px] pr-[1rem]" />
        <h1 className="flex items-center">
          Please note that shopping from a distant location takes a little more time to deliver
        </h1>
      </div>
    </div>

</div>

</section>

  )
}

export default Map
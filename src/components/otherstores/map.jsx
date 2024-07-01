
// import { useState } from "react"
import GoogleComponent2 from "../../googlemap/GoogleMap2"
import location from "/Image/location.png"
import warningicon from "/Image/warning_icon.svg"



const Map = () => {

// const [hideMap, setHideMap] = useState(false)



// const handleHideMap = () =>{
//   setHideMap(!hideMap)
// }


  return (

<section className="fixed inset-0 flex flex-col z-[1000] md:items-center items-end justify-end  md:justify-center   
">


  {/* {    hideMap &&
   <div className="rounded-[50%] bg-gray-500 t  w-[34px] h-[34px] flex justify-center   items-start
   mt-[4rem] relative mb-[-10rem] z-[1100]" onClick={handleHideMap}>  <button className="text-black text-[20px] items-center justify-center "><i className="ri-close-line  text-white"></i></button>  
    </div>  
 
    }  */}


    

   <div className="flex flex-col md:w-[1024px] md:h-[550px] h-[77vh] 
  md:rounded-[30px] rounded-[50px]  bg-[#fff] relative items-center justify-center mt-[4rem]  w-full">
    {/* google component */}
  
    <div className="w-[100%] flex items-center justify-center">

      <GoogleComponent2 />
      
    </div>



{/* Enter a location */}
    <div className="flex flex-col text-center items-center shadow-lg justify-center 
     bg-[#fff] md:w-[833px] w-[100%]  md:h-[293px] h-[70%]  md:mb-[5rem]  
    mt-[-2rem] relative z-10 ">     
      <h1 className="md:pt-[1rem] pt-[2rem] w-[400px] font-[400] text-[24px] leading-[36px] pb-[0.5rem]">Enter a Location do you prefer to shop from</h1>

      <div className="md:w-[522px] w-[350px] relative h-[42px] border-2  px-2 border-[#D0D5DD] outline-none flex items-center">

      <img src={location} alt="location_icon" className="w-[20px] h-[20px]" />
        <input type="text" placeholder="Enter new location" className="flex p-2 w-[100%]  outline-none border-none bg-transparent" />
       
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-4">
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
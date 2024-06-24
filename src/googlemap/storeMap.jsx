import { GoogleMap } from "@react-google-maps/api"
import { PropTypes } from "prop-types"
import { useState } from "react"
import PlacesAutocomplete from "./plcaeAutoComplete"



const StoreMap = ({onLocationChange}) => {

const [location, setLocation] = useState(null)

const handleLocationChange = (location) => {
    setLocation(location)
    onLocationChange(location)
}


  return (
    <section  className="absolute  z-10   mx-[7rem] items-center justify-center">
    <div  className="flex flex-col  md:w-[1024px] md:h-[887px] relative items-center justify-center  bg-[#FFFFFF] h-[full] w-[full]">

        <GoogleMap location={location} />

        {/* map Image */}
        <div  className="w-[1042px] h-[525px]">
        </div>

        <div className="flex flex-col  text-center items-center">
            <h1>Enter a Location you do you prefer to shop from</h1>

            <div  className="w-[522px] h-[42px] border-2 border-[#D0D5DD] outline-none ">
                <input type="text" placeholder="Enter new location" />
                <img src={location}  alt="location_icon" className="w-[20px] h-[20px] " />
            </div>

            <div  className="flex gap-3">
                <button className="w-[249px] h-[60px] border-2 border-[#1843E2] bg-mainBlue rounded-[5px] text-[#fff] text-[18px] leading-[28px]
                font-[600]">Share this loction</button>

<button className="w-[249px] h-[60px] border-2 border-[#1843E2] bg-[#fff] rounded-[5px] text-mainBlue text-[18px] leading-[28px]
                font-[600]">Go back to previous</button>
            </div>

        <div>
            <h1 className="flex"><img src="" alt="warning_icon" className="w-[16px] h-[16px] pr-[1rem]"  /> Please note that shopping from distance location takes a little more time to deliver</h1>
        </div>

        </div>
<div  className="flex flex-col gap-3">

<PlacesAutocomplete onSelect={handleLocationChange} />


<button  onClick={()=>handleLocationChange(location)}></button>

</div>
      

    </div>
 </section>
  )
}


StoreMap.propTypes = {
    onLocationChange: PropTypes.func.isRequired,
  };

export default StoreMap


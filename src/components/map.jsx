
import map from "../../public/Image/mapmaker.png"

const Map = () => {

  

  return (
 <section  className="absolute  z-10   mx-[7rem] items-center justify-center">
    <div  className="flex flex-col  md:w-[1024px] md:h-[887px] relative items-center justify-center  bg-[#FFFFFF] h-[full] w-[full]">
        <div  className="w-[1042px] h-[525px]">
            <img src={map} alt="map_pics"  className="w-[1142px] h-[]"  />
        </div>

        <div className="flex flex-col  text-center items-center">
            <h1>Enter a Location you do you prefer to shop from</h1>

            <div  className="w-[522px] h-[42px] border-1 border-[#D0D5DD] outline-none ">
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

    </div>
 </section>
  )
}

export default Map
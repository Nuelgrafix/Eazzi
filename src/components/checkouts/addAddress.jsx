import { useNavigate } from "react-router-dom"
import checkCircle from "/Image/check-circle.svg"

const AddAddress = () => {


    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    
    

  return (
<section className="flex flex-col md:flex-row  justify-center  mt-[8rem]  bg-[#f9f9f9] py-[16px] px-[8px] mb-[3rem] gap-[12px] ">


{/* navigation back */}
<div className="flex md:hidden gap-[10px]  ml-[0.5rem] m-[0.5rem] items-center" onClick={goBack} >

<i className="ri-arrow-left-fill text-[24px]"></i>
    <h1 className="font-tekInter font-[700] text-[20px] leading-[24px] text-[#282828]">Add address</h1>
</div>


{/* first div */}

<div className="flex flex-col gap-[4px] max-w-[600px] w-full">

    <div className="flex flex-col bg-white rounded-[10px] py-[24px] px-[16px] gap-[32px] w-full" 
    style={{boxShadow: "6px 7px 12px 0px #1843E20D"}}> 
    <h1  className=" font-[700] text-[20px] leading-[24px] text-[#333333] border-b-[1px] border-[#E0E0E0] py-[8px]"> Saved Address</h1>
    
    <h1  className="text-center font-[400] text-[20px] leading-[24px] text-[#333333]  py-[8px]">No Saved Address</h1>

    <button className="bg-[#A9BCFF] rounded-[8px] border-[1px] border-[#A9BCFF] flex items-center justify-center py-[10px] px-[18px]">
<h1  className=" font-[600] text-[16px] leading-[24px] text-[#ffffff]">Select address</h1>
    </button>

    </div>

</div>

    

    {/* second div */}
    <div className="flex flex-col items-start max-w-[600px] w-full gap-[16px]">

        <h1 className=" font-[400] text-[24px] leading-[36px] text-[#333333] font-tekInter">Add new address</h1>

<form className="flex flex-col w-full gap-[4px]">

<div className="flex flex-col bg-white rounded-[10px] p-[12px] gap-[12px] w-full" 
style={{boxShadow: "6px 7px 12px 0px #1843E20D"}}> 

<div className="flex items-center gap-[10px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[700] text-[16px] leading-[19px] text-[#333333]">Add a new  address </h1>
</div>

<div className="w-full h-[106px] rounded-[8px] border-[1px] border-[#969696] ">
    <input type="textarea" placeholder="Your address"  className="w-full p-[10px] outline-none "  />
</div>



<button className="bg-[#A9BCFF] rounded-[8px] border-[1px] border-[#A9BCFF] flex items-center justify-center w-[138px] h-[44px]">
<h1  className=" font-[600] text-[16px] leading-[24px] text-[#ffffff]">Save</h1>
</button>

</div>


</form>

    </div>


</section>
  )
}

export default AddAddress

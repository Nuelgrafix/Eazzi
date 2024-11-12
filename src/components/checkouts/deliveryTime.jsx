/* eslint-disable react/prop-types */

import CheckoutModal from "./checkoutModal"
import checkCircle from "/Image/check-circle.svg"

const DeliveryTime = ({toggleAddressModal,addressModal,addressRef}) => {


  return (
<section className="flex flex-col">

<div className="flex flex-col md:flex-row gap-[16px]">

<div className="flex items-center border-[1px] border-[#E0E0E0] p-[8px] gap-[24px] rounded-[8px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[400] text-[16px] leading-[19px] text-[#282828]"> Instant Delivery time: <span  className=" font-[400] text-[16px] leading-[19px] text-[#828282]">20-25min </span></h1>
<input type="checkbox" className="rounded-[50%] w-[14px] h-[14px] border-[0.8px] border-[#A9BCFF] cursor-pointer" />
</div>

<div className="flex items-center border-[1px] border-[#E0E0E0] p-[8px] gap-[24px] rounded-[8px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[400] text-[16px] leading-[19px] text-[#282828]">Schedule Delivery: <span  className=" text-[#828282]">Pick a time</span></h1>
<input type="checkbox" className="rounded-[50%] w-[14px] h-[14px] border-[0.8px] border-[#A9BCFF] cursor-pointer" onClick={toggleAddressModal}/>
</div>

</div>



{ addressModal &&
 <div className="fixed inset-0 flex items-center justify-center z-50 ">
    
<div ref={addressRef}>
                            <CheckoutModal />
                        </div>
</div>

}

    
</section>
  )
}

export default DeliveryTime

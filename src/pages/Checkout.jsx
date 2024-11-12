

import { Link, useNavigate } from "react-router-dom"
import checkCircle from "/Image/check-circle.svg"
import { useEffect, useRef, useState } from "react"
import CheckoutModal from "../components/checkouts/checkoutModal"
import DeliveryTime from "../components/checkouts/deliveryTime"
import { useSelector } from "react-redux"

const Checkout = () => {

    const [addressModal, setAddressModal] = useState(false)

    const toggleAddressModal = () => {
        setAddressModal(prev => !prev)
    }
    const addressRef = useRef(null)


useEffect(()=> {

    const handleClickOutside = (e) => {
       
        if (addressRef.current && !addressRef.current.contains(e.target)) {
    setAddressModal(false)  
 }
};

 document.addEventListener("mousedown", handleClickOutside)
        
 return () => {
    document.removeEventListener("mousedown", handleClickOutside)
 };


},[])


const navigate = useNavigate()

const goBack = () => {
    navigate(-1)
}


// checkout summary
const {data:cartProduct,totalItems, totalAmounts,deliveryCharge} = useSelector((state) => state.cart)

console.log(totalItems)
const Generaltotal = totalAmounts * deliveryCharge;

  return (
<section className="flex flex-col mt-[8rem] bg-white mb-[2rem]">

    { 

addressModal && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

    }


{/* navigation back */}
    <div className="flex md:hidden gap-[10px]  ml-[2rem] m-[1rem] items-center" onClick={goBack} >

    <i className="ri-arrow-left-fill text-[24px]"></i>
        <h1 className="font-tekInter font-[700] text-[20px] leading-[24px] text-[#282828]">Chekcout</h1>
    </div>

    <div className="flex  bg-[#F9F9F9] p-[1rem]">



<div className="flex flex-col w-full">


    <form className="flex flex-col justify-center md:flex-row w-full p-[8px] gap-[20px]">

        {/* first div */}

        <div className="flex flex-col gap-[10px] lg:w-[900px]">
{/* first box */}
        <div className="flex flex-col md:flex-row w-full justify-start md:items-center md:justify-between gap-[16px] bg-white p-[12px] rounded-[8px]">

        <div className="flex gap-[10px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[700] text-[16px] leading-[19px] text-[#333333]"> 1. Delivery details</h1>
</div>

<div className="">
    <button className="border-[1px] border-[#1843E2] rounded-[8px] flex items-center bg-[#F9F5FF] justify-center px-[18px] py-[10px] max-w-[237px]"
    style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
        <Link to="/checkout-address"  className="font-tekInter font-[600] text-[16px] leading-[24px] text-[#1843E2]">Enter address</Link>
    </button>
</div>

        </div>

  {/* second box */}
  <div className="flex flex-col w-full items-start gap-[29px]  bg-white p-[12px] rounded-[8px]">

<div className="flex items-center gap-[10px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[700] text-[16px] leading-[19px] text-[#333333]">2. Delivery time Experiment</h1>
</div>

<DeliveryTime 
toggleAddressModal={toggleAddressModal} 
addressRef={addressRef} 
addressModal={addressModal} />


</div>


        {/* third box */}

        <div className="flex flex-col w-full items-start gap-[29px]  bg-white p-[12px] rounded-[8px]">

<div className="flex gap-[10px]">
<img src={checkCircle} className="w-[20px] h-[20px]" />
<h1  className=" font-[700] text-[16px] leading-[19px] text-[#333333]"> 3. Payment method</h1>
</div>


<div className="flex flex-col border-[1px] border-[#E0E0E0] p-[8px] gap-[5px] rounded-[8px]">

<div className="flex items-center  gap-[10px] rounded-[8px]">
<img src={checkCircle} className="w-[19px] h-[19px]" />
<h1  className=" font-[400] text-[16px] leading-[19px] text-[#282828]"> Pay from wallet</h1>
<input type="checkbox" className="rounded-[50%] w-[14px] h-[14px] border-[0.8px] border-[#A9BCFF] cursor-pointer" />
</div>

<div className="flex flex-col items-center  rounded-[8px] gap-[4px]  ml-[-38px]">

<h1  className=" font-[400] text-[16px] leading-[19px] text-[#1843E2]">Bal: <span  className="font-[700]">#0.0</span></h1>
<p  className=" font-[400] text-[12px] leading-[14px] text-[#FF7F00] italic">Insufficient</p>
</div>

</div>


</div>




</div>


{/* second div */}

<div className="flex flex-col lg:w-[350px] gap-[4px]">

    <div className="flex flex-col bg-white rounded-[10px] py-[24px] px-[16px] gap-[32px] w-full" 
    style={{boxShadow: "6px 7px 12px 0px #1843E20D"}}> 
    <h1  className=" font-[700] text-[20px] leading-[24px] text-[#333333] border-b-[1px] border-[#E0E0E0] py-[8px]"> Order Summary</h1>

    <ul className="flex justify-between">
        <li  className=" font-[400] text-[16px] leading-[19px] text-[#333333] font-tekInter">Cart Summary ({cartProduct.length})</li>
        <li className=" font-[700] text-[16px] leading-[19px] text-[#282828] font-tekInter">₦{totalAmounts}</li>
    </ul>

    <ul className="flex justify-between">
        <li  className=" font-[400] text-[16px] leading-[19px] text-[#333333] font-tekInter">Delivery fee</li>
        <li className=" font-[700] text-[16px] leading-[19px] text-[#282828] font-tekInter">{deliveryCharge}</li>
    </ul>

    <ul className="flex justify-between">
        <li  className=" font-[700] text-[16px] leading-[19px] text-[#333333] font-tekInter">Total</li>
        <li className=" font-[700] text-[20px] leading-[24px] text-[#282828] font-tekInter">#{Generaltotal}</li>
    </ul>

    <button className={`bg-[#A9BCFF] rounded-[8px] border-[1px] border-[#A9BCFF] flex items-center 
    justify-center py-[10px] px-[18px]`}>
<h1  className=" font-[600] text-[16px] leading-[24px] text-[#ffffff]">Make Payment</h1>
    </button>

    </div>

    <div className="w-full">
        <h1  className="font-tekInter font-[400] text-[14px] leading-[16px] text-[#828282]">By proceeding to checkout, you are automatically accepting our <span className="text-[#1843E2]">Terms</span>
        and <span className="text-[#1843E2]">Condition</span> </h1>
    </div>

</div>


    </form>


</div>


{ addressModal &&
 <div className="fixed inset-0 flex items-center justify-center z-50 ">
    
<div ref={addressRef}>
                            <CheckoutModal />
                        </div>
</div>

}

    </div>

</section>
  )
}

export default Checkout

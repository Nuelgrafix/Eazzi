import { Link, useParams } from "react-router-dom"
import { useState } from "react";




import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"

import Footerimg from "/Image/footer-dahsboard.svg"

import RiderMobileSideDashboard from "../component/riderMobileSideDashboard";
import RiderSidebarDashboard from "../component/riderSidebarDashboard";

import { riderordersdata } from "../data/orderdata";


const RiderOrderDetails = () => {


const {id} = useParams();
const item =  riderordersdata.find((item) => item.id === id);
console.log(item)

const [showSide, setShowSide] = useState(false)

const handleSide = ( ) => {
  setShowSide((prev) => !prev);
}



  return (
<section className="flex h-full bg-[#F8F8F8]">



<div >

<div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}>

  {
showSide?

(<i className="ri-close-line"></i>)
:
( <i className="ri-menu-2-line"></i>)




}

</div>




<div  className={`fixed overflow-y-scroll z-[1000] h-full  ${showSide? "max-w-[214px] w-full bg-[#1843E2] " 
: "max-w-[214px] w-[0px] bg-[#1843E2] "}`}>
<RiderMobileSideDashboard />
</div>


</div>



<div  className="max-w-[204px] w-full   md:flex hidden  bg-[#FFFFFF]">
<RiderSidebarDashboard />
</div>


{/* Main Content */}
<div className="flex flex-col w-full px-[2rem]">

<div className="w-full flex items-center justify-between py-[1rem]">
    <div>
        <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Order</h1>
    </div>



{/* Input */}
    <div className=" hidden md:flex gap-[6px] bg-[#FFFFFF] border-[1px] border-[#D0D5DD] rounded-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]" 
    style={{boxShadow:"0px 1px 2px 0px #1018280D"}}>
        <img src={serachIcon} alt="searc_icon" className="w-[20px] h-[20px]" />
        <input type="text" placeholder="Search" className="outline-none w-full h-full bg-white text-[16px] leading-[24px] text-[#667085] font-tekInter font-[400]" />

    </div>


    {/*third div  */}

    <div className="md:flex lg:gap-[12px] hidden">
<div className="flex ">

    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>
 

</div>


<div className="flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>

</div>

<div className=" bg-[#FFFFFF]  flex flex-col my-[2rem] gap-[27px] p-[32px] rounded-[16px]" 
style={{ boxShadow: "0px 8px 32px 0px #3326AE14"}}>

    <div className="flex flex-col gap-[16px]">

     <ul  className="flex gap-[16px]">
        <li>  <h1 className="text-[#282828] text-[24px] leading-[36px] font-[700] font-tekInter"> order ID: {item.orderId}</h1>   </li>
        <li>  <h1 className="text-[#4F4F4F] text-[20px] leading-[26px] font-[400] font-tekInter"> Customer:  <span className="italic text-[#181818]">{item.title}  </span></h1>   </li>
        </ul>  

        <ul  className="flex gap-[20px]">
        <li>  <h1 className="text-[#4F4F4F] text-[20px] leading-[26px] font-[700] font-tekInter"> Store: <span className="italic text-[#181818]">{item.orderId}</span> </h1>   </li>
        <li>  <h1 className="text-[#4F4F4F] text-[20px] leading-[24px] font-[400] font-tekInter"> Location:  <span className="italic text-[#181818]">No. 13 Odo-Ota Street, Ajah Lagos. </span></h1>   </li>
        </ul> 

    </div>

    <div className="flex flex-col">
      <div className="w-full h-[75px] mb-[2rem] bg-[#F8F8F8] p-[8px] border-b-[1px] border-[#A9BCFF] rounded-[8px] flex items-center justify-start">  <h1 className="flex font-[700] text-[16px] leading-[20px] font-tekInter text-[#828282]">Product / items</h1> </div>


{/*  */}
      <div className="flex md:flex-row flex-wrap lg:flex-nowrap flex-col w-full gap-[24px]">

        {
            item.card.map((c)=>(
                <div key={c.id} className="flex flex-col gap-[16px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] rounded-[16px]
                max-w-[248px] w-full"
                style={{boxShadow:"6px 7px 12px 0px #1843E20D"}}>
                    <img src={c.img} alt="product-pics" className="w-[223px] h-[180px] rounded-[8px]" />
                    <h1 className="font-[400] text-[18px] leading-[24px] text-[#4F4F4F] font-tekInter">{c.title}</h1>
                    <ul className="flex gap-[16px]">
                        <li className="text-[#4F4F4F] text-[14px] leading-[16px] font-[400] font-tekInter flex items-center
                        gap-[4px]">
                            Qty: <span className="text-[#FF7F00] text-[20px] leading-[24px]">{c.qty}</span></li>
                            <li className="text-[#7B97FF] text-[14px] leading-[16px] font-[400] font-tekInter flex items-center
                        gap-[4px]">
                            Amount: <span className="text-[#333333] text-[20px] leading-[24px] font-[400]">{c.amount}</span></li>
                    </ul>

                </div>
            ))
        }

      </div>

    </div>

</div>


{/* notify message */}
<div className="flex flex-col my-[1rem] gap-[24px]">
    <h1 className="font-[400] text-[16px] leading-[20px] text-[#282828] font-tekInter">This is a New Order, Asign a Rider for this order.</h1>
    <ul className="flex flex-col md:flex-row gap-[24px]">

            <li className="pt-[12px] pr-[20px] pb-[12px] pl-[20px] border-[1px] bg-[#1843E2] border-[#1843E2] 
            rounded-[8px] gap-[8px]"
            style={{ boxShadow:"0px 1px 2px 0px #1018280D"}}>
            <Link to="/rider/riders" className="font-[600] text-[16px] leading-[24px] text-[#FFFFFF] font-tekInter">Assign Rider</Link>
            </li>
    </ul>

</div>



{/* logo image */}
<div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>

</div>

</section>
  )
}

export default RiderOrderDetails

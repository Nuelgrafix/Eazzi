import { Link, useParams } from "react-router-dom";
import {smallerlatestorderdata } from "../../data/dashboarddata"


import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import Footerimg from "/Image/footer-dahsboard.svg"

import { useState } from "react";

import { realstoredata } from "../data/storedata";
import OrderPagination from "../../dahsboad/component/pagination/orderPagination";
import { allriderorderdata, locationrider } from "../data/riderdata";
import RiderMobileSideDashboard from "../component/riderMobileSideDashboard";
import RiderSidebarDashboard from "../component/riderSidebarDashboard";

const AllRiderDetails = () => {

// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = allriderorderdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);


const {id} = useParams()
 const item = locationrider.find((item)  => item.id === id)


 const [showSide, setShowSide] = useState(false)

 const handleSide = ( ) => {
   setShowSide((prev) => !prev);
 }

  return (
    <section className="flex  w-full  bg-[#F8F8F8] ">




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


    
    <div  className="max-w-[204px] w-full  md:flex hidden  bg-[#FFFFFF]">
<RiderSidebarDashboard />
 </div>



<div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]  ">


{/* Top Link */}
<div className="w-full flex items-center justify-between">
    <div>
        <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px]
         leading-[48px] text-[#1843E2] font-tekInter font-[700]">Assign Order</h1>
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
  

  <Link to="/dashboard/notification" className="flex">
    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>

    </Link>
 

</div>


<div className="flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>

</div>


    
<div className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px] mt-[3rem]  max-w-[1147px]"
>

    {/* Heading */}
    <div className="flex items-center justify-between">
<h1 className="text-[24px] leading-[36px] text-[#181818] font-tekInter font-[400]">{item.location}</h1>
    </div>


{/* Table */}

{

item &&

<div className="flex flex-col max-w-full">

{/* table for big screen */}
<div className="hidden md:block max-w-full">


<table className="w-full">
    <thead className="">
        <tr className="border-b-[1px] border-[#A9BCFF] bg-[#F8F8F8] rounded-[8px] h-[75px]">
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px] w-[250px]">Rider Name</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Company</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Delivery Group</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Rider ID</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Contact</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]"></th>
        </tr>
    </thead>

    <tbody className="w-full">
        {currentrealorderdata.map((l) => (
            <tr key={l.id} className="border-b-[1px] border-t-[1px] border-[#828282] max-h-[64px]">
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">
                    <div className="flex items-center">
                        <img src={l.img} alt="latest-pics" className="w-[44px] h-[44px] mr-2" />
                        <h1>{l.title}</h1>
                    </div> 
                </td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">{l.company}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.delivery}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.riderID}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px] cursor-pointer">{l.contact}</td>
                <td className="border-r-0 border-l-0 py-2 text-[12px] leading-[14px] text-[#828282] font-[400] font-tekInter"><Link to={`/rider-assigned-orders/${l.id}`}  className="border-[1px] border-[#1843E2]  text-[#1843E2]text-[14px] leading-[16px] font-[400] px-[16px] py-[10px] rounded-[8px] flex justify-center items-center text-[#1843E2]">Assign order </Link></td>
            </tr>
        ))}
    </tbody>
</table>

</div>



{/* table for smaller screen */}

<div className="max-w-full w-full md:hidden">
<table className="max-w-full w-[1000px]">
    <thead className="">
        <tr className="border-b-[1px] border-[#A9BCFF] bg-[#F8F8F8] rounded-[8px] h-[75px] ">
            <th className="text-[#BDBDBD] text-[12px] leading-[15px] font-[700] font-tekInter text-start px-2 ">Products</th>
            <th className="text-[#BDBDBD] text-[12px] leading-[15px] font-[700] font-tekInter text-start px-2">QTY</th>
            <th className="text-[#BDBDBD] text-[12px] leading-[15px] font-[700] font-tekInter text-start px-2">Order ID</th>
            <th className="text-[#BDBDBD] text-[12px] leading-[15px] font-[700] font-tekInter text-start px-2">Status</th>
        </tr>
    </thead>

    <tbody className="w-full ">
        {smallerlatestorderdata.map((l) => (
            <tr key={l.id} className="border-b-[1px] border-t-[1px] border-[#828282] h-[64px] ">
                <td className="border-r-0 border-l-0 py-2 flex items-center text-[12px] leading-[20px] text-[#828282] font-[400] font-tekInter w-[120px]">
                    <img src={l.img} alt="latest-pics" className="w-[24px] h-[24px] mr-2" />
                    {l.title}
                </td>
                <td className="border-r-0 border-l-0 py-2 text-[12px] leading-[14px] text-[#828282] font-[400] font-tekInter">{l.quantity}</td>
                <td className="border-r-0 border-l-0 py-2 text-[12px] leading-[14px] text-[#828282] font-[400] font-tekInter">{l.orderId}</td>
                <td className="border-r-0 border-l-0 py-2 text-[12px] leading-[14px] text-[#828282] font-[400] font-tekInter"></td>
            </tr>
        ))}
    </tbody>
</table>

</div>




</div>

}
{/* pagination */}
<div className="max-w-full items-center justify-center flex flex-col ">
<OrderPagination

totalItems={realstoredata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>
</div>



{/* Footer logo */}

<div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>

</div>





</section>
  )
}

export default AllRiderDetails;
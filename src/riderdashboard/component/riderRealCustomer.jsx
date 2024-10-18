import { Link } from "react-router-dom";
import {smallerlatestorderdata } from "../../data/dashboarddata"



import OrderPagination from "./pagination/riderOrderPagination";
import { useState } from "react";

import { realstoredata } from "../data/storedata";

const RiderRealCustomer = () => {

// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = realstoredata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
<section className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px]  max-w-[1147px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>

    {/* Heading */}
    <div className="flex items-center justify-between">
<h1 className="text-[24px] leading-[36px] text-[#181818] font-tekInter font-[400]">All Customer </h1>
    </div>


{/* Table */}
<div className="flex flex-col max-w-full">

{/* table for big screen */}
<div className="hidden md:block max-w-full">


<table className="w-full">
    <thead className="">
        <tr className="border-b-[1px] border-[#A9BCFF] bg-[#F8F8F8] rounded-[8px] h-[75px]">
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px] w-[250px]">Products</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Location</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Email</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">CAC</th>
            <th className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Mgt. Contact</th>
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
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">{l.location}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.email}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.datejoined}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px] cursor-pointer">{l.contact}</td>
                <td className="border-r-0 border-l-0 py-2 text-[12px] leading-[14px] text-[#828282] font-[400] font-tekInter"><Link to={`/rider/customerdetails/${l.id}`}  className="border-[1px] border-[#1843E2] px-[16px] py-[10px] rounded-[8px] flex justify-center items-center font-[400] text-[14px] leading-[16px] text-[#1843E2]">More  Details </Link></td>
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

{/* pagination */}
<div className="max-w-full items-center justify-center flex flex-col ">
<OrderPagination

totalItems={realstoredata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>


</section>
  )
}

export default RiderRealCustomer;
import { Link } from "react-router-dom";

import { useState } from "react";
import { realorderdata } from "../../../dahsboad/data/orderdata";
import { smallerlatestorderdata } from "../../../data/dashboarddata";
import RiderOrderPagination from "../pagination/riderOrderPagination";



const RiderCompletedHistory = () => {


// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = realorderdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
<section className="flex flex-col">
  
{/* Table */}
<div className="flex flex-col max-w-full">

{/* table for big screen */}
<div className="hidden md:block max-w-full">


<table className="w-full">
    <thead className="">
        <tr className="border-b-[1px] border-[#A9BCFF] bg-[#F8F8F8] rounded-[8px] h-[75px]">
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px] w-[250px]">Products</th>
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">QTY</th>
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Date</th>
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Amount</th>
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Order ID</th>
            <th className="text-[#BDBDBD] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Status</th>
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
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">{l.quantity}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.date}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.Amount}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px] cursor-pointer"><Link to={`/ordersdetails/${l.id}`}>{l.orderId}</Link></td>
                <td className={`border-r-0 border-l-0 text-[14px] leading-[16px] font-[400] font-tekInter
                  ${l.statusReceive ? 'bg-[#F4EBFF] text-[#1843E2]'
                     : l.statusPending ? 'bg-[#FFB1641A] text-[#FF7F00]' : l.statusCompleted ? 'bg-[#24B6611A] text-[#24B661]' : ''}
                      border-[1px] lg:w-[126px] w-[100px] h-[37px] flex items-center justify-center rounded-[8px] mt-[0.7rem]`}>
                    {l.statusReceive || l.statusPending || l.statusCompleted}
                </td>
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
               
                <td className={`border-r-0 border-l-0 py-2 text-[10px] leading-[14px] font-[400] font-tekInter
${l.statusReceive ? 'bg-[#F4EBFF] text-[#1843E2]' 
: l.statusPending ? 'bg-[#FFB1641A] text-[#FF7F00]' 
: l.statusCompleted ? 'bg-[#24B6611A] text-[#24B661]'
 : ''} border-[1px] w-[76px] h-[37px] flex items-center justify-center rounded-[8px]`}>
                    {l.statusReceive || l.statusPending || l.statusCompleted}
                </td>
            </tr>
        ))}
    </tbody>
</table>

</div>




</div>

{/* pagination */}
<div className="max-w-full items-center justify-center flex flex-col mt-[3rem] ">
<RiderOrderPagination

totalItems={realorderdata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>

 </section>
  )
}

export default RiderCompletedHistory

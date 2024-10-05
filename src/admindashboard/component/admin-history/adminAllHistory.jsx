import { Link } from "react-router-dom";
import {smallerlatestorderdata } from "../../../data/dashboarddata"
import { realorderdata } from "../../data/orderdata";
import OrderPagination from "../pagination/orderPagination";
import { useEffect, useRef, useState } from "react";
import filterIcon from "../../../../public/Image/filter_icon.svg"
import CompletedHistory from "./adminCompletingHistory";
import CanceledHistory from "./canceledHistory";
import PendingHistory from "./pendingHistory";

const AdminAllHistory = () => {

// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = realorderdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);



const filterRef = useRef(null)
const [ filter, setFilter] = useState('FILTER')

const [ showClick, setShowCLick] = useState(false);


const handleShowClick = (event)=> {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowCLick(!showClick);
      }
}


const toggleDropdown = () => {
    setShowCLick((prevState) => !prevState); // Toggle the dropdown when clicking the filter button
 };
 

useEffect(() => {
    if (showClick) {
      document.addEventListener("mousedown", handleShowClick);
    } else {
      document.removeEventListener("mousedown", handleShowClick);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleShowClick);
    };
  },);
  



  return (
<section className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px]  max-w-[1077px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>

    {/* Heading */}
    <div className="flex items-center justify-between">
    {filter === 'FILTER' && <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">All History</h1>}
{filter === 'COMPLETED' && <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">Completed History</h1>}

{filter === 'CANCELED' &&<h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">Canceled History</h1>}

{filter === 'PENDING' && <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">Pending History</h1>}



<div className="flex flex-col gap-[10px]">


<div onClick={toggleDropdown }
 className="flex gap-[8px] bg-[#F9F9F9] border-[1px] border-[#BDBDBD]  cursor-pointer
 items-center justify-center pt-[8px] pb-[8px] rounded-[8px] px-[8px]" > 
<img src={filterIcon}  alt="graph-pics" className="w-[24px] h-[24px]"/>
<h1 className="text-[16px] leading-[19px] text-[#5075FF] font-tekInter font-[400] text-center items-center justify-center">Filter</h1>

</div>



<ul className={` flex-col pt-[15px] pr-[16px] pb-[15px] pl-[16px] rounded-[12px] gap-[10px] mt-[4rem] ml-[-2.5rem] absolute bg-[#FFFFFF]  cursor-pointer ${showClick? "flex " : "hidden"}`}
 ref={filterRef} 
style={{boxShadow: "18px 20px 20px 0px #3030301A"}}>
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('FILTER');setShowCLick(false)}}><h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">All History</h1></li>
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('COMPLETED');setShowCLick(false)}}> <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Completed</h1></li>
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('PENDING'); setShowCLick(false)}}><h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Pending</h1></li>
        <li
              className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer"
              onClick={() => {
                setFilter("CANCELED");
                setShowCLick(false);
              }}
            >
              <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">
                Canceled
              </h1>
            </li>
    </ul>


</div>

    </div>


{/* FIlter Component */}
{ filter === 'FILTER'  &&
<div>
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
<div className="max-w-full items-center justify-center flex flex-col  mt-[3rem]">
<OrderPagination

totalItems={realorderdata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>

</div>
}

{filter === 'COMPLETED' && <CompletedHistory />}

{filter === 'CANCELED' && <CanceledHistory />}

{filter === 'PENDING' && <PendingHistory />}


</section>
  )
}

export default AdminAllHistory;
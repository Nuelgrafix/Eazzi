import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import filterIcon from "../../../../public/Image/filter_icon.svg"


import RiderOrderPagination from "../pagination/riderOrderPagination";
import RiderCompletedHistory from "../history/riderCompletingHistory";
import { realorderdata } from "../../../dahsboad/data/orderdata";
import RiderCanceledHistory from "../history/riderCanceledHistory";
import RiderPendingHistory from "../history/riderPendingHistory";
import { notificationdata } from "../../../dahsboad/data/notification";

const RiderAllNotification = () => {

// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentallnotificationdata = notificationdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);



const filterRef = useRef(null)
const [ filter, setFilter] = useState('All')

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
  <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">5 Notification</h1>


 

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
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('FILTER');setShowCLick(false)}}><h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">All notification</h1></li>
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('COMPLETED');setShowCLick(false)}}> <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Read only</h1></li>
        <li className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('PENDING'); setShowCLick(false)}}><h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Not read only</h1></li>
        <li
              className="border-[1px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer"
              onClick={() => {
                setFilter("CANCELED");
                setShowCLick(false);
              }}
            >
              <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">
            Mark all as read
              </h1>
            </li>
    </ul>


</div>

    </div>


{/* ALL Component */}
{ filter === 'ALL'  &&
<div className="flex flex-col">

 { currentallnotificationdata.map((m)=> ( 
     <div key={m.id} className="flex ">
        <input type="checkbox" className="w-[18px] h-[18px] border-[1px] border-[#A9BCFF]" />
       <Link to={`#`}><h1>{m.textOne}</h1></Link>
       <Link to={`#`}><h1>{m.textTwo}</h1></Link>
        

    </div>
 )) 
}


{/* pagination */}
<div className="max-w-full items-center justify-center flex flex-col  mt-[3rem]">
<RiderOrderPagination

totalItems={realorderdata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>

</div>
}

{filter === 'READ' && <RiderCompletedHistory />}

{filter === 'NOTREAD' && <RiderCanceledHistory />}

{filter === 'MARK' && <RiderPendingHistory />}


</section>
  )
}

export default RiderAllNotification;
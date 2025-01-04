import { Link } from "react-router-dom";
import { realorderdata } from "../../data/orderdata";
import OrderPagination from "../pagination/orderPagination";
import { useEffect, useRef, useState } from "react";
import filterIcon from "../../../../public/Image/filter_icon.svg"

import { notificationdata } from "../../data/notification";
import ReadNotification from "./adminReadNotificationn";
import NotReadNotification from "./notReadNotification";
import MarkedNotification from "./markedNotification";

import marker from "../../../../public/Image/marker.svg"

const AdminAllNotification = () => {

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

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
    }));
};


const areAllChecked = () => {
    return currentallnotificationdata.length > 0 &&
        currentallnotificationdata.every((item) => checkedItems[item.id]);
};




  return (
<section className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px]  max-w-[1077px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>

    {/* Heading */}
    <div className="flex items-center justify-between">
  <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">5 Notification</h1>


 


<div className="flex gap-[10px]">


{areAllChecked() ? (
<div className="flex gap-[12px]">



<div 
 className="flex gap-[8px] bg-[#F9F9F9] border-[1px] border-[#BDBDBD]  cursor-pointer
 items-center justify-center pt-[8px] pb-[8px] rounded-[8px] px-[8px]" > 
<img src={marker}  alt="marker-pics" className="w-[24px] h-[24px]"/>
<h1 className="text-[16px] leading-[19px] text-[#5075FF] font-tekInter font-[400] text-center items-center justify-center">Mark as Read</h1>

</div>



<div 
 className="flex gap-[8px] bg-[#F9F9F9] border-[1px] border-[#BDBDBD]  cursor-pointer
 items-center justify-center pt-[8px] pb-[8px] rounded-[8px] px-[8px]" > 
  <input type="checkbox" className="w-[18px] h-[18px] border-[1px] border-[#A9BCFF] rounded-[50%] appearance-none cursor-pointer" />
<h1 className="text-[16px] leading-[19px] text-[#5075FF] font-tekInter font-[400] text-center items-center justify-center">Select All</h1>

</div>


<div 
 className="flex gap-[8px] bg-[#FF7F00] border-[1px] border-[#FF7F00]  cursor-pointer
 items-center justify-center pt-[8px] pb-[8px] rounded-[8px] px-[8px]" > 
<img src={filterIcon}  alt="graph-pics" className="w-[24px] h-[24px]"/>
<h1 className="text-[16px] leading-[19px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">Delete</h1>

</div>

</div>

) :

(

<div className="flex flex-col gap-[10px]">


<div onClick={toggleDropdown }
 className="flex gap-[8px] bg-[#F9F9F9] border-[1px] border-[#BDBDBD]  cursor-pointer
 items-center justify-center pt-[8px] pb-[8px] rounded-[8px] px-[8px]" > 
<img src={filterIcon}  alt="graph-pics" className="w-[24px] h-[24px]"/>
<h1 className="text-[16px] leading-[19px] text-[#5075FF] font-tekInter font-[400] text-center items-center justify-center">Filter</h1>

</div>



<ul className={` flex-col pt-[15px] pr-[16px] pb-[15px] pl-[16px] rounded-[12px] gap-[10px] mt-[4rem] ml-[-4.5rem] absolute
 bg-[#FFFFFF]  text-center
  cursor-pointer ${showClick? "flex " : "hidden"}`}
 ref={filterRef} 
style={{boxShadow: "18px 20px 20px 0px #3030301A"}}>
        <li className="border-[1px] justify-center flex border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer gap-[8px]" onClick={()=> {setFilter('ALL');setShowCLick(false)}}> 
            <img src={marker}  alt="graph-pics" 
        className={`w-[18px] h-[18px] ${filter === 'ALL'? "opacity-[100%]" : "opacity-0"}`}/>
        <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">All notification</h1></li>
        <li className="border-[1px] flex justify-center items-center border-[#E0E0E0] gap-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('READ');setShowCLick(false)}}>
        <img src={marker}  alt="graph-pics" 
        className={`w-[18px] h-[18px] ${filter === 'READ'? "opacity-[100%]" : "opacity-0"}`}/> <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Read only</h1></li>
        <li className="border-[1px] justify-center gap-[8px] flex border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={()=> {setFilter('NOTREAD'); setShowCLick(false)}}>
        <img src={marker}  alt="graph-pics" 
        className={`w-[18px] h-[18px] ${filter === 'NOTREAD'? "opacity-[100%]" : "opacity-0"}`}/>
            <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">Not read only</h1></li>
        <li   className="border-[1px] justify-center flex gap-[8px] border-[#E0E0E0] pt-[8px] pr-[12px] pb-[8px] pl-[12px] rounded-[8px] cursor-pointer" onClick={() => {   setFilter("MARK");  setShowCLick(false); }}     >  
        <img src={marker}  alt="graph-pics" 
        className={`w-[18px] h-[18px] ${filter === 'MARK'? "opacity-[100%]" : "opacity-0"}`}/>  <h1 className="text-[#333333] text-[14px] leading-[17px] font-[400] font-tekInter">    Mark all as read    </h1>   </li>
    </ul>


</div>
  )
}

</div>

    </div>


{/* ALL Component */}
{ filter === 'ALL'  &&
<div className="flex flex-col">

 { currentallnotificationdata.map((m)=> ( 
     <div key={m.id} className="flex border-b-[1px] border-[#E9EAF3] text-start
     pt-[15px] pr-[12px] pb-[15px] pl-[12px] items-center justify-start ">
            <input 
            type="checkbox" 
            className="w-[18px] h-[18px] border-[1px] border-[#A9BCFF] rounded-[50%] mr-[2rem] appearance-none cursor-pointer" 
            checked={checkedItems[m.id] || false} 
            onChange={() => handleCheckboxChange(m.id)} 
        />
       <Link to={`/dashboard/notification/${m.id}`}><h1 className="text-[#4F4F4F] text-[16px] leading-[19px] font-[700] font-tekInter">{m.textOne}</h1></Link>
       <Link to={`/dashboard/notification/${m.id}`}><h1 className="text-[#4F4F4F] text-[16px] leading-[19px] font-[400] font-tekInter">{m.textTwo}</h1></Link>
        

    </div>
 )) 
}


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

{filter === 'READ' && <ReadNotification />}

{filter === 'NOTREAD' && <NotReadNotification />}

{filter === 'MARK' && <MarkedNotification />}


</section>
  )
}

export default AdminAllNotification;
import { Link } from "react-router-dom"
import { notificationdata } from "../../data/notification"
import { realorderdata } from "../../data/orderdata"
import OrderPagination from "../admin-pagination/orderPagination"
import { useState } from "react"


const AdminReadNotification = () => {


// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentallnotificationdata = notificationdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
<div className="flex flex-col">

{ currentallnotificationdata.map((m)=> ( 
    <div key={m.id} className="flex border-b-[1px] border-[#E9EAF3] text-start
    pt-[15px] pr-[12px] pb-[15px] pl-[12px] items-center justify-start ">
       <input type="checkbox" className="w-[18px] h-[18px] border-[1px] border-[#A9BCFF] rounded-[50%] mr-[2rem] appearance-none cursor-pointer" />
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
  )
}

export default AdminReadNotification

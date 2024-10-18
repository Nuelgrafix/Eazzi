
import { useState } from "react";

import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import Footerimg from "/Image/footer-dahsboard.svg"
import { Link } from "react-router-dom"
import RiderSidebarDashboard from "../component/riderSidebarDashboard";
import RiderMobileSideDashboard from "../component/riderMobileSideDashboard";


import { locationrider } from "../data/riderdata";
import RiderOrderPagination from "../component/pagination/riderOrderPagination";




const AllRiderPage = () => {

    const [showSide, setShowSide] = useState(false)

    const handleSide = ( ) => {
      setShowSide((prev) => !prev);
    }

// pagination
const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 10
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = locationrider.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <section className="flex w-full  bg-[#F8F8F8] ">


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
         leading-[48px] text-[#1843E2] font-tekInter font-[700]">Order</h1>
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




 <div className="w-full flex flex-col gap-[10px] lg:mt-[3rem]  mt-[2rem]"  >
 <section className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px]  max-w-[1147px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>

    

    <div className="flex justify-between">
    <h1 className="text-[24px] leading-[36px] text-[#181818] font-tekInter font-[400]">Rider Delivery Group </h1>
    </div>

<div className="grid grid-cols-2 gap-[10px]">

    {
        currentrealorderdata.map((r) => (
<div className="flex flex-col gap-[35px] p-[30px]" 
 style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}
 key={r.id}>

    <div className="flex justify-between">
        <h1  className="font-[700] text-[#4F4F4F] text-[20px] leading-[24px] font-tekInter">{r.location}</h1>
        <Link to={`/rider/allriderdetails/${r.id}`} className="flex gap-[10px] text-[#1843E2] text-[14px] leading-[22px] font-[600] font-tekInter">See all 
        <i className="ri-arrow-right-fill"></i></Link>
    </div>

    <table className="min-w-full border-collapse">
        <thead className="bg-[#E0E0E0] h-[48px]">
            <tr>
                <th className="text-start text-[#4F4F4F] font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px] rounded-tl-[8px]">
                    Rider name
                </th>
                <th className="text-start text-[#4F4F4F] font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px]">
                    Company
                </th>
                <th className="text-start text-[#4F4F4F] font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px] rounded-tr-[8px]">
                    Contact
                </th>
            </tr>
        </thead>

        <tbody>
        {
                            r.data.map((rider) => (
                                <tr key={rider.id} className="bg-white border-t border-gray-200">
               <td className="text-[#555F7E] font-tekInter font-[400] text-[13px] leading-[22px] px-[16px] py-[6px] flex items-center  gap-[12px]"> <img src={rider.img}  alt="rider-pics" className="w-[36px] h-[36px] rounded-[50%]"  /> {rider.title}</td>
               <td className="text-[#555F7E] font-tekInter font-[400] text-[13px] leading-[22px]">{rider.company}</td>
               <td className="text-[#555F7E] font-tekInter font-[400] text-[13px] leading-[22px]">{rider.contact}</td>
                                </tr>
                            ))
                        }
        </tbody>
    </table>



</div>
        ))
    }

</div>


</section>


<RiderOrderPagination

totalItems={locationrider.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>
 </div>








{/* Footer logo */}

 <div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>


</div>




 

 </section>
  )
}

export default AllRiderPage

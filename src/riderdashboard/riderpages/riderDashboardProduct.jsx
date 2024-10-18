import { useState } from "react";




import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import { dashboardproductdata } from "../../data/product";
import { Link } from "react-router-dom";
import edit from "/Image/edit.svg"


import RiderSidebarDashboard from "../component/riderSidebarDashboard";
import RiderMobileSideDashboard from "../component/riderMobileSideDashboard";
import RiderProductPagination from "../component/pagination/riderProductPagination";


const RiderDashboardProduct = () => {

    const ITEMS_PER_PAGE = 15
    const [currentPage, setCurrentPage] = useState(1);
    const firstIndex = (currentPage - 1)* ITEMS_PER_PAGE
    const lastIndex = currentPage * ITEMS_PER_PAGE
    const  currentdashboardproduct = dashboardproductdata.slice(firstIndex,lastIndex);
    const paginate = (pageNumber) => { setCurrentPage(pageNumber)}



    const [showSide, setShowSide] = useState(false)

    const handleSide = ( ) => {
      setShowSide((prev) => !prev);
    }


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



<div  className="max-w-[204px] w-full  md:flex hidden  bg-[#FFFFFF]"

style={{background: "#FFFFFF"}}>
<RiderSidebarDashboard/>
</div>


<div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]  ">


{/* Top Link */}
<div className="w-full flex items-center justify-between">
    <div>
        <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Store Product</h1>
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

{/* Products Content */}

<div className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px] mt-[2rem]  max-w-[1077px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>


{/* Heading */}

<div>
<h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">All Product</h1>
    </div>

    <div>



 {/* mapping through */}
 <div className="md:grid lg:grid-cols-5 hidden w-[100%] grid-cols-1 md:grid-cols-3 relative  gap-4 py-[1rem]">
        {currentdashboardproduct.map((item) => (
          <div
            key={item.id}
            className="gap-3 top-0 rounded-[5px] max-w-[203px] w-full items-center justify-center"
          >
            <Link to={`/dashboard/about-product/${item.id}`}>
            <div className="bg-[#fff] px-2 h-[403px] mr-[2rem]  md:w-[190px] rounded-[8px] ">
              <img
                src={item.pics}
                alt="trending_pics"
                className="w-[190px] h-[220px] "
              />
              <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
              {item.title.length > 12 ? `${item.title.substring(0, 12)}...` : item.title}</h1>
              <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                {item.price}
              </p>
              <span className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                {item.stock}
              </span>
              <button
                className="flex justify-center w-[153px]  h-[44px] gap-[8px] bg-[#F9F5FF] border-[1px] border-[#F9F5FF] rounded-[8px] 
     hover:transform-x-[10px] items-center text-center text-mainBlue  leading-[24px] mt-[1rem]"
    style={{boxShadow: "box-shadow: 0px 1px 2px 0px #1018280D"}}
              >
                  <h1 className="text-[16px] leading-[24px] font-[600] text-[#1843E2] font-tekInter"> Edit Item   </h1>
                <img src={edit}  alt="edit-icon" className="w-[25px] h-[20px]"/>
            
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>



{/* pagination */}
<div>
    <RiderProductPagination 
    
    paginate={paginate}
    itemsPerPage={ITEMS_PER_PAGE}
    currentPage={currentPage}
    totalItems={dashboardproductdata.length}
    />
    
</div>
        
</div>

</div>


</div>


</section>
  )
}

export default RiderDashboardProduct

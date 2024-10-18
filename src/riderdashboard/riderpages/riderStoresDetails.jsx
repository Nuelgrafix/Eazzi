import { useParams } from "react-router-dom";
import RiderSidebarDashboard from "../component/riderSidebarDashboard";
import RiderMobileSideDashboard from "../component/riderMobileSideDashboard";
import { realstoredata, storeprofileinfo } from "../data/storedata";
import { useState } from "react";


import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import Footerimg from "/Image/footer-dahsboard.svg"
import RiderOrderPagination from "../component/pagination/riderOrderPagination";
import { realorderdata } from "../../dahsboad/data/orderdata";





const RiderStoresDetails = () => {
    const { id } = useParams();
    const item = realstoredata.find((item) => item.id === id); // Find the item

    console.log(item);

    const [showSide, setShowSide] = useState(false);

    const handleSide = () => {
        setShowSide((prev) => !prev);
    };



    const [currentPage,setCurrentPage] = useState(1)
const ITEMS_PER_PAGE = 7
const firstIndex = (currentPage - 1 ) * ITEMS_PER_PAGE
const lastIndex = currentPage  * ITEMS_PER_PAGE
const currentrealorderdata = realorderdata.slice(firstIndex, lastIndex)
const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="flex h-full bg-[#F8F8F8]">
            <div>
                <div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
                    style={{ boxShadow: "0px 8px 32px 0px #3326AE14" }}>
                    {showSide ? (
                        <i className="ri-close-line"></i>
                    ) : (
                        <i className="ri-menu-2-line"></i>
                    )}
                </div>

                <div className={`fixed overflow-y-scroll z-[1000] h-full ${showSide ? "max-w-[214px] w-full bg-[#1843E2]" : "max-w-[214px] w-[0px] bg-[#1843E2]"}`}>
                    <RiderMobileSideDashboard />
                </div>
            </div>

            <div className="max-w-[204px] w-full md:flex hidden bg-[#FFFFFF]">
                <RiderSidebarDashboard />
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full px-[2rem]">
                <div className="w-full flex items-center justify-between py-[1rem]">
                    <div>
                        <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Stores</h1>
                    </div>

                    {/* Input */}
                    <div className="hidden md:flex gap-[6px] bg-[#FFFFFF] border-[1px] border-[#D0D5DD] rounded-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]" 
                        style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}>
                        <img src={serachIcon} alt="search_icon" className="w-[20px] h-[20px]" />
                        <input type="text" placeholder="Search" className="outline-none w-full h-full bg-white text-[16px] leading-[24px] text-[#667085] font-tekInter font-[400]" />
                    </div>

                    {/* Notification & Manager */}
                    <div className="md:flex lg:gap-[12px] hidden">
                        <div className="flex ">
                            <img src={notification} alt="graph-pics" className="w-[24px] h-[24px]" />
                            <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]">
                                <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-[0px]">
                            <img src={manager} alt="graph-pics" className="w-[75px] h-[30px]" />
                            <h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] flex flex-col md:flex-row my-[2rem] gap-[27px] rounded-[16px]" 
        >

            {/* first div */}
                    <div className="flex justify-center items-center bg-[#FFFFFF] p-[32px] lg:h-[502px]  max-w-[385px] w-full"  
                      style={{ boxShadow: "0px 8px 32px 0px #3326AE14" }}>
                        {/* Check if item exists before trying to access its properties */}
        {item && 
        <div key={item.id} className="flex flex-col gap-[23px] w-full">
          <div className="flex flex-col gap-[23px] items-center justify-center">
              <img src={item.img} alt="store-profile" className="w-[96px] h-[96px] rounded-[50%]" />
                 <h1 className="font-[700] text-[#282828] font-tekInter text-[16px] leading-[19px]">{item.title}</h1>
                 <p className="font-[400] text-[#828282] font-tekInter text-[16px] leading-[19px]">{item.email}</p>
                                </div>


{/* divider */}
<div className="w-[320px] bg-[#E9EAF3] border-[1px] border-[#E9EAF3]"></div>
                                <div className="flex flex-col items-start justify-start gap-[16px]">
               {
         storeprofileinfo.map((s)=> (
  <div key={s.id} className="flex flex-col">

   <div className="flex justify-start items-start gap-[10px]">

    <div className="w-[24px] h-[24px] flex items-center justify-center">
    <img src={s.icon}  className="w-[16px] h-[16px] object-cover"  />
    </div>


    <div className="flex flex-col gap-[1px]">
        <h1 className="font-[700] font-tekInter text-[14px] leading-[16px] text-[#282828]"> {s.title}</h1>
        <p className="font-[400] font-tekInter text-[14px] leading-[16px] text-[#828282]"> {s.description}</p>
    </div>
   </div>


  </div>
           ))
                                    }

                      </div>
                          </div>
                     }
                    </div>


{/* second div */}
                    <div className="flex flex-col max-w-[735px] w-full rounded-[16px] gap-[30px]   p-[20px] bg-[#ffffff]"
style={{boxShadow: "0px 8px 32px 0px #3326AE14"}}>
    <h1 className="text-[20px] leading-[24px] text-[#4F4F4F] font-[700] font-tekInter pt-[2rem]">Orders made on this store</h1>


    <div className="hidden md:block max-w-full">


<table className="w-full">
    <thead className="">
        <tr className="border-b-[1px] border-[#A9BCFF] bg-[#FF8F21] rounded-[8px] h-[75px]">
            <th className="text-[#FFFFFF] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px] ">Products</th>
            <th className="text-[#FFFFFF] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Order ID</th>
            <th className="text-[#FFFFFF] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Date</th>
            <th className="text-[#FFFFFF] text-[16px] leading-[19px] font-[700] font-tekInter text-start px-2 pl-[16px]">Status</th>
        </tr>
    </thead>

    <tbody className="w-full">
        {currentrealorderdata.map((l) => (
            <tr key={l.id} className="border-b-[0.5px] border-t-[1px] border-[#828282] h-[72px]">
                
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">
                    <div className="flex items-center max-h-[4px] h-full gap-[16px]">
                        <div className="grid grid-cols-2 gap-[5px]    justify-between items-center w-[51px]">
                       <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%]"><img src={l.img} alt="latest-pics" className="w-[24px] h-[24px]" />  </div>
                       <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%]"><img src={l.img} alt="latest-pics" className="w-[24px] h-[24px]" />  </div>
                       <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[50%]"><img src={l.img} alt="latest-pics" className="w-[24px] h-[24px]" />  </div>
              <div  className="rounded-[50%] border-[0.8px] border-[#E9EAF3] flex items-center justify-center w-[24px] h-[24px]">  <h1 className="  text-[12px] leading-[14px] text-[#7B97FF] font-tekInter font-[400]">+4</h1></div>
                        </div>
                 
                        <h1 className="font-[700] text-[14px] leading-[16px] text-[#4F4F4F]">{l.quantity}</h1>
                    </div> 
                </td>

                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px] cursor-pointer">{l.orderId}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter pl-[16px]">{l.date}</td>
              
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


{/* pagination */}
<div className="max-w-full items-center justify-center flex flex-col ">
<RiderOrderPagination

totalItems={realorderdata.length}
itemPerPage={ITEMS_PER_PAGE}
paginate={paginate}
currentPage={currentPage}/>

</div>


</div>
                </div>





                {/* Footer logo image */}
                <div className="w-full items-center justify-center flex">
                    <img src={Footerimg} alt="icons" className="w-[107px] h-[101px]" />
                </div>
            </div>
        </section>
    );
};

export default RiderStoresDetails;

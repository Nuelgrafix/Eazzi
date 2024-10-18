import { useState } from "react";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";


import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"

import Footerimg from "/Image/footer-dahsboard.svg"
import { Link } from "react-router-dom";
import { settingsdata } from "../data/settingsdata";


const Settings = () => {

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
      <MobileSideDashboard />
       </div>
      
         
      </div>
      
      
          
          <div  className="max-w-[204px] w-full  md:flex hidden  bg-[#1843E2]">
      <SidebarDashboard />
       </div>
      
      
       <div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]  ">
      
      
      {/* Top Link */}
      <div className="w-full flex   items-center justify-between">
        
          <div>
              <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Settings</h1>
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
  
  <Link to="/dashboard/notification" className="flex cursor-pointer">
  
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
  
  
  
  {/* main content */}

  <div className="w-[100%] h-[70vh]">


 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px] my-[3rem]  ">
    {
        settingsdata.map((s)=> (
<div className="flex items-center justify-between max-w-[541px] rounded-[20px] bg-white py-[16px] px-[34px]" key={s.id}>

    <div className="flex gap-[16px] items-center">



    <div className="rounded-[50%] w-[61px] h-[61px] border-[1px] border-[#FF922433] flex items-center justify-center"
    style={{boxShadow: "-2px 11px 18.1px 0px #2392EC1A"}}>
<img src={s.img}  alt="" className=" flex items-center justify-center" />
    </div>

    <div className="flex">
       <h1 className="text-[16px] leading-[19px] font-tekInter font-[400] text-[#181818]" >{s.title} </h1>
    </div>
    </div>

{/* toggle */}


{ s.id === 3 ?

<i className="ri-arrow-right-fill text-black"></i>

:


<div className="w-[40px] h-[20px] bg-[#BCBCBC] rounded-[25px]">
    <div style={{boxShadow:"0px 4px 6px -4px #0000001A 0px 10px 15px -3px #0000001A"}}
     className="w-[20px] h-[20px] rounded-[50%] bg-[#FAFAFA]">

    </div>
</div>

    }

</div>

        ))
    }


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
  

  
export default Settings

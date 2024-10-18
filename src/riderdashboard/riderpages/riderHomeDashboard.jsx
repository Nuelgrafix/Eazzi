
import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"

import { Line, LineChart, ResponsiveContainer, Tooltip} from "recharts"

import { useState } from "react"
import Footerimg from "/Image/footer-dahsboard.svg"


import RiderSidebarDashboard from "../component/riderSidebarDashboard"
import RiderMobileSideDashboard from "../component/riderMobileSideDashboard"
import RiderRecord from "../component/riderRecord"
import AnalyticChart from "../../dahsboad/component/analytics/analyticChart"
import { dashboardchartdata, dashboardtopdata } from "../../data/dashboarddata"
import RiderRealOrders from "../component/ridersRealOrder"

const  RiderHomeDashboard = () => {



        const [showSide, setShowSide] = useState(false)
    
        const handleSide = ( ) => {
          setShowSide((prev) => !prev);
        }
    
      return (
     <section className="flex w-full  bg-[#F8F8F8] ">
    
    
    <div >
    
          <div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[20px] text-[30px] z-[10000]
           bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
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
    <RiderMobileSideDashboard/>
     </div>
    
       
    </div>
    
    
        
        <div  className="max-w-[204px] w-full  md:flex hidden  bg-[#FFFFFF]">
    <RiderSidebarDashboard />
     </div>
    
    
    
    <div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]  ">
    
    
    {/* Top Link */}
    <div className="w-full flex items-center justify-between">
        <div>
            <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Analytics</h1>
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
    
    {/* <div className="w-[170px] h-[33px] gap-[16px] flex bg-[#FFFFFF] rounded-[4px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center justify-center">
        <h1 className="lg:text-[14px] md:text-[11px] leading-[16px] text-[#1C2A53] font-tekInter font-[400]">Jan 01 -  Jan 28</h1>
    </div> */}
    
    <div className="flex items-center justify-center gap-[8px]">
<img src={manager}  alt="graph-pics" className="w-[45px] h-[40px]"/>

<ul className="flex flex-col gap-[4px]">
 <li><h1 className="text-[16px] leading-[19px] text-[#181818] font-tekInter font-[400]">Emmanuel</h1> </li> 
 <li><p className="text-[12px] leading-[14px] text-[#4F4F4F] font-tekInter font-[400]">Super Admin</p> </li> 
</ul>
</div>
    
        </div>
    
    </div>
    
    
     {/* Top data */}
    
     <div  className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center max-w-full gap-[14px] py-[3rem]">
        {
            dashboardtopdata.map((d)=>(
                <div key={d.id}  className="rounded-[12px] flex justify-between  pt-[22px] pr-[32px] pb-[22px] pl-[32px] lg:w-[270px] w-full
                 h-auto bg-[#FFFFFF]" 
                
                style={{  boxShadow: "0px 8px 32px 0px #3326AE14" }}>
    
                    <div className="flex flex-col gap-[4px] ">
    
                    <p  className="text-[14px] leading-[16px] font-[400] text-[#828282] font-tekInter">{d.title}</p>
                        <h1 className="text-[24px] leading-[36px] font-[700] text-[#333333] font-tekInter pt-[1.5rem]">{d.price}</h1>
                
    
                    </div>
    
                    <div className="flex flex-col gap-[11px] items-end">
              { d.percentage && <p  className="text-[14px] leading-[16px] font-[700] text-[#279F51] font-tekInter">{d.percentage}</p>  }
              { d.percentageBlue && <p  className="text-[14px] leading-[16px] font-[700] text-[#1843E2] font-tekInter">{d.percentageBlue}</p>  }
              { d.Redpercentage && <p  className="text-[14px] leading-[16px] font-[700] text-[#FF392B] font-tekInter">{d.Redpercentage}</p>  }
              { d.percentageYellow && <p  className="text-[14px] leading-[16px] font-[700] text-[#FF7F00] font-tekInter">{d.percentageYellow}</p>  }
         
    
                        {/* <img src={d.img}  alt="graph-pics" className="w-[75px] h-[30px]"/> */}
    
                        <div className="w-[100px] flex h-[50px]  mr-[-30px]">
                
                        <ResponsiveContainer width="100%" height="100%">
          <LineChart  data={dashboardchartdata}   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <Tooltip
            contentStyle={{background:"transparent", border:"none"}} />
         <Line type="monotone" dataKey="pv"
              stroke={
                d.Redpercentage      ? "#FF392B"
                  : d.percentageBlue   ? "#1843E2"
                  : d.percentageYellow    ? "#FF7F00"
                  : "#279F51" 
              }
         strokeWidth={2} dot={false} />
    
        
          </LineChart>
        </ResponsiveContainer>
                        </div>
    
                    
                    </div>
    
                </div>
            ))
        }
    
     </div>
    
    
    
    {/* Charts section */}
     <div>
        <AnalyticChart />
     </div>
    
     <div className="w-full lg:mt-[3rem]  mt-[2rem]">
        <RiderRecord />
     </div>
     <div className="w-full lg:mt-[3rem]  mt-[2rem]">
        <RiderRealOrders />
     </div>
    
    
    
    {/* Footer logo */}
    
     <div className="w-full items-center justify-center flex">
        <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
        </div>
    
    
    </div>
    
    
    
    
     
    
     </section>
      )
    }


export default  RiderHomeDashboard
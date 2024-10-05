

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip  } from "recharts"
import { dashboardchartdata } from "../../../data/dashboarddata"

import AnalyticExample from "./analyticPieChart"


const AnalyticChart = () => {
  return (
<section className="flex flex-col lg:flex-row  gap-[30px] lg:h-[337px]">


    <div className="flex flex-col max-w-[840px] w-full bg-[#FFFFFF] rounded-[16px] h-[337px]"
    style={{boxShadow: "0px 8px 32px 0px #3326AE14"}}
    >

        {/* Heading */}
        <div className="px-[2rem] pt-[1rem]">
        <h1 className=" w-full h-full text-[20px] leading-[24px] text-[#4F4F4F] font-tekInter font-[700] pb-[2rem]">Daily income:</h1>
        </div>

        <div className="h-[227px] p-[20px]">

            <ResponsiveContainer width="100%" height="100%">
      <LineChart  data={dashboardchartdata}   margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
      <Tooltip
        contentStyle={{background:"transparent", border:"none"}} />
        <Line type="monotone" dataKey="pv" stroke="#1843E2" strokeWidth={2} />
        <XAxis dataKey="name" stroke="#828282" axisLine={false} tickLine={false}  tickCount={10}  padding={{left:40, right:20, top:20, bottom:20}}  />
        <YAxis  dataKey="amt" axisLine={false} tickLine={false}   padding={{left:20, top:10}}  />
      </LineChart>
    </ResponsiveContainer>


        </div>

    </div>


{/* Cart Chart */}
    <div className="lg:w-[500px] h-[337px] bg-[#FFFFFF] rounded-[16px]" 
    style={{boxShadow: "0px 4px 32px 0px #3326AE0A"}}>
        {/* Heading */}
        <div className="px-[2rem] pt-[1rem]">
        <h1 className=" w-full h-full text-[20px] leading-[24px] text-[#4F4F4F] font-tekInter font-[700] pb-[2rem]">Order History</h1>
        </div>

        <div className=" h-[320px] flex flex-col items-center justify-center "
           >

    <AnalyticExample />
        </div>

        {/* bottom */}
        <div className="flex flex-col px-[2rem] gap-[24px] mt-[-13.4rem] absolute right-[15px]">
            <ul className="flex items-center  gap-[28px]">
                <li className="bg-[#1843E2] w-[8px] h-[8px] rounded-[50%]"></li>
                <li className="text-[#8E95A9] font-[400] text-[12px] leading-[14px] font-tekInter">Recent</li>
            </ul>

            <ul className="flex items-center  gap-[28px]">
                <li className="bg-[#FF7F00] w-[8px] h-[8px] rounded-[50%]"></li>
                <li className="text-[#8E95A9] font-[400] text-[12px] leading-[14px] font-tekInter">Pending</li>
            </ul>

            <ul className="flex items-center  gap-[28px]">
                <li className="bg-[#24B661] w-[8px] h-[8px] rounded-[50%]"></li>
                <li className="text-[#8E95A9] font-[400] text-[12px] leading-[14px] font-tekInter">Complete</li>
            </ul>

            <ul className="flex items-center  gap-[28px]">
                <li className="bg-[#F62424] w-[8px] h-[8px] rounded-[50%]"></li>
                <li className="text-[#8E95A9] font-[400] text-[12px] leading-[14px] font-tekInter">Cancelled</li>
            </ul>




        </div>
    </div>

</section>
  )
}

export default AnalyticChart





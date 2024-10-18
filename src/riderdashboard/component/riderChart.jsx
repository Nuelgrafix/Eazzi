

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip  } from "recharts"
import { dashboardchartdata } from "../../data/dashboarddata"
import Example from "./riderPieChart"


const RiderChart = () => {
  return (
<section className="flex flex-col lg:flex-row  gap-[30px] lg:h-[420px]">


    <div className="flex flex-col max-w-[840px] w-full bg-[#FFFFFF] rounded-[16px]"
    style={{boxShadow: "0px 8px 32px 0px #3326AE14"}}
    >

        {/* Heading */}
        <div className="px-[2rem] pt-[1rem]">
        <h1 className=" w-full h-full text-[24px] leading-[36px] text-[#5075FF] font-tekInter font-[400] pb-[2rem]">Dashboard</h1>
        </div>

        <div className="h-[320px] p-[20px]">

            <ResponsiveContainer width="100%" height="100%">
      <LineChart  data={dashboardchartdata}   margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
      <Tooltip
        contentStyle={{background:"transparent", border:"none"}} />
        <Line type="monotone" dataKey="pv" stroke="#1843E2" strokeWidth={2} />
        <XAxis dataKey="name" stroke="#828282" axisLine={false} tickLine={false}  tickCount={10}  padding={{left:40, right:20, top:20, bottom:20}}  />
        <YAxis  dataKey="amt" axisLine={false} tickLine={false}   padding={{left:20, top:20}}  />
      </LineChart>
    </ResponsiveContainer>


        </div>

    </div>


{/* Cart Chart */}
    <div className="lg:w-[500px] h-[420px] bg-[#FFFFFF] rounded-[16px]" 
    style={{boxShadow: "0px 4px 32px 0px #3326AE0A"}}>
        {/* Heading */}
        <div className="px-[2rem] pt-[1rem]">
        <h1 className=" w-full h-full text-[24px] leading-[36px] text-[#5075FF] font-tekInter font-[400] ">Cart</h1>
        </div>

        <div className=" h-[320px] flex flex-col items-center justify-center "
           >

    <Example />
        </div>

        {/* bottom */}
        <div className="flex flex-col px-[2rem] gap-[3px] mt-[-1.4rem]">
            <ul className="flex items-center justify-between">
                <li className="text-[#282828] font-[500] text-[14px] leading-[22px] font-tekInter">Abandoned Cart</li>
                <li className="text-[#282828] font-[500] text-[14px] leading-[22px] font-tekInter">10</li>
            </ul>

            <ul className="flex items-center justify-between text-[#828282] text-[14px] leading-[22px] font-[500] font-tekInter">
                <li >Abandoned Revenue</li>
                <li>N5,900</li>
            </ul>


        </div>
    </div>

</section>
  )
}

export default RiderChart





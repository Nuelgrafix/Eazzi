import { Link } from "react-router-dom"
import { locationrider } from "../data/riderdata"


const RidersDeliveryGroup = () => {
  return (
<section className=" flex flex-col rounded-[16px] bg-[#FFFFFF] gap-[27px] p-[10px] md:p-[30px]  max-w-[1147px]"
style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}
>

    <div className="flex justify-between">
    <h1 className="text-[24px] leading-[36px] text-[#181818] font-tekInter font-[400]">Rider Delivery Group </h1>
    <Link to="/rider/allrider" className="w-[156px] rounded-[8px] p-[10px] bg-[#1843E2] border-[1px] border-[#1843E2] flex items-center justify-center gap-[5px]">
        <h1 className="font-tekInter font-[600] text-[14px] leading-[20px] text-[#FFFFFF]">See all groups</h1>
        <i className="ri-arrow-right-fill text-white"></i>
    </Link>
    
    </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">

    {
        locationrider.slice(0,4).map((r) => (
<div className="flex flex-col gap-[35px] p-[30px]" 
 style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}
 key={r.id}>

    <div className="flex justify-between">
        <h1  className="font-[700] text-[#4F4F4F] text-[20px] leading-[24px] font-tekInter">{r.location}</h1>
        <Link to={`/rider/allriderdetails/${r.id}`} className="flex gap-[10px] text-[#1843E2] text-[14px] leading-[22px] font-[600] font-tekInter">See all 
        <i className="ri-arrow-right-fill"></i></Link>
    </div>

    <table className="min-w-full border-collapse">
        <thead className="bg-[#FF8F21] h-[48px]">
            <tr>
                <th className="text-start text-white font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px] rounded-tl-[8px]">
                    Rider name
                </th>
                <th className="text-start text-white font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px]">
                    Company
                </th>
                <th className="text-start text-white font-[600] text-[14px] leading-[22px] font-tekInter py-[16px] px-[13px] rounded-tr-[8px]">
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
  )
}

export default RidersDeliveryGroup

import { productrecorddata } from "../../data/analytics"


const AdminAnalyticsrecord = () => {
  return (
<section className="flex md:flex-row flex-col gap-[24px] max-w-[1143px] w-full">

    {/* product record */}
<div className="flex flex-col max-w-[527px] w-full rounded-[16px]   p-[20px] bg-[#ffffff]"
style={{boxShadow: "0px 8px 32px 0px #3326AE14"}}>
    <h1 className="text-[20px] leading-[24px] text-[#4F4F4F] font-[700] font-tekInter py-[2rem]">Product record</h1>


    <div className=" w-full">
        <table className="max-w-[463px] w-full">
            <thead  >
                <tr className="bg-[#FF8F21] rounded-[20px]  h-[48px]">
                <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Product</th>
                <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Qty. Upload</th>
                <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Qty. in stock</th>
                </tr>
            </thead>

            <tbody className="w-full">
        {productrecorddata.map((l) => (
            <tr key={l.id} className="border-b-[1px] border-t-[1px] border-[#828282] max-h-[64px]">
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">
                    <div className="flex items-center">
                        <img src={l.pics} alt="latest-pics" className="w-[44px] h-[44px] mr-2" />
                        <h1>{l.title}</h1>
                    </div> 
                </td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#555F7E] font-[400] font-tekInter py-2 pr-[30px] text-end">{l.quantity}</td>
                <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#555F7E] font-[400] font-tekInter pr-[30px] text-end">{l.stock}</td>
                
      
            </tr>
        ))}
    </tbody>
        </table>

    </div>

</div>


<div className="flex flex-col max-w-[597px] w-full rounded-[16px] p-[20px] bg-[#ffffff] "
style={{boxShadow: "0px 8px 32px 0px #3326AE14"}}>


<h1 className="text-[20px] leading-[24px] text-[#4F4F4F] font-[700] font-tekInter py-[2rem]">Top selling products</h1>


<div className=" w-full">
    <table className="max-w-[463px] w-full max-h-[277px] h-full overflow-y-scroll">
        <thead  >
            <tr className="bg-[#FF8F21] rounded-3xl   h-[48px]">
            <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Product</th>
            <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Qty. Upload</th>
            <th className="text-[#FFFFFF] text-[14px] leading-[22px] font-[600] font-tekInter text-start px-2 pl-[16px]">Qty. in stock</th>
            </tr>
        </thead>

        <tbody className="w-full">
    {productrecorddata.map((l) => (
        <tr key={l.id} className="border-b-[1px] border-t-[1px] border-[#828282] max-h-[64px]">
            <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter py-2 pl-[16px]">
                <div className="flex items-center">
                    <img src={l.pics} alt="latest-pics" className="w-[44px] h-[44px] mr-2" />
                    <h1>{l.title}</h1>
                </div> 
            </td>
            <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#555F7E] font-[400] font-tekInter py-2 pr-[30px] text-end">{l.quantity}</td>
            <td className="border-r-0 border-l-0 text-[14px] leading-[16px] text-[#555F7E] font-[400] font-tekInter pr-[30px] text-end">{l.stock}</td>
            
  
        </tr>
    ))}
</tbody>
    </table>

</div>

</div>

</section>
  )
}

export default AdminAnalyticsrecord

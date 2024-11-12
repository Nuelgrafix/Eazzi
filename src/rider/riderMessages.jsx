import { realorderdata } from "../dahsboad/data/orderdata"

const RiderMessages = () => {
  return (
<section className="flex flex-col md:hidden bg-[#F9F9F9]">


<div className="bg-[#1843E2]  max-w-full flex gap-[10px] h-[7vh] items-center justify-start px-[1rem]">
<i className="ri-arrow-left-fill text-white"></i>
<h1 className="font-[400] text-[16px] leading-[19px] font-tekInter  text-white">Messages</h1>
</div>


<div className=" bg-[#F9F9F9]  flex flex-col my-[2rem] gap-[27px] p-[32px] rounded-[16px]" 
style={{ boxShadow: "0px 8px 32px 0px #3326AE14"}}>


{ realorderdata.map((item) => ( 

    <div key={item.id} className=" flex flex-col bg-[#ffffff] gap-[36px] py-[24px] px-[13px] h-[400px]">


    <div className="flex flex-col gap-[10px]">

      <div className="w-full gap-[10px]
       flex flex-col items-start justify-start">
     <h1 className="w-[30px] h-[30px] text-center flex items-center justify-center font-[700] text-[12px] leading-[14px] bg-[#F9F9F9] font-tekInter text-[#828282] rounded-[100px] bg-[] border-[1px] border-[#E0E0E0]">{item.id}</h1>

     <div className="flex flex-col gap-[4px]">
        <h1 className="text-[#282828] text-[14px] leading-[17px] font-[700] font-tekInter"> order ID: {item.orderId}</h1>
        <h1 className="text-[#282828] text-[14px] leading-[17px] font-[700] font-tekInter"> Store: <span className="font-[400]">Ben Store </span></h1>
        <h1 className="text-[#282828] text-[14px] leading-[17px] font-[700] font-tekInter"> Store Location: <span className="font-[400]"> No. 13 Odo-Ota Street, Ajah Lagos.</span></h1>
    </div>

           </div>


{/*  */}
      <div className="flex    w-full gap-[24px]">

        {
            item.card.map((c)=>(
                <div key={c.id} className="flex flex-col gap-[16px]  rounded-[16px]
                 w-[75px] h-[88px]"
                style={{boxShadow:"6px 7px 12px 0px #1843E20D"}}>
                    <img src={c.img} alt="product-pics" className="w-[54px] h-[54px] rounded-[8px]" />
                    <h1 className="font-[400] text-[8px] leading-[10px] text-[#4F4F4F] font-tekInter">{c.title}</h1>
                </div>
            ))
        }

      </div>

      <h1 className="text-[#282828] text-[14px] leading-[17px] font-[700] font-tekInter"> Deliver Location: <span className="font-[400]"> No. 14 Odo-Ota Street, Ajah Lagos.</span></h1>


<button className="bg-[#1843E2] w-full h-[44px] rounded-[8px] border-[1px] gap-[8px]">
<h1 className="text-white text-[14px] leading-[17px] font-[700] font-tekInter"> Accept to deliver</h1>
</button>

    </div>

    </div>

))
}
</div>




</section>
  )
}

export default RiderMessages



const CheckoutModal = () => {
  return (
 <section className="bg-white max-w-[745px] w-[745px] rounded-[20px] flex items-center justify-center p-[24px]" 
 style={{boxShadow:"-1px 15px 12px 0px #1843E21A"}}
 >
  

<div className="flex flex-col items-center gap-[16px] justify-center max-w-[455px] w-full">

<h1  className="font-tekInter font-[700] text-[20px] leading-[24px] text-[#333333]">Pick a time for delivery</h1>

<div className="flex gap-[15px]">

<div className="">
     <input type="text" placeholder="7:30am - 3:00pm"  className="w-[207px] h-[53px] rounded-[8px] px-[16px] py-[26px] border-[1px] border-[#969696] outline-none "  />
</div>

<div className="">
    <input type="date" placeholder="22/10/2024"  className="w-[207px] h-[53px] px-[16px] py-[26px] border-[1px] border-[#969696] outline-none rounded-[8px]"  />
</div>

</div>

<button className="flex items-center justify-center bg-[#1843E2] max-w-[431px] w-full h-[44px] border-[1px] border-[#1843E2] rounded-[8px] px-[px] py-[px] "
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1 className="font-tekInter font-[600] text-[16px] leading-[24px] text-white">Set time</h1>
</button>

</div>

 </section>
  )
}

export default CheckoutModal

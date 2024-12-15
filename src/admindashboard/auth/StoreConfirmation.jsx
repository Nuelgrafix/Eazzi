import store_check from "/Image/store-check-circle (1).svg"



const StoreConfirmation = () => {
  return (
<section className=" flex flex-col items-center justify-center w-full my-[2rem] h-screen p-[10px]">

    <div className="flex flex-col items-center justify-center w-full  max-w-[417px]">

<img src={store_check}  alt="confirmation"  className="w-[215px] h-[215px]" />

<div className="flex flex-col gap-[41px] items-center justify-center  text-center mt-[3rem]">
<h1   className=" font-bold text-2xl text-[#333333] font-tekInter">Your Account has been created</h1>
        <p  className=" font-normal text-xl  text-[#4F4F4F] font-tekInter">Please note that you can start posting product
     after 5 working days. This is for verification to take place.</p>
     
<button className="bg-[#1843E2] max-w-[447px] w-full h-[48px] border-[1px] border-[#1843E2] rounded-[10px] px-[8px] py-[18px] 
flex items-center justify-center"
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1  className=" font-semibold text-base font-tekInter text-white">Go to dashboard</h1>
</button>


</div>

    </div>
</section>
  )
}

export default StoreConfirmation

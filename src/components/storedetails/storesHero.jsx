import HeroSideBar from "../heroSideBar"
import detailstores from "/Image/details_store.svg"
import profilepics from "../../../public/Image/details_pics.svg/"
import star from "/Image/Star 6.svg"
import whitestar from "/Image/white_star.svg"
import loveicon from "/Image/Union.svg"


const StoresHero = () => {
  return (
  <section  className="flex pt-[5rem] justify-between  px-[1rem] mt-[1rem]">


    <div className=" flex flex-col">
        {/* image */}
      <div  className="max-w-[973px] relative md:h-[244px] h-[154px]">
        <img  src={detailstores}alt="ahmed_pics" className="max-w-[973px] w-[100%] h-[100%]  rounded-[5px]"  />
      </div>

{/* details about ahmed */}
      <div  className="flex md:mt-[-4rem] mt-[-2rem] relative  mb-[2rem] px-1">
        <div  className="flex  flex-col md:flex-row gap-[2rem]">

            <div className="md:w-[210px] md:h-[210px] w-[84px] h-[84px]">
                <img src={profilepics}  alt="user_pics" className=" rounded-[50%] " />
            </div>

            <div  className="flex flex-col md:flex-row  md:items-center justify-between md:pt-[4rem] w-[100%] lg:w-[715px]">

                <div className="flex flex-col">
                <h1 className="font-tekInter md:text-[32px] font-[700] md:leading-[48px] text-[20px] leading-[24px] text[#000000]">Amed’s Store - Ajah, Lagos</h1>
            <p  className="font-tekInter text-[16px] font-[400] leading-[19px] text-[#4F4F4F] pt-[0.5rem]">No. 13 Odo-Ota Street, Ajah Lagos.</p>

            <div className="flex gap-4 items-center  pt-[0.5rem]">
                
<div  className="flex gap-1">
<img src={star}  alt="star_pics" className=" rounded-[50%] w-[18px] h-[18px]" />
            <span  className="font-tekInter text-[16px] font-[400] leading-[19px] text-[#4F4F4F]">4.2k (380)</span>
</div>

<div>
    <span className="text-[16px] font-[700] leading-[19.36px] font-tekInter text-[#3157E1]"> Store Opens:  8am - 5pm</span>
</div>
       
            </div>
                </div>

                <div  className=" flex flex-row  md:flex-col gap-2 md:gap-0  md:mt-[2rem] mt-[1rem] lg:items-end">
                    <button className="flex items-center justify-center gap-2 mb-2 w-[134px] h-[36px] rounded-[8px] bg-mainBlue text-[#fff] text-[16px] font-[400] leading-[19px]">
                    <img src={whitestar}  alt="star_pics" className=" rounded-[50%] w-[16px] h-[16px]" />   Rate Sure
                    </button>

                    <button className="lg:w-[169px] w-[139px] h-[36px] rounded-[8px] border-[1px] flex gap-2 items-center justify-center bg-[#F9F5FF] border-mainBlue text-mainBlue text-[16px] font-[400] leading-[19px]">
                    <img src={loveicon}  alt="star_pics" className=" rounded-[50%] w-[15px] h-[13px]" />   Save this store
                    </button>
                </div>
 
            </div>

 

        </div>

      </div>


{/* about stores  and text */}
      <div  >
        <h1 className="font-[700] md:text-[24px] text-[20px] leading-[24px] md:leading-[38px] font-tekInter"> About this Store</h1>
    <p className="font-[400] md:text-[16px] text-[14px] leading-[16px] md:leading-[19px] font-tekInter text-[#4F4F4F]">Welcome to Ahmed Store, your one-stop destination for quality and affordability. Founded with a passion for providing the best products and services to our customers, Ahmed Store has grown into 
        a beloved shopping destination for families and individuals alike.</p>

<p className="pt-[2rem] font-[400] md:text-[16px] text-[14px] leading-[16px] md:leading-[19px] font-tekInter text-[#4F4F4F]">At Ahmed Store, we believe in the power of choice and convenience. Our extensive range of products spans across various categories including electronics, home appliances, fashion, beauty, and groceries. We carefully select each item to ensure it meets our high standards of quality, durability, and value for money.</p>
      </div>

    </div>

    <div className="mt-[-2rem]">
    <HeroSideBar />
    </div>
 
  </section>
  )
}

export default StoresHero
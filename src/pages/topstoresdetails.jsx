import Faq from "../components/faq"


import Newsletter from "../components/newsletter"
import ProductLayout from "../components/productLayout"
import Products from "../components/products"
import SecondAds from "../components/secondAds"
import StoresAccessories from "../components/storedetails/storesAccessories"
import TopstoresHero from "../topstoresdetails/TopstoreHero"




// import MapLayout from "../googlemap/mapLayout"

const Topstoresdetails = () => {
  return (
<>

<div  className="overflow-x-hidden relative w-[100%]">

<TopstoresHero />
   {/* trending products */}
   <div className="mt-[2rem]">
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9]  md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
              Trending Products
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <h1 className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </h1>
        </div>

        <div className="bg-[#FFB164]  md:bg-productBg">
          <Products />
        </div>
      </div>
<StoresAccessories />
<ProductLayout />
<SecondAds />
<Faq />
<Newsletter />
</div>

</>
  )
}

export default Topstoresdetails
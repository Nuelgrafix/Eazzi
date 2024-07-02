import Accessories from "../components/accessories";
import Faq from "../components/faq";
import Hero from "../components/hero";
import HeroSwiper from "../components/heroSwiper";
import Newsletter from "../components/newsletter";
import ProductLayout from "../components/productLayout";
import ProductLocation from "../components/productLocation";
import SecondAds from "../components/secondAds";
import SellingStores from "../components/sellingStores";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden relative w-[100%] flex flex-col ">
        <Hero />
        <ProductLocation />
        <Accessories />
        <div className="overflow-x-hidden relative w-[100%] flex flex-col items-center ">
          <HeroSwiper />
        </div>
        <SellingStores />
        <ProductLocation />
        <ProductLayout />
        <SecondAds />
        <Faq />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;

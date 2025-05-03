import React, { useState } from 'react';
import Accessories from "../components/accessories";
import Faq from "../components/faq";
import Hero from "../components/hero";
import HeroSwiper from "../components/heroSwiper";
import Newsletter from "../components/newsletter";
import ProductLayout from "../components/productLayout";
import ProductLocation from "../components/productLocation";
import SecondAds from "../components/secondAds";
import SellingStores from "../components/sellingStores";
import Products from '../components/products';
import HeroSideBar  from "../components/heroSideBar"
const  ProductsPage = () => {
  const [filterKeyword, setFilterKeyword] = useState("");
  const handleFilterSelect = (keyword) => {
    setFilterKeyword(keyword);
  };
  return (
    <>
      <div className="overflow-x-hidden relative w-[100%] flex flex-col ">
        <HeroSideBar setFilterKeyword={setFilterKeyword} />
        <Products/>
        <SecondAds />
        <Faq />
        <Newsletter />
      </div>
    </>
  );
};

export default ProductsPage;

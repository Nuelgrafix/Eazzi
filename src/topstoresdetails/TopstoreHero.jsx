import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios";
import StoresDetailsHero from "../components/storedetails/storedetailshero";
import { Link, useNavigate } from "react-router-dom";
import edit from "/Image/edit.svg";
//import SecondAds from "./secondAds";
//import Newsletter from "./newsletter";
import Newsletter from "../components/newsletter";
import SecondAds from "../components/secondAds";

const TopstoresHero = () => {
  const { id } = useParams();
  const [singleStores, setSingleStores] = useState([]);
  const [storeProducts, setStoreProducts] = useState([]); // Store products

  useEffect(() => {
    const getSingleStore = async () => {
      try {
        const result = await axios.get(
          `https://django-7u8g.onrender.com/api/stores/storeslist/${id}`
        );
        setSingleStores(result.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    const getStoreProducts = async () => {
      try {
        const response = await axios.get(
          `https://django-7u8g.onrender.com/api/products/stores/${id}/products/`
        ); 
        setStoreProducts(response.data);
      } catch (error) {
        console.error("Error fetching store products:", error);
      }
    };

    getSingleStore();
    getStoreProducts();
  }, [id]);

  return (
    <section className="flex flex-col pt-[5rem] px-[1rem] mt-[1rem]">
      {/* Store Details Section */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="max-w-[973px] relative md:h-[244px] h-[154px]">
            <img
              src={singleStores.background_image}
              alt="store_banner"
              className="max-w-[973px] w-full h-full rounded-[5px]"
            />
          </div>
          <div className="flex md:mt-[-4rem] mt-[-2rem] relative mb-[2rem] px-1">
            <div className="flex flex-col md:flex-row gap-[2rem]">
              <div className="md:w-[210px] md:h-[210px] w-[84px] h-[84px] rounded-full overflow-hidden">
                <img
                  src={singleStores.profile_image}
                  alt="store_profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:pt-[4rem] w-full lg:w-[715px]">
                <div className="flex flex-col">
                  <h1 className="font-tekInter md:text-[32px] font-[700] md:leading-[48px] text-[20px] leading-[24px]">
                    {singleStores.store_name} - {singleStores.state}
                  </h1>
                  <p className="text-[16px] font-[400] text-[#4F4F4F] pt-[0.5rem]">
                    {singleStores.store_address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] text-[20px] leading-[24px] md:leading-[38px]">
              About this Store
            </h1>
            <p className="font-[400] pt-[1rem] md:text-[16px] text-[14px] text-[#4F4F4F]">
              {singleStores.about_store}
            </p>
          </div>
        </div>
        <StoresDetailsHero singleStores={singleStores} />
      </div>

      {/* Store Products Section */}
<div className="mt-[3rem]">
<div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[0.5rem]">
          <h1 className="text-[#fff] font-[400] text-[18px] leading-[19px] font-tekInter">
          Available in this Store
          </h1>
          <Link to="/otherstores" className="text-[#fff] font-[600] text-[16px] leading-[24px] flex gap-2 font-tekInter">
            View all stores <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {storeProducts.length > 0 ? (
      storeProducts.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-md p-4">
          <Link to={`/dashboard/about-product/${item.id}`}>
            <div className="h-[250px] w-full rounded-md overflow-hidden">
              <img 
                src={item.image || "default-image.png"} 
                alt="product" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="mt-3">
              <h1 className="text-lg font-bold text-gray-900 truncate">{item.name}</h1>
              <p className="text-gray-800 text-md py-1">₦{item.unit_price || "No Price"}</p>
              <span className={`font-bold ${item.stock ? "text-green-600" : "text-red-500"}`}>
                {item.stock ? `${item.stock} in stock` : "Out of stock"}
              </span>
            </div>
          </Link>
          <button className="w-full bg-[#F9F5FF] border border-[#1843E2] rounded-md mt-3 py-2 text-[#1843E2] font-semibold flex justify-center items-center gap-2">
            Add to cart
          </button>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-gray-600">No products available from this store.</p>
    )}
  </div>
</div>

    </section>
    
  );


};

export default TopstoresHero;

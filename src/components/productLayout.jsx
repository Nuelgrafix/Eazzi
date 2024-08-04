import Products from "./products";
import { Link } from "react-router-dom";

const ProductLayout = () => {
  return (
    <section className="md:p-2 overflow-x-hidden">
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

          <Link to={'/product/see-more'} className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <div className="bg-[#FFB164]  md:bg-productBg">
          <Products />
        </div>
      </div>

      {/* best seller in groceries*/}
      <div className="mt-[2rem]">
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9]  md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
              Best seller in Accessories
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>
        <div className="p-1  bg-mainBlue  md:bg-productBg">
          <Products />
        </div>
      </div>

      {/* most search*/}
      <div className="mt-[2rem]">
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9]  md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
              Most search
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <div className="bg-[#FFB164]  md:bg-productBg">
          <Products />
        </div>
      </div>

      {/* best seller in groceries*/}
      <div className="mt-[2rem]">
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-[#F9F9F9]  md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]">
          <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
            <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
              Best seller in groceries
            </h1>
            <p className="font-[400] text-[12px] leading-[14px] text-secondOrange md:text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" md:text-[#fff] text-mainBlue font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-mainBlue md:text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <div className="p-1  bg-mainBlue  md:bg-productBg">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ProductLayout;

import { Link } from "react-router-dom";
import Products from "./products";

const ProductsList = () => {
  return (
    <section className="p-2">
      {/* trending products */}
      <div>
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
              Trending Products
            </h1>
            <p className="font-[400] text-[16px] leading-[19px] text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px] cursor-pointer flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <Products />
      </div>

      {/* trending products */}
      <div>
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
              Trending Products
            </h1>
            <p className="font-[400] text-[16px] leading-[19px] text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <Products />
      </div>

      {/* best seller in groceries*/}
      <div>
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
              Best seller in Groceries
            </h1>
            <p className="font-[400] text-[16px] leading-[19px] text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <Products />
      </div>
      {/* most search*/}
      <div>
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
              Most search
            </h1>
            <p className="font-[400] text-[16px] leading-[19px] text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <Products />
      </div>

      {/* best seller in groceries*/}
      <div>
        {/* heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
          <div className="flex items-center gap-3">
            <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
              Best seller in Groceries
            </h1>
            <p className="font-[400] text-[16px] leading-[19px] text-[#E0E0E0] font-tekInter">
              Available in these stores
            </p>
          </div>

          <Link to={'/product/see-more'} className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
            See more{" "}
            <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>

        <Products />
      </div>
    </section>
  );
};

export default ProductsList;

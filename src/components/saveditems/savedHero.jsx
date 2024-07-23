import red_sneakers from "/Image/red-sneakers.svg";
import { saveditemsdata } from "../../data/saveditemdata";
import remove from "/Image/trash-2.svg";

import whiteheart from "/Image/white-heart.svg";

import successorder from "/Image/check-circle.svg";
import trackorder from "/Image/truck.svg";
import canceledorder from "/Image/canceledorder.svg";
import menuitems from "/Image/menuitems.svg";

import helpcenter from "/Image/shopping-bag.svg";
import heart from "/Image/heart.svg";
import favorite from "/Image/shop.svg";

import activeorder from "/Image/shop.svg";
import SavedItemModal from "./savedItemModal";
import { useEffect, useRef, useState } from "react";

const SavedHero = () => {
  const [removeitemClick, setRemoveItemClick] = useState(false);
  const removeItemRef = useRef(null);

  const handleRemoveItemOutside = (e) => {
    if (
      removeItemRef.current &&
      !removeItemRef.current.contains(e.tagert.value)
    ) {
      setRemoveItemClick(false);
    }
  };

  useEffect(() => {
    if (removeitemClick) {
      document.addEventListener("mousedown", handleRemoveItemOutside);
    } else {
      document.removeEventListener("mousedown", handleRemoveItemOutside);
    }

    return () => {
      document.addEventListener("mousedown", handleRemoveItemOutside);
    };
  });

  const toggleRemoveItem = () => {
    setRemoveItemClick(!removeitemClick);
  };

  return (
    <section className="flex items-center justify-center lg:mt-[4.5rem] md:mt-[2.5rem] mt-[4.5rem] w-full ">
      <div>
        <div className="flex items-center justify-center w-full">
          {removeitemClick && (
            <div
              className="flex flex-col items-center justify-center w-full h-full"
              ref={removeItemRef}
              onClick={toggleRemoveItem}
            >
              <SavedItemModal />
            </div>
          )}
        </div>
      </div>

      <div
        className="flex flex-col w-full md:flex-row justify-center lg:gap-[20px] bg-[#FFFFFF] md:pt-[5rem] lg:pt-[1rem]
 md:bg-[#F9F9F9] px-[1rem]"
      >
        {/* Side bar content for bigger screens */}
        <div
          className="md:h-[534px] w-[335px] md:flex md:flex-col hidden 
   bg-[#FFFFFF] gap-[32px] md:mt-[1.1rem] pt-[24px] pr-[0px] pb-[48px] pl-[24px]"
          style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
        >
          {/* First div */}
          <div className="flex flex-col items-start border-[2px] border-r-0 border-l-0 border-t-0 border-b-[#E0E0E0]">
            <div className="flex items-center justify-start">
              <div className="bg-[#5075FF] w-[40px] h-[40px] flex items-center justify-center">
                <img
                  src={menuitems}
                  alt="menu items"
                  className="w-[24px] h-[24px] rounded-[3.5px]"
                />
              </div>
              <h1 className="text-[#1843E2] font-tekInter font-[400] text-[19.5px] leading-[24px]">
                Menu<i className="ri-arrow-right-s-line"></i>
                <span>Saved items</span>
              </h1>
            </div>

            <ul className="bg-[#BDBDBD] flex gap-[12px] items-center h-[38px] w-full mt-[1rem]">
              <li className="w-[30px] h-[30px] bg-[#F9F9F9] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={heart}
                  alt="saved products"
                  className="w-[18px] h-[18px] rounded-[3.5px]"
                />
              </li>
              <li>5 Saved Product</li>
            </ul>

            <ul className="flex gap-[12px] items-center h-[38px] w-full mt-[1rem] mb-[0.5rem]">
              <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={favorite}
                  alt="favorite store"
                  className="w-[18px] h-[18px] rounded-[3.5px]"
                />
              </li>
              <li>Favorite store</li>
            </ul>
          </div>

          {/* Second div */}
          <div className="flex flex-col items-start border-[2px] border-r-0 border-l-0 border-t-0 border-b-[#E0E0E0] pb-[1.5rem]">
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center justify-center bg-[#A9BCFF] w-[40px] h-[40px]">
                <img
                  src={helpcenter}
                  alt="help center"
                  className="w-[24px] h-[24px] rounded-[3.5px]"
                />
              </div>
              <h1 className="font-[400] text-[20px] leading-[24px] text-[#333333]">
                My order
              </h1>
            </div>

            {/* Order list */}
            <ul className="flex gap-[12px] items-center h-[38px] w-full py-[1rem] pt-[2rem]">
              <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={activeorder}
                  alt="active order"
                  className="w-[15px] h-[15px] rounded-[3.5px]"
                />
              </li>
              <li>Active order</li>
            </ul>

            <ul className="flex gap-[12px] items-center h-[38px] w-full py-[1rem]">
              <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={successorder}
                  alt="successful order"
                  className="w-[18px] h-[18px] rounded-[3.5px]"
                />
              </li>
              <li>Successful order</li>
            </ul>

            <ul className="flex gap-[12px] items-center h-[38px] w-full py-[1rem]">
              <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={canceledorder}
                  alt="canceled order"
                  className="w-[15px] h-[15px] rounded-[3.5px]"
                />
              </li>
              <li>Canceled order</li>
            </ul>

            <ul className="flex gap-[12px] items-center h-[38px] w-full py-[1rem]">
              <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
                <img
                  src={trackorder}
                  alt="track order"
                  className="w-[15px] h-[15px] rounded-[3.5px]"
                />
              </li>
              <li>Track store</li>
            </ul>
          </div>

          {/* Third div */}
          <div className="flex items-center gap-[8px] mb-[2rem]">
            <div className="flex items-center justify-center bg-[#FF7F00] w-[40px] h-[40px]">
              <img
                src={helpcenter}
                alt="help center"
                className="w-[24px] h-[24px] rounded-[3.5px]"
              />
            </div>
            <h1 className="font-[400] text-[20px] leading-[24px] text-[#333333]">
              Help Center
            </h1>
          </div>
        </div>

        {/* Sidebar for smaller screens */}
        <div className="border-0 h-[135px] w-full md:hidden flex flex-col bg-transparent gap-[12px] mt-[5.2rem]">
          <ul className="flex gap-[12px] items-center h-[38px] w-full md:mt-[1rem]">
            <li className="w-[40px] h-[40px] bg-[#5075FF] flex items-center justify-center">
              <img
                src={whiteheart}
                alt="saved items"
                className="w-[18px] h-[18px] rounded-[3.5px]"
              />
            </li>
            <li className="text-[#1843E2] text-[20px] leading-[24px]">
              Saved items
            </li>
          </ul>

          <ul className="bg-[#BDBDBD] flex gap-[12px] p-[4px] items-center h-[38px] w-full">
            <li className="w-[30px] h-[30px] rounded-[83px] border-[1px] border-[#E0E0E0] flex items-center justify-center">
              <img
                src={heart}
                alt="saved products"
                className="w-[18px] h-[18px] rounded-[3.5px]"
              />
            </li>
            <li className="text-[#F9F9F9] font-[400] text-[16px] leading-[19px]">
              5 Saved Product
            </li>
          </ul>

          <ul className="flex gap-[12px] p-[4px] rounded-[4px] items-center h-[38px] w-full">
            <li className="w-[30px] h-[30px] border-[1px] border-[#E0E0E0] bg-[#F9F9F9] rounded-[83px] flex items-center justify-center">
              <img
                src={favorite}
                alt="favorite store"
                className="w-[18px] h-[18px] rounded-[3.5px]"
              />
            </li>
            <li className="text-[#181818] font-[400] text-[16px] leading-[19px]">
              Favorite store
            </li>
          </ul>
        </div>

        <div className="w-full border-[#E0E0E0] border-[2px] mt-[1rem] md:hidden"></div>

        {/* Main content */}
        <div className="flex flex-col w-full justify-between">
          {saveditemsdata.map((s) => (
            <div
              key={s.id}
              className="p-[8px] flex flex-col lg:flex-row justify-between my-[1rem] w-full bg-[#F9F9F9] md:bg-[#FFFFFF] lg:w-[960px] lg:h-[170px]"
            >
              <div className="flex gap-[20px] lg:gap-[8px] items-center">
                <div>
                  <img
                    src={red_sneakers}
                    alt="product"
                    className="w-[84px] h-[84px] md:w-[154px] md:h-[154px] rounded-[3.5px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                  <h1 className="text-[#4F4F4F] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[400]">
                    {s.productname}
                  </h1>
                  <p className="text-[#3157E1] text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-[700]">
                    {s.storename}
                  </p>
                  <h1 className="text-[#282828] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[700]">
                    {s.price}
                  </h1>
                  <p className="text-[#FF8F21] text-[14px] leading-[16px] md:text-[16px] md:leading-[19px] font-tekInter">
                    {s.productnoumber}
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse lg:flex-col md:justify-between justify-end mt-[1rem]">
                <button
                  to="/signup"
                  className="bg-[#1843E2] border-[1px] border-[#1843E2] rounded-[8px] text-[#FFFFFF] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] text-center w-[158px] h-[40px] md:w-[157px] md:h-[48px]"
                >
                  Buy Now
                </button>

                <ul
                  onClick={toggleRemoveItem}
                  ref={removeItemRef}
                  className="flex cursor-pointer items-center gap-[8px] pl-[2.5rem] w-[158px] md:w-full"
                >
                  <li>
                    <img
                      src={remove}
                      alt="remove"
                      className="w-[16px] h-[16px]"
                    />
                  </li>
                  <li className="text-[#FF7F00]">Remove</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedHero;

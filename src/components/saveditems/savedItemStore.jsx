import heart from "/Image/heart.svg";
import whiteheart from "/Image/white-heart.svg";
import favorite from "/Image/shop.svg";
import menuitems from "/Image/menuitems.svg";

import star from "/Image/Star 6.svg";

import profilepics from "/Image/details_pics.svg";
import { savedstoredata } from "../../data/saveditemdata";
import remove from "/Image/trash-2.svg";

import gps from "/Image/location.png";

import righticon from "../../../public/Image/right-up.svg";

import { useEffect, useRef, useState } from "react";
import SavedStoreModal from "./savedStoreModal";

const SavedItemStore = () => {
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
    <section className="flex flex-col justify-center items-center w-full">
      <div>
        <div className="flex items-center justify-center w-full">
          {removeitemClick && (
            <div
              className="flex flex-col items-center justify-center w-full h-full"
              ref={removeItemRef}
              onClick={toggleRemoveItem}
            >
              <SavedStoreModal />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white w-full px-4 md:px-[1rem] justify-center md:justify-center gap-[10px] lg:gap-[29px]">
        {/* Sidebar for big screens */}
        <div
          className="md:w-[335px] h-auto md:h-[220px]  flex-col bg-white gap-8 mt-4  
     hidden md:flex "
          style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
        >
          {/* Menu items */}
          <div className="flex items-center gap-2">
            <div className="bg-[#5075FF] w-10 h-10 flex items-center justify-center">
              <img
                src={menuitems}
                alt="product_pics"
                className="w-6 h-6 rounded-md"
              />
            </div>
            <h1 className="text-[#1843E2] font-tekInter font-[400] text-[20px] leading-[24px] ">
              Menu<i className="ri-arrow-right-s-line"></i>
              <span>Saved items</span>
            </h1>
          </div>

          <ul className="flex gap-3 items-center h-9 w-full">
            <li className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
              <img
                src={heart}
                alt="product_pics"
                className="w-4 h-4 rounded-md"
              />
            </li>
            <li>5 Saved Product</li>
          </ul>

          <ul className="bg-gray-400 flex gap-3 p-1 rounded-md items-center h-9 w-full">
            <li className="w-7 h-7 bg-gray-100 items-center justify-center rounded-full flex">
              <img
                src={favorite}
                alt="product_pics"
                className="w-4 h-4 rounded-md flex justify-center items-center"
              />
            </li>
            <li className="text-gray-100 text-base leading-5">
              4 Favorite store
            </li>
          </ul>
        </div>

        {/* Sidebar for smaller screens */}
        <div className="w-full md:hidden flex flex-col bg-transparent gap-3">
          <ul className="flex gap-3 items-center h-9 w-full">
            <li className="w-10 h-10 bg-[#5075FF] flex items-center justify-center">
              <img
                src={whiteheart}
                alt="product_pics"
                className="w-4 h-4 rounded-md"
              />
            </li>
            <li className="text-[#1843E2] text-xl leading-6">Saved items</li>
          </ul>

          <ul className="flex gap-3 p-1 items-center h-9 w-full">
            <li className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
              <img
                src={heart}
                alt="product_pics"
                className="w-4 h-4 rounded-md"
              />
            </li>
            <li className="text-gray-800 font-medium text-base leading-5">
              5 Saved Product
            </li>
          </ul>

          <ul className="bg-gray-400 flex gap-3 p-1 rounded-md items-center h-9 w-full">
            <li className="w-7 h-7 border border-gray-300 bg-gray-100 items-center justify-center rounded-full flex">
              <img
                src={favorite}
                alt="product_pics"
                className="w-4 h-4 rounded-md flex justify-center items-center"
              />
            </li>
            <li className="text-gray-800 font-medium text-base leading-5">
              4 Favorite store
            </li>
          </ul>
        </div>

        <div className="w-full border-t border-gray-300 mt-4 md:hidden"></div>

        {/* Store content */}
        <div className="flex flex-col w-full md:w-[500px] lg:w-[960px]">
          {savedstoredata.map((s) => (
            <div
              key={s.id}
              className="p-2 flex flex-col lg:flex-row lg:gap-14 justify-start 
        lg:justify-between my-4 lg:w-full  bg-white border border-gray-300"
            >
              <div className="flex flex-col md:flex-row gap-2 w-full">
                {/* Image */}
                <div className="w-[84px] h-[84px] lg:w-[572px] lg:h-[172px] md:w-[472px] md:h-[132px] border-4 border-white">
                  <img
                    src={profilepics}
                    alt="user_pics"
                    className="w-full h-full rounded-[83px] object-cover"
                  />
                </div>

                {/* Text component */}
                <div className="flex flex-col gap-3">
                  <h1 className="md:text-xl md:leading-9 text-xl leading-6 text-[#3157E1] font-bold">
                    {s.storename}
                  </h1>
                  <div className="flex gap-4 items-center">
                    <div>
                      <span className="text-base font-bold leading-5 font-tekInter text-gray-800">
                        Store Opens: 8am - 5pm
                      </span>
                    </div>

                    <div className="flex gap-1">
                      <img
                        src={star}
                        alt="star_pics"
                        className="rounded-full w-4 h-4"
                      />
                      <span className="font-tekInter text-base font-medium leading-5 text-gray-600">
                        4.2k (380)
                      </span>
                    </div>
                  </div>

                  <h1 className="md:text-[16px] md:leading-[19px] text-[14px] leading-[16px] text-[#333333] w-full font-[400] font-tekInter">
                    {s.productname}
                  </h1>

                  <ul className="flex items-center  gap-2 w-full">
                    <li className="w-10 bg-gray-100 h-10 rounded-md border border-gray-300 flex items-center justify-center">
                      <img
                        src={gps}
                        alt="product_pics"
                        className="md:w-6 md:h-6"
                      />
                    </li>
                    <li className="md:text-[16px] md:leading-[19px] text-[14px] leading-[16px] font-tekInter text-[#4F4F4F] ">
                      {s.address}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Remove item and sign up */}
              <div className="flex flex-row-reverse md:flex-row lg:flex-col lg:justify-end justify-end pt-[1rem] lg:pt-0">
                <button
                  to="/signup"
                  className="md:pt-3 pt-2 md:pl-5 pl-4 md:pb-3 pb-2 md:pr-5 pr-4 bg-[#1843E2] border border-[#1843E2] flex items-center justify-center gap-2 rounded-md text-white text-base leading-6 text-center w-44 h-10 md:w-46 md:h-11"
                >
                  <img
                    src={righticon}
                    alt="direction_pics"
                    className="md:w-2.5 md:h-2.5 w-2 h-2"
                  />
                  Enter this store
                </button>
                <ul
                  onClick={toggleRemoveItem}
                  ref={removeItemRef}
                  className="flex items-center cursor-pointer w-40 gap-2 md:ml-[3rem] lg:mt-16 lg:mb-2"
                >
                  <li>
                    <img
                      src={remove}
                      alt="remove_pics"
                      className="nd:w-6 md:h-6 w-4 h-4"
                    />
                  </li>
                  <li className="text-orange-500">Remove</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedItemStore;

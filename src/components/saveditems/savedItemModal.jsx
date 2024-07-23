import red_sneakers from "/Image/red-sneakers.svg";

import whiteremove from "/Image/whitetrash.svg";
import cancel from "/Image/Ocancel.svg";

const SavedItemModal = () => {
  return (
    <section
      className="fixed inset-0 flex flex-col z-[1000] items-center justify-center md:w-[90%] h-[60%] md:top-[20%] 
    lg:h-[80%] lg:top-[12%] md:left-[5%] w-[100%] top-[20%]  rounded-[20px]
      bg-[#FFFFFF]
"
      style={{ boxShadow: "-1px 15px 12px 0px #1843E21A" }}
    >
      {/* Heading */}
      <h1 className="md:text-[36px] md:leading-[43px] text-center text-[20px] leading-[24px] text-[#4F4F4F] ">
        Are you sure you want to remove this item from saved?
      </h1>

      <div
        className="p-[8px] flex  flex-col justify-center items-center 
              w-[100%]lg:w-[960px] lg:h-[170px] my-[2rem]"
      >
        <div className="flex gap-[20px] md:gap-[24px] items-center">
          <div>
            <img
              src={red_sneakers}
              alt="product_pics"
              className=" w-[84px] h-[84px] rounded-[3.5px]"
            />
          </div>
          {/* Text component */}

          <div className="flex flex-col gap-[8px] md:gap-[12px]">
            <h1 className=" text-[16px] leading-[19px] text-[#4F4F4F] font-[400]">
              Red Nike sneaker Size 40
            </h1>
            <p className="text-[16px] leading-[19px] text-[#3157E1] font-[700]">
              From Ahmed Store
            </p>
            <h1 className="font-[700]  text-[16px] leading-[19px] text-[#282828]">
              #2570
            </h1>
            <p className="text-[14px] leading-[16px] font-tekInter text-[#FF8F21]">
              7 Remaining for sale
            </p>
          </div>
        </div>

        {/* remove item and sign up */}
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between justify-end gap-[32px] mt-[3rem]">
          <button
            to="/signup"
            className="md:pt-[12px] flex items-center justify-center gap-[8px] pt-[10px] md:pl-[20px] pl-[16px] md:pb-[12px] pb-[10px] md:pr-[20px] pr-[16px] bg-[#FEF3F2] 
    border-[1px] border-[#FF7F00]  rounded-[8px] text-[#FF7F00] text-[16px] leading-[24px] text-center w-[210px] h-[48px] cursor-pointer"
          >
            <img
              src={cancel}
              alt="remove_pics"
              className="nd:w-[] md:h-[] w-[] h-[]"
            />
            No cancel
          </button>

          <ul className="flex items-center justify-center gap-[8px] rounded-[8px]  w-[210px] h-[48px]  bg-[#FF7F00] cursor-pointer">
            <li>
              <img
                src={whiteremove}
                alt="remove_pics"
                className="nd:w-[] md:h-[] w-[] h-[]"
              />
            </li>
            <li className="text-[#FFFFFF] text-[16px] leading-[24px]">
              Yes Remove
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SavedItemModal;

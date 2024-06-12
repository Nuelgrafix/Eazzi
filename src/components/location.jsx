import store from "../../public/Image/store.png";
import stores from "../../public/Image/stores.png";

const Location = () => {
  return (
    <section>
      {/* heading */}
      <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[1rem]">
        <div className="flex items-center gap-3">
          <h1 className="text-[#fff] font-[400] text-[24px] leading-[36px]  font-tekInter">
            Top selling stores
          </h1>
        </div>

        <h1 className=" text-[#fff] p-[2rem] font-[600] text-[16px] leading-[24px]  flex gap-2 font-tekInter ">
          See more{" "}
          <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
        </h1>
      </div>

      {/* body */}
      <div className="flex  justify-center gap-3 pb-[3rem] p-[3rem]">
        {/* first box */}
        <div className=" flex-col md:w-[600px] w-[100%] h-[535px] bg-[#E0E0E0] p-[1rem]">
          <img
            src={store}
            alt="stores-pics"
            className="md:w-[630px] w-[100%] h-[357px]"
          />
          <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter pt-[1rem]">
            Top selling stores
          </h1>
          <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
            No 10 Lekki phase 1
          </p>

          <div className="flex justify-between items-center ">
            <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter">
              <i className="ri-star-s-line  text-[11px]">
                {" "}
                4.2 (380) Opens; 8am - 8pm
              </i>
            </span>
            <button
              className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
            >
              Enter Store
            </button>
          </div>
        </div>

        {/* second box */}

        <div className="flex-col gap-3">
          <div className=" flex justify-around items-center md:w-[600px] w-[100%] h-[252px]  bg-[#E0E0E0] mb-[2rem]">
            <img
              src={stores}
              alt="stores-pics"
              className="md:w-[269px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start ">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
                Top selling stores
              </h1>
              <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
                No 10 Lekki phase 1
              </p>
              <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter">
                <i className="ri-star-s-line  text-[11px]">
                  {" "}
                  4.2 (380) Opens; 8am - 8pm
                </i>
              </span>
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Enter Store
              </button>
            </div>
          </div>

          <div className=" flex justify-around md:w-[600px] w-[100%] h-[252px] items-center  bg-[#E0E0E0]">
            <img
              src={stores}
              alt="stores-pics"
              className="md:w-[269px] w-[100%] h-[217px]  rounded-[5px]"
            />

            <div className="flex  flex-col items-start">
              <h1 className="text-[#181818] font-[700] text-[24px] leading-[36px]  font-tekInter">
                Top selling stores
              </h1>
              <p className="text-[#181818] font-[400] text-[20px] leading-[36px]  font-tekInter">
                No 10 Lekki phase 1
              </p>
              <span className="text-[#333333] font-[400] text-[16px] leading-[19px]  font-tekInter">
                <i className="ri-star-s-line  text-[11px]">
                  {" "}
                  4.2 (380) Opens; 8am - 8pm
                </i>
              </span>
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Enter Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

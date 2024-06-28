import bag from "/Image/bag1.svg";
import bag1 from "/Image/bag2.svg";
import bag2 from "/Image/bag3.svg";


const StoresAccessories = () => {
  return (
    <section className="mb-[2rem]">
      <div className="md:bg-[#A9BCFF]  bg-mainBlue relative p-[0.5rem]">
        {/* desktop view */}
        <div className="md:flex md:flex-wrap hidden gap-2 justify-between items-center  p-2 h-[580px] md:h-[100%]">
          {/* first box */}
          <div className="w-[400px] h-[522px] flex flex-col bg-[#f9f9f9] p-2">
            <div className="flex justify-between items-center">
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Bags with swag
              </button>
              <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                See more <i className="ri-arrow-right-s-line"></i>
              </h1>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag1}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
          </div>

          {/* second box */}
          <div className="w-[400px] h-[522px] flex flex-col  ">
            {/* second sub box */}
            <div className="flex flex-col bg-[#f9f9f9]  h-[253px] p-2">
              <div className="flex justify-between items-center">
                <button
                  className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
    items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
                >
                  Bags with swag
                </button>
                <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  See more <i className="ri-arrow-right-s-line"></i>
                </h1>
              </div>

              {/* mini box */}
              <div className="flex gap-2 pt-[2rem]">
                <div className="w-[129px] h-[151px] ">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>

                <div className="w-[129px] h-[151px] p-1">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>

                <div className="w-[129px] h-[151px] p-1">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#f9f9f9] mt-[1.5rem]  h-[253px] p-2">
              <div className="flex justify-between items-center">
                <button
                  className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
                >
                  Bags with swag
                </button>
                <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  See more <i className="ri-arrow-right-s-line"></i>
                </h1>
              </div>

              {/* mini box */}
              <div className="flex gap-2 pt-[2rem]">
                <div className="w-[129px] h-[151px] ">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>

                <div className="w-[129px] h-[151px] p-1">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>

                <div className="w-[129px] h-[151px] p-1">
                  <div className="w-[105px] h-[115px] bg-[#fff]">
                    <img
                      src={bag}
                      alt="bags_pics"
                      className="w-[105px] h-[115px]"
                    />
                  </div>
                  <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[0.5rem]">
                    Product Name
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* third  box */}
          <div className="w-[400px] h-[522px] flex flex-col bg-[#f9f9f9] p-2">
            <div className="flex justify-between items-center">
              <button
                className="w-[115px] h-[35px] text-[#F9F5FF] rounded-[8px] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Bags with swag
              </button>
              <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                See more <i className="ri-arrow-right-s-line"></i>
              </h1>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag1}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[176px] h-[174px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[16px] leading-[19px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* desktop view ends here */}

        {/* mobileview starts here */}
        <div className="md:hidden flex  flex-col gap-2 justify-between items-center  p-2 ">
          {/* first box */}
          <div className="w-[100%] flex flex-col bg-[#f9f9f9] p-2">
            <div className="flex justify-between items-center">
              <button
                className="w-[125px] h-[33px] text-[#F9F5FF] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Bags with swag
              </button>
              <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                See more <i className="ri-arrow-right-s-line"></i>
              </h1>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag1}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px]  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
          </div>

          {/* second box */}
          <div className="w-[100%] flex flex-col bg-[#f9f9f9] p-2">
            <div className="flex justify-between items-center">
              <button
                className="w-[125px] h-[33px] text-[#F9F5FF] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Bags with swag
              </button>
              <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                See more
              </h1>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
          </div>

          {/* third box */}
          <div className="w-[100%] flex flex-col bg-[#f9f9f9] p-2">
            <div className="flex justify-between items-center">
              <button
                className="w-[125px] h-[33px] text-[#F9F5FF] font-[400]
items-center text-center bg-mainBlue text-[16px] mt-[1rem]"
              >
                Bags with swag
              </button>
              <h1 className="text-mainBlue font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                See more <i className="ri-arrow-right-s-line"></i>
              </h1>
            </div>

            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px] text-center font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>
            </div>
            <div className="flex justify-between pt-[1rem]">
              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px] text-center  font-tekInter pt-[1rem]">
                  Product Name
                </h1>
              </div>

              <div>
                <div className="w-[158px] h-[203px] bg-[#fff]">
                  <img
                    src={bag2}
                    alt="bags_pics"
                    className="w-[158px] h-[158px]"
                  />
                </div>
                <h1 className="text-[#181818] font-[400] text-[14px] leading-[16px]  font-tekInter pt-[1rem] text-center">
                  Product Name
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* mobile view ends here */}
      </div>
    </section>
  )
}

export default StoresAccessories
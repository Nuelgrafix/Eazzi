import { Link } from "react-router-dom";
import { shoedata } from "../data/search";
import { useState, useEffect, useRef } from "react";
import icon from "../assets/ic.png";
import iconBlue from "../assets/icBlue.png";
import speaker from "../assets/speaker.png";
import speakerBlue from "../assets/speakerBlue.png";
import broom from "../assets/broom.png";
import broomBlue from "../assets/broomBlue.png";
import game from "../assets/game.png";
import gameBlue from "../assets/gameBlue.png";
import menu from "../assets/menu.png";
import menuBlue from "../assets/menuBlue.png";

const Search = () => {
  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  // Function to handle popup visibility toggle
  const togglePopup = (index) => {
    setActivePopup((prev) => (prev === index ? null : index));
  };

  // Close the popup if clicked outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActivePopup(null);
    }
  };

  useEffect(() => {
    if (activePopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  return (
    <section className="relative lg:my-[5rem] md:my-[10rem] md:mb-[5rem]  flex fflex-col items-center justify-center">
      <div className="flex lg:flex-row flex-col p-[10px]  gap-[8px] md:px-[2rem] ">
        <div className="flex flex-col mt-[8rem] md:mt-0 ">
          {/* first Box */}

          <div className="flex flex-col  lg:w-[319px] lg:h-[382px] rounded-[8px]  gap-[4px] ">
            <div
              className="bg-[#F9F9F9] w-full md:pt-[8px] md:pr-[24px]  gap-[4px] md:pb-[8px] md:pl-[24px]
      h-[56px] md:h-[75px] pb-[8px]
      pt-[8px] pl-[24px]"
            >
              <span className="text-[#282828] font-tekInter font-[400] text-[16px] leading-[19px] md:text-[24px] md:leading-[36px]">
                Searched
              </span>
              <h1 className="text-[#333333] font-tekInter font-[700] text-[16px] leading-[19px] md:text-[24px] md:leading-[36px]">
                Sneaker wihtout Lacing
              </h1>
            </div>

            <ul
              className="flex flex-col bg-[#FFFFFF] gap-[20px]  w-full h-full 
 md:pt-[21px] md:pr-[24px]  md:pb-[21px] md:pl-[24px]  pt-[21px] pl-[24px] pb-[21px]"
              style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
            >
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#5075FF] "
                >
                  Recent Searches
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  Pinky Hand Bag
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818]"
                >
                  32 Inch Hisense Tv
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  A plate of rice and stew
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  Headset
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  Anti-Blue ray Glasses
                </Link>
              </li>
            </ul>
          </div>

          {/* second box */}

          <div className="lg:flex flex-col hidden md:w-[290px]  lg:w-[319px] lg:h-[382px] rounded-[8px]  gap-[4px]  my-[4rem]">
            <div className="bg-[#F9F9F9] w-full md:pt-[8px] md:pr-[24px]  md:pb-[8px] md:pl-[24px]">
              <span className="text-[#282828] font-tekInter font-[400] md:text-[16px] md:leading-[19px]">
                Quick search with
              </span>
              <h1 className="text-[#333333] font-tekInter font-[700] md:text-[24px] md:leading-[36px]">
                Category
              </h1>
            </div>

            <ul
              className="md:flex hidden flex-col bg-[#FFFFFF] gap-[20px]  w-full h-full 
 md:pt-[21px] md:pr-[24px]  md:pb-[21px] md:pl-[24px]"
              style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
            >
              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#5075FF] "
                >
                  <div
                    className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2]
             transition duration-100  group cursor-pointer"
                    onClick={() => togglePopup(1)}
                  >
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={icon}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                      <img
                        src={iconBlue}
                        className="w-[18px] h-[18px] hidden group-hover:block"
                        alt="Hover"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Groceries
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  {" "}
                  <div
                    className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2]
             transition duration-100 group cursor-pointer"
                    onClick={() => togglePopup(2)}
                  >
                    <div
                      className="flex items-center justify-center w-[30px] h-[30px] 
            rounded-[83.333px] border-[0.833px] border-[#E0E0E0]"
                    >
                      <img
                        src={speaker}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                      <img
                        src={speakerBlue}
                        className="w-[18px] h-[18px] hidden group-hover:block"
                        alt="Hover"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Appliances
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818]"
                >
                  {" "}
                  <div
                    className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition
             duration-100  group cursor-pointer"
                    onClick={() => togglePopup(3)}
                  >
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={broom}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                      <img
                        src={broomBlue}
                        className="w-[18px] h-[18px] hidden group-hover:block"
                        alt="Hover"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Household cleaning
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  {" "}
                  <div
                    className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2]
             transition duration-100  group cursor-pointer"
                    onClick={() => togglePopup(4)}
                  >
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={game}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                      <img
                        src={gameBlue}
                        className="w-[18px] h-[18px] hidden group-hover:block"
                        alt="Hover"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Electronics
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="font-tekInter md:text-[16px] md:leading-[19px] font-[700] text-[#181818] "
                >
                  {" "}
                  <div
                    className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition 
            duration-100  group cursor-pointer"
                    onClick={() => togglePopup(5)}
                  >
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={menu}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                      <img
                        src={menuBlue}
                        className="w-[18px] h-[18px] hidden group-hover:block"
                        alt="Hover"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Other category
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* List Product */}
        <div className="grid lg:grid-cols-4 grid-cols-3 w-[100%] lg:w-[960px]  md:grid-cols-3 relative mx-auto md:gap-4  mt-[2rem] lg:mt-0">
          {shoedata.map((item) => (
            <div
              key={item.id}
              className="gap-[4px] md:gap-[12px] rounded-[5px] md:w-[223px] w-[117px] h-[230px] md:h-[403px] items-center justify-center"
            >
              <Link to={`/product/${item.id}`}>
                <div className="bg-[#fff] px-2 md:h-[403px] mr-[2rem]  md:w-[220px] w-[200px] rounded-[8px] ">
                  <img
                    src={item.pics}
                    alt="trending_pics"
                    className="md:w-[200px] md:h-[220px] w-[109px] h-[106px]  rounded-[5px]"
                  />
                  <h1
                    className=" font-[700] md:text-[20px] md:leading-[24px]
               text-[14px] leading-[16px] font-tekInter pt-[0.4rem]"
                  >
                    {item.title}
                  </h1>
                  <p
                    className="text-[#282828] font-[400] md:text-[20px]
               md:leading-[24px] text-[14px] leading-[16px]  pt-[0.4rem]
               md:pt-[1rem] font-tekInter"
                  >
                    {item.price}
                  </p>

                  <p
                    className="text-fifthOrange font-[700] md:text-[20px] md:leading-[24px] text-[14px] 
              leading-[16px] md:pt-[1rem] pt-[0.4rem] font-tekInter"
                  >
                    {item.stock}
                  </p>

                  <button
                    className="md:w-[125px] md:h-[44px] w-[106px] h-[33px] bg-[#F9F5FF]  rounded-[8px]
                 hover:bg-mainBlue hover:text-[#fff] mt-[0.4rem]
                 hover:transform-x-[10px]
    items-center text-center text-mainBlue text-[16px] md:mt-[1rem]"
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;

import { useState } from "react";
import { faqdata } from "../data/faqdata";

import PropTypes from "prop-types";

const Faq = () => {
  return (
    <section className="mb-[5rem] md:mb-[7rem] relative">
      {/* heading */}
      <div className="max-w-[100%] h-[73px] bg-mainBlue border-b-4 border-secondOrange"></div>

      <div className="text-center pt-[3rem] pb-[1rem]">
        <h1 className="font-[700] font-tekInter text-[36px] leading-[48px]">
          Frequently Asked Questions{" "}
        </h1>
      </div>

      {/* mapping data i stored */}
      <div>
        {faqdata.map((questions) => (
          <FaqItem key={questions.id} {...questions} />
        ))}
      </div>
    </section>
  );
};

// created a different component
const FaqItem = ({ info, title, number }) => {
  const [faqClick, setFaqClick] = useState(false);

  const handleFaqClick = () => {
    setFaqClick(!faqClick);
  };

  return (
    <div className="flex-col  mt-[2rem] mb-[2rem] w-[90%]   mx-[auto]  relative items-center justify-center">
      <div
        className="flex justify-between items-center cursor-pointer  w-[100%] rounded-[8px] bg-[#F9F9F9] p-2 px-[4rem]"
        onClick={handleFaqClick}
      >

        <div
          className="rounded-[50%] text-mainOrange w-[61px] h-[61px]
                 bg-[#ffffff] items-center justify-center hidden md:flex"
        >
          <h1 className="font-[700] text-thirdOrange text-[20px]  ">
            {number}
          </h1>
        </div>

        {title}

        <div>
{faqClick? (<i className="ri-arrow-down-s-line"></i>) : (<i className="ri-arrow-up-s-line"></i>)}
        </div>
      </div>

      <div
        className={`p-2 px-[4rem] transition-all duration-500 transform ease-in
                 ${
                   faqClick
                     ? "max-h-0 opacity-0"
                     : "md:max-h-[51px] max-h-[300px] opacity-100 mb-[4rem]"
                 }`}
      >
        <div className="transition-opacity duration-500  text-[16px">
          {info}
        </div>
      </div>
    </div>
  );
};

export default Faq;

FaqItem.propTypes = {
  info: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

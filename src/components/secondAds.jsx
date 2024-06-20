const SecondAds = () => {
  return (
    <section
      className="mb-[2rem] mt-[2rem] max-w-[100%]  md:h-[410px] h-[207px] 
  relative  bg-cover bg-right  bg-[url('/Image/artboard.png')] items-center justify-start flex  overflow-x-hidden"
    >
      <div
        className=" p-[1rem] flex flex-col  relative  text-start  justify-start  md:pl-[3rem]
      md:w-[507px] md:h-[171px] w-[70%]"
      >
        <h1 className=" md:text-[36px] text-[16px] font-[700] md:leading-[43px] leading-[19px] text-[#fff]">
          Sign up with us today and keep track of your order
        </h1>
        <p className="pt-[1rem] pb-[1.5rem] w-[85%] md:text-[20px] text-[16px] font-[400] md:leading-[24px] leading-[19px] text-[#fff]">
          Create account today and enjoy a pleasant shopping eperience
        </p>

        <button className="bg-[#F9F5FF] w-[113px] h-[36px] flex justify-center  text-center items-center rounded-[8px]  text-mainBlue shadow-locationShad">
          Sign up Now
        </button>
      </div>
    </section>
  );
};

export default SecondAds;

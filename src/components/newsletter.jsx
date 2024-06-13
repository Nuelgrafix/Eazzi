const Newsletter = () => {
  return (
    <section className="p-1 ">
      <div className="flex-col items-center justify-center text-center w-[100%] border-t-2 border-gray-200">
        <h1 className="pt-[3rem] text-[20px] font-[400] leaing-[20px] text-[#000000]">
          Subscribe for our newsletter to get latest product updates and
          information
        </h1>

        <div className="flex  flex-col md:flex-row gap-3 items-center justify-center pt-[2rem] pb-[2rem]">
          <input
            type="email"
            placeholder="Email"
            className="md:w-[389px] w-[100%]  h-[44px] rounded-[8px] border-2 border-gray outline-none px-2"
          />
          <button className="text-[#fff] w-[91px] h-[44px] rounded-[8px] bg-secondOrange">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

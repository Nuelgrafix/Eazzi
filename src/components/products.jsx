import { productdata } from "../data/product";

const Products = () => {
  return (
    <section className="bg-productBg">
      {/* mapping through */}
      <div className="grid lg:grid-cols-6  w-[100%] grid-cols-1 md:grid-cols-3 relative   mx-auto gap-4 py-[3rem] ">
        {productdata.map((item) => (
          <div
            key={item.id}
            className="gap-3   px-2 top-0 rounded-[5px] w-[223px]  items-center justify-center"
          >
            <div className="bg-[#fff] px-2 h-[403px] mr-[2rem] rounded-[8px]">
              <img
                src={item.pics}
                alt="trending_pics"
                className="w-[200px] h-[220px] "
              />
              <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
                {item.title}
              </h1>
              <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                {item.price}
              </p>
              <span className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                {item.stock}
              </span>
              <button
                className="w-[125px] h-[44px] bg-[#F9F5FF] rounded-[8px] 
    items-center text-center text-mainBlue text-[16px] mt-[1rem]"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

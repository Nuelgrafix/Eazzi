import Slider from "react-slick";
import { Link } from "react-router-dom";
import star from "/Image/Star 6.svg";
import useGetStores from "../storedashboard/storedashboardhooks/useGetStore";

const SellingStores = () => {
  const { stores } = useGetStores();
  const topStores = stores.slice(0, 3);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
  };

  return (
    <section className="overflow-hidden">
      {/* Stores around my location */}
      <div>
        {/* Heading */}
        <div className="max-w-[100%] flex justify-between items-center h-[65px] bg-secondOrange border-b-4 border-mainBlue px-[1rem]">
          <h1 className="text-white font-medium text-[18px] sm:text-[20px] flex gap-1">
            Stores around <span>my location</span>
          </h1>

          <Link to="/otherstores" className="text-white font-semibold text-[16px] flex items-center gap-1">
            View all stores <i className="ri-arrow-right-s-line text-[18px]"></i>
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-6 py-8">
          {topStores.map((s, index) => (
            <div
              key={s.id}
              className={`bg-[#E0E0E0] p-4 rounded-lg shadow-md flex ${
                index === 0 ? "flex-col md:w-[450px] h-[480px]" : "lg:w-[420px] sm:w-[350px] h-[220px]"
              }`}
            >
              <img
                src={s.profile_image}
                alt="stores-pics"
                className={`rounded-lg object-cover ${
                  index === 0 ? "w-full h-[250px]" : "lg:w-[160px] sm:w-[140px] h-[180px]"
                }`}
              />
              <div className="flex flex-col pl-3 justify-between">
                <h1 className="text-[#181818] font-bold text-[18px] sm:text-[20px]">{s.store_name}</h1>
                <p className="text-[#555] text-[14px]">{s.store_address}</p>
                <span className="text-[#333] text-[14px] flex gap-1 items-center">
                  <img src={star} alt="star_pics" className="w-[12px] h-[12px]" />
                  {s.rating ? `${s.rating} (${s.review_count})` : "No ratings yet"} | {s.working_hours}
                </span>
                <Link to={`/topstoresdetails/${s.id}`} className="w-[100px] mt-2">
                  <button className="w-full h-[30px] text-white bg-mainBlue text-[14px] rounded-lg">
                    Enter Store
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full px-4 py-4">
          <Slider {...settings}>
            {stores.map((s) => (
              <div key={s.id} className="flex flex-col w-[230px] bg-[#F9F9F9] shadow-md p-4 rounded-lg border border-[#A9BCFF]">
                <img src={s.profile_image} alt="stores-pics" className="w-full h-[180px] rounded-lg object-cover" />
                <h1 className="text-[#181818] font-bold text-[18px] pt-3">{s.store_name}</h1>
                <p className="text-[#555] text-[14px]">{s.store_address}</p>
                <span className="text-[#333] text-[14px] flex gap-1 items-center">
                  <img src={star} alt="star_pics" className="w-[12px] h-[12px]" />
                  {s.rating ? `${s.rating} (${s.review_count})` : "No ratings yet"} | {s.working_hours}
                </span>
                <Link to={`/topstoresdetails/${s.id}`} className="w-full mt-2">
                  <button className="w-full h-[30px] text-white bg-mainBlue text-[14px] rounded-lg">
                    Enter Store
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SellingStores;

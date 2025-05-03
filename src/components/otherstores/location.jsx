import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "./map";
import storeImg from "/Image/store.png";
import star from "/Image/Star 6.svg";

const Location = () => {
  const [mapClick, setMapClick] = useState(false);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("https://django-7u8g.onrender.com/api/stores/storeslist");
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);

  return (
    <section>
      {mapClick && (
        <div className="flex flex-col" onClick={() => setMapClick(false)}>
          <Map />
        </div>
      )}
      <div className="max-w-full flex justify-between items-center h-[73px] md:bg-mainBlue bg-[#F9F9F9] border-b-4 border-secondOrange px-4">
        <h1 className="md:text-[#fff] text-[#181818] font-[400] text-[18px]">
          Stores found near you
        </h1>
        <button className="md:bg-[#f9f5ff] text-mainBlue font-[600] text-[14px]" onClick={() => setMapClick(true)}>
          <i className="ri-map-pin-line text-secondOrange text-[16px]"></i> Change Location
        </button>
      </div>
      <h1 className="font-[400] bg-[#A9BCFF] md:text-[32px] text-[18px] text-[#FF7F00] px-1">
        5 - 10km Away from your current Location
      </h1>
      <div className="p-4">
        {stores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <div key={index} className="flex flex-col items-center bg-[#E0E0E0] p-4 rounded-lg shadow-md">
                <img
                  src={store.profile_image || storeImg}
                  alt="store"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <h1 className="text-[#181818] font-[700] text-[20px] mt-3">{store.store_name}</h1>
                <p className="text-[#181818] font-[400] text-[16px]">{store.store_address}, {store.street}-{store.city}</p>
                <span className="text-[#333333] font-[400] text-[14px] flex gap-1 items-center">
                  <img src={star} alt="star" className="w-[13px] h-[13px]" />
                  {store.rating} ({store.reviews}) Opens: {store.working_hours}
                </span>
                <Link to={`/storesdetails/${store.id}`} className="mt-3">
                  <button className="w-[115px] h-[35px] text-[#F9F5FF] bg-mainBlue rounded-lg">
                    Enter Store
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading stores...</p>
        )}
      </div>
    </section>
  );
};

export default Location;

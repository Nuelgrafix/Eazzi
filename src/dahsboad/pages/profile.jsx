import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";
import star from "/Image/Star 6.svg";
import searchIcon from "/Image/search.svg";
import manager from "/Image/manager.svg";
import notification from "/Image/notification.svg";
import Footerimg from "/Image/footer-dahsboard.svg";
import whiteEdit from "/Image/whiteEdit.svg";

const Profile = () => {
  const [showSide, setShowSide] = useState(false);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { storeId } = useParams();

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const authToken = JSON.parse(localStorage.getItem("token")) || null;
        if (!authToken) {
          setError("User not logged in or missing token.");
          setLoading(false);
          return;
        }

        const storeResponse = await axios.get(
          "https://django-7u8g.onrender.com/api/stores/storeslist/",
          { headers: { Authorization: `Token ${authToken}` } }
        );
        const storeData = storeResponse.data.find(store => store.id.toString() === storeId);
        
        if (!storeData) {
          setError("Store details not found.");
          setLoading(false);
          return;
        }
        
        setStore(storeData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching store data:", error);
        setError("Error fetching store data.");
        setLoading(false);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  return (
    <section className="flex w-full bg-[#F8F8F8] flex-col md:flex-row">
      <div className="md:hidden">
        <button
          onClick={() => setShowSide(!showSide)}
          className="fixed right-4 top-5 z-50 bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow-md"
        >
          {showSide ? <i className="ri-close-line text-[#1843E2]"></i> : <i className="ri-menu-2-line text-[#1843E2]"></i>}
        </button>
        <div className={`fixed z-40 h-full transition-all duration-300 ${showSide ? "w-56" : "w-0"} bg-[#1843E2] overflow-y-auto`}>
          {showSide && <MobileSideDashboard />}
        </div>
      </div>

      <div className="hidden md:block w-52 bg-[#1843E2]">
        <SidebarDashboard storeId={storeId} />
      </div>

      <div className="flex flex-col w-full md:w-[82%] py-4 px-2 md:px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#5075FF] text-center md:text-left">Profile</h1>

        {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {store && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6 relative flex flex-col items-center md:items-start">
            <div className="w-full h-40 md:h-60 rounded-lg overflow-hidden">
              <img src={store.background_image} alt="store background" className="w-full h-full object-cover" />
            </div>

            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg mt-[-40px] md:mt-[-50px]">
              <img src={store.profile_image} alt="store profile" className="w-full h-full rounded-full object-cover" />
            </div>

            <div className="text-center md:text-left mt-4">
              <h1 className="text-lg md:text-2xl font-bold">{store.store_name} - {store.city}, {store.state}</h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">{store.store_address}, {store.street}</p>
              <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <img src={star} alt="rating" className="w-5 h-5" />
                  <span className="text-gray-700 text-sm">{store.rating} ({store.reviews} reviews)</span>
                </div>
                <span className="text-mainBlue font-semibold text-sm">Store Opens: {store.working_hours}</span>
              </div>
            </div>

            <Link to={`/store/edit-profile/${storeId}`} className="bg-mainBlue text-white px-6 py-2 rounded-lg flex items-center gap-2 mt-4">
              <img src={whiteEdit} alt="edit" className="w-5 h-5" />
              Edit Profile
            </Link>

            <div className="mt-6 text-center md:text-left">
              <h1 className="font-bold text-lg md:text-2xl">About this Store</h1>
              <p className="text-gray-600 text-sm md:text-base mt-2">{store.about_store || "No description available for this store."}</p>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-6">
          <img src={Footerimg} alt="footer logo" className="w-24 h-24" />
        </div>
      </div>
    </section>
  );
};

export default Profile;

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
import whiteEdit from "../../../public/Image/whiteEdit.svg";

const ProfileMobile = () => {
  const [showSide, setShowSide] = useState(false);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { storeId } = useParams();

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const authToken = localStorage.getItem("token");
        if (!authToken) {
          setError("User not logged in or missing token.");
          setLoading(false);
          return;
        }
        
        const storeResponse = await axios.get(`https://django-7u8g.onrender.com/api/stores/storeslist/`, {
          headers: { Authorization: `Token ${authToken}` },
        });
        
        const storeData = storeResponse.data.find(store => store.id.toString() === storeId);
        if (!storeData) {
          setError("Store details not found.");
          setLoading(false);
          return;
        }
        setStore(storeData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching store data.");
        setLoading(false);
      }
    };
    fetchStoreDetails();
  }, [storeId]);

  return (
    <section className="flex flex-col md:flex-row w-full bg-[#F8F8F8]">
      <button
        onClick={() => setShowSide(!showSide)}
        className="md:hidden fixed right-4 top-5 text-2xl bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow-md z-50"
      >
        {showSide ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
      </button>
      
      {showSide && (
        <div className="fixed inset-0 bg-[#1843E2] z-40 overflow-y-auto transition-all duration-300">
          <MobileSideDashboard />
        </div>
      )}
      
      <div className="hidden md:block w-52 bg-[#1843E2]">
        <SidebarDashboard storeId={storeId} />
      </div>
      
      <div className="flex flex-col w-full md:w-[82%] py-4 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-[#5075FF]">Profile</h1>
          <div className="hidden md:flex items-center gap-2 bg-white border rounded-lg px-4 py-2 shadow-sm">
            <img src={searchIcon} alt="search" className="w-5 h-5" />
            <input type="text" placeholder="Search" className="outline-none bg-white text-sm text-gray-500" />
          </div>
        </div>
        
        {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        
        {store && (
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mt-6 relative">
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <img src={store.background_image} alt="store background" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={store.profile_image} alt="store profile" className="w-24 md:w-36 h-24 md:h-36 rounded-full border-4 border-white shadow-lg" />
            </div>
            
            <div className="text-center mt-14">
              <h1 className="text-lg md:text-2xl font-bold">{store.store_name} - {store.city}, {store.state}</h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">{store.store_address}, {store.street}</p>
              <div className="flex justify-center gap-2 mt-2">
                <img src={star} alt="rating" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">{store.rating} ({store.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <Link to={`/store/edit-profile/${storeId}`} className="bg-mainBlue text-white px-6 py-2 rounded-lg flex items-center gap-2">
                <img src={whiteEdit} alt="edit" className="w-5 h-5" />
                Edit Profile
              </Link>
            </div>
            
            <div className="mt-6">
              <h1 className="font-bold text-lg md:text-2xl">About this Store</h1>
              <p className="text-gray-600 text-sm md:text-base mt-2">{store.about_store || "No description available."}</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-6">
          <img src={Footerimg} alt="footer logo" className="w-16 md:w-24" />
        </div>
      </div>
    </section>
  );
};

export default ProfileMobile;

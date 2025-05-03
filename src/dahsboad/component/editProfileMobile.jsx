import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import searchIcon from "/Image/search.svg";
import Footerimg from "/Image/footer-dahsboard.svg";
import MobileSideDashboard from "./mobileSideDashboard";
import SidebarDashboard from "./sidebarDashboard";

const EditProfileMobile = () => {
  const [showSide, setShowSide] = useState(false);
  const { storeId } = useParams();

  const [profile, setProfile] = useState({});
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [backgroundImageFile, setBackgroundImageFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://django-7u8g.onrender.com/api/stores/storeslist/${storeId}/`
        );
        if (!response.ok) throw new Error("Failed to fetch profile data");

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [storeId]);

  const handleChange = (e) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "profile") {
      setProfileImageFile(file);
    } else {
      setBackgroundImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(profile).forEach(([key, value]) => {
      if (value && key !== "cac_image" && key !== "profile_image" && key !== "background_image") {
        formData.append(key, value);
      }
    });

    if (profileImageFile instanceof File) {
      formData.append("profile_image", profileImageFile);
    }
    if (backgroundImageFile instanceof File) {
      formData.append("background_image", backgroundImageFile);
    }

    try {
      const response = await fetch(
        `https://django-7u8g.onrender.com/api/stores/store-details/${storeId}/update/`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="flex w-full bg-[#F8F8F8] min-h-screen">
      {/* Mobile Sidebar */}
      <div>
        <div
          onClick={() => setShowSide((prev) => !prev)}
          className="flex md:hidden text-[#1843E2] fixed right-4 top-4 text-3xl z-[10000] bg-white rounded-lg items-center justify-center w-10 h-10 shadow-lg"
        >
          {showSide ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
        </div>

        {/* Sidebar with Slide Effect */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#1843E2] z-[1000] overflow-y-auto transition-transform duration-300 ${
            showSide ? "translate-x-0 w-56" : "-translate-x-full w-0"
          }`}
        >
          <MobileSideDashboard />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-52 bg-[#1843E2]">
        <SidebarDashboard />
      </div>

      {/* Main Content */}
      <div className="flex flex-col p-4 w-full">
        {/* Top Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl lg:text-3xl text-[#5075FF] font-bold">Profile</h1>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-white border rounded-lg p-2 shadow-sm">
            <img src={searchIcon} alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-white text-gray-600"
            />
          </div>
        </div>

        {/* Edit Profile Section */}
        <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
          <h1 className="text-[#1843E2] font-medium text-xl">Edit Profile</h1>

          <div className="flex flex-col lg:flex-row gap-6 mt-4">
            {/* Image Uploads */}
            <div className="w-full lg:w-1/3">
              {/* Background Image */}
              <label className="block relative cursor-pointer">
                <img
                  src={
                    backgroundImageFile
                      ? URL.createObjectURL(backgroundImageFile)
                      : profile.background_image || "/default-background.jpg"
                  }
                  alt="background"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <input type="file" hidden onChange={(e) => handleImageChange(e, "background")} />
              </label>

              {/* Profile Image */}
              <label className="block relative mt-[-2rem] mx-auto w-24 h-24 cursor-pointer">
                <img
                  src={
                    profileImageFile
                      ? URL.createObjectURL(profileImageFile)
                      : profile.profile_image || "/default-profile.jpg"
                  }
                  alt="profile"
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
                <input type="file" hidden onChange={(e) => handleImageChange(e, "profile")} />
              </label>
            </div>

            {/* Form Section */}
            <form className="flex flex-col gap-3 w-full lg:w-2/3" onSubmit={handleSubmit}>
              <input type="text" name="store_name" value={profile.store_name || ""} onChange={handleChange} className="input-field" placeholder="Store Name"/>
              <input type="text" name="store_address" value={profile.store_address || ""} onChange={handleChange} className="input-field" placeholder="Store Address"/>
              <input type="text" name="street" value={profile.street || ""} onChange={handleChange} className="input-field" placeholder="Street"/>
              <input type="text" name="city" value={profile.city || ""} onChange={handleChange} className="input-field" placeholder="City"/>
              <input type="text" name="state" value={profile.state || ""} onChange={handleChange} className="input-field" placeholder="State"/>
              <textarea name="about_store" value={profile.about_store || ""} onChange={handleChange} className="input-field h-32" placeholder="About Store"/>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Update</button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center mt-6">
          <img src={Footerimg} alt="footer" className="w-24 h-24" />
        </div>
      </div>
    </section>
  );
};

export default EditProfileMobile;

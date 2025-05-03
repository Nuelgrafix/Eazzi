import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import searchIcon from "/Image/search.svg";
import Footerimg from "/Image/footer-dahsboard.svg";
import MobileSideDashboard from "./mobileSideDashboard";
import SidebarDashboard from "./sidebarDashboard";

const EditProfile = () => {
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
  
    // Append only fields that should be updated (excluding cac_image)
    Object.entries(profile).forEach(([key, value]) => {
      if (value && key !== "cac_image" && key !== "profile_image" && key !== "background_image") {
        formData.append(key, value);
      }
    });
  
    // Ensure that profile and background images are actual files before appending
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
          headers: {
            // No need to manually set 'Content-Type' (browser will handle it)
          },
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
    <section className="flex w-full bg-[#F8F8F8]">
      {/* Mobile Sidebar */}
      <div>
        <div
          onClick={() => setShowSide((prev) => !prev)}
          className="flex md:hidden text-[#1843E2] fixed right-[15px] top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]"
          style={{ boxShadow: "0px 8px 32px 0px #3326AE14" }}
        >
          {showSide ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
        </div>

        <div
          className={`fixed overflow-y-scroll z-[1000] h-full ${
            showSide ? "max-w-[214px] w-full bg-[#1843E2]" : "max-w-[214px] w-[0px] bg-[#1843E2]"
          }`}
        >
          <MobileSideDashboard />
        </div>
      </div>

      {/* Sidebar */}
      <div className="max-w-[204px] w-full md:flex hidden bg-[#1843E2]">
        <SidebarDashboard />
      </div>

      {/* Main Content */}
      <div className="flex flex-col py-[1rem] md:px-[1rem] px-[0.4rem] max-w-[1141px] w-full">
        {/* Top Header */}
        <div className="w-full flex items-center justify-between">
          <h1 className="lg:text-[32px] text-[24px] text-[#5075FF] font-[700]">Profile</h1>

          {/* Search Bar */}
          <div
            className="hidden md:flex gap-[6px] bg-white border-[1px] border-[#D0D5DD] rounded-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]"
            style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
          >
            <img src={searchIcon} alt="search_icon" className="w-[20px] h-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full bg-white text-[#667085]"
            />
          </div>
        </div>

        {/* Edit Profile Section */}
        <div className="bg-white rounded-[16px] p-[32px] gap-[27px] my-[2rem] shadow-md">
          <h1 className="text-[#1843E2] font-[400] text-[24px]">Edit Profile</h1>

          <div className="flex gap-[24px] justify-between">
            {/* Image Section */}
            <div className="max-w-[324px] w-full flex flex-col">
              {/* Background Image */}
              <label className="relative cursor-pointer">
                <img
                  src={
                    backgroundImageFile
                      ? URL.createObjectURL(backgroundImageFile)
                      : profile.background_image || "/default-background.jpg"
                  }
                  alt="background"
                  className="w-full h-[190px] rounded-[8px]"
                  style={{ filter: "brightness(50%)" }}
                />
                <input type="file" hidden onChange={(e) => handleImageChange(e, "background")} />
              </label>

              {/* Profile Image */}
              <label className="relative mt-[-3rem] cursor-pointer">
                <img
                  src={
                    profileImageFile
                      ? URL.createObjectURL(profileImageFile)
                      : profile.profile_image || "/default-profile.jpg"
                  }
                  alt="profile"
                  className="w-[84px] h-[84px] rounded-full"
                  style={{ filter: "brightness(50%)" }}
                />
                <input type="file" hidden onChange={(e) => handleImageChange(e, "profile")} />
              </label>
            </div>

            {/* Form Section */}
            <form className="flex flex-col max-w-[729px] w-full gap-[15px]" onSubmit={handleSubmit}>
              <input
                type="text"
                name="store_name"
                value={profile.store_name || ""}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="store_address"
                value={profile.store_address || ""}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="street"
                value={profile.street || ""}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="city"
                value={profile.city || ""}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="state"
                value={profile.state || ""}
                onChange={handleChange}
                className="input-field"
              />

              <input
                type="text"
                name="working_hours"
                value={profile.working_hours || ""}
                onChange={handleChange}
                className="input-field"
              />

              <textarea
                name="about_store"
                value={profile.about_store || ""}
                onChange={handleChange}
                className="input-field h-[237px]"
              />

              <button type="submit" className="bg-mainBlue text-white px-4 py-2 rounded-lg">
                Update
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-center">
          <img src={Footerimg} alt="footer" className="w-[107px] h-[101px]" />
        </div>
      </div>
    </section>
  );
};

export default EditProfile;

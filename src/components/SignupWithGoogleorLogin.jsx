import React from "react"; 
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GOOGLE_CLIENT_ID = "949685790616-ju0o0d4e86ahfk3s8ti3092lmhq2fi4k.apps.googleusercontent.com"; // Replace with your actual Google Client ID

const SignupWithGoogleorLogin = () => {
  const navigate = useNavigate(); // ✅ React Router navigation

  const handleGoogleSuccess = async (response) => {
    console.log("Google Response:", response);

    try {
      const res = await axios.post(
        "https://django-7u8g.onrender.com/api/auth/google/login/token/",
        {
          provider: "google",
          id_token: response.credential,  // ✅ Send the ID Token
        }
      );

      console.log("API Response:", res.data);

      if (res.data.access) {
        console.log("Google Login Successful!");
        localStorage.setItem("access_token", res.data.access);

        // ✅ Check if the user is an admin
        if (res.data.is_admin) {
          navigate("/admin-dashboard"); // Redirect admin
        } else {
          navigate("/home"); // Redirect normal user
        }
      }
    } catch (error) {
      console.error("Google login failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <div className="flex flex-col items-center">
            <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
              or
            </p>
    
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Google Login Failed")}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="bg-white border border-gray-300 rounded-lg flex items-center justify-center p-2 w-[150px] shadow-md hover:bg-gray-100 transition"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google logo"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-gray-700 font-medium">Sign in with Google</span>
                </button>
              )}
            />
          </div>
        </GoogleOAuthProvider>
  );
};

export default SignupWithGoogleorLogin;

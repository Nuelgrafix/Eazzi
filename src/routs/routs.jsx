import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Otherstores from "../pages/otherstores";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";
import StoresDetails from "../pages/storesdetails";

import Topstoresdetails from "../pages/topstoresdetails";

import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordVerifyEmail from "../pages/ForgetPasswordVerifyEmail";
import ForgetPasswordCreatePassword from "../pages/ForgetPasswordCreatePassword";
import ProductDetails from "../components/ProductDetails";
import Search from "../pages/search";
import SignupNotification from "../pages/signupNotification";
import SavedItemLayout from "../components/saveditems/savedItemLayout";
import SeeMore from "../pages/SeeMore";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otherstores" element={<Otherstores />} />
      <Route path="/storesdetails" element={<StoresDetails />} />
      <Route path="/topstoresdetails" element={<Topstoresdetails />} />

      {/* auth routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route
        path="/forget_passwordVerify_email"
        element={<ForgetPasswordVerifyEmail />}
      />
      <Route
        path="/forget_passwordCreate_password"
        element={<ForgetPasswordCreatePassword />}
      />
      {/*  auth routes */}

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product/see-more" element={<SeeMore/>}/>
      <Route path="/search" element={<Search />} />
      <Route path="/signup-notification" element={<SignupNotification />} />
      <Route path="/saveditem" element={<SavedItemLayout />} />
    </Routes>
  );
};

export default Routs;

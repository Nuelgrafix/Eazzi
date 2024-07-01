import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Otherstores from "../pages/otherstores";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";
import StoresDetails from "../pages/storesdetails";
import CreatePassword from "../pages/CreatePassword";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordVerifyEmail from "../pages/ForgetPasswordVerifyEmail";
import ForgetPasswordCreatePassword from "../pages/ForgetPasswordCreatePassword";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otherstores" element={<Otherstores />} />
      <Route path="/storesdetails" element={<StoresDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
      <Route path="/create_password" element={<CreatePassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route path="/forget_passwordVerify_email" element={<ForgetPasswordVerifyEmail />} />
      <Route path="/forget_passwordCreate_password" element={<ForgetPasswordCreatePassword />} />
    </Routes>
  );
};

export default Routs;

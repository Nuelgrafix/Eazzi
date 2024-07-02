import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Otherstores from "../pages/otherstores";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";
import StoresDetails from "../pages/storesdetails";
import CreatePassword from "../pages/CreatePassword";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otherstores" element={<Otherstores />} />
      <Route path="/storesdetails" element={<StoresDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
      <Route path="/create_password" element={<CreatePassword />} />
    </Routes>
  );
};

export default Routs;

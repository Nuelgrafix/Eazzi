import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Otherstores from "../pages/otherstores";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otherstores" element={<Otherstores />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
    </Routes>
  );
};

export default Routs;

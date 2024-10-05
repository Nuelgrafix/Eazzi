import {  Route, Routes } from "react-router-dom";
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

import EmptyCart from "../components/cart/emptyCart";

import EmptyCartSignin from "../components/cart/emptyCardSignin";
import FilledCart from "../components/cart/filledCart";


import SeeMore from "../pages/SeeMore";
import HomeDashboard from "../dahsboad/pages/homeDashboard";
import ProductUpload from "../dahsboad/pages/productUpload";
 import { useAuthContext } from "../hooks/useAuthContext";
import NoPageFound from "../pages/noPageFound";
import Orders from "../dahsboad/pages/orders";
import OrderHistory from "../dahsboad/pages/orderHistory";
import OrderDetails from "../dahsboad/pages/orderDetails";
import DashboardProduct from "../dahsboad/pages/dashboardProduct";
import Profile from "../dahsboad/pages/profile";
import EditProduct from "../dahsboad/pages/editProduct";
import AboutProduct from "../dahsboad/pages/aboutProduct";
import EditProfile from "../dahsboad/component/editProfile";
import NotificationDetails from "../dahsboad/component/notification/notificationDetails";
import DashboardNotification from "../dahsboad/pages/dashboardNotification";
import Analyticsdashboard from "../dahsboad/pages/analyticsdashboard";


const Routs = () => {

const {authUser} = useAuthContext()

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
      <Route path="/products/see-more" element={<SeeMore/>}/>
      <Route path="/search" element={<Search />} />
      <Route path="/signup-notification" element={ <SignupNotification /> } />

      {/* waiting for loggedin users */}
      <Route path="/saveditem" element={<SavedItemLayout /> } />



{/* Cart */}
      <Route path="/emptycart-signin" element={<EmptyCartSignin />} /> 
       {/* <Route path="/emptycart" element={<EmptyCart />} />  */}
      <Route path="/filledcart" element={<FilledCart />} />
     <Route path="/emptycart" element={ authUser? <EmptyCartSignin />  : <EmptyCart />   } />



      {/* DashBoard Routes */}
      <Route  path="/dashboard"  element={ <HomeDashboard /> } />
      <Route  path="/product-upload"  element={ <ProductUpload  /> } />
      <Route  path="/dashboard-analytics"  element={ <Analyticsdashboard  /> } />
      <Route  path="/product-upload"  element={ <ProductUpload  /> } />
      <Route  path="/orders"  element={ <Orders  /> } />
      <Route  path="/dashboard-product"  element={ <DashboardProduct  /> } />
      <Route  path="/ordersdetails/:id"  element={ <OrderDetails /> } />
      <Route  path="/dashboard-profile"  element={ <Profile /> } />
      <Route  path="/dashboard-edit/:id"  element={ <EditProduct /> } />
      <Route path="/dashboard/about-product/:id"  element={ <AboutProduct />}  />
      <Route path="/dashboard/profile"  element={ <Profile />}  />
      <Route path="/dashboard/edit-profile/:id"  element={ <EditProfile />}  />

      <Route path="/dashboard/notification"  element={ <  DashboardNotification />}  />
      <Route path="/dashboard/notification/:id"  element={ <NotificationDetails />}  />
      <Route  path="/order-history"  element={ <OrderHistory  /> } />

      {/* Admin Routes */}
            



{/* No page Found */}
<Route path="*"  element={<NoPageFound />}  />
    </Routes>
  );
};

export default Routs;

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
//  import { useAuthContext } from "../hooks/useAuthContext";
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
import Settings from "../dahsboad/pages/settings";

import RiderHomeDashboard from "../riderdashboard/riderpages/riderHomeDashboard";
import RiderAnalyticsdashboard from "../riderdashboard/riderpages/riderAnalyticsdashboard";
import RiderSettings from "../riderdashboard/riderpages/riderSettings";
import RiderOrderHistory from "../riderdashboard/riderpages/riderOrderHistory";
import RiderProfile from "../riderdashboard/riderpages/riderProfile";
import RiderDashboardProduct from "../riderdashboard/riderpages/riderDashboardProduct";
import RiderOrders from "../riderdashboard/riderpages/riderOrders";
import RiderDashboardNotification from "../riderdashboard/riderpages/riderDashboardNotification";
import RiderProductUpload from "../riderdashboard/riderpages/riderProductUpload";
import RiderEditProduct from "../riderdashboard/riderpages/riderEditProduct";
import RiderEditProfile from "../riderdashboard/component/riderEditProfile";
import RiderOrderDetails from "../riderdashboard/riderpages/riderOrderDetails";
import RiderNotificationDetails from "../riderdashboard/component/notification/riderNotificationDetails";
import RiderCustomer from "../riderdashboard/riderpages/riderCustomer";
import RiderStores from "../riderdashboard/riderpages/riderStores";
import RiderStoresDetails from "../riderdashboard/riderpages/riderStoresDetails";
import RiderCustomerDetails from "../riderdashboard/riderpages/riderCustomerDetails";
import AllRiderDetails from "../riderdashboard/riderpages/allRiderDetails";
import AllRiderPage from "../riderdashboard/riderpages/allRiderPage";
import RiderAssignedOrder from "../riderdashboard/riderpages/riderAssignedOrder";
import RiderLogin from "../rider/auth/riderLogin";
import RiderSignup from "../rider/auth/riderSignup";
import RiderDashboard from "../rider/dashboard";
import RiderMessages from "../rider/riderMessages";
import Checkout from "../pages/Checkout";
import AddAddress from "../components/checkouts/addAddress";
import AdminRiders from "../riderdashboard/riderpages/riderRiders";
import StoreSignup from "../admindashboard/auth/StoreSignup";
import StoreLogins from "../admindashboard/auth/StoreLogins";
import StoreVerifyEmail from "../admindashboard/auth/StoreVerifyEmail";
import StoreCreatePassword from "../admindashboard/auth/StoreCreatePassword";
import StoreAccount from "../admindashboard/auth/StoreAccount";
import StoreConfirmation from "../admindashboard/auth/StoreConfirmation";





const Routs = () => {

// const {authUser} = useAuthContext()

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otherstores" element={<Otherstores />} />
      <Route path="/storesdetails" element={<StoresDetails />} />
      <Route path="/topstoresdetails" element={<Topstoresdetails />} />
      <Route path="/checkout"  element={<Checkout />}  />
      <Route path="/checkout-address"  element={<AddAddress/>}  />

      {/* auth routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route path="/forget_passwordVerify_email" element={<ForgetPasswordVerifyEmail />} />
      <Route  path="/forget_passwordCreate_password" element={<ForgetPasswordCreatePassword />} />



      {/* rider auth */}
      <Route path="/rider-signup" element={<RiderSignup />} />
      <Route path="/verify_email" element={<VerifyEmail />} />
      <Route path="/rider-login" element={<RiderLogin />} />
      <Route path="/rider-dashboards" element={<RiderDashboard />} />
      <Route path="/rider-messages" element={<RiderMessages />} />

      {/*  auth routes  ends */}

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products/see-more" element={<SeeMore/>}/>
      <Route path="/search" element={<Search />} />
      <Route path="/signup-notification" element={ <SignupNotification /> } />

      {/* waiting for loggedin users */}
      <Route path="/saveditem" element={<SavedItemLayout /> } />



{/* Cart */}
    <Route path="/emptycart-signin" element={<EmptyCartSignin />} /> 
 <Route path="/emptycart" element={<EmptyCart />} /> 
 <Route path="/filledcart" element={<FilledCart />} />
 {/* <Route path="/emptycart" element={ authUser? <EmptyCartSignin />  : <EmptyCart />   } /> */}


      {/* Rider auth & dashboard */}
      <Route path="/rider-signup" element={<RiderSignup />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/rider-login" element={<RiderLogin />} />
      <Route path="/rider-dashboards" element={<RiderDashboard />} />
      <Route path="/rider-messages" element={<RiderMessages />} />




     {/* Store auth  */}
     <Route path="/store-signup" element={<StoreSignup />} />
      <Route path="/store-verify-email" element={<StoreVerifyEmail />} />
      <Route path="/store-login" element={<StoreLogins />} />
      <Route path="/store-createaccount" element={<StoreAccount />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route path="/forget_passwordVerify_email" element={<ForgetPasswordVerifyEmail />} />
      <Route  path="/store-createpassword" element={<StoreCreatePassword />} />
      <Route  path="/store-confirmation" element={<StoreConfirmation />} />


      {/*Store DashBoard Routes */}
      <Route  path="/store-dashboard"  element={ <HomeDashboard /> } />
      <Route  path="/admin-product-upload"  element={ <ProductUpload  /> } />
      <Route  path="/admin-analytics"  element={ <Analyticsdashboard  /> } />
      {/* <Route  path="/product-upload"  element={ <ProductUpload  /> } /> */}
      <Route  path="/admin-orders"  element={ <Orders  /> } />
      <Route  path="/admin-product"  element={ <DashboardProduct  /> } />
      <Route  path="/ordersdetails/:id"  element={ <OrderDetails /> } />
      <Route  path="/admin-profile"  element={ <Profile /> } />
      <Route  path="/dashboard-edit/:id"  element={ <EditProduct /> } />
      <Route path="/dashboard/about-product/:id"  element={ <AboutProduct />}  />
      <Route path="/dashboard/profile"  element={ <Profile />}  />
      <Route path="/dashboard/edit-profile/:id"  element={ <EditProfile />}  />
      <Route path="/admin-notification"  element={ <  DashboardNotification />}  />
      <Route path="/dashboard/notification/:id"  element={ <NotificationDetails />}  />
      <Route  path="/order-history"  element={ <OrderHistory  /> } />
      <Route  path="/admin-settings"  element={ <Settings /> } />



      {/* Admin Dashboard Routes */}
    
            <Route  path="/admin-dashboard"  element={ <RiderHomeDashboard /> } />
      <Route  path="/rider-product-upload"  element={ <RiderProductUpload  /> } />
      <Route  path="/rider-analytics"  element={ <RiderAnalyticsdashboard  /> } />
      {/* <Route  path="/product-upload"  element={ <ProductUpload  /> } /> */}
    
      <Route  path="/rider-product"  element={ <RiderDashboardProduct  /> } />
      <Route  path="/rider-orders"  element={ <RiderOrders  /> } />
      <Route  path="/rider-assigned-orders/:id"  element={ <RiderAssignedOrder /> } />
      <Route  path="/rider/ordersdetails/:id"  element={ <RiderOrderDetails /> } />
      <Route  path="/rider/profile"  element={ <RiderProfile /> } />
      <Route  path="/rider-edit/:id"  element={ <RiderEditProduct /> } />
      <Route path="/dashboard/about-product/:id"  element={ <AboutProduct />}  />
      {/* <Route path="/dashboard/profile"  element={ <Profile />}  /> */}
      <Route path="/rider/edit-profile/:id"  element={ <RiderEditProfile />}  />
      <Route path="/rider/notification"  element={ <  RiderDashboardNotification />}  />
      <Route path="/rider/notification/:id"  element={ <RiderNotificationDetails />}  />
      <Route  path="/rider-order-history"  element={ <RiderOrderHistory  /> } />
      <Route  path="/rider/settings"  element={ <RiderSettings /> } />
     
      <Route  path="/rider/customer"  element={ <RiderCustomer/> } />
      <Route path="/rider/customerdetails/:id"  element={ <RiderCustomerDetails />}  />
      <Route  path="/rider/stores"  element={ <RiderStores /> } />
      <Route path="/rider/storesdetails/:id"  element={ <RiderStoresDetails />}  />
      
      <Route  path="/admin/riders"  element={ <AdminRiders /> } />
      <Route path="/rider/allrider"  element={ <AllRiderPage />}  />
      <Route path="/rider/allriderdetails/:id"  element={ <AllRiderDetails />}  />


{/* No page Found */}
<Route path="*"  element={<NoPageFound />}  />
    </Routes>
  );
};

export default Routs;

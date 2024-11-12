import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./hooks/authContext.jsx";

import { Provider } from 'react-redux'

import store from './redux/Store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      

      <Provider store={store} >
    <BrowserRouter>
    <AuthContextProvider>

    <App />
    </AuthContextProvider>

    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

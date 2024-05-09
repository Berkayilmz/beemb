import React from "react";
//import Home from "./pages/Home";
//import ShopPage from "./pages/ShopPage";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import Auth from "./components/Auth/Auth";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <>
      <React.Fragment>
        {/* <Home /> */}
        {/* <ShopPage /> */}
        {/* <ContactPage /> */}
        <AuthPage/>
      </React.Fragment>
    </>
  );
};

export default App;

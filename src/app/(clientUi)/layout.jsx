import Footer from "@/components/clientUiComponent/Footer";
import Navbar from "@/components/clientUiComponent/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
   
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;

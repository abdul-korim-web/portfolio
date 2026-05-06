import Navbar from "@/components/clientUiComponent/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
   
      {children}
    </div>
  );
};

export default Layout;

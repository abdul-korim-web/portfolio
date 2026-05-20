import Footer from "@/components/clientUiComponent/Footer";
import Navbar from "@/components/clientUiComponent/Navbar";
import React from "react";
export const metadata = {
  title: "Skills",
  description: "This is a Abdul Portfolio skills  section",
};
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

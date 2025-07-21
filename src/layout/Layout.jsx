import React from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contentwrapper from "../components/Contentwrapper/Contentwrapper";
function Layout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
export default Layout;

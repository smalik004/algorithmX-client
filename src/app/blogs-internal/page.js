import React from "react";
import Navbar from "../asample/naviagtion";
import GuidesGrid from "./main";
import CookieConsent from "../cookies/cookie";
import Home from "./home";

import Footer from "../(mainpage)/footer";
const Page = () => {
  return (
    <div>
      <Navbar />

      <CookieConsent />
      <Home />
      <GuidesGrid />
      <Footer />
    </div>
  );
};

export default Page;

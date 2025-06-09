import React from "react";
import Image from "next/image";
import Navbar from "./naviagtion";
import CookieConsent from "../cookies/cookie";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
    </div>
  );
};

export default page;

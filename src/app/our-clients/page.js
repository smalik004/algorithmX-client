"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import FloatingBubblesPage from "./bubble";
import PortfolioGrid from "./clientdesign";
 
import Footer from "../(mainpage)/footer";
import axiosHttp from "../utils/httpConfig";

const Page = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosHttp.get(`/clients/`);

      const result = response?.data?.data || null;
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <CookieConsent />
      <FloatingBubblesPage data={data} />
      <PortfolioGrid data={data} />
      <InsightSection data={data} />
      <Footer />
    </div>
  );
};

export default Page;

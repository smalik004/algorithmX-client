"use client";
import { React, useState, useEffect } from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import GlossaryHeader from "./header";
import Glossary from "./home";
import Footer from "../(mainpage)/footer";
import axiosHttp from "../utils/httpConfig";

const Page = () => {
  const [data, setData] = useState(null);

  const getBlogById = async () => {
    try {
      const response = await axiosHttp.get(`/glossary/glossaries`);

      const blogData = response?.data?.data || null;
      setData(blogData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    getBlogById();
  });

  return (
    <div>
      <Navbar />
      <CookieConsent />
      <GlossaryHeader data={data} />
      <Glossary data={data} />
      <Footer />
    </div>
  );
};

export default Page;

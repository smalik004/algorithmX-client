import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import BlogCarousel from "./home";
import Innovation from "./innovation";
import TrendingTopics from "./topics";
import TabsContent from "./popular";
import Section1 from "./section";
import TabbedContent from "./most";
import FeaturedContent from "./featured";

import Footer from "../(mainpage)/footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BlogCarousel />
      {/* <Innovation/>
      <TrendingTopics /> */}
      <TabsContent />
      <TabbedContent />
      <Section1 />
      {/* <FeaturedContent /> */}
      <Footer />
    </div>
  );
};

export default Page;

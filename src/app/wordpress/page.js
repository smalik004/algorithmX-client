export const metadata = {
  title: "WordPress Development Company | WordPress Services in USA",
  description:
    "Transform your website with our professional WordPress development services. We craft custom, responsive sites that are both visually appealing and functionally robust. Get started with your ideal WordPress solution today!",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import WordPressSection from "./home";
import WordPressServices from "./wservice";
import WordpressFeatures from "./wchoose";
import QualityBanner from "./wquality";
import WordPressDevelopmentTimeline from "./wtimeline";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <WordPressSection />
      <WordPressServices />
      <WordpressFeatures />
      <QualityBanner />
      <WordPressDevelopmentTimeline />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;

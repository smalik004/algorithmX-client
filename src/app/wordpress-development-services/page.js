export const metadata = {
  title: "WordPress Development Company | WordPress Services in USA",
  description:
    "Transform your website with our professional WordPress development services. We craft custom, responsive sites that are both visually appealing and functionally robust. Get started with your ideal WordPress solution today!",
};
import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import WordPressSection from "./home";
import WordPressServices from "./wservice";
import WordpressFeatures from "./wchoose";
import QualityBanner from "./wquality";
import WordPressDevelopmentTimeline from "./wtimeline";
 
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <WordPressSection />
      <WordPressServices />
      <WordpressFeatures />
      <CTASectionBanner/>
      <QualityBanner />
      <WordPressDevelopmentTimeline />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;

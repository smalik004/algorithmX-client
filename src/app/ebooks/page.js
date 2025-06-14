import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import HeroSlider from "./home";
import ExploreCategories from "./tabs";
import Featuredarticle1 from "./featurearticle";
import LatestArticles from "./latestarticle";
import Footer from "../(mainpage)/footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <HeroSlider />
      <ExploreCategories />
      <Featuredarticle1 />
      <LatestArticles />
      <Footer />
    </div>
  );
};

export default Page;

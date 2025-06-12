export const metadata = {
  title: "Drupal Development Company in USA | Custom CMS Solutions",
  description:
    "Our Drupal development agency offers custom themes, modules, and migration services. Improve your website's functionality and reach now. ",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import DrupalSection from "./home";
import DrupalServices from "./dservices";
import DrupalFeatures from "./dchoose";
import QualityBanner from "./quality";
import DrupalDevelopmentTimeline from "./dtimeline";
 
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <DrupalSection />
      <DrupalServices />
      <DrupalFeatures />
      <CTASectionBanner/>
      <QualityBanner />
      <DrupalDevelopmentTimeline />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;

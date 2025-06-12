export const metadata = {
  title: "BigCommerce Development Agency in USA",
  description:
    "AlgorithmX is a BigCommerce development agency offering custom themes, integrations, and migration services. Improve your online store's performance and reach now. ",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import BigCommerceSection from "./home";
import BigcommerceServices from "./bservices";
import BigcommerceFeatures from "./bchoose";
import QualityBanner from "./bquality";
import BigcommerceDevelopmentTimeline from "./btimeline";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BigCommerceSection />
      <BigcommerceServices />
      <BigcommerceFeatures />
      <CTASection/>
      <QualityBanner />
      <BigcommerceDevelopmentTimeline />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;

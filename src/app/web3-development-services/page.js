export const metadata = {
  title: " Web3 Development Services | AlgorithmX",
  description:
    "AlgorithmX designs and develops custom Web3 applications using leading   blockchain technologies. At AlgorithmX, security and scalability come standard.",
};

import React from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import Web3Section from "./home";
import Web3ServicesGrid from "./services";
import Web3DevelopmentPage from "./choose";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <Web3Section />
      <Web3ServicesGrid />
      <CTASection/>
      <Web3DevelopmentPage />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;

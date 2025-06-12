export const metadata = {
  title:
    " Blockchain Development Agency | Blockchain Development Services in USA",
  description:
    "Enhance security, transparency, and efficiency with AlgorithmX’s custom blockchain solutions. Our Blockchain experts can help you harness the potential of this revolutionary technology. Contact us now!",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import BlockContentSection from "./home";
import BlockchainSolutions from "./blocksolution";
import BlockServices from "./blockservices";
import BlockchainHero from "./blockdesign";
import BlockTechStack from "./blocktechstack";
 
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BlockContentSection />
      <BlockServices />
      <BlockchainSolutions />
      <CTASection/>
      <BlockchainHero />
      <BlockTechStack />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;

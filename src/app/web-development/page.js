export const metadata = {
  title: "Leading Website Development Company in USA | AlgorithmX ",
  description:
    " Looking for top-notch Web Development Services? Get our custom website solutions. We are the leading Website Development Company in USA, delivering reliable services.",
};
import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import WebSection from "./home";
import WebAppServices from "./services";
import BenefitsWebSection from "./benefits";
import WebDevelopmentProcess from "./devlop";
import WebAccordion from "./best";
import CostWeb from "./cost";
import WebTechStack from "./techstack";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <WebSection />
      <WebAppServices />
      <BenefitsWebSection />
      <CTASection/>
      <WebDevelopmentProcess />
      <WebAccordion />
      <CTASectionBanner/>
      <CostWeb />
      <WebTechStack />
      
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;

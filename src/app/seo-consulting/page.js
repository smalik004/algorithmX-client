export const metadata = {
  title:
    "SEO Consulting Services | Top SEO Consulting Company in India and USA",
  description:
    "Maximize your revenue from organic search traffic with our SEO consulting services, guided by the expertise of AlgorithmX's seasoned SEO professionals.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOConsultingSection from "./home";
import ConsultingServices from "./consultingservices";
import ConsultingStrategy from "./opportunity";
import ConsultingBenefits from "./choose";
import ConsultingBrandSection from "./brand";
import ConsultingSolutionSection from "./solution";
import ConsultingPartner from "./partner";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOConsultingSection />
      <ConsultingServices />
      <ConsultingStrategy />
      <CTASection/>
      <ConsultingBenefits />
      <ConsultingBrandSection />
      <CTASectionBanner/>
      <ConsultingPartner />
      <ConsultingSolutionSection />
      
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;

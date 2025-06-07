export const metadata = {
  title:
    "SEO Consulting Services | Top SEO Consulting Company in India and USA",
  description:
    "Maximize your revenue from organic search traffic with our SEO consulting services, guided by the expertise of AlgorithmX's seasoned SEO professionals.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOConsultingSection from "./home";
import ConsultingServices from "./consultingservices";
import ConsultingStrategy from "./opportunity";
import ConsultingBenefits from "./choose";
import ConsultingBrandSection from "./brand";
import ConsultingSolutionSection from "./solution";
import ConsultingPartner from "./partner";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOConsultingSection />
      <ConsultingServices />
      <ConsultingStrategy />
      <ConsultingBenefits />
      <ConsultingBrandSection />
      <ConsultingPartner />
      <ConsultingSolutionSection />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;

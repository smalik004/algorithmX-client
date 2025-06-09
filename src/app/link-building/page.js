export const metadata = {
  title: "SEO Link Building Services : SEO Off-Page Optimization",
  description:
    "AlgorithmX’s link building services provide 100% high-quality backlinks to enhance your website's reputation and drive quality traffic.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOLinkSection from "./home";
import LinkServices from "./linkservices";
import LinkStrategy from "./reach";
import LinkBenefits from "./benefit";
import LinkBuildingSection from "./linkbuilding";
import LinkProcess from "./buildingtimeline";
import LinkTrafficSection from "./traffic";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOLinkSection />
      <LinkServices />
      <LinkStrategy />
      <LinkBenefits />
      <LinkBuildingSection />
      <LinkProcess />
      <LinkTrafficSection />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;

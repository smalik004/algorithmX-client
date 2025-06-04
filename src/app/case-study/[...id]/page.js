"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../asample/naviagtion";
import CaseHeader from "../header";
import IkeaCaseStudy from "../categories";
import AboutSection from "../about";
import DominosHeroSection from "../content";
import KFCResults from "../result";
import TestimonialSection from "../review";
import ProcessSection from "../ourprocess";
import MobileUISwitcher from "../scrollprocess";
import TechnologyStack from "../techstack";
import ProjectGoals from "../projectgoals";
import AccordionWithImage from "../Helping";
import Results from "../theresults";
import CaseStudies from "../morecase";
import Footer from "../../(mainpage)/footer";
import axiosHttp from "../../../app/utils/httpConfig";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const ClientId = Number(id);
  console.log("GET CASE STUDY ID", ClientId);

  const [data, setData] = useState(null);

  const getClientById = async () => {
    try {
      const response = await axiosHttp.get(`/clients/${ClientId}`);
      console.log("Blog API Response:", response);

      const blogData = response?.data?.data || null;
      setData(blogData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (id) getClientById();
  }, [id]);
  console.log("GET CASE STUDY DATA", data);
  return (
    <div>
      <Navbar />
      <CaseHeader data={data} />
      <IkeaCaseStudy data={data} />
      <AboutSection data={data} />
      <DominosHeroSection data={data} />
      <TestimonialSection data={data} />
      <KFCResults data={data} />
      <ProcessSection data={data} />

      <MobileUISwitcher data={data} />
      <TechnologyStack data={data} />
      <ProjectGoals data={data} />
      <AccordionWithImage data={data} />
      <Results data={data} />
      <CaseStudies data={data} />
      <Footer />
    </div>
  );
};

export default Page;

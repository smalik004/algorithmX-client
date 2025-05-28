import React from 'react';
import Navbar from '../asample/naviagtion'
import CaseHeader from './header';
import IkeaCaseStudy from './categories';
import AboutSection from './about';
import DominosHeroSection from './content';
import KFCResults from './result';
import TestimonialSection from './review';
import ProcessSection from './ourprocess';
import MobileUISwitcher from './scrollprocess';
import TechnologyStack from './techstack';
import ProjectGoals from './projectgoals';
import AccordionWithImage from './Helping';
import Results from './theresults';
import CaseStudies from './morecase';
import Footer from '../(mainpage)/footer';
const Page = () => {
  return (
    <div >
        <Navbar/>
       <CaseHeader/>
       <IkeaCaseStudy/>
       <AboutSection/>
       <DominosHeroSection/>
       <TestimonialSection/>
       <KFCResults/>
       <ProcessSection/>
       <MobileUISwitcher/>
       <TechnologyStack/>
       <ProjectGoals/>
       <AccordionWithImage/>
       <Results/>
       <CaseStudies/>
       <Footer/>
      
        
    </div>
  );
};

export default Page;

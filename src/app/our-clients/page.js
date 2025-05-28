    import React from 'react'
    import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
  import FloatingBubblesPage from './bubble'
    import Industries from './industries'
    import PortfolioGrid from './newcase'
    import GlassMirrorCard from './glass'
    import InsightSection from '../graphics/insight'
    import Footer from '../(mainpage)/footer'
    const page = () => {
    return (
        <div>
             <Navbar/>
    <CookieConsent/>
            <FloatingBubblesPage/>
            <PortfolioGrid/>
            
        
        <InsightSection/>
       
        <Footer/>
        
        
        </div>
    )
    }

    export default page

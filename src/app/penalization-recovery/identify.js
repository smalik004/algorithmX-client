    import React from 'react';
    import { Montserrat } from 'next/font/google';
                        
                        
                        const monsterfont1 = Montserrat ({
                        subsets : ["latin"],
                        weight :"100",
                        })
    

    const HandlingPenaltyAlerts = () => {
    return (
        <div className="bg-black flex min-h-screen">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative p-4">
            <img
                src="images/Identify-the-Penalty-Cause-Restore-Your-Site.webp"
                alt="Alert"
                className="mx-auto w-3/4 h-auto object-contain md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-3/4 md:h-3/4 md:rotate-12"
            />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center">
            <h1 className={`text-[46px] leading-[50px] tracking-[0.06em] mb-[30px] ${monsterfont1.className}  md:text-start text-center`}>
            Identify the Penalty Cause & Restore Your Site
            </h1>
            <p className="text-[16px] leading-[1.75rem] mb-[5px] font-[Helvetica] font-[500] text-semi-white md:text-start text-center">
            If your site has been hit with a penalty, our Google Penalty Removal Experts are here to help. We thoroughly analyze your site to pinpoint the cause, ensuring swift recovery with tailored penalty recovery services. By addressing critical issues and aligning your site with Google’s standards, our SEO penalty removal services restore your visibility and recapture lost traffic. Consult a Google Penalty Consultant today to get back on track.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default HandlingPenaltyAlerts;

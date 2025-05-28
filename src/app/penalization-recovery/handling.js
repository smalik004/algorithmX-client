    import React from "react";
     import { Montserrat } from 'next/font/google';
                            
                            
                            const monsterfont1 = Montserrat ({
                            subsets : ["latin"],
                            weight :"100",
                            })

    const PenaltyAndWarningAlerts = () => {
    return (
        <div className="bg-black">
        {/* Handling Google Warning Alerts Section */}
        <div className="flex md:min-h-screen">
            <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center">
                <h1 className={`text-[46px] leading-[50px] tracking-[0.06em] mb-[30px] ${monsterfont1.className}  md:text-start text-center`}>
                HANDLING GOOGLE WARNING ALERTS
                </h1>
                <p className="text-[16px] leading-[1.75rem] mb-[5px] font-[Helvetica] font-[500] text-semi-white md:text-start text-center">
                If Google flags quality or security issues on your site, immediate
                action is essential. Our SEO penalty removal services swiftly
                identify and resolve problems, restoring site trust and protecting
                your rankings. With our Google SEO penalty recovery, we tackle
                issues head-on, ensuring long-term stability and compliance with
                best practices.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 relative p-4 flex justify-center items-center">
                <div className="border-4 border-white transform md:rotate-12 ">
                <img
                    src="images/Handling-Google-Warning-Alerts.webp"
                    alt="Alert"
                    className="w-full h-auto object-contain"
                />
                </div>
            </div>
            </div>
        </div>

        {/* Identify the Penalty Cause Section */}
        <div className="flex min-h-screen">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative p-4 flex justify-center items-center">
                <div className="border-4 border-white transform md:rotate-12 ">
                <img
                    src="images/Identify-the-Penalty-Cause-Restore-Your-Site.webp"
                    alt="Penalty Cause"
                    className="w-[400px] h-auto object-contain"
                />
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center">
                <h1 className={`text-[46px] leading-[50px] tracking-[0.06em] mb-[30px] ${monsterfont1.className}  md:text-start text-center`}>
                Identify the Penalty Cause & Restore Your Site
                </h1>
                <p className="text-[16px] leading-[1.75rem] mb-[5px] font-[Helvetica] font-[500] text-semi-white md:text-start text-center">
                If your site has been hit with a penalty, our Google Penalty
                Removal Experts are here to help. We thoroughly analyze your site
                to pinpoint the cause, ensuring swift recovery with tailored
                penalty recovery services. By addressing critical issues and
                aligning your site with Google’s standards, our SEO penalty
                removal services restore your visibility and recapture lost
                traffic. Consult a Google Penalty Consultant today to get back on
                track.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default PenaltyAndWarningAlerts;

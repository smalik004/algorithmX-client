    import React from 'react';
     import { Montserrat } from 'next/font/google';
            
            
            const monsterfont1 = Montserrat ({
            subsets : ["latin"],
            weight :"400",
            })

    const CloudStrategy = () => {
    return (
        <div className="bg-black text-white py-20 px-8">
        <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
            <h1 className={`text-[30px] mb-[60px] ${monsterfont1.className}`}>Our Streamlined Process for Cloud-First Resilience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/icons-clouds-new-1.png" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Strategic
                Consultation</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                Tailored cloud strategy development based on your specific requirements and objectives.
                </p>
                </div>
            </div>
            {/* Card 2 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Manual Review" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Seamless
                Implementation</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                Expertly executed cloud infrastructure implementation with a focus on security whether public, private, or hybrid.
                </p>
                </div>
            </div>
            {/* Card 3 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Removal Requests" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Optimization and Security Enhancement</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                Continuous improvement and security reinforcement to maintain resilience and adhere to top industry standards.
                </p>
                </div>
            </div>
            {/* Card 4 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Link Disavow" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Ongoing Support and Governance</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                Comprehensive support & assistance to ensure compliance and efficient cloud operations throughout your journey.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default CloudStrategy;

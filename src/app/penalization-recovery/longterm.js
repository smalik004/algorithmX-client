    import React from 'react';
     import { Montserrat } from 'next/font/google';
            
            
            const monsterfont1 = Montserrat ({
            subsets : ["latin"],
            weight :"400",
            })

    const SeoStrategy = () => {
    return (
        <div className="bg-black text-white py-20 px-8">
        <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
            <h1 className={`text-[30px] mb-[60px] ${monsterfont1.className}`}>Your SEO Strategy for the Long-Term</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Backlink Analysis</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                    Our Google penalty recovery consultants begin with a comprehensive audit of your backlink profile to identify and remove any low-quality or toxic links that could harm your SEO performance. This process helps protect your site from penalties and strengthens its foundation for future growth.
                </p>
                </div>
            </div>
            {/* Card 2 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Manual Review" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Manual Review</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                    Automated tools often miss subtle issues that could affect your rankings. Our team of experts conducts a detailed, manual inspection of your site to uncover any "invisible" errors that could be impacting your SEO. This human touch ensures that no detail is overlooked.
                </p>
                </div>
            </div>
            {/* Card 3 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Removal Requests" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Removal Requests</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                    When penalties strike, quick action is essential. We identify solutions swiftly, submitting removal requests and implementing corrective measures to regain your rankings. With our Google penalty recovery consultants handling these requests, you're well-equipped to recover faster.
                </p>
                </div>
            </div>
            {/* Card 4 */}
            <div className="bg-black border border-white p-4 flex text-xs items-center">
                <img src="/images/Re-assessment.svg" alt="Link Disavow" className="w-12 h-12 mr-4" />
                <div>
                <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">Link Disavow</h2>
                <p className='text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]'>
                    For links that can't be removed, we utilize Google's disavow tool, instructing search engines to ignore harmful backlinks impacting your SEO negatively. This proactive step fortifies your site against potential penalties, helping safeguard your SEO health in the long run.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default SeoStrategy;

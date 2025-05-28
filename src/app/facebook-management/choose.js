'use client'
import React, { useState } from 'react';
 import styles from '../social-media-audit/style.module.css'
 import style from '../seoaudits/style.module.css'
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
      subsets: ["latin"],
      weight: "500",
      fallback: ["sans-serif"],
    });

    const monsterfont1 = Montserrat({
      subsets: ["latin"],
      weight: "100",
      fallback: ["sans-serif"],
    });
    const monsterfont2 = Montserrat({
      subsets: ["latin"],
      weight: "300",
      fallback: ["sans-serif"],
    });



const FacebookImplementation = () => {
const [activeTab, setActiveTab] = useState("scale-strategy");
const [isAnimating, setIsAnimating] = useState(false);

const content = {
    "scale-strategy": {
    mainTitle: "We’re a Meta Business Partner",
    boxTitle: "We’re a Meta Business Partner",
    description: (
        <>
        <p>
        When you invest in Facebook services for your business, you want to receive them from a skilled partner. At AlgorithmX, we’re a Meta Business Partner. That means we have extensive knowledge of crafting Facebook campaigns that help clients grow their businesses.
        </p>
        <p>
        Our skilled experts can help you do anything from launching ads to creating organic posts to selling on Marketplace. You can feel confident you’re working with a team that knows how to leverage Facebook’s platform to maximize revenue for your business.  
        </p>
        </>
    ),
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-[32px] h-[32px] ">
      <g id="shopping-cart">
          <path d="M22.463,25.841c0.528,0,0.918-0.429,0.918-0.958v-6.786c0-0.529-0.39-0.958-0.918-0.958c-0.529,0-0.92,0.429-0.92,0.958v6.786C21.543,25.413,21.934,25.841,22.463,25.841z M18.156,25.841c0.529,0,0.919-0.429,0.919-0.958v-6.786c0-0.529-0.39-0.958-0.919-0.958s-0.919,0.429-0.919,0.958v6.786C17.237,25.413,17.627,25.841,18.156,25.841z M13.851,25.841c0.528,0,0.919-0.429,0.919-0.958v-6.786c0-0.529-0.391-0.958-0.919-0.958c-0.529,0-0.919,0.429-0.919,0.958v6.786C12.932,25.413,13.321,25.841,13.851,25.841z M29.426,8.511h-5.327l-2.731-4.396c-0.342-0.593-0.98-0.961-1.666-0.961c-0.336,0-0.668,0.089-0.959,0.258c-0.918,0.529-1.233,1.707-0.689,2.647l1.564,2.451h-7.976l1.58-2.475c0.529-0.917,0.214-2.095-0.704-2.624c-0.292-0.169-0.623-0.258-0.959-0.258c-0.686,0-1.323,0.368-1.655,0.943L7.161,8.511H2.574C1.155,8.511,0,9.667,0,11.086v1.47c0,1.274,0.934,2.525,2.152,2.728l1.931,11.042c0.03,1.394,1.173,2.519,2.573,2.519h18.605c1.401,0,2.545-1.125,2.574-2.52l1.921-11.032C31.019,15.128,32,13.862,32,12.556v-1.47C32,9.667,30.845,8.511,29.426,8.511z M26.615,26.167l-0.009,0.104c0,0.741-0.604,1.344-1.345,1.344H6.656c-0.741,0-1.344-0.603-1.344-1.344L3.407,15.327h25.096L26.615,26.167z M30.77,12.556c0,0.74-0.603,1.541-1.344,1.541H2.574c-0.741,0-1.344-0.8-1.344-1.541v-1.47c0-0.741,0.603-1.344,1.344-1.344h5.271l3.113-5.011c0.184-0.318,0.623-0.439,0.944-0.253c0.33,0.19,0.444,0.614,0.268,0.92L9.396,9.742h12.467l-2.76-4.32c-0.189-0.33-0.076-0.753,0.253-0.944c0.323-0.186,0.756-0.074,0.955,0.27l3.104,4.994h6.011c0.741,0,1.344,0.603,1.344,1.344V12.556z M9.545,25.841c0.528,0,0.918-0.429,0.918-0.958v-6.786c0-0.529-0.39-0.958-0.918-0.958c-0.529,0-0.919,0.429-0.919,0.958v6.786C8.626,25.413,9.016,25.841,9.545,25.841z"/>
      </g>
  </svg>
  )
    },
    "high-converting": {
    mainTitle: "We know how to drive revenue that grows businesses",
    boxTitle: "We know how to drive revenue that grows businesses",
    description: (
        <>
        <p>
        If you invest in Facebook management services, you want to ensure those services help you achieve your desired results. When you choose AlgorithmX as your Facebook marketing company, you’ll work with a team of experts that knows how to drive results. In the past five years, we’ve achieved the following for our clients:
        </p>
        <ul className="mt-4 space-y-2">
            <li>Achieved significant revenue growth</li>
            <li>Secured numerous leads</li>
            <li>Handled countless phone calls</li>
            <li>Managed a vast number of campaigns</li>
        </ul>
        <p className="mt-4">
        Our team of experts has a proven track record of driving results that help clients grow their businesses.
        </p>
        </>
    ),
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-[32px] h-[32px] ">
      <g id="credit-card">
          <path d="M29.018,4.751H2.981C1.337,4.751,0,6.089,0,7.733v16.534c0,1.644,1.337,2.981,2.981,2.981h26.036c1.645,0,2.982-1.338,2.982-2.981V7.733C32,6.089,30.662,4.751,29.018,4.751z M30.638,24.267c0,0.893-0.727,1.62-1.621,1.62H2.981c-0.893,0-1.62-0.727-1.62-1.62V13.603h29.276V24.267z M30.638,10.236H1.362V7.733c0-0.894,0.727-1.62,1.62-1.62h26.036c0.894,0,1.621,0.727,1.621,1.62V10.236z M8.848,22.494H2.724v1.338h6.124V22.494z M19.043,22.494H9.548v1.338h9.495V22.494z"/>
      </g>
  </svg>
    )
},

    "sync-strategy": {
    mainTitle: "We build custom campaigns for our clients",
    boxTitle: "We build custom campaigns for our clients",
    description: (
        <>
        <p className="mt-4">
        When you invest in Facebook business management services, you want to receive a strategy tailored to your business. Having a cookie-cutter strategy won’t produce your desired results. Many companies, however, rely on cookie-cutter strategies because they’re easy to implement.
        </p>
        <p>
        At AlgorithmX, we know our clients are unique, so we deliver a unique campaign for each. Our team takes the time to get to know your business and industry. We’ll analyze your market and competition to get a clearer picture of who you are and where you stand.
        </p>
        <p>
        Armed with that information, we create a custom campaign built for your business to help you maximize leads and revenue with your strategy.
        </p>
        </>
    ),
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-[32px] h-[32px] ">
      <g id="gift" data-iconmelon="e-commerce icons:05fa65d254ada5a9cb5c2f1e8d87f02b">
  <path d="M29.084,7.154h-4.807c0.157-0.146,0.731-0.497,0.866-0.678c0.757-1.01,1.016-2.355,0.677-3.51
c-0.473-1.612-1.773-2.575-3.479-2.575c-1.017,0-1.993,0.371-2.546,0.967c-0.759,0.818-2.841,3.57-3.764,4.8
c-0.923-1.23-3.004-3.982-3.764-4.8c-0.553-0.596-1.528-0.967-2.546-0.967c-1.706,0-3.007,0.962-3.479,2.575
c-0.339,1.155-0.08,2.5,0.677,3.51C7.053,6.657,7.5,7.007,7.657,7.154H2.915C1.308,7.154,0,8.462,0,10.07v5.262h1.356v13.362
c0,1.607,1.308,2.915,2.916,2.915h23.435c1.607,0,2.915-1.308,2.915-2.915V15.332H32V10.07C32,8.462,30.692,7.154,29.084,7.154z
M14.281,30.311H4.272c-0.857,0-1.555-0.76-1.555-1.617V15.401h11.563V30.311z M14.281,13.949H1.362V10.07
c0-0.857,0.696-1.555,1.553-1.555h11.366V13.949z M9.456,6.471c-0.731,0-1.221-0.508-1.447-0.811
c-0.498-0.664-0.678-1.571-0.46-2.312c0.423-1.441,1.661-1.597,2.173-1.597c0.729,0,1.303,0.268,1.548,0.532
c0.623,0.671,2.289,2.854,3.301,4.197C12.948,6.477,10.35,6.471,9.456,6.471z M20.792,2.285c0.245-0.265,0.819-0.532,1.548-0.532
c0.513,0,1.75,0.156,2.173,1.597c0.217,0.74,0.037,1.647-0.46,2.311c-0.227,0.303-0.716,0.811-1.447,0.811
c-0.894,0-3.493,0.006-5.115,0.011C18.504,5.139,20.169,2.956,20.792,2.285z M29.26,28.694c0,0.857-0.697,1.617-1.554,1.617h-10.02
v-14.91H29.26V28.694z M30.638,13.949H17.687V8.515h11.397c0.858,0,1.554,0.698,1.554,1.555V13.949z">
  </path>
</g>
      </svg>
    )
    },
    "cost-effective": {
    mainTitle: "We’re a “do-it-for-me” agency",
    boxTitle: "We’re a “do-it-for-me” agency",
    description: (
        <>
        <p className="mt-4">
        If there’s something there isn’t enough of, it’s time. Finding time to create, manage, and optimize campaigns is difficult, especially when you’re busy handling other business tasks.
        With some marketing companies, you’ll get all the resources and information you need, but they’ll leave you to implement them yourself. So, when you’re busy running your business, you may not have the time to implement their suggestions.
        </p>
        <p className="mt-4">
        That’s how AlgorithmX is different. We’re a “do-it-for-me” agency, meaning we’ll implement optimization tactics, monitor your campaigns, and more. You’ll reap all the benefits of having a Facebook marketing strategy in place without lifting a finger!
        </p>
        </>
    ),
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-[32px] h-[32px] ">
      <g id="gift" data-iconmelon="e-commerce icons:05fa65d254ada5a9cb5c2f1e8d87f02b">
  <path d="M29.084,7.154h-4.807c0.157-0.146,0.731-0.497,0.866-0.678c0.757-1.01,1.016-2.355,0.677-3.51
c-0.473-1.612-1.773-2.575-3.479-2.575c-1.017,0-1.993,0.371-2.546,0.967c-0.759,0.818-2.841,3.57-3.764,4.8
c-0.923-1.23-3.004-3.982-3.764-4.8c-0.553-0.596-1.528-0.967-2.546-0.967c-1.706,0-3.007,0.962-3.479,2.575
c-0.339,1.155-0.08,2.5,0.677,3.51C7.053,6.657,7.5,7.007,7.657,7.154H2.915C1.308,7.154,0,8.462,0,10.07v5.262h1.356v13.362
c0,1.607,1.308,2.915,2.916,2.915h23.435c1.607,0,2.915-1.308,2.915-2.915V15.332H32V10.07C32,8.462,30.692,7.154,29.084,7.154z
M14.281,30.311H4.272c-0.857,0-1.555-0.76-1.555-1.617V15.401h11.563V30.311z M14.281,13.949H1.362V10.07
c0-0.857,0.696-1.555,1.553-1.555h11.366V13.949z M9.456,6.471c-0.731,0-1.221-0.508-1.447-0.811
c-0.498-0.664-0.678-1.571-0.46-2.312c0.423-1.441,1.661-1.597,2.173-1.597c0.729,0,1.303,0.268,1.548,0.532
c0.623,0.671,2.289,2.854,3.301,4.197C12.948,6.477,10.35,6.471,9.456,6.471z M20.792,2.285c0.245-0.265,0.819-0.532,1.548-0.532
c0.513,0,1.75,0.156,2.173,1.597c0.217,0.74,0.037,1.647-0.46,2.311c-0.227,0.303-0.716,0.811-1.447,0.811
c-0.894,0-3.493,0.006-5.115,0.011C18.504,5.139,20.169,2.956,20.792,2.285z M29.26,28.694c0,0.857-0.697,1.617-1.554,1.617h-10.02
v-14.91H29.26V28.694z M30.638,13.949H17.687V8.515h11.397c0.858,0,1.554,0.698,1.554,1.555V13.949z">
  </path>
</g>
      </svg>
    )
    },
    "long-term": {
    mainTitle: "We communicate openly",
    boxTitle: "We communicate openly",
    description: (
        <>
        <p className="mt-4">
        With an average close rate nearing 15%, SEO outperforms traditional marketing, which averages just 1.7%. This dependable
        revenue stream is why many choose the best eCommerce SEO company to sustain long-term growth. Although results build over
        time, the outcome is consistent new business and steady growth, making enterprise eCommerce SEO a smart choice for forward-looking brands.
        </p>
        <p className="mt-4">
        That’s why, at AlgorithmX, we communicate openly with all our clients. We provide you with a dedicated account manager that will handle all communications about your marketing.
        </p>
        <p className="mt-4">
        They’re your go-to person to contact with questions, concerns, or suggestions about your campaign.
        </p>
        <p className="mt-4">
        Your dedicated account manager will also provide you with monthly reporting of your campaign progress. They’ll break down your results and provide helpful insights on improving your campaigns and driving more revenue.
        </p>
        </>
    ),
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-[32px] h-[32px] ">
      <g id="gift" data-iconmelon="e-commerce icons:05fa65d254ada5a9cb5c2f1e8d87f02b">
  <path d="M29.084,7.154h-4.807c0.157-0.146,0.731-0.497,0.866-0.678c0.757-1.01,1.016-2.355,0.677-3.51
c-0.473-1.612-1.773-2.575-3.479-2.575c-1.017,0-1.993,0.371-2.546,0.967c-0.759,0.818-2.841,3.57-3.764,4.8
c-0.923-1.23-3.004-3.982-3.764-4.8c-0.553-0.596-1.528-0.967-2.546-0.967c-1.706,0-3.007,0.962-3.479,2.575
c-0.339,1.155-0.08,2.5,0.677,3.51C7.053,6.657,7.5,7.007,7.657,7.154H2.915C1.308,7.154,0,8.462,0,10.07v5.262h1.356v13.362
c0,1.607,1.308,2.915,2.916,2.915h23.435c1.607,0,2.915-1.308,2.915-2.915V15.332H32V10.07C32,8.462,30.692,7.154,29.084,7.154z
M14.281,30.311H4.272c-0.857,0-1.555-0.76-1.555-1.617V15.401h11.563V30.311z M14.281,13.949H1.362V10.07
c0-0.857,0.696-1.555,1.553-1.555h11.366V13.949z M9.456,6.471c-0.731,0-1.221-0.508-1.447-0.811
c-0.498-0.664-0.678-1.571-0.46-2.312c0.423-1.441,1.661-1.597,2.173-1.597c0.729,0,1.303,0.268,1.548,0.532
c0.623,0.671,2.289,2.854,3.301,4.197C12.948,6.477,10.35,6.471,9.456,6.471z M20.792,2.285c0.245-0.265,0.819-0.532,1.548-0.532
c0.513,0,1.75,0.156,2.173,1.597c0.217,0.74,0.037,1.647-0.46,2.311c-0.227,0.303-0.716,0.811-1.447,0.811
c-0.894,0-3.493,0.006-5.115,0.011C18.504,5.139,20.169,2.956,20.792,2.285z M29.26,28.694c0,0.857-0.697,1.617-1.554,1.617h-10.02
v-14.91H29.26V28.694z M30.638,13.949H17.687V8.515h11.397c0.858,0,1.554,0.698,1.554,1.555V13.949z">
  </path>
</g>
      </svg>
    )
    },
};
const handleTabChange = (key) => {
    if (key !== activeTab) {
        setIsAnimating(true);
        setActiveTab(key);
        setTimeout(() => setIsAnimating(false), 300);
    }
};
const contentClasses = `
transform transition-all duration-300 ease-in-out
${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`;


return (
    <div className='p-4 md:p-8 bg-black text-white md:min-h-screen flex items-center justify-center'>
    <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
        <h2 className={`text-[#2775ff] leading-[18px] font-[18px] ${monsterfont2.className} text-center`}>Why Choose</h2>
            <h1 className={`leading-[40px] text-[36px] md:text-[56px] mt-[20px]  text-center  ${monsterfont1.className} `}>
              ALGORITHMX
            </h1>
            <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-5"></div>

        </div>

        <div className="border border-red-500 w-full h-auto md:h-[550px] max-w-[900px] mx-auto">
       {/* Mobile Layout */}
       <div className="md:hidden flex flex-col h-full">
                    <div className="overflow-x-auto p-4 border-b border-red-500">
                    <div className="flex space-x-6 min-w-min">
                        {Object.entries(content).map(([key, value]) => (
                        <button
                        key={key}
                        className={`flex items-center gap-4 transition-colors duration-300 whitespace-nowrap ${activeTab !== key ? 'group' : ''}`}
                        onClick={() => handleTabChange(key)}
                    >
                        <span className={`w-6 h-6 transition-colors duration-300 ${activeTab === key ? 'text-red-500' : 'text-gray-400 group-hover:text-white'}`}>
                            {value.icon}
                        </span>
                        <span className={`font-helveticaneue text-[15px] leading-[22px]  ${activeTab === key ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {value.mainTitle}
                        </span>
                    </button>
                        ))}
                    </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                    <div key={activeTab} className={contentClasses}>
                    <h3 className={`text-[34px] leading-[42px] font-helveticaneue font-[300] mb-5`}>{content[activeTab].boxTitle}</h3>
                        <div className={`${styles["box-title"]} font-helveticaneue text-semi-white whitespace-pre-line`}>
                        {content[activeTab].description}
                    </div>
                    </div>
                    </div>
                </div>
    
                {/* Desktop Layout */}
                <div className="hidden md:flex h-full p-4">
                    {/* Left Section */}
                    <div className=" flex flex-col space-y-8 pr-14 justify-center max-w-[16rem] mx-auto">
                    {Object.entries(content).map(([key, value]) => (
                        <button
                        key={key}
                        className={`flex items-center gap-2 transition-colors duration-300 text-left ${activeTab !== key ? 'group' : ''}`}
                        onClick={() => handleTabChange(key)}
                    >
                        <span className={`w-6 h-6 transition-colors duration-300 ${activeTab === key ? 'text-red-500' : 'text-gray-400 group-hover:text-white'}`}>
                            {value.icon}
                        </span>
                        <span className={`font-helveticaneue text-[15px] leading-[22px] ml-[8px] ${activeTab === key ? 'text-white' : 'text-[#FFFFFF80] group-hover:text-white'}`}>
                            {value.mainTitle}
                        </span>
                    </button>
                    ))}
                    </div>
    
                    <div className={`relative  ${style["revline"]} flex items-center justify-center`}>
                    <div
                        className="absolute w-1 bg-red-500 transition-all duration-300"
                        style={{
                        top: `${Object.keys(content).indexOf(activeTab) * 5}rem`,
                        height: "4rem",
                        }}
                    />
                    </div>
    
                    {/* Right Content Section */}
                    <div className="flex-1 pl-6 overflow-hidden">
                    <div className="h-full overflow-y-auto pr-4">
                    <div key={activeTab} className={contentClasses}>
                        <div className="transition-all duration-500 transform">
                        <h3 className={`text-[34px] leading-[42px] font-helveticaneue font-[300] `}>{content[activeTab].boxTitle}</h3>
                        <div className={`${styles["box-title"]} font-helveticaneue text-semi-white whitespace-pre-line`}>
                            {content[activeTab].description}
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
        };
    

export default FacebookImplementation;
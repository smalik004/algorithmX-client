'use client';
import './styles.css';
import { Montserrat } from "next/font/google";
import Link from "next/link";



const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const ResponsiveGrid = () => {
  return (
    <div className="container1 min-h-screen bg-black mx-auto  p-4 ">
      <div className='max-w-[1200px] mx-auto'>

      {/* Mobile Layout (5-7-5) - Show on small screens, hide on lg and up */}
      <div className="grid grid-cols-1 xxs:grid-cols-3 lg:hidden mt-3 gap-0 justify-center ">
        {/* First column with 5 items */}
        <div className="flex flex-col items-center justify-center">
        <GridItem image="6188204.png" />
          <GridItem image="5962632.png" />
          <GridItem image="14601160.png" />
          <GridItem image="4288871.png" />
          <GridItem image="992908.png" />
        </div>

        {/* Second column with 7 items */}
        <div className="flex flex-col items-center justify-center">
        <GridItem text="App" />
          <GridItem text="Web" />
          <GridItem text="CMS" />
          <GridItem text="CRM" />
          <GridItem text="ERP" />
          <GridItem text="Blockchain" />
          <GridItem text="Software" />
        </div>

        {/* Third column with 5 items */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="1508883.png" />
          <GridItem image="9872417.png" />
          <GridItem image="8297441.png" />
          <GridItem image="4795542.png" />
          <GridItem image="4795542.png" />
        </div>
      </div>

      {/* Desktop Layout (2-3-2-3-2) - Hide on small screens, show on lg and up */}
      <div className="hidden lg:grid grid-cols-7 mt-3 gap-0 justify-center">
        {/* Column 1 (2 items) */}
        <div className="flex flex-col items-center justify-center mb-[60px]">
          <GridItem image="6188204.png" />
          <GridItem text="App" />
        </div>

        {/* Column 2 (3 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="5962632.png" />
          <GridItem text="Web" />
          <GridItem image="1508883.png" />
        </div>

        {/* Column 3 (2 items) */}
        <div className="flex flex-col items-center justify-center mb-[30px]">
          <GridItem image="14601160.png" />
          <GridItem text="CMS" />
        </div>

        {/* Column 4 (3 items) */}
        <div className="flex flex-col items-center justify-center mt-[62px]">
          <GridItem image="4288871.png" />
          <GridItem text="CRM" />
          <GridItem image="9872417.png" />
        </div>

        {/* Column 5 (2 items) */}
        <div className="flex flex-col items-center justify-center mt-[55 px] ">
          <GridItem image="992908.png" />
          <GridItem text="ERP" />
        </div>

        {/* Column 6 (3 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="10229073.png" />
          <GridItem text="Blockchain" />
          <GridItem image="8297441.png" />
        </div>

        {/* Column 7 (2 items) */}
        <div className="flex flex-col items-center justify-center mb-[50px]">
          <GridItem image="4795542.png" />
          <GridItem text="Software" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

// GridItem component for reusability
const GridItem = ({ image, text }) => {
  const hrefMap = {
    "App": "/app-development",
    "Web": "/web-development",
    "CMS": "/cms",
    "CRM": "/crm",
    "ERP": "/erp",
    "Blockchain": "/blockchain",
    "Software": "/software"
  };

  return (
    <div
      className={`p-2 m-0.5 text-center rounded-[20px] w-[100px] h-[100px] md:w-[137px] md:h-[137px] flex items-center justify-center  
      ${image ? "bg-[#1a1a1a]" : "bg-[#0d0d0d]"}`}
    >
      {image ? (
        <img 
          src={`/images/${image}`} 
          alt="grid item" 
          className="w-[68px] h-[68px] object-cover m-0 p-0 filter grayscale"
        />
      ) : (
        <Link href={hrefMap[text] || "#"} legacyBehavior>
          <a className="font-helveticaneue text-[20px] md:text-[22px] leading-[1.1] font-[400] text-[#F9AD04] ">
            {text}
          </a>
        </Link>
      )}
    </div>
  );
};


export default ResponsiveGrid;
'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 'content', name: 'Content', color: 'yellow' },
    { id: 'architecture', name: 'Architecture', color: 'lime' },
    { id: 'html', name: 'HTML', color: 'pink' },
    { id: 'reputation', name: 'Reputation', color: 'purple' },
    { id: 'links', name: 'Links', color: 'amber' },
    { id: 'user', name: 'User', color: 'cyan' },
    { id: 'toxins', name: 'Toxins', color: 'emerald' },
    { id: 'local', name: 'Local', color: 'green' },
    { id: 'publishing', name: 'Publishing', color: 'blue' },
    { id: 'ecommerce', name: 'Ecommerce', color: 'gray' },
  ];

  // Define content descriptions
  const categoryDescriptions = {
    content: "where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results)",
    architecture: "where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results)",
    html: "HTML elements like titles, headings, and meta descriptions are critical for SEO as they help search engines understand your content and display it properly in search results.",
    reputation: "Your site's reputation affects how search engines rank your content. This includes factors like domain authority, trustworthiness, and the quality of sites linking to you.",
    links: "Links are crucial for SEO - both internal links between your own pages and external links from other sites. They help search engines discover content and determine its importance.",
    user: "User experience signals like page speed, mobile-friendliness, and engagement metrics significantly impact SEO rankings.",
    toxins: "Toxic elements that can harm your SEO include keyword stuffing, hidden text, duplicate content, and other manipulative practices that violate search engine guidelines.",
    local: "Local SEO factors help businesses appear in location-based searches. This includes optimizing for Google Business Profile, local keywords, and location-specific content.",
    publishing: "Publishing practices affect how your content is discovered and indexed. This includes content freshness, structured data, and content distribution strategies.",
    ecommerce: "Ecommerce SEO involves optimizing product pages, category structures, and managing things like reviews and inventory to improve visibility in product searches."
  };

  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  const handleOutsideClick = () => {
    if (activeCategory) {
      setActiveCategory(null);
    }
  };

  // Function to get color classes based on category
  const getElementStyle = (category) => {
    const colorMap = {
      'content': 'bg-black border-[#ECBE59] text-[#ECBE59]',
      'architecture': 'bg-black border-[#dee955] text-[#dee955]',
      'html': 'bg-black border-[#EC77A3] text-[#EC77A3]',
      'reputation': 'bg-black border-[#C686CC] text-[#C686CC]',
      'links': 'bg-black border-[#FD8572] text-[#FD8572]',
      'user': 'bg-black border-[#4CDDF3] text-[#4CDDF3]',
      'toxins': 'bg-black border-[#3AEFB6] text-[#3AEFB6]',
      'local': 'bg-black border-[#52EE61] text-[#52EE61]',
      'publishing': 'bg-black border-[#759FFF] text-[#759FFF]',
      'ecommerce': 'bg-black border-[#CCCCCC] text-[#CCCCCC]',
    };
    
    return `${colorMap[category] || 'bg-black border-gray-600 text-gray-200'} ${
      activeCategory && activeCategory !== category ? 'opacity-20' : 'opacity-100'
    }`;
  };

  // Get button color class based on category
  const getButtonColorClass = (category) => {
    const colorMap = {
      'content': 'text-[#ECBE59] border-[#ECBE59]',
      'architecture': 'text-[#dee955] border-[#dee955]',
      'html': 'text-[#EC77A3] border-[#EC77A3]',
      'reputation': 'text-[#C686CC] border-[#C686CC]',
      'links': 'text-[#FD8572] border-[#FD8572]',
      'user': 'text-[#4CDDF3] border-[#4CDDF3]',
      'toxins': 'text-[#3AEFB6] border-[#3AEFB6]',
      'local': 'text-[#52EE61] border-[#52EE61]',
      'publishing': 'text-[#759FFF] border-[#759FFF]',
      'ecommerce': 'text-[#CCCCCC] border-[#CCCCCC]',
    };
    
    return colorMap[category] || 'text-gray-300 border-gray-600';
  };

  // Get text color class based on category with no border
  const getTextColorClass = (category) => {
    const colorMap = {
      'content': 'text-[#ECBE59]',
      'architecture': 'text-[#dee955]',
      'html': 'text-[#EC77A3]',
      'reputation': 'text-[#C686CC]',
      'links': 'text-[#FD8572]',
      'user': 'text-[#4CDDF3]',
      'toxins': 'text-[#3AEFB6]',
      'local': 'text-[#52EE61]',
      'publishing': 'text-[#759FFF]',
      'ecommerce': 'text-[#CCCCCC]',
    };
    
    return colorMap[category] || 'text-gray-300';
  };

  // Define the elements for the SEO periodic table
  const tableElements = [
    // Row 1
    { id: 'Qu', name: 'QUALITY', category: 'content', position: [0, 0], number: '45',description: 'CONTENT'  },
    { id: 'He', name: 'Helium', category: 'publishing', position: [17, 0], number: '2',description: '4.0026'  },
    
    // Row 2
    { id: 'Rs', name: 'RESEARCH', category: 'content', position: [0, 1], number: '46',description: 'CONTENT'  },
    { id: 'Be', name: 'Beryllium', category: 'architecture', position: [1, 1], number: '4',description: '9.0122'  },
    { id: 'B', name: 'Boron', category: 'toxins', position: [12, 1], number: '5',description: '10.81' },
    { id: 'C', name: 'Carbon', category: 'local', position: [13, 1], number: '6',description: '12.011' },
    { id: 'N', name: 'Nitrogen', category: 'local', position: [14, 1], number: '7',description: '14.007' },
    { id: 'O', name: 'Oxygen', category: 'local', position: [15, 1], number: '8',description: '15.999' },
    { id: 'F', name: 'Flourine', category: 'local', position: [16, 1], number: '9',description: '18.998' },
    { id: 'Ne', name: 'Neon', category: 'publishing', position: [17, 1], number: '10',description: '20.18' },
    
    // Row 3
    { id: 'An', name: 'ANSWERS', category: 'content', position: [0, 2], number: '44',description: 'CONTENT' },
    { id: 'Mg', name: 'Magnesium', category: 'architecture', position: [1, 2], number: '12',description: '20.18' },
    { id: 'Al', name: 'Aluminium', category: 'user', position: [12, 2], number: '13',description: '20.18' },
    { id: 'Si', name: 'Silicon', category: 'toxins', position: [13, 2], number: '14',description: '20.18' },
    { id: 'P', name: 'Phosphorus', category: 'local', position: [14, 2], number: '15',description: '20.18' },
    { id: 'S', name: 'Sulfur', category: 'local', position: [15, 2], number: '16',description: '20.18' },
    { id: 'Cl', name: 'Chlorine', category: 'local', position: [16, 2], number: '17' ,description: '20.18'},
    { id: 'Ar', name: 'Argon', category: 'publishing', position: [17, 2], number: '18',description: '20.18' },
    
    // Row 4
    { id: 'Dt', name: 'DEPTH', category: 'content', position: [0, 3], number: '44',description: 'CONTENT' },
    { id: 'Ca', name: 'Calcium', category: 'architecture', position: [1, 3], number: '20',description: '20.18' },
    { id: 'Ga', name: 'Gallium', category: 'user', position: [12, 3], number: '31',description: '20.18' },
    { id: 'Ge', name: 'Germanium', category: 'toxins', position: [13, 3], number: '32',description: '20.18' },
    { id: 'As', name: 'Arsenic', category: 'toxins', position: [14, 3], number: '33',description: '20.18' },
    { id: 'Se', name: 'Selenium', category: 'local', position: [15, 3], number: '34',description: '20.18' },
    { id: 'Br', name: 'Bromine', category: 'local', position: [16, 3], number: '35' ,description: '20.18'},
    { id: 'Kr', name: 'Krypton', category: 'publishing', position: [17, 3], number: '36',description: '20.18' },
    
    // Row 5
    { id: 'Kw', name: 'KEYWORDS', category: 'content', position: [0, 4], number: '43',description: 'CONTENT' },
    { id: 'Sr', name: 'Strontium', category: 'architecture', position: [1, 4], number: '38',description: '20.18' },
    { id: 'In', name: 'Indium', category: 'user', position: [12, 4], number: '49',description: '20.18' },
    { id: 'Sn', name: 'Tin', category: 'user', position: [13, 4], number: '50',description: '20.18' },
    { id: 'Sb', name: 'Antimony', category: 'toxins', position: [14, 4], number: '51',description: '20.18' },
    { id: 'Te', name: 'Tellurium', category: 'toxins', position: [15, 4], number: '52',description: '20.18' },
    { id: 'I', name: 'Iodine', category: 'local', position: [16, 4], number: '53',description: '20.18' },
    { id: 'Xe', name: 'Xenon', category: 'publishing', position: [17, 4], number: '54' ,description: '20.18'},
    
    // Row 6 
    { id: 'Fr', name: 'FRESHNESS', category: 'content', position: [0, 5], number: '87',description: 'CONTENT' },
    { id: 'Ba', name: 'Barium', category: 'architecture', position: [1, 5], number: '56',description: '20.18' },
    { id: 'Y', name: 'Yttrium', category: 'html', position: [2, 5], number: '39',description: '20.18' },
    { id: 'Hf', name: 'Hafnium', category: 'links', position: [3, 5], number: '72',description: '20.18' },
    { id: 'Ta', name: 'Tantalum', category: 'links', position: [4, 5], number: '73',description: '20.18' },
    { id: 'W', name: 'Tungsten', category: 'links', position: [5, 5], number: '74' ,description: '20.18'},
    { id: 'Re', name: 'Rhenium', category: 'links', position: [6, 5], number: '75',description: '20.18' },
    { id: 'Os', name: 'Osmium', category: 'links', position: [7, 5], number: '76' ,description: '20.18'},
    { id: 'Ir', name: 'Iridium', category: 'links', position: [8, 5], number: '77',description: '20.18' },
    { id: 'Pt', name: 'Platinum', category: 'links', position: [9, 5], number: '78',description: '20.18' },
    { id: 'Au', name: 'Gold', category: 'links', position: [10, 5], number: '79',description: '20.18' },
    { id: 'Hg', name: 'Mercury', category: 'links', position: [11, 5], number: '80',description: '20.18' },
    { id: 'Tl', name: 'Thallium', category: 'user', position: [12, 5], number: '81',description: '20.18' },
    { id: 'Pb', name: 'Lead', category: 'user', position: [13, 5], number: '82' ,description: '20.18'},
    { id: 'Bi', name: 'Bismuth', category: 'user', position: [14, 5], number: '83' ,description: '20.18'},
    { id: 'Po', name: 'Polonium', category: 'user', position: [15, 5], number: '84' ,description: '20.18'},
    { id: 'At', name: 'Astatine', category: 'toxins', position: [16, 5], number: '85' ,description: '20.18'},
    { id: 'Rn', name: 'Radon', category: 'publishing', position: [17, 5], number: '86',description: '20.18' },

    // Row 7
    { id: 'Mm', name: 'MULTIMEDIA', category: 'content', position: [0, 6], number: '88',description: 'CONTENT' },
    { id: 'Ra', name: 'Radium', category: 'architecture', position: [1, 6], number: '88',description: '20.18' },
    { id: 'Zr', name: 'Zirconium', category: 'reputation', position: [2, 6], number: '40',description: '20.18' },
    { id: 'Rf', name: 'Rutherfordium', category: 'links', position: [3, 6], number: '104' ,description: '20.18'},
    { id: 'Db', name: 'Dubnium', category: 'links', position: [4, 6], number: '105' ,description: '20.18'},
    { id: 'Sg', name: 'Seaborgium', category: 'links', position: [5, 6], number: '106',description: '20.18' },
    { id: 'Bh', name: 'Bohrium', category: 'links', position: [6, 6], number: '107' ,description: '20.18'},
    { id: 'Hs', name: 'Hassium', category: 'links', position: [7, 6], number: '108',description: '20.18' },
    { id: 'Mt', name: 'Meitnerium', category: 'ecommerce', position: [8, 6], number: '109',description: '20.18' },
    { id: 'Ds', name: 'Darmstadtium', category: 'ecommerce', position: [9, 6], number: '110' ,description: '20.18'},
    { id: 'Rg', name: 'Roentgenium', category: 'ecommerce', position: [10, 6], number: '111',description: '20.18' },
    { id: 'Cn', name: 'Copernicium', category: 'links', position: [11, 6], number: '112',description: '20.18' },
    { id: 'Nh', name: 'Nihonium', category: 'ecommerce', position: [12, 6], number: '113',description: '20.18' },
    { id: 'Fl', name: 'Flerovium', category: 'user', position: [13, 6], number: '114' ,description: '20.18'},
    { id: 'Mc', name: 'Moscovium', category: 'ecommerce', position: [14, 6], number: '115',description: '20.18' },
    { id: 'Lv', name: 'Livermorium', category: 'ecommerce', position: [15, 6], number: '116',description: '20.18' },
    { id: 'Ts', name: 'Tennessine', category: 'ecommerce', position: [16, 6], number: '117',description: '20.18' },
    { id: 'Og', name: 'Oganesson', category: 'ecommerce', position: [17, 6], number: '118',description: '20.18' },
  ];

  return (
    <div className="min-h-screen bg-black text-white" onClick={handleOutsideClick}>
      <Head>
        <title>SEO Periodic Table</title>
        <meta name="description" content="Interactive SEO Periodic Table" />
        
      </Head>

      <main className="p-8 max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">SEO Periodic Table</h1>
        
        {/* Periodic Table Grid with overlaid elements */}
        <div className="relative w-full h-full mb-4" onClick={(e) => e.stopPropagation()}>
          <div className="grid grid-cols-18 gap-1">
            {/* Create a grid with empty cells */}
            {Array.from({ length: 7 * 18 }).map((_, index) => {
              const col = index % 18;
              const row = Math.floor(index / 18);
              
              // Category row (row 0, columns 2-17)
              if (row === 0 && col >= 2 && col <= 16) {
                return (
                  <div key={index} className="aspect-square bg-black">
                    {col === 2 && (
                      <div className="absolute col-start-2 col-end-17 flex flex-wrap gap-[30px]" style={{ top: '20px', left: '110px', right: '35px' }}>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`px-[6px] py-[8px] rounded-[5px]  text-[10.041px] rounded-md border  ${getButtonColorClass(category.id)} bg-black ${
                              activeCategory === category.id ? 'font-bold' : ''
                            }`}
                            onClick={() => handleCategoryClick(category.id)}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              // Description area (rows 2-4, columns 3-11)
              if (activeCategory && row >= 1 && row <= 4 && col >= 3 && col <= 11) {
                // Only render once at the first cell of the area
                if (row === 1 && col === 3) {
                  return (
                    <div key={index} className="aspect-square relative">
                      <div 
                        className={`absolute ${getTextColorClass(activeCategory)} bg-black rounded p-2`} 
                        style={{ 
                          top: '0', 
                          left: '-62px', 
                          width: 'calc(934% + 8px)', 
                          height: 'calc(400% + 3px)',
                          zIndex: 10,
                          overflowY: 'auto'
                        }}
                      >
                        <p className="text-md leading-tight">{categoryDescriptions[activeCategory]}</p>
                      </div>
                    </div>
                  );
                } else {
                  // For the other cells in the description area, render empty cells
                  return <div key={index} className="aspect-square"></div>;
                }
              }
              
              // Find if there's an element at this position
              const element = tableElements.find(el => el.position[0] === col && el.position[1] === row);
              
              if (element) {
                return (
                  <div
                    key={index}
                    className={`element-box border-[2px] p-0.5  flex flex-col ${getElementStyle(element.category)}`}
                    style={{ zIndex: 5 }}
                  >
                    <div className="text-[7.68px] font-helveticaneue ">{element.number}</div>
                    <div className="flex flex-col h-full justify-center items-center text-center">
                      <div className="text-[26.112px] font-helveticaneue ">{element.id}</div>
                      <div className="text-[10.752px] font-helveticaneue ">{element.name}</div>
                      <div className="text-[7.68px] ">{element.description}</div>
                    </div>
                  </div>
                );
              } else {
                // Empty cell
                return <div key={index} className="aspect-square"></div>;
              }
            })}
          </div>
        </div>
      </main>

      {/* Add custom CSS for text sizes and grid */}
      <style jsx global>{`
        .text-tiny {
          font-size: 0.55rem;
          line-height: 0.75rem;
        }
        
        /* Create a grid with 18 equal columns */
        .grid-cols-18 {
          grid-template-columns: repeat(18, minmax(0, 1fr));
        }
        
        /* Improve element hover states */
        .aspect-square {
          transition: all 0.2s ease-in-out;
        }
        
         /* Set fixed size for each element box */
  .element-box {
    width: 57.68px;
    height: 81.68px;
  }
      `}</style>
    </div>
  );
}
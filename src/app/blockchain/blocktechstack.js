import React from 'react';
import styles from '../front-end/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});


const BlockTechStack = () => {
  const technologies = [
    {
        title: 'Frameworks',
        items: [
          { name: 'Bitcoin', icon: 'images/bitcoin.png' },
          { name: 'Ethereum', icon: '/images/ethereum.png' },
          { name: 'Solana', icon: '/images/solana.png' },
          { name: 'Avalanche', icon: '/images/avalanche.png' },
          { name: 'Stellar', icon: '/images/stellar.png' },
          { name: 'Apache Hbase', icon: '/images/fantom.png' },
        ]
      },
    {
      title: 'Front-end',
      items: [
        { name: 'HTML5', icon: '/images/HTML5.png' },
        { name: 'CSS3', icon: '/images/CSS3 (1).png' },
        { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
        { name: 'Angular', icon: '/images/Angular (1).png' },
        { name: 'React', icon: '/images/React.png' },
        { name: 'meteor', icon: '/images/meteor.png' },
        { name: 'Vuejs', icon: '/images/Vuejs.png' },
      ]
    },
    {
        title: 'Back-end',
        items: [
          { name: 'Python', icon: '/images/Python.png' },
          { name: 'ASP.NET', icon: '/images/aspnet.png' },
          { name: 'Nodejs', icon: '/images/Nodejs.png' },
          { name: 'PHP', icon: '/images/PHP.png' },
          { name: 'Java', icon: '/images/Java (1).png' },
          { name: 'Go', icon: '/images/Go (1).png' },
        ]
      },
    {
      title: 'Smart Contract',
      items: [
        { name: 'Solidity', icon: '/images/solidity.png' },
        { name: 'Rust', icon: '/images/rust.png' },
        { name: 'Vyper', icon: '/images/vyper.png' },
      ]
    },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="text-center mb-12">
        <p className={` ${styles["tech-title"]} ${monsterfont1.className} mb-2`}>WE LEVERAGE</p>
        <h1 className={` ${styles["tech-subtitle"]} ${monsterfont2.className  }`}>TECH STACK</h1>
        <h2 className={` ${styles["tech-subtitle"]} ${monsterfont.className  }`}>EXPERTISE</h2>
        <div className="flex justify-center mt-4">
          <div className="h-[2px] w-[35px] bg-[#2775ff]"></div>
        </div>
      </div>
      

      <div className="max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
         <div 
         key={index} 
         className="mb-8 md:mb-12 pb-8"
         style={{
                 borderBottom: index !== technologies.length - 1 ? "1px solid #dee2e6" : "none"
               }}
       >
            <div className="grid grid-cols-[1fr,2fr] md:grid-cols-[200px,1fr] gap-4 items-start">
              <h3 className={` ${styles["tech-subtitle1"]} ${monsterfont.className  }`}>{tech.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`${styles["box"]} p-3 flex items-center gap-2 hover:bg-black transition-colors`}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-6 h-6"
                    />
                    <span className={`${styles["tech-description"]} ${monsterfont.className} text-semi-white`}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockTechStack;
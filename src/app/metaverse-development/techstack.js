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



const MetaverseTechStack = () => {
  const technologies = [
    {
      title: 'AR/VR Development',
      items: [
        { name: 'Unity', icon: '/images/HTML5.png' },
        { name: 'ARKit', icon: '/images/CSS3 (1).png' },
        { name: 'ARCore', icon: '/images/JavaScript (1).png' },
        { name: 'Unreal Engine', icon: '/images/SCSS.png' }
      ]
    },
    {
        title: '3D Content',
        items: [
          { name: 'Blender', icon: '/images/Python.png' },
          { name: '3ds Max', icon: '/images/Vuejs.png' },
          { name: 'Houdini', icon: '/images/aspnet.png' },
          { name: 'Player ME', icon: '/images/Csharp (1).png' },
        ]
    },
    {
      title: 'NFT/Blockchain',
      items: [
        { name: 'Solidity', icon: '/images/Bootstrap (1).png' },
        { name: 'Ethereum', icon: '/images/Material-UI.png' },
        { name: 'ERC-721', icon: '/images/Tailwind-CSS.png' },
        { name: 'Solana', icon: '/images/Tailwind-CSS.png' },
        { name: 'OpenSea', icon: '/images/Tailwind-CSS.png' },
        { name: 'Binance NFT', icon: '/images/Tailwind-CSS.png' },
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="text-center mb-12">
        <p className={` ${styles["tech-title"]} ${monsterfont1.className} mb-2`}>WE LEVERAGE</p>
        <h1 className={` ${styles["tech-subtitle"]} ${monsterfont2.className  }`}>TECH STACK</h1>
        <h2 className={` ${styles["tech-subtitle"]} ${monsterfont.className  }`}>EXPERTISE</h2>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {technologies.map((tech, index) => (
          <div 
                              key={index} 
                              className="mb-8 md:mb-12 pb-8"
                              style={{
                                borderBottom: index !== technologies.length - 1 ? "1px solid #dee2e6" : "none"
                              }}
                    >
            <div className="grid grid-cols-[1fr,2fr] md:grid-cols-[150px,1fr] gap-4 items-start">
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

export default MetaverseTechStack;
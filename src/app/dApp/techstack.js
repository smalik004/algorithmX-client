import React from 'react';
import styles from '../back-end/style.module.css';
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


const DAppTechStack = () => {
  const technologies = [
    {
      title: 'Blockchain',
      items: [
        { name: 'Remix', icon: '/images/Python.png' },
        { name: 'Truffle', icon: '/images/Vuejs.png' },
        { name: 'Blockstack', icon: '/images/aspnet.png' },
        { name: 'Zeppelin', icon: '/images/Csharp (1).png' },
        { name: 'Ethereum', icon: '/images/Django.png' },
        { name: 'TESTNET', icon: '/images/PHP (1).png' },
      ]
    },
    {
      title: 'Backend Programming ',
      items: [
        { name: 'Golang', icon: '/images/MSSQL (1).png' },
        { name: 'Solidity', icon: '/images/MySQL.png' },
        { name: 'Nodejs', icon: '/images/MongoDB.png' },
        { name: 'Php', icon: '/images/Cassandra.png' },
        { name: 'Javascript', icon: '/images/Neo4j.png' },
        { name: 'Java', icon: '/images/Redis.png' },
      ]
    },
    {
      title: 'Frontend Development',
      items: [
        { name: 'Angular', icon: '/images/Expressjs.png' },
        { name:'Bootstrap', icon: '/images/Django REST Framework.png' },
        { name: 'jQuery', icon: '/images/Apollo Server.png' },
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

export default DAppTechStack;
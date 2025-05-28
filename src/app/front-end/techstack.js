import React from 'react';
import styles from './style.module.css';
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



const TechStack = () => {
  const technologies = [
    {
      title: 'Core Technologies',
      items: [
        { name: 'HTML5', icon: '/images/HTML5.png' },
        { name: 'CSS3', icon: '/images/CSS3 (1).png' },
        { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
        { name: 'SCSS', icon: '/images/SCSS.png' },
        { name: 'TypeScript', icon: '/images/TypeScript.png' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'Angular', icon: '/images/Angular (1).png' },
        { name: 'Next', icon: '/images/Nextjs.png' },
        { name: 'React', icon: '/images/React.png' },
        { name: 'Vue', icon: '/images/Vuejs.png' },
        { name: 'Nuxt', icon: '/images/Nuxtjs.png' },
        { name: 'Svelte', icon: '/images/Svelte.png' }
      ]
    },
    {
      title: 'Styling & UI Management',
      items: [
        { name: 'Bootstrap', icon: '/images/Bootstrap (1).png' },
        { name: 'Material-UI', icon: '/images/Material-UI.png' },
        { name: 'Tailwind CSS', icon: '/images/Tailwind-CSS.png' }
      ]
    },
    {
      title: 'Package Manager',
      items: [
        { name: 'npm', icon: '/images/npm.png' },
        { name: 'pnpm', icon: '/images/pnpm.png' }
      ]
    },
    {
      title: 'Version Control',
      items: [
        { name: 'GIT', icon: '/images/GIT.png' },
        { name: 'GITHUB', icon: '/images/GITHUB (1).png' }
      ]
    },
    {
      title: 'Development Environment',
      items: [
        { name: 'Visual Code', icon: '/images/visual code.png' },
        { name: 'Visual Studio IDE', icon: '/images/Visual Studio IDE.png' },
        { name: 'Dreamweaver', icon: '/images/Dreamviewer.png' }
      ]
    },
    {
      title: 'APIs & Data Handling',
      items: [
        { name: 'Axios', icon: '/images/Axios.png' },
        { name: 'GraphQL', icon: '/images/GraphQL.png' },
        { name: 'Restful-APIs', icon: '/images/Restful-APIs.png' }
      ]
    }
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

export default TechStack;
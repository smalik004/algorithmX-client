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


const AppTechStack = () => {
  const technologies = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'objective C', icon: '/images/objectiveC.png' },
        { name: 'Kotlin', icon: '/images/kotlin.png' },
        { name: 'Swift', icon: '/images/swift.png' },
        { name: 'Java', icon: '/images/java.png' },
        { name: 'C#', icon: '/images/c-sharp.png' },
      ]
    },
    {
      title: 'Enviroments & Frameworks',
      items: [
        { name: 'IOS SDK', icon: '/images/ios-sdk.png' },
        { name: 'Andriod Studio', icon: '/images/android-studio.png' },
        { name: 'React Native', icon: '/images/react.png' },
        { name: 'Xamarin', icon: '/images/xamarin.png' },
        { name: 'Flutter', icon: '/images/flutter.png' },
        { name: 'Xcode', icon: '/images/xcode.png' },
        { name: 'Ionic', icon: '/images/ionic.png' },
      ]
    },

   
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="text-center mb-12">
        <p className={` ${styles["tech-title"]} ${monsterfont1.className} mb-2`}>WE LEVERAGE</p>
        <h1 className={` ${styles["tech-subtitle"]} ${monsterfont2.className  }`}>TECH STACK</h1>
        <h2 className={` ${styles["tech-subtitle"]} ${monsterfont.className  }`}>EXPERTISE</h2>
        <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-5"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className={`pb-8 ${index !== technologies.length - 1 ? 'border-b border-white' : ''} mb-[20px]`}
          >
            <div className="grid grid-cols-2 md:grid-cols-[200px,1fr] gap-10 items-start">
              <h3 className={` ${styles["tech-subtitle1"]} ${monsterfont.className  }`}>{tech.title}</h3>
              
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {tech.items.map((item, itemIndex) => (
                <div 
                key={itemIndex} 
                className={`${styles["box"]} inline-flex items-center gap-2 hover:bg-black transition-colors`}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-6 h-6"
                />
                <span className={`${styles["tech-description"]} ${monsterfont.className} text-semi-white`}>
                  {item.name}
                </span>
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

export default AppTechStack;
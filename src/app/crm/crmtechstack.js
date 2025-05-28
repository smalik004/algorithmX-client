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


const CRMTechStack = () => {
  const technologies = [
    {
      title: 'Custom Development',
      items: [
        { name: 'HTML5', icon: '/images/HTML5.png' },
        { name: 'CSS3', icon: '/images/CSS3 (1).png' },
        { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
        { name: 'Angular', icon: '/images/Angular (1).png' },
        { name: 'Python', icon: '/images/Python.png' },
        { name: 'ASP.NET', icon: '/images/aspnet.png' },
        { name: 'Nodejs', icon: '/images/Nodejs.png' },
        { name: 'React', icon: '/images/React.png' },
        { name: 'PHP', icon: '/images/PHP.png' },
        { name: 'Java', icon: '/images/Java (1).png' },
        { name: 'meteor', icon: '/images/meteor.png' },
        { name: 'Go', icon: '/images/Go (1).png' },
        { name: 'Vuejs', icon: '/images/Vuejs.png' },
      ]
    },
    {
      title: 'Database Management',
      items: [
        { name: 'MSSQL', icon: '/images/MSSQL (1).png' },
        { name: 'MySQL', icon: '/images/MySQL.png' },
        { name: 'MongoDB', icon: '/images/MongoDB.png' },
        { name: 'Cassandra', icon: '/images/Cassandra.png' },
        { name: 'Google Cloud Storage', icon: '/images/google-cloud-storage.png' },
        { name: 'Oracle', icon: '/images/oracle.png' },
        { name: 'hive', icon: '/images/hive.png' },
      ]
    },
    {
      title: 'API & Integrations',
      items: [
        { name: 'Google Map', icon: '/images/google-map-icon.png' },
        { name: 'REST API', icon: '/images/rest-api-icon.png' },
        { name: 'postman', icon: '/images/postman-icon.png' },
      ]
    },
    {
      title: 'Devops',
      items: [
        { name: 'Google Developer', icon: '/images/google-developer-tool.png' },
        { name: 'Azure Devops', icon: '/images/azure-devops.png' },
        { name: 'GitLab CI', icon: '/images/GitLab-CI.png' },
        { name: 'Docker', icon: '/images/docker-icon.png' },
        { name: 'Jenkins', icon: '/images/Jenkins.png' },
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

export default CRMTechStack;
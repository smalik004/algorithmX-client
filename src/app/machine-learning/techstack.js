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



const MLTechStack = () => {
  const technologies = [
    {
        title: 'AI ML Frameworks',
        items: [
          { name: 'TenserFlow', icon: '/images/HTML5.png' },
          { name: 'Keras', icon: '/images/CSS3 (1).png' },
          { name: 'LangChain', icon: '/images/JavaScript (1).png' },
          { name: 'LlamaIndex', icon: '/images/SCSS.png' },
          { name: 'RASA', icon: '/images/TypeScript.png' },
          { name: 'Caffe', icon: '/images/TypeScript.png' },
          { name: 'Xgboost', icon: '/images/TypeScript.png' },
          { name: 'MxNet', icon: '/images/TypeScript.png' },
          { name: 'AutoML', icon: '/images/TypeScript.png' },
          { name: 'CNTK', icon: '/images/TypeScript.png' },
        ]
    },
    {
        title: 'Algorithms',
        items: [
          { name: 'Regression Models', icon: '/images/HTML5.png' },
          { name: 'KNN', icon: '/images/CSS3 (1).png' },
          { name: 'SVM', icon: '/images/JavaScript (1).png' },
          { name: 'Random Forest', icon: '/images/SCSS.png' },
          { name: 'Decision Tree', icon: '/images/TypeScript.png' },
          { name: 'Tesseract', icon: '/images/TypeScript.png' },
          { name: 'YOLO', icon: '/images/TypeScript.png' },
          { name: 'LLMs', icon: '/images/TypeScript.png' },
          { name: 'Stable diffusion', icon: '/images/TypeScript.png' },
          { name: 'DALL-E-2', icon: '/images/TypeScript.png' },
          { name: 'Midjourney', icon: '/images/TypeScript.png' },
          { name: 'Imagen', icon: '/images/TypeScript.png' },
          { name: 'GLIDE', icon: '/images/TypeScript.png' },
          { name: 'Whisper', icon: '/images/TypeScript.png' },
          { name: 'BARK', icon: '/images/TypeScript.png' },
          
        ]
    },
    {
        title: 'NLP Tech',
        items: [
          { name: 'NLTK', icon: '/images/HTML5.png' },
          { name: 'Spacy', icon: '/images/CSS3 (1).png' },
          { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
          { name: 'SCSS', icon: '/images/SCSS.png' },
          { name: 'TypeScript', icon: '/images/TypeScript.png' }
        ]
    },
    {
        title: 'Neural Networks',
        items: [
          { name: 'ANN', icon: '/images/HTML5.png' },
          { name: 'CNN', icon: '/images/CSS3 (1).png' },
          { name: 'RNN', icon: '/images/JavaScript (1).png' },
          { name: 'LSTM', icon: '/images/SCSS.png' },
          { name: 'GAN', icon: '/images/TypeScript.png' },
          { name: 'DAQ', icon: '/images/TypeScript.png' },
          { name: 'Modular', icon: '/images/TypeScript.png' },
          { name: 'Feedforward', icon: '/images/TypeScript.png' },
        ]
    },
    {
      title: 'Frontend',
      items: [
        { name: 'HTML5', icon: '/images/HTML5.png' },
        { name: 'CSS3', icon: '/images/CSS3 (1).png' },
        { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
        { name: 'SCSS', icon: '/images/SCSS.png' },
        { name: 'TypeScript', icon: '/images/TypeScript.png' },
        { name: 'Vue', icon: '/images/Vuejs.png' },
        { name: 'React', icon: '/images/React.png' },

      ]
    },
    {
        title: 'Backend',
        items: [
          { name: 'Python', icon: '/images/Python.png' },
          { name: 'Java', icon: '/images/Vuejs.png' },
          { name: 'ASP.NET', icon: '/images/aspnet.png' },
          { name: 'C#', icon: '/images/Csharp (1).png' },
          { name: 'Django', icon: '/images/Django.png' },
          { name: 'PHP', icon: '/images/PHP (1).png' },
          { name: 'Ruby', icon: '/images/Ruby.png' },
          { name: 'Node.js', icon: '/images/Nodejs.png' },
          { name: 'Flask', icon: '/images/Flask.png' },
          { name: 'Go', icon: '/images/Go (1).png' },
        ]
    },
    {
      title: 'Mobile',
      items: [
        { name: 'Android', icon: '/images/Bootstrap (1).png' },
        { name: 'Cordova', icon: '/images/Material-UI.png' },
        { name: 'Flutter', icon: '/images/Tailwind-CSS.png' },
        { name: 'PWA', icon: '/images/Tailwind-CSS.png' },
        { name: 'ios', icon: '/images/Tailwind-CSS.png' },
        { name: 'Xamarin', icon: '/images/Tailwind-CSS.png' },
        { name: 'ReactNative', icon: '/images/Tailwind-CSS.png' },
      ]
    },
    {
      title: 'Big Data',
      items: [
        { name: 'Amazon Kinsesis', icon: '/images/npm.png' },
        { name: 'Apache Storm', icon: '/images/pnpm.png' },
        { name: 'Azure Event', icon: '/images/Tailwind-CSS.png' },
        { name: 'Kafka', icon: '/images/Tailwind-CSS.png' },
        { name: 'Spark', icon: '/images/Tailwind-CSS.png' },
        { name: 'Flink', icon: '/images/Tailwind-CSS.png' },
        { name: 'Rabbit MQ', icon: '/images/Tailwind-CSS.png' },
        { name: 'Azure System', icon: '/images/Tailwind-CSS.png' },
      ]
    },
    {
        title: 'Databases',
        items: [
          { name: 'MSSQL', icon: '/images/MSSQL (1).png' },
          { name: 'MySQL', icon: '/images/MySQL.png' },
          { name: 'MongoDB', icon: '/images/MongoDB.png' },
          { name: 'Cassandra', icon: '/images/Cassandra.png' },
          { name: 'Neo4j', icon: '/images/Neo4j.png' },
          { name: 'Redis', icon: '/images/Redis.png' },
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

export default MLTechStack;
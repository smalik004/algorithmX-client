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


const BackEndTechStack = () => {
  const technologies = [
    {
      title: 'Programming Languages',
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
    {
      title: 'API Development',
      items: [
        { name: 'Express.js', icon: '/images/Expressjs.png' },
        { name: 'Django REST Framework', icon: '/images/Django REST Framework.png' },
        { name: 'Apollo Server', icon: '/images/Apollo Server.png' },
        { name: 'Flask-RESTful', icon: '/images/Flask-RESTful.png' },
        { name: 'Graphene', icon: '/images/Graphene.png' },
      ]
    },
    {
      title: 'Authentication & Authorization',
      items: [
        { name: 'AuthO', icon: '/images/Auth0.png' },
        { name: 'JWT', icon: '/images/JWT.png' },
        { name: 'OAAuth2', icon: '/images/OAuth2.png' },
        { name: 'Passport.js', icon: '/images/Passportjs.png' },
      ]
    },
    {
      title: 'Message Brokers',
      items: [
        { name: 'RabbitMQ', icon: '/images/RabbitMQ.png' },
        { name: 'Apache Kafka', icon: '/images/Apache Kafka.png' },
        { name: 'Redis Pub', icon: '/images/Redis Pub.png' },
      ]
    },
    {
      title: 'Microservices & Serverless Architecture',
      items: [
        { name: 'AWS Lambda', icon: '/images/AWS Lambda.png' },
        { name: 'Expressjs with Docker', icon: '/images/Vuejs.png' },
        { name: 'Google Cloud Functions', icon: '/images/Google Cloud Functions.png' }
      ]
    },
    {
      title: 'Testing & Quality Assurance',
      items: [
        { name: 'Axios', icon: '/images/Jest.png' },
        { name: 'PyTest', icon: '/images/PyTest.png' },
        { name: 'RSpec', icon: '/images/Rspec.png' },
        { name: 'JUnit', icon: '/images/JUnit.png' },
        { name: 'Mocha', icon: '/images/Mocha.png' },
        { name: 'Django-Test-Framework', icon: '/images/Django-Test-Framework.png' },

      ]
    },
    {
      title: 'DevOps and CI/CD',
      items: [
        { name: 'Git', icon: '/images/Git.png' },
        { name: 'GITHUB', icon: '/images/GITHUB.png' },
        { name: 'GitLab', icon: '/images/GitLab.png' },
        { name: 'Bitbucket', icon: '/images/Bitbucket.png' },
        { name: 'GitLab CI', icon: '/images/GitLab-CI.png' },
        { name: 'Travis-CI', icon: '/images/Travis-CI.png' },
        { name: 'Jenkins', icon: '/images/Jenkins.png' },
      ]
    },
    {
      title: 'Security',
      items: [
        { name: 'OpenSSL', icon: '/images/OpenSSL.png' },
        { name: 'bcrypt', icon: '/images/bcrypt.png' },
        { name: 'OWASP-Top-Ten', icon: '/images/OWASP-Top-Ten.png' },
        { name: 'Helmet', icon: '/images/Helmet.png' },
        { name:'Nessus', icon: '/images/Nessus.png' },
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

export default BackEndTechStack;
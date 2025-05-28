    import React from 'react';
    import style from '../front-end/style.module.css';

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


    const CMSTechStack = () => {
    const technologies = [
        {
        title: 'Web',
        items: [
            { name: 'HTML5', icon: '/images/HTML5.png' },
            { name: 'CSS3', icon: '/images/CSS3 (1).png' },
            { name: 'JavaScript', icon: '/images/JavaScript (1).png' },
            { name: 'Angular', icon: '/images/Angular (1).png' },
            { name: 'Python', icon: '/images/Python.png' },
            { name: 'ASP.NET', icon: '/images/aspnet.png' },
            { name: 'C#', icon: '/images/Csharp.png' },
            { name: 'Next.js', icon: '/images/Nextjs.png' },
            { name: 'Nodejs', icon: '/images/Nodejs.png' },
            { name: 'React', icon: '/images/React.png' },
            { name: 'meteor', icon: '/images/meteor.png' },
            { name: 'PHP', icon: '/images/PHP.png' },
            { name: 'Java', icon: '/images/Java (1).png' },
            { name: 'meteor', icon: '/images/meteor.png' },
            { name: 'Go', icon: '/images/Go (1).png' },
            { name: 'Vuejs', icon: '/images/Vuejs.png' },
        ]
        },
        {
            title: 'Mobile',
            items: [
            { name: 'ios', icon: '/images/ios (1).png' },
            { name: 'Android', icon: '/images/android.png' },
            { name: 'React', icon: '/images/React.png' },
            { name: 'xamarin', icon: '/images/xamarin.png' },
            { name: 'Flutter', icon: '/images/flutter.png' },
            { name: 'Cordova', icon: '/images/cordova.png' },
            { name: 'IoniC', icon: '/images/ionic (1).png' },
            ]
        },
        {
            title: 'Frameworks',
            items: [
                { name: 'ASP.NET', icon: '/images/aspnet.png' },
                { name: 'Hibernate', icon: '/images/hibernate.png' },
                { name: 'Larvel', icon: '/images/laravel.png' },
                { name: 'cakephp', icon: '/images/cakephp.png' },
                { name: 'Symfony', icon: '/images/symfony.png' },
                { name: 'wildfly', icon: '/images/wildfly.png' },
                { name: 'zend', icon: '/images/zend.png' },
            ]
        },
        {
            title: 'Platforms',
            items: [
                { name: 'wordpress', icon: '/images/wordpress1.png' },
                { name: 'magento', icon: '/images/magento.png' },
                { name: 'joomla', icon: '/images/joomla.png' },
                { name: 'drupal', icon: '/images/drupal (1).png' },
                { name: 'sharepoint', icon: '/images/sharepoint.png' },
                { name: 'django', icon: '/images/django (1).png' },
            ]
            },
        {
        title: 'Databases',
        items: [
            { name: 'MSSQL', icon: '/images/MSSQL (1).png' },
            { name: 'MySQL', icon: '/images/MySQL.png' },
            { name: 'MongoDB', icon: '/images/MongoDB.png' },
            { name: 'Cassandra', icon: '/images/Cassandra.png' },
            { name: 'Oracle', icon: '/images/oracle.png' },
            { name: 'Apache Hbase', icon: '/images/apache-hbase.png' },
        ]
        },
    
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
        <div className="text-center mb-12">
        <p className={`${style["tech-title"]} ${monsterfont1.className} mb-2`}>WE LEVERAGE</p>

            <h1 className={` ${style["tech-subtitle"]} ${monsterfont2.className  }`}>TECH STACK</h1>
            <h2 className={` ${style["tech-subtitle"]} ${monsterfont.className  }`}>EXPERTISE</h2>
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
                <h3 className={` ${style["tech-subtitle1"]} ${monsterfont.className  }`}>{tech.title}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
                    {tech.items.map((item, itemIndex) => (
                    <div 
                        key={itemIndex} 
                        className={`${style["box"]} inline-flex items-center gap-2 hover:bg-black transition-colors`}
                    >
                        <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="w-6 h-6"
                        />
                        <span className={`${style["tech-description"]} ${monsterfont.className} text-semi-white`}>
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

    export default CMSTechStack;
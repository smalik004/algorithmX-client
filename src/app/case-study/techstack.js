import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    { name: 'Node.js', id: 'nodejs', image: '/images/nodejs-tech.svg' },
    { name: 'AeroSpike', id: 'aerospike', image: '/images/aerospike-tech.svg' },
    { name: 'MongoDB', id: 'mongodb', image: '/images/mongodb-tech.svg' },
    { name: 'Kafka', id: 'kafka', image: '/images/kafka-tech.svg' },
    { name: 'Magento', id: 'magento', image: '/images/magento-tech.svg' },
  ];

  return (
    <div className='bg-black py-[80px]'>
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center md:text-start">
          The proposed solution for KFC UAE and other locations was developed using new-age and open-source technologies such as:
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;

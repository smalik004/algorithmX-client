// pages/team.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Team members data - replace with your actual team data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      imageUrl: "/images/p1.jpg", // Replace with your image paths
      socialLinks: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        github: "https://github.com/alexjohnson"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Chief Technology Officer",
      imageUrl:  "/images/p3.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarahwilliams",
        github: "https://github.com/sarahwilliams"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Designer",
      imageUrl:  "/images/p2.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen"
      }
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      imageUrl: "/team/emily.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        github: "https://github.com/emilyrodriguez"
      }
    },
    {
      id: 5,
      name: "David Kumar",
      role: "Lead Developer",
      imageUrl: "/team/david.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/davidkumar",
        github: "https://github.com/davidkumar"
      }
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Project Manager",
      imageUrl: "/team/lisa.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/lisapark",
        github: "https://github.com/lisapark"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Head>
        <title>Our Team | Tech Company</title>
        <meta name="description" content="Meet our talented team of tech professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cyberpunk-inspired background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Color blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-pink-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header with glowing animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tight">
              OUR TEAM
            </h1>
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px #6366f1",
                  "0 0 20px #8b5cf6",
                  "0 0 15px #6366f1"
                ] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="absolute -inset-3 rounded-lg opacity-30 blur-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 -z-10"
            />
          </motion.div>
          
          <motion.p 
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Meet the innovators pushing the boundaries of what's possible
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gray-900/70 backdrop-blur-lg rounded-xl border border-gray-800 overflow-hidden transform transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)"
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "/images/p1.jpg";
                  }}
                />

                {/* Tech overlay pattern */}
                <div className="absolute inset-0 bg-tech-circuit bg-opacity-20 mix-blend-overlay"></div>
                
                {/* Glowing border effect on hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-cyan-500 to-purple-600"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              
              <div className="p-6 relative">
                {/* Decorative tech line */}
                <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-cyan-400 font-mono text-sm tracking-wider mt-1">{member.role}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex space-x-4">
                    <a 
                      href={member.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Group Photo Section */}
        <motion.div 
          className="mt-32 relative overflow-hidden rounded-xl border border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative">
            {/* Background with cyber-style elements */}
            <div className="absolute inset-0 bg-black">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
              
              {/* Decorative color accents */}
              <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-600 opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-600 opacity-15 blur-3xl"></div>
            </div>
            
            {/* Group image with cyberpunk overlay */}
            <div className="relative max-h-[600px] overflow-hidden">
              <img 
                src="/images/team.jpg" 
                alt="Our Team" 
                className="w-full object-cover object-center opacity-80 "
                style={{ height: "600px" }}
                onError={(e) => {
                  e.target.src = "/placeholder-group.png";
                }}
              />
              
              {/* Tech scanline overlay */}
              <div className="absolute inset-0 bg-scanline opacity-10"></div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              {/* Glowing lines */}
              <motion.div 
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </div>
            
            {/* Text overlay with tech style */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-mono tracking-tight">
                  <span className="text-cyan-400">&lt;</span> 
                  INNOVATE TOGETHER 
                  <span className="text-cyan-400">/&gt;</span>
                </h2>
                
                <p className="text-gray-300 max-w-2xl font-light">
                  A collective of forward-thinking minds, united by our passion to 
                  push the boundaries of technology and redefine what's possible.
                </p>
                
                {/* Tech-inspired decorative element */}
                <motion.div 
                  className="mt-6 h-1 w-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  animate={{ width: ["8rem", "12rem", "8rem"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA with tech style */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-white font-mono tracking-wider">JOIN OUR TEAM</h2>
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 5px rgba(79, 70, 229, 0.4)",
                  "0 0 15px rgba(79, 70, 229, 0.4)",
                  "0 0 5px rgba(79, 70, 229, 0.4)"
                ] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="absolute -inset-2 rounded-lg opacity-20 blur -z-10"
            />
          </div>
          
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto font-light">
            We're searching for brilliant minds to join our mission. Bring your unique 
            talents and help us shape the future of technology.
          </p>
          
          <motion.button
            className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-mono tracking-wider">EXPLORE OPPORTUNITIES</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </main>

      {/* Custom styles for tech patterns */}
      <style jsx global>{`
        .bg-tech-grid {
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-tech-circuit {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-scanline {
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(59, 130, 246, 0.2) 2px,
            rgba(59, 130, 246, 0.2) 4px
          );
        }
        
        /* Add a subtle animation to background */
        @keyframes pulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
        
        .bg-pulse {
          animation: pulse 3s infinite;
        }
      `}</style>
    </div>
  );
}
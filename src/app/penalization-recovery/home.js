    import React from 'react';
    import { Montserrat } from 'next/font/google';
        import styles from "../android-app/style.module.css";
        
        
        const monsterfont1 = Montserrat ({
          subsets : ["latin"],
          weight :"200",
        })
    

    const SEOPenalizationSection = () => {
        return (
            <section className="relative w-full  bg-black flex items-center justify-center p-4 pt-[200px]">
              <div className="max-w-6xl mx-auto text-center space-y-8">
                <h1 className={` ${styles["android-title"]} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
                Penalization Recovery
                </h1>
                
                <p className={` ${styles["android-description"]} ${monsterfont1.className} text-semi-white leading-relaxed `}>
                Recover Your Rankings with Expert<br/>
Google Penalty Recovery Services.
                </p>
              </div>
            </section>
          ); 
    };

    export default SEOPenalizationSection;
import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from './style.module.css';


const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const XamarinSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
      <h1
      className={`${styles['android-title']} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Xamarin App Development
      </h1>

      <p
      className={`${styles['android-description']} ${monsterfont1.className} text-semii-white`}>
  Unleash the power of cross-platform Xamarin app development. Build native-like iOS, Android, and Windows applications from a single codebase. Enhance your workflow, cut down expenses, and maintain a consistent user experience on all devices through our Xamarin app development services.
</p>
      </div>
    </section>
  ); 
};

export default XamarinSection;
import { useEffect, useRef, useState } from 'react';

import './prot.css'
export default function useVideoInView() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Remove blur and overlay when in view
            container.classList.remove('video-not-in-view');
            
            // Try to play the video when in view
            video.play().catch(error => {
              // Handle autoplay restrictions
              console.log('Autoplay prevented:', error);
            });
          } else {
            setIsInView(false);
            
            // Add blur and overlay when not in view
            container.classList.add('video-not-in-view');
            
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 1, // Video starts playing when 80% visible
      }
    );

    // Start observing the video container element
    observer.observe(container);

    // Clean up
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return { videoRef, containerRef, isInView };
}
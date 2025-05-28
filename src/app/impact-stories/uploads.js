'use client'
import { useState } from 'react';

export default function Uploads() {
  const [playing, setPlaying] = useState({});

  const videoData = [
    {
      id: 1,
      title: "Does your life",
      duration: "04:37",
      thumbnail: "/images/01.jpg",
      videoUrl: "/images/rr.mp4"
    },
    {
      id: 2,
      title: "Supercharge your",
      duration: "14:37",
      thumbnail: "/images/01.jpg",
      videoUrl: "/images/LONG.mp4"
    },
    {
      id: 3,
      title: "Helen keller",
      duration: "10:30",
     thumbnail: "/images/01.jpg",
      videoUrl: "/images/LONG.mp4"
    },
    {
      id: 4,
      title: "The other virtues",
      duration: "03:23",
      thumbnail: "/images/01.jpg",
      videoUrl: "/images/LONG.mp4"
    },
    {
      id: 5,
      title: "You will begin",
      duration: "06:25",
      thumbnail: "/images/01.jpg",
      videoUrl: "/images/LONG.mp4"
    },
    {
      id: 6,
      title: "Step out on",
      duration: "05:10",
      thumbnail: "/images/01.jpg",
      videoUrl: "/images/LONG.mp4"
    },
  ];

  const handlePlay = (id) => {
    setPlaying(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleClose = (id) => {
    setPlaying(prev => ({
      ...prev,
      [id]: false
    }));
  };
  
  return (
    <div className="mx-auto max-w-[1300px] px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6">Movie uploads</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videoData.slice(0, 6).map((video) => (
            <div key={video.id}>
              <div className="relative overflow-hidden rounded-lg aspect-[9/16] bg-black">
                {!playing[video.id] ? (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 flex justify-center items-center cursor-pointer"
                      onClick={() => handlePlay(video.id)}
                    >
                      <div className="bg-black bg-opacity-30 rounded-full p-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-3">
                      <div className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        HD
                      </div>
                      <div className="text-white text-sm font-medium">
                        {video.duration}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      controls
                      onEnded={() => handleClose(video.id)}
                    />
                    <button 
                      onClick={() => handleClose(video.id)}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1 text-white z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              {/* Title Below Video Box */}
              <div className="text-center mt-2">
                <h3 className="md:text-lg text-sm font-medium">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'use client'
import { useState } from 'react';


const videos = [
  {
    id: 1,
    thumbnail: "/images/02.jpg",
    title: "Does your life lack meaning",
    category: "Business",
    author: "admin",
    postedTime: "8 months ago",
    duration: "00:30",
    videoUrl: "/images/rr.mp4"
  },
  {
    id: 2,
    thumbnail: "/images/02.jpg",
    title: "Supercharge your motivation",
    category: "Fashion",
    author: "admin",
    postedTime: "8 months ago",
    duration: "03:20",
    videoUrl: "/images/rr.mp4"
  },
  {
    id: 3,
    thumbnail: "/images/02.jpg",
    title: "Helen keller a teller seller",
    category: "Style",
    author: "admin",
    postedTime: "8 months ago",
    duration: "03:45",
    videoUrl: "/images/rr.mp4"
  }
];

export default function VideoGallery() {
  const [playingVideos, setPlayingVideos] = useState({});
  
  const toggleVideo = (videoId) => {
    setPlayingVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Recent uploads</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              {playingVideos[video.id] ? (
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`${video.videoUrl}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => toggleVideo(video.id)}
                    className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1 hover:bg-opacity-90 transition-all duration-300 z-10"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => toggleVideo(video.id)}
                      className="bg-white bg-opacity-70 rounded-full p-3 hover:bg-opacity-90 transition-all duration-300"
                    >
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78A1.5 1.5 0 006.3 17.159l9.5-5.89a1.5 1.5 0 000-2.538l-9.5-5.89z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-red-600 text-white text-xs px-2 py-1 m-2">
                    HD
                  </div>
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs px-2 py-1 m-2">
                    {video.duration}
                  </div>
                </>
              )}
            </div>
            <div className="p-4">
              <p className="text-red-600 font-medium mb-2">
                <a href={`/category/${video.category.toLowerCase()}`} className="border-b border-red-600">
                  {video.category}
                </a>
              </p>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-500">
                By {video.author} / {video.postedTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
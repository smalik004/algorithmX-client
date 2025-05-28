// components/TrendingTopics.jsx
import Link from 'next/link';
import Image from 'next/image';

const topics = [
  {
    id: 1,
    title: 'Sports & Fitness',
    image: '/images/post-sm-01.jpg',
    link: '/topics/sports-fitness'
  },
  {
    id: 2,
    title: 'Travel',
    image: '/images/post-sm-02.jpg',
    link: '/topics/travel'
  },
  {
    id: 3,
    title: 'Lifestyle',
    image: '/images/post-sm-01.jpg',
    link: '/topics/lifestyle'
  },
  {
    id: 4,
    title: 'Health',
    image: '/images/post-sm-02.jpg',
    link: '/topics/health'
  },
  {
    id: 5,
    title: 'Animals',
    image: '/images/post-sm-02.jpg',
    link: '/topics/animals'
  },
  {
    id: 6,
    title: 'Food & Drink',
    image: '/images/post-sm-01.jpg',
    link: '/topics/food-drink'
  }
];

const TrendingTopicTech = () => {
  return (
    <div className=" w-full  bg-black  p-4">
    <div className=" max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Trending Topics</h2>
        <Link href="/topics" className="text-blue-600 hover:text-blue-800">
          See All Topics
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topics.map((topic) => (
          <Link 
            href={topic.link} 
            key={topic.id}
            className="block rounded-lg overflow-hidden group relative"
          >
            <div className="aspect-square w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <h3 className="absolute bottom-3 left-3 right-3 text-white font-medium text-center z-10">
                {topic.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrendingTopicTech;
// components/ExploreCategories.jsx
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'BEACH',
    image: '/images/hiking.jpg', // You'll provide this image
    link: '/categories/beach',
  },
  {
    id: 2,
    name: 'HIKING',
    image: '/images/hiking.jpg', // You'll provide this image
    link: '/categories/hiking',
  },
  {
    id: 3,
    name: 'DESERT',
    image: '/images/desert.jpg', // You'll provide this image
    link: '/categories/desert',
  },
  {
    id: 4,
    name: 'CAMPING',
    image: '/images/camping.jpg', // You'll provide this image
    link: '/categories/camping',
  },
  {
    id: 5,
    name: 'FOREST',
    image: '/images/forest.jpg', // You'll provide this image
    link: '/categories/forest',
  },
];

export default function ExploreCategories() {
  return (
    <div className="w-full relative py-16 px-4 md:px-8 lg:px-16 bg-white" 
         style={{ 
           backgroundColor:'black',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Explore Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              href={category.link} 
              key={category.id}
              className="block group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden">

                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-3 text-center backdrop-blur-sm">

                  <h3 className="font-semibold tracking-wider">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
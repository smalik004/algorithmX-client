// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className='bg-black'>
      <div className="max-w-[1300px] mx-auto px-4 mt-[100px]">
        <main className="flex flex-col lg:flex-row">
          {/* Left side (75%) */}
          <div className="w-full lg:w-3/4 pr-0 lg:pr-6">
            {/* Hero Banner */}
            <div className="relative mb-8 overflow-hidden">
              <div className="relative">
                <Image 
                  src="/images/banner-01.png"
                  alt="Kitchen Appliances"
                  width={800}
                  height={300}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Article Cards */}
            {articles.map((article, index) => (
              <div key={index} className="flex mb-8 border-b pb-8 group">
                <div className="w-[100%] md:w-1/3 mr-4 overflow-hidden">
                  <div className="relative h-40 md:h-48 overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-[100%] md:w-2/3">
                  <div className="text-xs font-semibold text-pink-500 mb-2">
                    {article.category}
                  </div>
                  <h3 className="md:text-lg md:text-xl font-bold mb-2">
                    <Link href={article.url}>
                      <span className="bg-gradient-to-r from-current to-current bg-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                        {article.title}
                      </span>
                    </Link>
                  </h3>
                  <div className="flex items-center mb-2">
                    <p className="text-sm font-medium">{article.author}</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {article.date} • {article.readTime} min read
                  </p>
                  <div className="flex mt-4">
                    <Link href="#" className="mr-2">
                      <Image src="/facebook.svg" width={20} height={20} alt="Facebook" />
                    </Link>
                    <Link href="#" className="mr-2">
                      <Image src="/twitter.svg" width={20} height={20} alt="Twitter" />
                    </Link>
                    <Link href="#" className="mr-2">
                      <Image src="/link.svg" width={20} height={20} alt="Share" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side (25%) */}
          <div className="w-full lg:w-1/4">
            {/* Categories */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link href="/category/tech" className="block">
                <CategoryButton icon="/images/category-image-01.jpg" label="Tech" />
              </Link>
              <Link href="/category/style" className="block">
                <CategoryButton icon="/images/category-image-02.jpg" label="Style" />
              </Link>
              <Link href="/category/travel" className="block">
                <CategoryButton icon="/images/category-image-01.jpg" label="Travel" />
              </Link>
              <Link href="/category/food" className="block">
                <CategoryButton icon="/images/category-image-02.jpg" label="Food" />
              </Link>
            </div>

            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-center">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full p-2 pl-10 border rounded-md"
                />
                <div className="absolute left-3 top-3">
                  <Image src="/search.svg" width={16} height={16} alt="Search" />
                </div>
              </div>
            </div>

            {/* Popular on Blogar */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-center">Popular on Blogar</h3>
              {popularPosts.map((post, index) => (
                <div key={index} className="flex items-start mb-4 group">
                  <div className="w-1/3 mr-4 overflow-hidden">
                    <div className="relative h-20 overflow-hidden rounded-lg">
                      <Link href={post.url}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <h4 className="text-sm font-medium">
                      <Link href={post.url}>
                        <span className="bg-gradient-to-r from-current to-current bg-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                          {post.title}
                        </span>
                      </Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {post.date} • {post.views} Views
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stay In Touch */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-center">Stay In Touch</h3>
              <div className="flex space-x-3">
                <SocialIcon icon="/facebook.svg" />
                <SocialIcon icon="/instagram.svg" />
                <SocialIcon icon="/twitter.svg" />
                <SocialIcon icon="/pinterest.svg" />
                <SocialIcon icon="/linkedin.svg" />
              </div>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center">Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((post, index) => (
                  <Link href="#" key={index} className="block">
                    <div className="relative h-24 overflow-hidden group rounded-lg">
                      <Image
                        src={post}
                        alt="Instagram post"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Components
function CategoryButton({ icon, label }) {
  return (
    <div className="flex items-center mr-4 mb-4 hover:opacity-80 transition-opacity">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
        <Image src={icon} width={40} height={40} alt={label} />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <Link href="#" className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100">
      <Image src={icon} width={16} height={16} alt="Social icon" />
    </Link>
  );
}

// Sample Data
const articles = [
  {
    category: 'FOOD',
    title: "Security isn't just a technology problem it's about design, too",
    author: 'Jane Ara',
    date: 'Feb 17, 2024',
    readTime: '3',
    image: '/images/post-list-11.jpg',
    url: '/ebooks',
  },
  {
    category: 'LIFESTYLE',
    title: "The 1 tool that helps remote teams collaborate better",
    author: 'Fatima Jane',
    date: 'Feb 17, 2024',
    readTime: '5',
    image: '/images/post-list-15.jpg',
    url: '/portfolio',
  },
  {
    category: 'TRAVEL',
    title: "Traditional design won't save us in the COVID-19 era",
    author: 'Ezrat Ara',
    date: 'Feb 17, 2024',
    readTime: '3',
    image: '/images/post-list-11.jpg',
    url: '/blog/traditional-design-covid',
  },
  {
    category: 'DESIGN',
    title: "Get Ready To Up Your Creative Game With The New DJI Mavic Air 2",
    author: 'John Doe',
    date: 'Feb 17, 2024',
    readTime: '3',
    image: '/images/post-list-15.jpg',
    url: '/blog/dji-mavic-air-2',
  },
];

const popularPosts = [
  {
    title: "The underrated design book that transformed the way I work",
    date: 'Feb 17, 2024',
    views: '304',
    image: '/images/blog-sm-01.jpg',
    url: '/blog/underrated-design-book',
  },
  {
    title: "Here's what you should (and shouldn't) do when",
    date: 'Feb 17, 2024',
    views: '304',
    image: '/images/blog-sm-01.jpg',
    url: '/blog/should-shouldnt-do',
  },
  {
    title: "How a developer and designer duo at Deutsche Bank keep remote",
    date: 'Feb 17, 2024',
    views: '304',
    image: '/images/blog-sm-02.jpg',
    url: '/blog/deutsche-bank-remote',
  },
];

const instagramPosts = [
  '/images/instagram-01.jpg',
  '/images/instagram-02.jpg',
  '/images/instagram-03.jpg',
  '/images/instagram-01.jpg',
  '/images/instagram-02.jpg',
  '/images/instagram-03.jpg',
];
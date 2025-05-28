//home-page
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home({ data }) {
  const [activeMenu, setActiveMenu] = useState("");
  const [expandedSection, setExpandedSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuSections, setMenuSections] = useState([]);
  const [parsedContent, setParsedContent] = useState({});

  const parseContent = (htmlContent) => {
    if (!htmlContent) return {};

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const sections = {};
    const menuStructure = [];

    // Get all h2 and h3 elements
    const headings = doc.querySelectorAll("h2, h3");
    let currentSection = null;
    let currentSubsections = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

      if (heading.tagName === "H2") {
        // Save previous section if exists
        if (currentSection) {
          menuStructure.push({
            title: currentSection,
            items: currentSubsections,
          });
        }

        // Start new section
        currentSection = text;
        currentSubsections = [];

        // Get content until next h2 or h3 (but not including h3 content)
        let content = "";
        let nextElement = heading.nextElementSibling;

        while (nextElement && nextElement.tagName !== "H2") {
          if (nextElement.tagName === "H3") {
            // Stop at H3 - don't include H3 content in H2 section
            break;
          }
          if (nextElement.tagName === "P") {
            content += nextElement.outerHTML;
          } else if (nextElement.tagName === "DIV") {
            content += nextElement.innerHTML;
          } else if (
            nextElement.tagName === "UL" ||
            nextElement.tagName === "OL"
          ) {
            content += nextElement.outerHTML;
          }
          nextElement = nextElement.nextElementSibling;
        }

        sections[id] = {
          title: text,
          content: content,
          type: "section",
        };
      } else if (heading.tagName === "H3" && currentSection) {
        currentSubsections.push(text);

        // Get content until next h2, h3 or end
        let content = "";
        let nextElement = heading.nextElementSibling;

        while (nextElement && !["H2", "H3"].includes(nextElement.tagName)) {
          if (["P", "DIV", "UL", "OL"].includes(nextElement.tagName)) {
            content += nextElement.outerHTML;
          }
          nextElement = nextElement.nextElementSibling;
        }

        sections[id] = {
          title: text,
          content: content,
          type: "subsection",
          parent: currentSection,
        };
      }
    });

    if (currentSection) {
      menuStructure.push({
        title: currentSection,
        items: currentSubsections,
      });
    }

    return { sections, menuStructure };
  };

  // Initialize data when blog data is received
  useEffect(() => {
    if (data?.content) {
      const parsed = parseContent(data.content);
      setParsedContent(parsed.sections);
      setMenuSections(parsed.menuStructure);

      // Set initial active states
      if (parsed.menuStructure.length > 0) {
        setExpandedSection(parsed.menuStructure[0].title);
        if (parsed.menuStructure[0].items.length > 0) {
          setActiveMenu(parsed.menuStructure[0].items[0]);
        }
      }
    }
  }, [data]);

  const handleSectionClick = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }

    setIsScrolling(true);
    const scrollId = section
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    const element = document.getElementById(scrollId);
    if (element) {
      const offset = 100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    } else {
      setIsScrolling(false);
    }
  };

  const handleMenuItemClick = (item) => {
    setActiveMenu(item);
    setIsScrolling(true);

    const element = document.getElementById(
      item
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]/g, "")
    );
    if (element) {
      const offset = 100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const offset = 120;
      let currentItem = "";
      let currentSection = "";

      menuSections.forEach((section) => {
        const sectionId = section.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const top = sectionEl.getBoundingClientRect().top;
          if (top < offset + 50) {
            currentSection = section.title;
          }
        }

        section.items.forEach((item) => {
          const itemId = item
            .replace(/\s+/g, "-")
            .toLowerCase()
            .replace(/[^\w-]/g, "");
          const itemEl = document.getElementById(itemId);
          if (itemEl) {
            const top = itemEl.getBoundingClientRect().top;
            if (top < offset + 50) {
              currentItem = item;
            }
          }
        });
      });

      if (currentItem && currentItem !== activeMenu) {
        setActiveMenu(currentItem);
      }

      if (currentSection && currentSection !== expandedSection) {
        setExpandedSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu, expandedSection, menuSections, isScrolling]);

  // Show loading state if no data
  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>{data.title || "Blog Post"}</title>
        <meta name="description" content={data.summary || ""} />
        <meta name="keywords" content={data.meta_keywords?.join(", ") || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-4 pt-[50px]">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-start mb-8">
            <span
              style={{
                position: "relative",
                display: "inline",
                zIndex: 1,
                color: "#f5f5f5",
              }}
            >
              {data.title || "Blog Title"}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "50%",
                  backgroundColor: "#00bcd4",
                  zIndex: -1,
                  opacity: 0.6,
                  borderRadius: "4px",
                }}
              ></div>
            </span>
          </h1>
          <p className="text-xl text-start text-white mb-8">
            {data.summary || "Blog summary not available"}
          </p>
          <div className="text-start">
            <button className="bg-[#00bcd4] text-black px-8 py-3 rounded-lg hover:bg-[#00838f] transition duration-200">
              Book a free consultation
            </button>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar and Sticky Form */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 bg-black pt-8 px-4 sticky top-[100px] h-screen overflow-y-auto">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-6">
              <div
                className="flex items-center cursor-pointer mb-2"
                onClick={() => handleSectionClick(section.title)}
              >
                <div
                  className={`h-0.5 mr-4 transition-all duration-500 ${
                    expandedSection === section.title
                      ? "bg-white w-16"
                      : "bg-gray-300 w-8"
                  }`}
                />
                <span className="text-white font-medium">{section.title}</span>
              </div>

              {expandedSection === section.title &&
                section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center cursor-pointer ml-16 mb-2"
                    onClick={() => handleMenuItemClick(item)}
                  >
                    <div className="w-2 h-0.5 mr-2 bg-gray-500" />
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        activeMenu === item
                          ? "text-[#00bcd4] font-semibold"
                          : "text-white"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Middle Content */}
        <div className="flex-1">
          <div className="max-w-3xl mx-auto py-12 px-4">
            {/* Dynamic Content Sections */}
            {Object.entries(parsedContent).map(([id, section]) => (
              <div key={id} id={id} className="mb-20">
                {section.type === "section" ? (
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    {section.title}
                  </h2>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {section.title}
                  </h3>
                )}

                <div
                  className="text-lg text-white space-y-6 [&>p]:mb-6 [&>ul]:space-y-2 [&>ul>li]:text-white [&>ol]:space-y-2 [&>ol>li]:text-white [&>div]:mb-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}

            {/* Fallback if no parsed content
            {Object.keys(parsedContent).length === 0 && data?.content && (
              <div className="mb-20">
                <div
                  className="text-lg text-white space-y-6 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-8 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-6 [&>p]:mb-6 [&>ul]:space-y-2 [&>ul>li]:text-white [&>ol]:space-y-2 [&>ol>li]:text-white [&>div]:mb-4"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            )} */}
          </div>
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center md:items-start">
          <div className="w-80 sticky top-[100px] p-[10px] overflow-y-auto pt-8">
            <div className="backdrop-blur-md rounded-lg overflow-hidden shadow-xl mx-auto my-4 max-w-xs border border-white/20">
              {/* Image at the top */}
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-black opacity-80"></div>
                <img
                  src={data.image_url || "/images/ai11.avif"}
                  alt={data.image_alt || "Blog image"}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Transform your business! Build a powerful mobile app now!
                  </h2>
                </div>
              </div>

              {/* Form */}
              <div className="p-4 text-white">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Message"
                      className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <span className="text-white text-sm">3 + 4 =</span>
                    <input
                      type="text"
                      className="w-16 bg-black border border-white rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="bg-[#00bcd4] text-black px-6 py-2 rounded hover:bg-[#00838f] transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

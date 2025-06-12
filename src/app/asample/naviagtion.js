"use client";
import { FaPhone } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  Company: { type: "link", href: "/company" },
  "Creative Assets": {
    type: "dropdown",
    items: [
      { name: "Branding", href: "/branding-services", icon: "fa-pen-nib" },
      { name: "Graphics", href: "/graphics-services", icon: "fa-image" },
      { name: "Video", href: "/video-services", icon: "fa-video" },
      {
        name: "Content Creation",
        href: "/contentcreation-services",
        icon: "fa-microphone",
      },
    ],
  },
  "</Code>": {
    type: "dropdown",
    items: [
{
        name: "Web",
        href: null,
        subItems: [
          { name: "Frontend Development", href: "/front-end-development-services", icon: "fa-code" },
          {
            name: "Backend Development",
            href: "/back-end-development-services",
            icon: "fa-database",
          },
        ],
      },
      {
        name: "CMS",
        href: null,
        subItems: [
          { name: "Wordpress", href: "/wordpress-development-services", icon: "fa-wordpress" },
          { name: "Magento", href: "/magento-development-services", icon: "fa-shopping-cart" },
          { name: "Shopify", href: "/shopify-development-services", icon: "fa-store" },
          { name: "Big Commerce", href: "/bigcommerce-development-services", icon: "fa-store" },
          { name: "Drupal", href: "/drupal-development-services", icon: "fa-droplet" },
          { name: "HubSpot", href: "/hubspot-development-services", icon: "fa-hubspot" },
        ],
      },
      {
        name: "Product",
        href: null,
        subItems: [
          { name: "Andriod", href: "/android-app-development-services", icon: "fa-android" },
          { name: "Ios", href: "/iphone-app-development-services", icon: "fa-apple" },
          { name: "Flutter", href: "/flutter-development-services", icon: "fa-flutter" },
          { name: "React Native", href: "/react-native-development-services", icon: "fa-react" }, // Use fa-react for React Native
          { name: "Xamarin", href: "/xamarin-development-services", icon: "fa-tint" }, // Use fa-xamarin for Xamarin
          {
            name: "IoT Development",
            href: "/iot-development-services",
            icon: "fa-snowflake",
          }, // Use fa-iot for IoT
        ],
      },
      {
        name: "AI & Automation",
        href: null,
        subItems: [
          {
            name: "AI Development",
            href: "/ai-development-services",
            icon: "fa-university",
          },
          {
            name: "Intelligent Automation",
            href: "/intelligent-automation-development-services",
            icon: "fa-gears",
          },
        ],
      },
      {
        name: "Enterprise Solutions",
        href: null,
        subItems: [
          { name: "CRM", href: "/crm-development-services", icon: "fa-users" },
          { name: "ERP", href: "/erp-development-services", icon: "fa-network-wired" },
        ],
      },
      {
        name: "Data Analytics",
        href: null,
        subItems: [
          {
            name: "Business Intelligence Services",
            href: "/business-intelligence-development-services",
            icon: "fa-chart-line",
          },
          {
            name: "Big Data",
            href: "/big-data-analytics-solutions",
            icon: "fa-database",
          },
        ],
      },
      {
        name: "Next Gen",
        href: null,
        subItems: [
          { name: "Blockchain", href: "/blockchain-development-services", icon: "fa-cubes" },
          {
            name: "Metaverse",
            href: "/metaverse-development-services",
            icon: "fa-vr-cardboard",
          },
          { name: "Web3", href: "/web3-development-services", icon: "fa-globe" },
        ],
      },
      {
        name: "Platform Engineering",
        href: null,
        subItems: [
          {
            name: "Cloud & Devops",
            href: "/cloud-and-devops-development-services",
            icon: "fa-cloud",
          },
          {
            name: "Architecture Re-engineering",
            href: "/architecture-reengineering-development-services",
            icon: "fa-drafting-compass",
          },
        ],
      },
      {
        name: "Integration & Middleware",
        href: "/integration-middleware-services",
        icon: "fa-plug",
      },
      {
        name: "Testing & Automation",
        href: "/testing-automation-services",
        icon: "fa-vial",
      },
      {
        name: "Software Development",
        href: "/software-development-services",
        icon: "fa-laptop-code",
      },
    ],
  },
  "Leads & Revenue": {
    type: "dropdown",
    items: [
      {
        name: "SEO",
        href: null,
        subItems: [
          { name: "SEO Audits", href: "/seoaudits", icon: "fa-search" },
          { name: "Local SEO", href: "/local-seo", icon: "fa-map-marker-alt" },
          {
            name: "Ecommerce SEO",
            href: "/ecommerce-seo",
            icon: "fa-shopping-cart",
          },
          {
            name: "SEO Consulting",
            href: "/seo-consulting",
            icon: "fa-comments",
          },
          { name: " Link Building", href: "/link-building", icon: "fa-link" },
          {
            name: "Technical SEO Audit",
            href: "/technical-seo-audit",
            icon: "fa-tools",
          },
          { name: "National SEO", href: "/national-seo", icon: "fa-flag-usa" },
          { name: "Mobile SEO", href: "/mobile-seo", icon: "fa-mobile-alt" },
          {
            name: "Global/International SEO",
            href: "/global-seo",
            icon: "fa-globe",
          },
          {
            name: "Enterprise SEO",
            href: "/enterprise-seo",
            icon: "fa-building",
          },
          { name: "Amazon SEO", href: "/amazon-seo", icon: "fa-amazon" },
          {
            name: "Penalization Recovery",
            href: "/penalization-recovery",
            icon: "fa-exclamation-triangle",
          },
        ],
      },
      {
        name: "Social Media",
        href: null,
        subItems: [
          {
            name: "Social Media Audit",
            href: "/social-media-audit",
            icon: "fa-search",
          },
          {
            name: "Facebook Management",
            href: "/facebook-management",
            icon: "fa-facebook",
          },
          {
            name: "Instagram Management",
            href: "/instagram-management",
            icon: "fa-instagram",
          },
          {
            name: "Linkedin Management",
            href: "/linkedin-management",
            icon: "fa-linkedin",
          },
          {
            name: "Twitter Management",
            href: "/twitter-management",
            icon: "fa-twitter",
          },
          {
            name: "Youtube Management",
            href: "/youtube-management",
            icon: "fa-youtube",
          },
          {
            name: "Tiktok Management",
            href: "/tiktok-management",
            icon: "fa-tiktok",
          },
          {
            name: "Social Media Consulting",
            href: "/social-media-consulting",
            icon: "fa-comments",
          },
        ],
      },
      {
        name: "PPC Advertising",
        href: null,
        subItems: [
          { name: "Google Ads", href: "/google-ads", icon: "fab fa-google" },
          { name: "Bing Ads", href: "/bing-ads", icon: "fa-microsoft" },
          { name: "Ads Audit", href: "/ads-audit", icon: "fa-search-dollar" },
          {
            name: "Ads Suspension Recovery",
            href: "/ads-suspension-recovery",
            icon: "fa-ban",
          },
          { name: "Facebook Ads", href: "/facebook-ads", icon: "fa-facebook" },
          {
            name: "Instagram Ads",
            href: "/instagram-ads",
            icon: "fa-instagram",
          },
          { name: "Linkedin Ads", href: "/linkedin-ads", icon: "fa-linkedin" },
          {
            name: "Landing Page Design",
            href: "/landing-page-design",
            icon: "fa-file-alt",
          },
          { name: "X/Twitter Ads", href: "/twitter-ads", icon: "fa-twitter" },
          { name: "Youtube Ads", href: "/youtube-ads", icon: "fa-youtube" },
          { name: "Tiktok Ads", href: "/tiktok-ads", icon: "fa-tiktok" },
          { name: "Snapchat Ads", href: "/snapchat-ads", icon: "fa-snapchat" },
          { name: "Amazon Ads", href: "/amazon-ads", icon: "fa-amazon" },
          { name: "Display Ads", href: "/display-ads", icon: "fa-ad" },
          { name: "Remarketing", href: "/remarketing", icon: "fa-redo" },
          {
            name: "Ecommerce Advertising",
            href: "/ecommerce-advertising",
            icon: "fa-shopping-bag",
          },
        ],
      },
      {
        name: "Content",
        href: null,
        subItems: [
          {
            name: "Creation & Marketing",
            href: "/creation-and-marketing",
            icon: "fa-pencil-alt",
          },
          {
            name: "SEO Copywriting",
            href: "/seo-copywriting",
            icon: "fa-keyboard",
          },
        ],
      },
      { name: "App Store Optimization", href: "/app-store", icon: "fa-mobile" },
      {
        name: "Conversion Rate Optimization",
        href: "/conversion-rate-optimization",
        icon: "fa-percentage",
      },
      {
        name: "Public Relations",
        href: "/public-relations",
        icon: "fa-bullhorn",
      },
      { name: "Franchise", href: "/franchise-marketing", icon: "fa-store-alt" },
      { name: "Influencer", href: "/influencer-marketing", icon: "fa-user" },
    ],
  },
  Resources: {
    type: "dropdown",
    items: [
      { name: "Blogs", href: "/blogs", icon: "fa-pen-nib" },
      { name: "Ebook", href: "/ebooks", icon: "fa-image" },
      {
        name: "Audits",
        href: null,
        subItems: [
          {
            name: "Brand Audits",
            href: "/brand-audits",
            icon: "fa-pencil-alt",
          },
          {
            name: "Product Audits",
            href: "/product-audits",
            icon: "fa-keyboard",
          },
        ],
      },
      { name: "Our Clients", href: "/our-clients", icon: "fa-image" },
      { name: "Guides", href: "/guides", icon: "fa-image" },
      { name: "Impact Stories", href: "/impact-stories", icon: "fa-image" },
      { name: "Knowledge Base", href: "/knowledge-base", icon: "fa-image" },
      { name: "Press Release", href: "/press-release", icon: "fa-image" },
    ],
  },
};
const appleMenuData = {
  "App Development": {
    type: "header",
    items: [
      {
        name: "Android Development",
        href: "/android-app",
        isClickable: true,
        icon: "fa-android",
      },
      {
        name: "iPhone/iPad Development",
        href: "/iphone-app",
        isClickable: true,
        icon: "fa-apple",
      },
      {
        name: "Xamarin Development",
        href: "/xamarin",
        isClickable: true,
        icon: "fa-tint",
      },
      {
        name: "Flutter Development",
        href: "/flutter",
        isClickable: true,
        icon: "fa-flutter",
      },
      {
        name: "React Native Development",
        href: "/react-native",
        isClickable: true,
        icon: "fa-react",
      }, // React Native icon
      {
        name: "IoT Development",
        href: "/iot-development",
        isClickable: true,
        icon: "fa-iot",
      }, // IoT Development icon
    ],
  },
};
const getIconClass = (iconName) => {
  if (!iconName) return "fas fa-chevron-right"; // Default icon

  // Check if iconName already has a prefix
  if (iconName.startsWith("fa-")) {
    // Common brand icons that should use 'fab' prefix
    const brandIcons = [
      "fa-react",
      "fa-vuejs",
      "fa-angular",
      "fa-android",
      "fa-apple",
      "fa-facebook",
      "fa-twitter",
      "fa-instagram",
      "fa-linkedin",
      "fa-wordpress",
      "fa-shopify",
      "fa-amazon",
      "fa-microsoft",
      "fa-google",
      "fa-youtube",
      "fa-tiktok",
      "fa-snapchat",
      "fa-hubspot",
      "fa-droplet",
      "fa-flutter",
      "fa-react-native",
      "fa-xamarin",
      "fa-dart",
      "fa-git",
      "fa-python",
      "fa-ruby",
      "fa-node",
      "fa-sass",
      "fa-javascript",
      // Add any other brand icons you use here
    ];

    if (brandIcons.includes(iconName)) {
      return `fab ${iconName}`; // Return with 'fab' prefix for brand icons
    }

    return `fas ${iconName}`; // For solid icons
  }

  return `fas fa-${iconName}`; // For icons without the 'fa-' prefix
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState({});
  const navbarRef = useRef(null);
  const menuItemRefs = useRef({});
  const [contentHeight, setContentHeight] = useState(0);
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Close dropdown when hovering away from navbar and dropdown
  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  useEffect(() => {
    // Check if we should show the announcement on initial load
    const initialScrollPosition = window.scrollY;
    setScrolled(initialScrollPosition > 10);
    setShowAnnouncement(initialScrollPosition < 50);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10); // for navbar background change
      setShowAnnouncement(scrollPosition < 50); // hide announcement after scrolling a bit
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active menu height changes
  useEffect(() => {
    function updateHeight() {
      if (activeMenu && menuItemRefs.current[activeMenu]) {
        const newHeight = menuItemRefs.current[activeMenu].scrollHeight;
        setContentHeight(newHeight);
      }
    }

    if (activeMenu) {
      // Initialize height immediately
      updateHeight();

      // Add resize listener to handle window size changes
      window.addEventListener("resize", updateHeight);

      // Use MutationObserver to detect content changes
      const observer = new MutationObserver(updateHeight);
      if (menuItemRefs.current[activeMenu]) {
        observer.observe(menuItemRefs.current[activeMenu], {
          childList: true,
          subtree: true,
          attributes: true,
        });
      }

      return () => {
        window.removeEventListener("resize", updateHeight);
        observer.disconnect();
      };
    } else {
      setContentHeight(0);
    }
  }, [activeMenu, activeSubMenu]);

  // Find the first item with subitems in the menu
  const findFirstItemWithSubitems = (menuName) => {
    if (!menuData[menuName] || !menuData[menuName].items) return null;

    const firstItemWithSubitems = menuData[menuName].items.find(
      (item) => item.subItems && item.subItems.length > 0
    );
    return firstItemWithSubitems ? firstItemWithSubitems.name : null;
  };

  const handleMenuHover = (menuName) => {
    // Don't open dropdown for link-type menus
    if (menuData[menuName].type === "link") {
      // Close any open dropdown when hovering over link-type items
      setIsOpen(false);
      setActiveMenu(null);
      setActiveSubMenu(null);
      return;
    }

    if (menuData[menuName].type === "dropdown") {
      setIsOpen(true);
      setActiveMenu(menuName);

      // Find first item with subitems
      const firstSubitem = findFirstItemWithSubitems(menuName);
      setActiveSubMenu(firstSubitem);
    }
  };

  // Handle submenu hover
  const handleSubMenuHover = (itemName) => {
    setActiveSubMenu(itemName);
  };

  // Handle mouse enter on navbar areas that should close the dropdown
  const handleCloseDropdown = () => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  // Toggle mobile menu open state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Toggle mobile dropdown items
  const toggleMobileItem = (menuName) => {
    // Close all other expanded items first for accordion-style behavior
    let newExpandedItems = {};

    // If the clicked item is already open, close it
    if (expandedMobileItems[menuName]) {
      newExpandedItems = {};
    } else {
      // Otherwise open the clicked item only
      newExpandedItems = { [menuName]: true };
    }

    setExpandedMobileItems(newExpandedItems);
  };

  // Toggle mobile sub-items
  const toggleMobileSubItem = (itemName) => {
    // Close all other expanded sub-items first
    let newExpandedSubItems = {};

    // If the clicked sub-item is already open, close it
    if (expandedMobileSubItems[itemName]) {
      newExpandedSubItems = {};
    } else {
      // Otherwise open the clicked sub-item only
      newExpandedSubItems = { [itemName]: true };
    }

    setExpandedMobileSubItems(newExpandedSubItems);
  };

  // Backdrop overlay variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Function to chunk array into specified size for the multi-column layout
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: { x: "-100%", transition: { duration: 0.3 } },
    open: { x: 0, transition: { duration: 0.3 } },
  };

  // Special rendering for Product section in mobile view
  const renderMobileProductSection = () => {
    return (
      <div className="bg-[#0a1518] pl-4">
        {/* App Development Section */}
        <div className="mb-3">
          <div className="text-xs text-gray-500 px-4 py-2"></div>
          <div className="pl-2">
            {appleMenuData["App Development"].items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* IOT Section */}
      </div>
    );
  };

  return (
    <div ref={navbarRef} className="relative" onMouseLeave={handleMouseLeave}>
      <div
        className={`bg-blue-600 text-white py-2 px-4 text-center transition-all duration-300 ${
          showAnnouncement
            ? "opacity-100 h-auto"
            : "opacity-0 h-0 py-0 overflow-hidden absolute"
        }`}
      >
        <div className="container mx-auto flex justify-center items-center text-center">
          <p className="text-sm max-w-[800px]">
            Uncover proof of AlgorithmX impact across 3000+ digital deliveries
            for 35+ industries.
            <span>
              {" "}
              <a href="#" className="text-sm underline ml-2">
                Explore Now &gt;
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Backdrop overlay when dropdown is open */}
      <AnimatePresence>
        {(isOpen || isMobileMenuOpen) && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#0F172A] bg-opacity-30 backdrop-blur-sm z-10"
            style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
            onClick={() =>
              isMobileMenuOpen ? setIsMobileMenuOpen(false) : null
            }
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-4/5 bg-[#193439] bg-opacity-95 backdrop-blur-md z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <div className="flex items-center">
                <Image
                  src="/images/logo5.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <button onClick={toggleMobileMenu} className="text-white p-2">
                <X size={24} />
              </button>
            </div>

            <div className="py-4">
              {/* Mobile menu items */}
              {Object.keys(menuData).map((menuName) => (
                <div
                  key={menuName}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  {menuData[menuName].type === "link" ? (
                    <Link
                      href={menuData[menuName].href}
                      className="flex items-center justify-between px-4 py-4 text-base text-white font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {menuName}
                    </Link>
                  ) : (
                    <div>
                      <div
                        className="flex items-center justify-between px-4 py-4 text-base text-white font-medium"
                        onClick={() => toggleMobileItem(menuName)}
                      >
                        <span>{menuName}</span>
                        {expandedMobileItems[menuName] ? (
                          <ChevronDown size={20} className="text-white" />
                        ) : (
                          <ChevronRight size={20} className="text-white" />
                        )}
                      </div>

                      {/* Mobile submenu */}
                      {expandedMobileItems[menuName] && (
                        <div className="bg-[#122429] p-2">
                          {menuData[menuName].items.map((item) => (
                            <div key={item.name} className="mb-1 last:mb-0">
                              {/* For normal items */}
                              {!item.subItems ? (
                                <Link
                                  href={item.href}
                                  className="flex items-center px-4 py-3 text-sm text-white"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <div>
                                  <div
                                    className="flex items-center justify-between px-4 py-3 text-sm text-white"
                                    onClick={() =>
                                      toggleMobileSubItem(item.name)
                                    }
                                  >
                                    <span>{item.name}</span>
                                    {expandedMobileSubItems[item.name] ? (
                                      <ChevronDown
                                        size={16}
                                        className="text-white"
                                      />
                                    ) : (
                                      <ChevronRight
                                        size={16}
                                        className="text-white"
                                      />
                                    )}
                                  </div>

                                  {/* Custom rendering for Product section */}
                                  {expandedMobileSubItems[item.name] &&
                                  menuName === "</Code>" &&
                                  item.name === "Product"
                                    ? renderMobileProductSection()
                                    : /* For other sections with subitems */
                                      expandedMobileSubItems[item.name] &&
                                      item.subItems && (
                                        <div className="pl-4 bg-[#0a1518]">
                                          {item.subItems.map((subItem) => (
                                            <Link
                                              key={subItem.name}
                                              href={subItem.href}
                                              className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300"
                                              onClick={() =>
                                                setIsMobileMenuOpen(false)
                                              }
                                            >
                                              <i
                                                className={getIconClass(
                                                  subItem.icon
                                                )}
                                              ></i>
                                              <span>{subItem.name}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile social icons */}
              <div className="flex items-center space-x-6 px-6 pt-6">
                <Link
                  href="/twitter"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="/instagram"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="/facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="/linkedin"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        } ${!showAnnouncement ? "top-0" : "top-auto"}`}
      >
        <div className="px-4 sm:px-6 md:px-4 md:py-1">
          <div className="flex items-center h-16">
            {/* Mobile menu toggle button - only visible on small screens */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-white">
                <Menu size={24} />
              </button>
            </div>

            {/* Left side - Navigation Items - hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-start">
              <div className="flex items-center space-x-2 flex-nowrap">
                {Object.keys(menuData).map((menuName) => (
                  <div
                    key={menuName}
                    className="relative whitespace-nowrap"
                    onMouseEnter={() => handleMenuHover(menuName)}
                  >
                    {menuData[menuName].type === "link" ? (
                      <Link
                        href={menuData[menuName].href}
                        className={`px-2 py-2 text-[14px] font-helveticaneue font-medium transition-colors duration-200 ${
                          activeMenu === menuName
                            ? "text-white"
                            : "text-[#FFFFFFCC] hover:text-white"
                        }`}
                      >
                        {menuName}
                      </Link>
                    ) : (
                      <div
                        className={`px-2 py-2 text-[14px] font-helveticaneue font-medium cursor-pointer transition-colors duration-200 ${
                          activeMenu === menuName && isOpen
                            ? "text-white"
                            : "text-[#FFFFFFCC] hover:text-white"
                        }`}
                      >
                        {menuName}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Logo */}
            <div
              className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none md:flex-1 md:flex md:justify-center"
              onMouseEnter={handleCloseDropdown}
            >
              <Link href="/" className="text-white">
                <Image
                  src="/images/logo5.png"
                  alt="Logo"
                  width={52}
                  height={50}
                  priority
                />
              </Link>
            </div>

            {/* Right side - Connect Button & Social Icons - hidden on mobile */}
            <div
              className="hidden md:flex flex-1 justify-end items-center gap-[15px]"
              onMouseEnter={handleCloseDropdown}
            >
              <div className="relative">
                <a
                  href="/contact-us"
                  className="flex items-center pr-8 pl-6 py-2 rounded-full bg-black text-white border border-gray-600 hover:border-gray-400 transition"
                >
                  <span className="text-[14px] leading-[22px] font-[400] font-helveticaneue text-white whitespace-nowrap mr-5">
                    Connect
                  </span>
                  <div className="absolute left-[91px] top-1/2 -translate-y-1/2">
                    <div
                      className={`p-[11.2px] rounded-full transition duration-300 ${
                        scrolled ? "bg-blue-500" : "bg-white"
                      }`}
                    >
                      <FaPhone
                        size={16}
                        className={`-scale-x-100 ${
                          scrolled ? "text-white" : "text-blue-500"
                        }  transition duration-300`}
                      />
                    </div>
                  </div>
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex gap-[32px] ">
                <Link
                  href="/twitter"
                  className="text-white hover:text-blue-400"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="/instagram"
                  className="text-white hover:text-blue-400"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="/facebook"
                  className="text-white hover:text-blue-400"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link
                  href="/linkedin"
                  className="text-white hover:text-blue-400"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={dropdownRef}
          className="fixed left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out md:block hidden"
          style={{
            top: showAnnouncement ? "105px" : "66px", // Adjust top position based on announcement visibility
            height: isOpen ? `${contentHeight + 32}px` : "0px",
            opacity: isOpen ? 1 : 0,
            marginTop: "-25px", // Slight negative margin to eliminate visual gap
          }}
        >
          <div className="py-6 px-6 md:px-0 w-full">
            {Object.keys(menuData).map(
              (menuName) =>
                menuData[menuName].type === "dropdown" && (
                  <div
                    key={menuName}
                    ref={(el) => (menuItemRefs.current[menuName] = el)}
                    className={`transition-opacity duration-300 bg-black ${
                      activeMenu === menuName
                        ? "opacity-100"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="relative flex w-full overflow-hidden shadow-xl shadow-blue-900/30 backdrop-blur-sm px-[30px]">
                      {/* Background glow effects - more subtle */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

                      {/* Center Glowing Divider - subtle glow */}
                      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/30 via-blue-500/20 to-teal-500/30 pointer-events-none z-10 drop-shadow-[0_0_2px_rgba(45,212,191,0.3)]" />

                      {/* Left side - Categories */}
                      <div className="w-1/3 bg-gradient-to-br from-[#0a0a0a] to-[#111827] z-20">
                        <div className="grid grid-cols-2 h-full">
                          {/* First column: Items without nested subitems and additional text */}
                          <div className="flex flex-col divide-y divide-gray-800/50 border-r border-gray-800/50">
                            {menuData[menuName].items
                              .filter((item) => !item.subItems)
                              .map((item) => (
                                <div
                                  key={item.name}
                                  onMouseEnter={() => setActiveSubMenu(null)}
                                  className="px-4 py-3 hover:bg-gray-900/50 transition-all duration-200 group relative overflow-hidden"
                                >
                                  {/* Subtle hover highlight effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-all duration-300" />

                                  <Link
                                    href={item.href}
                                    className="text-base font-medium text-gray-300 hover:text-teal-300 block transition-colors duration-200 relative"
                                  >
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            <div
                              className="grow border-t border-gray-800/50 p-4"
                              onMouseEnter={() => setActiveSubMenu(null)}
                            >
                              <h3 className="text-sm font-medium text-teal-400 mb-2">
                                AlgorithmX
                              </h3>
                              <p className="text-xs text-gray-400">
                                Empower your digital presence with essential
                                tools and insights. Elevate marketing, simplify
                                development.
                              </p>
                            </div>
                          </div>

                          {/* Second column: Items with nested subitems */}
                          <div className="flex flex-col divide-y divide-gray-800/50">
                            {menuData[menuName].items
                              .filter((item) => item.subItems)
                              .map((item) => (
                                <div
                                  key={item.name}
                                  onMouseEnter={() =>
                                    handleSubMenuHover(item.name)
                                  }
                                  className="px-4 py-3 hover:bg-gray-900/50 transition-all duration-200 group relative overflow-hidden"
                                >
                                  {/* Subtle hover highlight effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-all duration-300" />

                                  <span
                                    className={`text-base font-medium block cursor-pointer transition-colors duration-200 relative ${
                                      activeSubMenu === item.name
                                        ? "text-blue-300"
                                        : "text-gray-300 group-hover:text-teal-300"
                                    }`}
                                  >
                                    {item.name}
                                  </span>
                                  {activeSubMenu === item.name && (
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400/70 to-blue-400/70"></div>
                                  )}
                                </div>
                              ))}
                            <div
                              className="grow border-t border-gray-800/50"
                              onMouseEnter={() => setActiveSubMenu(null)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right side - Subitems with fill-first column approach */}
                      <div
                        className="w-2/3 min-h-[300px] bg-gradient-to-br from-[#0c1220] via-[#111827] to-[#0a0f1a] relative z-20"
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        {activeSubMenu &&
                          menuData[menuName].items.find(
                            (item) => item.name === activeSubMenu
                          )?.subItems &&
                          (() => {
                            const subItems =
                              menuData[menuName].items.find(
                                (item) => item.name === activeSubMenu
                              )?.subItems || [];
                            const maxItemsPerColumn = 6; // Maximum number of items in a column

                            // Calculate how many columns we need
                            const totalColumns = Math.ceil(
                              subItems.length / maxItemsPerColumn
                            );

                            // Prepare an array of column contents
                            const columns = [];

                            for (let i = 0; i < totalColumns; i++) {
                              // For each column, take up to maxItemsPerColumn items
                              const startIndex = i * maxItemsPerColumn;
                              const columnItems = subItems.slice(
                                startIndex,
                                startIndex + maxItemsPerColumn
                              );
                              columns.push(columnItems);
                            }

                            return (
                              <div className="flex h-full">
                                {columns.map((columnItems, colIndex) => (
                                  <div
                                    key={colIndex}
                                    className={`flex-1 flex flex-col divide-y divide-gray-800/30 h-full ${
                                      colIndex !== columns.length - 1
                                        ? "border-r border-gray-800/30"
                                        : ""
                                    }`}
                                  >
                                    {columnItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-800/30 transition-all duration-200 group relative"
                                      >
                                        {/* Subtle hover effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-500/5 to-blue-500/5 transition-opacity duration-300" />

                                        <span className=" text-blue-500 group-hover:text-blue-600 transition-colors duration-200 relative">
                                          <i
                                            className={`drop-shadow-[0_0_1px_rgba(45,212,191,0.3)] transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)] ${getIconClass(
                                              subItem.icon
                                            )}`}
                                          ></i>
                                        </span>
                                        <span className="font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-200 relative">
                                          {subItem.name}
                                        </span>
                                      </Link>
                                    ))}
                                    <div className="grow border-t border-gray-800/30" />
                                  </div>
                                ))}

                                {/* Enhanced vertical lines for all columns - more subtle */}
                                {columns.length > 1 &&
                                  columns.map(
                                    (_, colIndex) =>
                                      colIndex < columns.length - 1 && (
                                        <div
                                          key={`divider-${colIndex}`}
                                          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/20 via-blue-500/15 to-teal-500/20 z-10"
                                          style={{
                                            left: `${
                                              ((colIndex + 1) /
                                                columns.length) *
                                              100
                                            }%`,
                                          }}
                                        />
                                      )
                                  )}
                              </div>
                            );
                          })()}

                        {/* Default content when no submenu is selected */}
                        {(!activeSubMenu ||
                          (menuName === "Creative Assets" &&
                            !menuData[menuName].items.find(
                              (item) => item.name === activeSubMenu
                            )?.subItems)) && (
                          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                            <div className="w-16 h-16 mb-4 text-teal-400/80">
                              <i
                                className={`text-4xl drop-shadow-[0_0_2px_rgba(45,212,191,0.3)] ${
                                  menuName === "Creative Assets"
                                    ? "fas fa-palette"
                                    : ""
                                }`}
                              ></i>
                            </div>
                            <h3 className="text-xl font-bold text-blue-300 mb-2">
                              {menuName === "Creative Assets"
                                ? "Creative Resources"
                                : ""}
                            </h3>
                            <p className="text-gray-400 max-w-md">
                              {menuName === "Creative Assets"
                                ? "Explore our comprehensive suite of creative tools and resources to enhance your brand presence and content creation capabilities."
                                : ""}
                            </p>

                            {menuName === "Creative Assets" && (
                              <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-lg">
                                <div className="p-3 bg-gray-800/20 rounded-lg border border-gray-700/30 flex flex-col items-center">
                                  <span className="text-teal-400/80 mb-2">
                                    <i className="fas fa-images"></i>
                                  </span>
                                  <span className="text-sm text-gray-400">
                                    Graphics
                                  </span>
                                </div>
                                <div className="p-3 bg-gray-800/20 rounded-lg border border-gray-700/30 flex flex-col items-center">
                                  <span className="text-teal-400/80 mb-2">
                                    <i className="fas fa-video"></i>
                                  </span>
                                  <span className="text-sm text-gray-400">
                                    Videos
                                  </span>
                                </div>
                                <div className="p-3 bg-gray-800/20 rounded-lg border border-gray-700/30 flex flex-col items-center">
                                  <span className="text-teal-400/80 mb-2">
                                    <i className="fas fa-pencil-alt"></i>
                                  </span>
                                  <span className="text-sm text-gray-400">
                                    Templates
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

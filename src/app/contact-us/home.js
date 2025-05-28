"use client";
import { useState } from "react";
import "./style.css";
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    service: "",
    question: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "", question: "" });
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-[100px] md:pt-[100px]">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute top-0 right-0 w-16 md:w-24">
          <div className="text-right">
            <div className="w-16 md:w-24 h-16 md:h-24 inline-block -ml-6">
              <img 
                src="images/logo-slide.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <h1 className={`text-[36px] leading-[40px] mb-[30px] ${monsterfont.className}`}>Get in Touch!</h1>
        <div className={`text-[48px] leading-[52px] mb-[50px] ${monsterfont1.className}`}>
          <h2>Have an idea?</h2>
          <h2>Drop your details below</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div className="space-y-6">
            <h3 className={`text-[24px] leading-[28px] mb-[10px] ${monsterfont1.className}`}>Send a Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
  <div className="flex gap-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-1/2 bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Mail"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-1/2 bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>

  {/* Mobile Number with Country Code */}
  <div className="flex gap-4">
    <select
      name="countryCode"
      value={formData.countryCode || "+1"}
      onChange={handleChange}
      className="w-[20%] bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
    >
      <option value="+1" className="bg-black text-white">+1 (US)</option>
      <option value="+91" className="bg-black text-white">+91 (IN)</option>
      <option value="+44" className="bg-black text-white">+44 (UK)</option>
      <option value="+61" className="bg-black text-white">+61 (AU)</option>
      {/* Add more as needed */}
    </select>
    <input
      type="tel"
      name="phone"
      placeholder="Mobile Number"
      value={formData.phone || ""}
      onChange={handleChange}
      required
      className="w-[80%] bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>

  {/* Services Dropdown */}
  <select
    name="service"
    value={formData.service || ""}
    onChange={handleChange}
    required
    className="w-full bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
  >
    <option value="" disabled className="bg-black text-gray-400">
      Select a Service
    </option>
    <option value="Website Development" className="bg-black text-white">Website Development</option>
    <option value="App Development" className="bg-black text-white">App Development</option>
    <option value="IoT Development" className="bg-black text-white">IoT Development</option>
    <option value="UI/UX Design" className="bg-black text-white">UI/UX Design</option>
    <option value="Custom Software Solutions" className="bg-black text-white">Custom Software Solutions</option>
  </select>

  <textarea
    name="question"
    placeholder="Your Question"
    value={formData.question}
    onChange={handleChange}
    required
    rows="4"
    className="w-full bg-transparent border-b border-gray-600 px-2 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
  />
  <button type="submit" className="fancy1 mt-10" disabled={loading}>
    <span>{loading ? "Sending..." : "Contact Us"}</span>
  </button>
</form>

          </div>

          <div className="bg-black px-10 py-[80px] contact-card">

            <h3 className={`text-[24px] leading-[28px] mb-[60px] ${monsterfont1.className}`}>Find Us</h3>
            <div className="">
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:connect@thealgorithmx.com" className={`text-[14px] leading-[18px] font-[Helvetica] font-[700] mb-3 hover:underline`}>
                  connect@thealgorithmx.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-4 h-4 text-blue-500" />
                <p className={`text-[14px] leading-[18px] font-[Helvetica] font-[700] mb-3 hover:underline`}>
                  2810 N Church St. PMB 15369, Wilmington, DE 19802
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:+14255776660" className={`text-[14px] leading-[18px] font-[Helvetica] font-[500] hover:underline`}>
                  +1-425-577-6660
                </a>
              </div>
              <div className="flex gap-1 mt-[80px]">
                <a href="http://x.com/algorithmxinc" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/thealgorithmx/" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/algorithmxinc" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/algorithmxinc" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

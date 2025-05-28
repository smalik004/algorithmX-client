'use client';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { X, Send } from 'lucide-react';

export default function CompactPopup() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const [popupKey, setPopupKey] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(false);

  
  // Sample testimonials data
  const testimonials = [
    {
      name: "César M Melgoza",
      title: "Founder & CEO",
      company: "Epluribus LLC - Creators of MOXY",
      quote: "It has been a pleasure working with Appinventiv. The team is extremely versatile, competent, professional, and responsive."
    },
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechFusion Inc.",
      quote: "Appinventiv delivered beyond our expectations. Their technical expertise turned our vision into a seamless digital experience."
    },
    {
      name: "Michael Chen",
      title: "Product Director",
      company: "Innovate Solutions",
      quote: "Working with Appinventiv has been transformative for our business. Their strategic approach helped us launch ahead of schedule."
    }
  ];

  useEffect(() => {
    const key = `popupClosed-${pathname}`;
    setPopupKey(key);
    
    // Reset popup closed status
    sessionStorage.removeItem(key);
    
    const handleMouseLeave = (e) => {
      // Show popup when mouse leaves the window from the top
      if (e.clientY <= 0 && !sessionStorage.getItem(key)) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pathname]);
  
  // Auto rotate testimonials
  useEffect(() => {
    if (!showPopup) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, [showPopup, testimonials.length]);
  
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  
  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
  
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false); // Stop loading on error
      return;
    }
  
    try {
      const res = await fetch('/api/contact/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setSubmitted(true);
        setTimeout(closePopup, 2000);
      } else {
        console.error('Failed to send');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  
    setLoading(false); // Stop loading when done
  };
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (popupKey) {
      sessionStorage.setItem(popupKey, 'true');
    }
  };

  return (
    <div className="flex items-center justify-center">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
           
           <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg border border-white border-opacity-20 shadow-2xl w-full max-w-[600px] relative overflow-hidden flex flex-col md:flex-row">

            {/* Close button - visible on all screens */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:bg-gray-100 rounded-full p-1 transition-all z-10"
              onClick={closePopup}
              aria-label="Close popup"
            >
              <X size={18} />
            </button>
            
            {/* Left side - Testimonial part */}
            <div className="bg-black bg-opacity-20 w-full md:w-2/5 p-4 relative">
              <div className="h-full flex flex-col">
                <div className="mb-3">
                  <h2 className="text-lg font-[400] text-white">Leaving already?</h2>
                  <p className="text-sm text-white">Hear from our clients</p>
                </div>
                
                {/* Testimonial content */}
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mb-2 overflow-hidden">
                    {/* Placeholder for testimonial image */}
                  </div>
                  
                  <h3 className="font-bold text-sm text-white">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-xs text-white mb-2">
                    {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                  </p>
                  
                  <p className="text-xs text-white italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  {/* Navigation dots */}
                  <div className="flex justify-center space-x-1 mt-3">
                    {testimonials.map((_, i) => (
                      <button 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === currentTestimonial ? 'bg-blue-600' : 'bg-blue-300'}`}
                        onClick={() => setCurrentTestimonial(i)}
                        aria-label={`Testimonial ${i+1}`}
                      ></button>
                    ))}
                  </div>
                  
                  {/* Navigation arrows */}
                  <div className="flex justify-between w-full mt-2">
                    <button 
                      className="w-6 h-6 rounded-full bg-black shadow-sm flex items-center justify-center "
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                    >
                      <span className="text-xs">&lt;</span>
                    </button>
                    <button 
                      className="w-6 h-6 rounded-full bg-black shadow-sm flex items-center justify-center "
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <span className="text-xs">&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="w-full md:w-3/5 p-4">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                    <Send className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-1">Thank you!</h3>
                  <p className="text-sm text-white">We wil be contact you soon</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <h2 className="text-base font-[400] text-white mb-2">Tell us what you need</h2>
                    <p className="text-xs text-gray-200 mb-3">We'll get back with a cost and timeline estimate</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm bg-transparent border-0 border-b ${errors.name ? 'border-b-red-500' : 'border-b-gray-500'} text-white placeholder:text-[12px] focus:outline-none focus:ring-0 focus:border-b-gray-300`}

                        placeholder="Full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm bg-transparent border-0 border-b ${errors.name ? 'border-b-red-500' : 'border-b-gray-500'} text-white placeholder:text-[12px] focus:outline-none focus:ring-0 focus:border-b-gray-300`}

                        placeholder="E-Mail ID*"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="2"
                        className={`w-full px-3 py-2 text-sm bg-transparent border-0 border-b ${errors.name ? 'border-b-red-500' : 'border-b-gray-500'} text-white placeholder:text-[12px] focus:outline-none focus:ring-0 focus:border-b-gray-300`}

                        placeholder="Describe your project briefly"
                      ></textarea>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-1/4">
                        <select
                          id="countryCode"
                          name="countryCode"
                         className="w-full px-2 py-2 text-sm bg-transparent border-0 border-b border-b-gray-500 text-white placeholder:text-[12px] focus:outline-none focus:ring-0 focus:border-b-gray-300"
                          defaultValue="+91"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+61">+61</option>
                        </select>
                      </div>
                      <div className="w-3/4">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 text-sm bg-transparent border-0 border-b ${errors.name ? 'border-b-red-500' : 'border-b-gray-500'} text-white placeholder:text-[12px] focus:outline-none focus:ring-0 focus:border-b-gray-300`}

                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-1">
                    <button
  onClick={handleSubmit}
  type="button"
  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm transition-all hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
  disabled={loading}
  aria-label="Schedule a free consultation"
>
  {loading ? "Sending..." : "Schedule Free Consultation"}
</button>


                      <p className="mt-1 text-xs text-center text-gray-500">
                        By subscribing, you agree to our Terms & Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
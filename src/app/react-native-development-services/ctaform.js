"use client";
import { useState } from "react";
import axiosHttp from "../utils/httpConfig";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      projectDescription: "",
      contactNo: "",
    },
  });
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await axiosHttp.post("/contact", data);
      if (response.status === 200 || response.status === 201) {
        setSubmitMessage("Form submitted successfully!");
        reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="py-[50px] bg-gradient-to-b from-black via-blue-900/40 to-black">
      <div className="relative bg-gradient-to-b from-black via-blue-900/40 to-black overflow-hidden">
        {/* Background circles for visual effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute top-12 right-12 w-48 h-48 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-y-32 translate-x-32"></div>
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left lg:pr-8">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Let's Build Something Great
              </h1>
              <p className="text-sm text-white/90 mb-5">
                Whether it's a high-performance website, a mobile app, or a
                smart IoT solution—our team is ready to turn your ideas into
                impactful digital experiences that grow your business.
              </p>
              {/* Key Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Custom website & mobile app development tailored to your
                    brand
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Scalable IoT solutions to connect your business to the
                    future
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    Digital marketing strategies that drive real results
                  </p>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm">
                  <span>Schedule a Strategy Call</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </button>
                <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm">
                  <span>View Our Work</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
            {/* Right Side - Contact Form */}
            <div 
              style={{
                          border: "1px solid #2775ea",
                        }}
            className="bg-gradient-to-br from-black via-gray-900 to-gray-800 backdrop-blur-xl rounded-xl p-5 shadow-2xl border border-gray-700/50">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-white mb-1">
                  Start Your Project
                </h2>
                <p className="text-xs text-gray-300">
                  Tell us about your requirements
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3"
              
              >
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Full name must be at least 2 characters",
                      },
                    })}
                    className={`w-full px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-all text-sm ${
                      errors.fullName ? "border-red-400/50 bg-red-500/10" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-300">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-all text-sm ${
                      errors.email ? "border-red-400/50 bg-red-500/10" : ""
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-300">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Contact Number Field (Optional) */}
                <div>
                  <label
                    htmlFor="contactNo"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Contact Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    {...register("contactNo", {
                      pattern: {
                        value: /^[+]?[\d\s\-\(\)]{10,15}$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    className={`w-full px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-all text-sm ${
                      errors.contactNo ? "border-red-400/50 bg-red-500/10" : ""
                    }`}
                    placeholder="Enter your contact number"
                  />
                  {errors.contactNo && (
                    <p className="mt-1 text-xs text-red-300">
                      {errors.contactNo.message}
                    </p>
                  )}
                </div>
                {/* Project Description Field */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Describe Your Project *
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={3}
                    {...register("projectDescription", {
                      required: "Project description is required",
                      minLength: {
                        value: 10,
                        message:
                          "Project description must be at least 10 characters",
                      },
                    })}
                    className={`w-full px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 resize-vertical transition-all text-sm ${
                      errors.projectDescription
                        ? "border-red-400/50 bg-red-500/10"
                        : ""
                    }`}
                    placeholder="Tell us about your laboratory requirements..."
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-300">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>
                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center pt-2"
                
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                      style={{
                          border: "1px solid #2775ea",
                        }}
                    className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                      isSubmitting
                        ? "bg-transparent cursor-not-allowed text-gray-400"
                        : "bg-transparent text-white hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 hover:scale-105 transform shadow-lg hover:shadow-gray-600/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <div
                      
                      >
                        <span>Message</span>
                        
                      </div>
                    )}
                  </button>
                  {/* Success/Error Messages */}
                  {submitMessage && (
                    <div
                      className={`text-center font-medium text-xs ${
                        submitMessage.includes("Error")
                          ? "text-red-300"
                          : "text-green-300"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

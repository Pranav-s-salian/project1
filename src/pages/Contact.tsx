import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you with any inquiries about our products and services.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Phone</h3>
              <p className="text-neutral-600 mb-2">Customer Support</p>
              <p className="text-primary-600 font-medium">+91 98765 43210</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Email</h3>
              <p className="text-neutral-600 mb-2">Send us your query anytime!</p>
              <p className="text-primary-600 font-medium">support@robu.in</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Location</h3>
              <p className="text-neutral-600 mb-2">Visit our office</p>
              <p className="text-primary-600 font-medium">123 Tech Street, Bangalore, 560001</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hours */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-primary-500 mr-2" />
              <h3 className="text-lg font-semibold text-neutral-800">Business Hours</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-neutral-700 mb-2">Customer Support</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="text-neutral-800">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="text-neutral-800">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="text-neutral-800">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-700 mb-2">Order Processing</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="text-neutral-800">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="text-neutral-800">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="text-neutral-800">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Get In Touch</h2>
              
              {submitted ? (
                <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-success-800">
                  <h3 className="font-medium text-lg mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Information</option>
                        <option value="return">Returns & Refunds</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Our Location</h2>
              <div className="bg-neutral-100 rounded-lg overflow-hidden h-96 shadow-sm">
                {/* This would typically be a Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center bg-neutral-200">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-600">
                      Interactive map would be displayed here.
                      <br />
                      123 Tech Street, Bangalore, 560001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <h3 className="font-medium text-neutral-800 mb-2">Visit Our Retail Store</h3>
                <p className="text-neutral-600 text-sm">
                  Our retail store is open to customers who prefer an in-person shopping experience.
                  You can browse our product range, get expert advice from our staff, and make purchases directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-neutral-800 mb-2">What are your shipping times?</h3>
              <p className="text-neutral-600">
                Most orders are processed within 24 hours and delivered within 2-5 business days across India.
                Metro cities typically receive deliveries within 2-3 business days.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-neutral-800 mb-2">Do you offer international shipping?</h3>
              <p className="text-neutral-600">
                Yes, we ship to select countries. International shipping typically takes 7-14 business days
                depending on the destination and customs processing.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-neutral-800 mb-2">What is your return policy?</h3>
              <p className="text-neutral-600">
                We accept returns within 7 days of delivery for most products, provided they are unused and in their 
                original packaging. Please contact our customer support team to initiate a return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
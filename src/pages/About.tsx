import React from 'react';
import { ShieldCheck, Truck, Phone, Users, Target, PenTool as Tool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Robu.in</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            We're on a mission to make electronics and robotics accessible to everyone
            through quality products, fair prices, and exceptional service.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                Founded in 2015, Robu.in started as a small workshop selling DIY electronics kits to local enthusiasts.
                Our founder, a passionate engineer, noticed a gap in the market for high-quality, affordable electronic components 
                and robotics supplies in India.
              </p>
              <p className="text-neutral-600 mb-4">
                What began as a small operation quickly grew into one of India's most trusted sources for electronics,
                robotics components, and maker supplies. Today, we serve thousands of customers nationwide, from hobbyists
                and students to professional engineers and educational institutions.
              </p>
              <p className="text-neutral-600">
                Our commitment to quality, fair pricing, and exceptional customer service remains at the heart of
                everything we do.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team at work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              At Robu.in, our core values guide everything we do. These principles shape our business
              decisions and help us deliver the best experience to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Quality Assurance</h3>
              <p className="text-neutral-600">
                We rigorously test all products to ensure they meet our high standards before they reach our customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Fast Delivery</h3>
              <p className="text-neutral-600">
                We understand that time matters for your projects, so we work hard to ship orders quickly and efficiently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Customer Support</h3>
              <p className="text-neutral-600">
                Our knowledgeable support team is always ready to help with product selection, technical questions, and after-sales service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Community Focus</h3>
              <p className="text-neutral-600">
                We actively support the maker and STEM education communities through workshops, tutorials, and educational content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Innovation</h3>
              <p className="text-neutral-600">
                We're constantly updating our product range to include the latest technologies and components for our customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Reliability</h3>
              <p className="text-neutral-600">
                We build long-term relationships with our customers by consistently delivering on our promises.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our diverse team of engineers, makers, and tech enthusiasts is passionate about electronics and robotics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-neutral-800">Raj Sharma</h3>
              <p className="text-neutral-500 text-sm">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-neutral-800">Priya Patel</h3>
              <p className="text-neutral-500 text-sm">Head of Engineering</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-neutral-800">Vikram Mehta</h3>
              <p className="text-neutral-500 text-sm">Product Manager</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-neutral-800">Ananya Singh</h3>
              <p className="text-neutral-500 text-sm">Customer Success</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Be part of our growing community of makers, students, and professionals. 
            Get exclusive offers, tech tips, and early access to new products.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none text-neutral-800"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, CircuitBoard, Zap } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-dots bg-dots-lg opacity-10"></div>
      <div className="absolute inset-0 bg-waves opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-secondary-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary-300 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build Your Next
                <span className="block text-secondary-300">Innovation</span>
              </h1>
              <p className="text-lg text-primary-50 leading-relaxed">
                Discover cutting-edge electronics and robotics components for your creative projects. 
                From microcontrollers to sensors, we've got everything you need.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium inline-flex items-center transform hover:scale-105 hover:shadow-lg"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group px-8 py-4 rounded-lg transition-all duration-300 font-medium inline-flex items-center border border-white/20 hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform">
                  <Cpu className="h-8 w-8 text-secondary-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Development Boards</h3>
                  <p className="text-primary-100 text-sm">Arduino, Raspberry Pi, and ESP32 boards for your projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform translate-x-8">
                  <CircuitBoard className="h-8 w-8 text-secondary-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sensors & Modules</h3>
                  <p className="text-primary-100 text-sm">Wide range of sensors for every application</p>
                </div>
              </div>
              <div className="space-y-6 translate-y-12">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform">
                  <Zap className="h-8 w-8 text-secondary-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Power Solutions</h3>
                  <p className="text-primary-100 text-sm">Reliable power supplies and management modules</p>
                </div>
                <div className="relative bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-6 transform hover:scale-105 transition-transform translate-x-8">
                  <div className="absolute inset-0 bg-dots bg-dots-sm opacity-20 rounded-2xl"></div>
                  <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
                  <p className="text-white/90 mb-4">Check out our latest products</p>
                  <Link 
                    to="/products" 
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
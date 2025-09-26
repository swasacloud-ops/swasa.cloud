import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IT services all under one roof
          </span>
          <span className="text-white">pipelines in the </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            easiest way
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          We simplify digital transformation with a comprehensive suite of IT services all 
          under one roof. From robust Network Services and seamless System Integration, 
          to scalable Data Centre & Cloud Solutions and cutting-edge Cyber Security, we 
          empower businesses to operate smarter, faster, and safer. Whether you're building 
          from the ground up or optimizing existing infrastructure, our expert-driven approach 
          ensures reliability, agility, and peace of mind.
        </p>
        
        <Button 
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
          onClick={() => window.open('mailto:sales@swasa.cloud', '_blank')}
        >
          Contact Our Experts
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
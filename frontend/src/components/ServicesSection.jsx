import React from "react";
import { Rocket, Settings, Monitor, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "All-in-One IT Services",
      description: "End-to-end IT support: networking, system integration, cloud, data centers & cybersecurity."
    },
    {
      icon: Monitor,
      title: "Digital Workspace Solutions", 
      description: "Modern cloud platforms for seamless remote work and cross-device collaboration."
    },
    {
      icon: Zap,
      title: "CRM & ERP Solutions",
      description: "Delivering smart CRM and ERP systems enhanced with AI capabilities to maximize productivity and efficiency"
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            <Rocket className="h-8 w-8 text-orange-400" />
            Our Core IT Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/50 border border-slate-600/50 mb-6">
                    <IconComponent className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            onClick={() => window.open('https://1in.me/SwasaCloud-Offerings/', '_blank')}
          >
            Teaming up with industry leaders
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
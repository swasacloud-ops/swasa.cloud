import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://1in.me/swasacloud-linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <Instagram className="h-6 w-6 text-white" />
          </a>
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;
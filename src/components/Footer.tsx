
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-roof-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Solaris Roofs</h3>
            <p className="mb-4 text-white/80">
              Premium metal roofing solutions across Canada. 100% Canadian-made quality with 50-year transferable warranty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-roof-red">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Why Metal Roofing
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#warranty" className="text-white/80 hover:text-white transition-colors">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#warranty" className="text-white/80 hover:text-white transition-colors">
                  Financing Options
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-roof-red" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-roof-red" />
                <span className="text-white/80">info@solarisroofs.ca</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-roof-red" />
                <span className="text-white/80">Serving all provinces and territories across Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Solaris Roofs. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="https://www.solarisroofs.com/privacy-policy-2/" className="text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://www.solarisroofs.com/terms-of-service/" className="text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

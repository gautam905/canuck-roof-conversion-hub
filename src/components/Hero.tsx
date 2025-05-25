
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-roof-dark/60 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/roof-hero.jpg')"}}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="flex items-center mb-4">
            <MapPin size={20} className="text-roof-red mr-2" />
            <span className="font-medium">Serving All of Canada</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Solaris Roofs<br />
            <span className="text-roof-red">Premium Metal Roofing</span>
          </h1>
          
          <p className="text-xl mb-8">
            Tariff-FREE metal roofing with a 50-year transferable warranty.
            Upgrade your home with the last roof you'll ever need—proudly Canadian-made and Canadian-sourced steel!
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
            <Button className="btn-primary w-full md:w-auto text-lg group">
              Free Digital Consultation
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-outline bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-roof-dark w-full md:w-auto text-lg">
              Get A Free Estimate
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <p className="font-bold text-2xl md:text-3xl">100%</p>
              <p className="text-sm">Canadian-Made</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl md:text-3xl">50 Yr</p>
              <p className="text-sm">Warranty</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl md:text-3xl">Free</p>
              <p className="text-sm">Consultations</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl md:text-3xl">0%</p>
              <p className="text-sm">Financing Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

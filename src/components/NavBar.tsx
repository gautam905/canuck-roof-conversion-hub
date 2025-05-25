
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/45b157b3-5c7a-4c54-a723-c5bef0938c12.png" alt="Solaris Roofs Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-roof-red tracking-wide">Solaris Roofs</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#promotions" className="hover:text-roof-red font-medium transition">Promotions</a>
          <a href="#features" className="hover:text-roof-red font-medium transition">Why Metal?</a>
          <a href="#services" className="hover:text-roof-red font-medium transition">Our Services</a>
          <a href="#about" className="hover:text-roof-red font-medium transition">About</a>
          <a href="#contact" className="btn-primary px-6 py-2 rounded-md font-semibold text-white transition ml-3">Get a Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

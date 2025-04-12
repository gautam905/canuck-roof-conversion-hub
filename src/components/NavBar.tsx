
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-roof-blue font-bold text-2xl">Canuck Roof</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-roof-dark hover:text-roof-blue font-medium">
            Why Metal Roofing
          </a>
          <a href="#services" className="text-roof-dark hover:text-roof-blue font-medium">
            Services
          </a>
          <a href="#warranty" className="text-roof-dark hover:text-roof-blue font-medium">
            Warranty
          </a>
          <a href="#about" className="text-roof-dark hover:text-roof-blue font-medium">
            About Us
          </a>
          <a href="#contact" className="text-roof-dark hover:text-roof-blue font-medium">
            Contact
          </a>
        </nav>

        {/* Phone Button */}
        <div className="hidden md:block">
          <Button className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            <span>Call Us Now</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              onClick={toggleMenu}
              className="text-roof-dark hover:text-roof-blue font-medium py-2"
            >
              Why Metal Roofing
            </a>
            <a
              href="#services"
              onClick={toggleMenu}
              className="text-roof-dark hover:text-roof-blue font-medium py-2"
            >
              Services
            </a>
            <a
              href="#warranty"
              onClick={toggleMenu}
              className="text-roof-dark hover:text-roof-blue font-medium py-2"
            >
              Warranty
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-roof-dark hover:text-roof-blue font-medium py-2"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-roof-dark hover:text-roof-blue font-medium py-2"
            >
              Contact
            </a>
            <Button className="btn-primary flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>Call Us Now</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const isMobile = useIsMobile();

  const NavItems = () => (
    <>
      <a href="#promotions" className="hover:text-roof-red font-medium transition">Promotions</a>
      <a href="#features" className="hover:text-roof-red font-medium transition">Why Metal?</a>
      <a href="#services" className="hover:text-roof-red font-medium transition">Our Services</a>
      <a href="#about" className="hover:text-roof-red font-medium transition">About</a>
      <a href="tel:(289) 210-9421" className="btn-primary px-6 py-2 rounded-md font-semibold text-white transition">
        (289) 210-9421
      </a>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/new-solaris-logo.png" 
            alt="Solaris Roofs Logo" 
            className="h-12 w-auto" 
          />
          <span className="text-2xl font-bold text-roof-red tracking-wide">
            Solaris Roofs
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItems />
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <div className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  // Scroll to Contact section on CTA click
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact-above");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };
  const NavItems = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      <a href="#promotions" onClick={onItemClick} className="hover:text-roof-red font-bold transition ">Promotions</a>
      <a href="#features" onClick={onItemClick} className="hover:text-roof-red font-bold transition">Why Metal Roof</a>
      <a href="#services" onClick={onItemClick} className="hover:text-roof-red font-bold transition">Our Services</a>
      <a href="#about" onClick={onItemClick} className="hover:text-roof-red font-bold transition">About</a>
      <a href="tel:(289) 210-9421" onClick={onItemClick} className="btn-primary px-6 py-2 rounded-md font-semibold text-white transition text-center">
        (289) 210-9421
      </a>
      <Button
        className="btn-secondary w-full md:w-auto text-lg"
        onClick={(e) => {
          scrollToContact(e);
          onItemClick?.();
        }}
      >
      FREE Quote
      </Button>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-30"> 
     <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex flex-1 items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/new-solaris-logo.png" 
              alt="Solaris Roofs Logo" 
              className="h-12 w-auto" 
            />
            <span className="text-sm sm:text-2xl font-bold text-roof-red tracking-wide whitespace-nowrap">
              Solaris Roofs
            </span>
          </div>
          <a href="tel:(289) 210-9421" className="md:hidden btn-primary px-3 py-1.5 text-sm rounded-md font-semibold text-white transition whitespace-nowrap ml-3">
            (289) 210-9421
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItems />
        </div>        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <NavItems onItemClick={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default NavBar;


import React from "react";
import { Button } from "@/components/ui/button";
import { BadgePercent, Calendar, Timer } from "lucide-react";

// Scroll to Contact section on CTA click
const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Promotions = () => {
  // Calculate the end date for the promotion (60 days from now)
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 60);
  
  // Format the date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-CA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="promotions" className="section-container bg-roof-light">
      <h2 className="section-title">Special Offers</h2>
      <p className="section-subtitle">
        Take advantage of our limited-time promotions and save on your new metal roof installation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* First Promotion */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-roof-red">
          <div className="bg-roof-red text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BadgePercent size={24} className="mr-2" />
              <h3 className="text-xl font-bold text-white">Spring Special</h3>
            </div>
            <div className="flex items-center">
              <Timer size={18} className="mr-1" />
              <span className="text-sm">Limited Time</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-center mb-4">
              Save Up To <span className="text-roof-red">$2,500</span>
            </div>
            
            <p className="mb-4">
              Book your free consultation today and receive up to $2,500 off your new metal roof installation. Take advantage of this special offer before the summer rush begins!
            </p>
            
            <div className="bg-roof-light p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-roof-red mr-2" />
                <p className="font-medium">Offer valid until: {formatDate(endDate)}</p>
              </div>
              <p className="text-sm text-roof-gray">
                *Discount amount varies based on project size. Minimum project value applies.
              </p>
            </div>
            
            <Button className="w-full btn-primary" onClick={scrollToContact}>
              Claim your financing option
            </Button>
          </div>
        </div>
        
        {/* Second Promotion */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-roof-blue">
          <div className="bg-roof-blue p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BadgePercent size={24} className="mr-2 text-white" />
              <h3 className="text-xl font-bold text-white">Financing Special</h3>
            </div>
            <div className="flex items-center">
              <Timer size={18} className="mr-1 text-white" />
              <span className="text-sm text-white">Limited Time</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-center mb-4">
              <span className="text-roof-blue">0%</span> Interest for 12 Months
            </div>
            
            <p className="mb-4">
              Upgrade to a premium metal roof with no interest for a full year. Our special financing offer makes it easier than ever to invest in the lasting protection your home deserves.
            </p>
            
            <div className="bg-roof-light p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-roof-blue mr-2" />
                <p className="font-medium">Offer valid until: {formatDate(endDate)}</p>
              </div>
              <p className="text-sm text-roof-gray">
                *Subject to credit approval. Cannot be combined with other offers.
              </p>
            </div>
            
            <Button className="w-full btn-secondary" onClick={scrollToContact}>
              Claim your financing option
            </Button>
          </div>
        </div>
      </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* First Promotion */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-roof-red">
          <div className="bg-roof-red text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BadgePercent size={24} className="mr-2" />
              <h3 className="text-xl font-bold text-white">Show Home Savings Program</h3>
            </div>
            <div className="flex items-center">
              <Timer size={18} className="mr-1" />
              <span className="text-sm">Limited Time</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-center mb-4">
              Show Home  <span className="text-roof-red">Savings Program</span>
            </div>
            
            <p className="mb-4">
              When you become a Solaris Show Home we provide you with a discount on material and installation.
            </p>
            
            <div className="bg-roof-light p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-roof-red mr-2" />
                <p className="font-medium">Offer valid until: {formatDate(endDate)}</p>
              </div>
              <p className="text-sm text-roof-gray">
                *Discount amount varies based on project size. Minimum project value applies.
              </p>
            </div>
            
            <Button className="w-full btn-primary" onClick={scrollToContact}>
              Claim your financing option
            </Button>
          </div>
        </div>
        
        {/* Second Promotion */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-roof-blue">
          <div className="bg-roof-blue p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BadgePercent size={24} className="mr-2 text-white" />
              <h3 className="text-xl font-bold text-white">Free Digital Home Consulatation</h3>
            </div>
            <div className="flex items-center">
              <Timer size={18} className="mr-1 text-white" />
              <span className="text-sm text-white">Limited Time</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-3xl font-bold text-center mb-4">
              <span className="text-roof-blue">Get a Free Map Estimate of Your Roof  </span> 
            </div>
            
            <p className="mb-4">
             100% Accurate sattelite Measurements done with full finanacing option Restrictions may apply. Subject to change without notice
            </p>
            
            <div className="bg-roof-light p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-roof-blue mr-2" />
                <p className="font-medium">Offer valid until: {formatDate(endDate)}</p>
              </div>
              <p className="text-sm text-roof-gray">
               *Discount amount varies based on project size. Minimum project value applies.
              </p>
            </div>
            
            <Button className="w-full btn-secondary" onClick={scrollToContact}>
              Claim your financing option
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Want to see more special offers?</h3>
        <p className="mb-6">
          Contact our team to learn about additional promotions and discounts that may be available for your specific project.
        </p>
        <Button className="btn-primary" onClick={scrollToContact}>
          Claim your financing option
        </Button>
      </div>
    </section>
  );
};

export default Promotions;

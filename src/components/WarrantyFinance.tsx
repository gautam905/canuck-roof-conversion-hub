
import React from "react";
import { Shield, DollarSign, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WarrantyFinance = () => {
  const financingBenefits = [
    "Quick and easy approval process",
    "Flexible payment terms up to 15 years",
    "No prepayment penalties",
    "Low monthly payments",
    "Defer your first payment",
    "100% financing available"
  ];

  return (
    <section id="warranty" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Warranty Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Shield size={32} className="text-roof-blue mr-3" />
            <h2 className="text-3xl font-bold">50-Year Warranty</h2>
          </div>
          
          <p className="text-roof-gray mb-6">
            Our premium metal roofing comes with an industry-leading 50-year transferable warranty that protects:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle2 size={20} className="text-green-600 mt-1 mr-3 shrink-0" />
              <p>Against manufacturing defects that could affect performance</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 size={20} className="text-green-600 mt-1 mr-3 shrink-0" />
              <p>125 mph wind resistance guarantee</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 size={20} className="text-green-600 mt-1 mr-3 shrink-0" />
              <p>Fade and chalk resistance ensuring your roof maintains its appearance</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 size={20} className="text-green-600 mt-1 mr-3 shrink-0" />
              <p>Hail penetration protection</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 size={20} className="text-green-600 mt-1 mr-3 shrink-0" />
              <p>Transferable to new homeowners if you sell your property</p>
            </div>
          </div>
          
          <div className="bg-roof-blue/10 p-4 rounded-lg">
            <p className="font-medium text-center">
              The last roof you'll ever need to install on your home
            </p>
          </div>
        </div>
        
        {/* Financing Section */}
        <div className="bg-roof-blue text-white rounded-lg p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <DollarSign size={32} className="text-white mr-3" />
            <h2 className="text-3xl font-bold text-white">100% Financing</h2>
          </div>
          
          <p className="text-white/90 mb-6">
            Upgrade to a premium metal roof today with our flexible financing options - invest in your home's future without breaking the bank.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {financingBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 size={20} className="text-white mr-3 shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg mb-6">
            <div className="text-center mb-3">
              <p className="text-sm uppercase tracking-wider">Monthly payments from</p>
              <div className="text-3xl font-bold">$99/month*</div>
            </div>
            <p className="text-xs text-center">*Based on approved credit and project size</p>
          </div>
          
          <Button className="w-full bg-white hover:bg-roof-light text-roof-blue">
            Check Your Financing Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WarrantyFinance;

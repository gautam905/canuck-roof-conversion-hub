
import React from "react";
import { Award, CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-container bg-roof-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/canadian-workers.jpg" 
            alt="Canadian Metal Roofing Workers" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Column - Content */}
        <div>
          <div className="inline-flex items-center bg-roof-blue/10 px-4 py-2 rounded-full mb-6">
            <Award size={18} className="text-roof-blue mr-2" />
            <span className="text-roof-blue font-medium">100% Canadian Made & Owned</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            Premium Metal Roofing Proudly Made in Canada
          </h2>
          
          <p className="text-roof-gray mb-6">
            At Solaris Roofs, we're proud to offer 100% Canadian-made metal roofing products. Our commitment to quality and supporting the local economy means we exclusively source and manufacture our premium metal roofing in Canada.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-roof-blue mt-1 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold">Canadian-Sourced Materials</h4>
                <p className="text-roof-gray">Our steel is sourced from Canadian mills, supporting our national economy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-roof-blue mt-1 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold">Canadian Manufacturing</h4>
                <p className="text-roof-gray">All our metal roofing products are manufactured in Canada by skilled Canadian workers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-roof-blue mt-1 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold">Tariff-Free Products</h4>
                <p className="text-roof-gray">Our Canadian-made products are 100% tariff-free, saving you money.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className="text-roof-blue mt-1 mr-3 shrink-0" />
              <div>
                <h4 className="font-bold">Canadian Installation Teams</h4>
                <p className="text-roof-gray">Our professional installers are highly trained Canadian experts in metal roofing.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-roof-blue text-white p-6 rounded-lg">
            <p className="font-medium">
              By choosing our metal roofing, you're not only getting a superior product but also supporting Canadian jobs and the Canadian economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

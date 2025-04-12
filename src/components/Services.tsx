
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, LayoutGrid, Video, Calendar } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow">
      <div className="bg-roof-blue/10 p-6">
        <Icon size={40} className="text-roof-blue mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-roof-gray mb-4">{description}</p>
      </div>
      <div className="p-6 bg-white">
        <Button className="btn-secondary w-full group">
          {buttonText}
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-container bg-white">
      <h2 className="section-title">Our Free Services</h2>
      <p className="section-subtitle">
        We offer comprehensive services to make your metal roof installation seamless and stress-free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <ServiceCard
          icon={Video}
          title="Digital Home Consultation"
          description="Get expert advice and visualize how different metal roof options would look on your home, all from the comfort of your living room."
          buttonText="Book Consultation"
        />
        
        <ServiceCard
          icon={MapPin}
          title="Free Satellite Roof Estimate"
          description="Using advanced satellite technology, we can provide an accurate estimate of your roof size and project cost without climbing on your roof."
          buttonText="Request Estimate"
        />
        
        <ServiceCard
          icon={Calendar}
          title="In-Person Assessment"
          description="Our roofing experts will visit your home to provide a detailed assessment and personalized recommendations for your specific needs."
          buttonText="Schedule Visit"
        />
      </div>
      
      <div className="mt-16 bg-roof-blue/10 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us today for a no-obligation consultation and discover why thousands of Canadian homeowners trust us with their metal roofing projects.
        </p>
        <Button className="btn-primary text-lg">
          Get Your Free Estimate Today
        </Button>
      </div>
    </section>
  );
};

export default Services;


import React from "react";
import { Shield, DollarSign, Leaf, Clock, Home, Award } from "lucide-react";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  color
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-lg p-6 card-shadow">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-roof-gray">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Tariff-Free",
      description: "All our metal roofing products are tariff-free, saving you money on premium quality roofing.",
      icon: DollarSign,
      color: "bg-green-600"
    },
    {
      title: "50-Year Warranty",
      description: "Our metal roofs come with an industry-leading 50-year transferable warranty.",
      icon: Shield,
      color: "bg-roof-blue"
    },
    {
      title: "100% Canadian",
      description: "Proudly made with Canadian-sourced steel supporting our local economy.",
      icon: Award,
      color: "bg-roof-red"
    },
    {
      title: "Eco-Friendly",
      description: "Energy efficient metal roofing that reduces heating and cooling costs.",
      icon: Leaf,
      color: "bg-green-600"
    },
    {
      title: "Long-Lasting",
      description: "Metal roofs last 2-3 times longer than traditional asphalt shingles.",
      icon: Clock,
      color: "bg-roof-blue"
    },
    {
      title: "Increase Home Value",
      description: "Metal roofing can increase your home's resale value by up to 6%.",
      icon: Home,
      color: "bg-roof-red"
    }
  ];

  return (
    <section id="features" className="section-container bg-roof-light">
      <h2 className="section-title">Why Choose Metal Roofing?</h2>
      <p className="section-subtitle">
        Premium metal roofing offers unmatched durability, energy efficiency, and long-term value for your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

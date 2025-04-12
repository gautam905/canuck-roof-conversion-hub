
import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({
  name,
  location,
  quote,
  stars,
}: {
  name: string;
  location: string;
  quote: string;
  stars: number;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-yellow-400 fill-yellow-400 mr-1"
          />
        ))}
      </div>
      <p className="text-roof-gray italic mb-6">"{quote}"</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-roof-gray">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Thompson",
      location: "Toronto, ON",
      quote:
        "The metal roof installed by Canuck Roof completely transformed our home. The quality is exceptional, and the 50-year warranty gives us peace of mind we never had with our old asphalt roof.",
      stars: 5,
    },
    {
      name: "Sarah Johnson",
      location: "Vancouver, BC",
      quote:
        "I was hesitant about metal roofing at first, but after their digital consultation showing what it would look like on our home, I was sold. The finished product looks amazing!",
      stars: 5,
    },
    {
      name: "Michael Chen",
      location: "Calgary, AB",
      quote:
        "Their financing options made upgrading to a metal roof possible for us. The installation team was professional and the roof has already survived a major hailstorm without a scratch.",
      stars: 5,
    },
  ];

  return (
    <section className="section-container bg-roof-blue/10">
      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-subtitle">
        Don't just take our word for it. Here's what homeowners across Canada are
        saying about our metal roofing solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            quote={testimonial.quote}
            stars={testimonial.stars}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

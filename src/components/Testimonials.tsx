
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
      name: " Anthony Tascione",
      location: "",
      quote:
        "I first off want to start by saying how professional Solomon and his team were during the consultation and instalment of our new roof. From start to finish, Solomon was always available to answer any questions that we had. He sat down with us and explained the process step by step. His team was efficient and clean during installation and the workmanship was beyond beautiful. We are so amazed at how our roof turned out. What a difference it makes and it definitely is a show stopper. We are at ease knowing our home is protected. Thank you so much and we will definitely be referring Solaris Roofing to our family and friends. What a job well done!",
      stars: 5,
    },
    {
      name: " Chris Marit",
      location: "",
      quote:
        "I hired Solaris to install a new metal roof on my semi-detached home in Toronto. From the initial sales consultation to the installation, the people at Solaris were professional, reliable and easy to deal with; I had several interactions with Solomon - the owner - and he made the whole experience simple and enjoyable.We love the look of our new roof, the peace of mind we get from the 50 year warranty and we’ve noticed the house is much cooler.",
      stars: 5,
    },
    {
      name: "Sue C",
      location: "",
      quote:
        "Solomon was quite knowledgeable, professional and quick to meet our roofing needs. He was able to overcome unforeseen supply demands and effectively give us the best product for the best rate. His team was focused, professional and able to answer our questions throughout the process. We couldn't have a more beautiful roof for our rural home. The product is excellent and has improved the value of our home considerably. Solomon ensured our unique needs and wishes were meet and exceeded. We highly recommend Solomon and his team at Solaris Roofing!",
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

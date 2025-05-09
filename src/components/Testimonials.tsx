import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      content: "VISION CORE has completely transformed our parking management operations. The real-time data and analytics have helped us increase efficiency and revenue by over 20%.",
      author: "Jennifer Richards",
      position: "Operations Director",
      company: "Metro Parking Solutions"
    },
    {
      content: "The implementation was seamless, and the results were immediate. Customer complaints about parking availability have dropped by 85% since we started using VISION CORE.",
      author: "David Chen",
      position: "Facility Manager",
      company: "Urban Mall Complex"
    },
    {
      content: "As a technology professional, I was impressed by the accuracy and reliability of VISION CORE's computer vision system. It has consistently performed above our expectations.",
      author: "Michael Torres",
      position: "CTO",
      company: "TechPark Innovations"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#2a616e]/40 to-[#1d2938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#07ef5c]">Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from organizations that have transformed their parking operations with VISION CORE
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1d2938] to-[#2a616e]/20 rounded-xl p-8 md:p-12 shadow-xl border border-[#2a616e]/30">
            <Quote className="absolute text-[#07ef5c] opacity-20 w-24 h-24 -top-6 -left-6" />
            
            {/* Testimonial content */}
            <div className="relative z-10">
              <p className="text-white text-lg md:text-xl mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-xl">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-[#13b37e]">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button
                    onClick={prevTestimonial}
                    className="bg-[#1d2938] hover:bg-[#13b37e] p-2 rounded-full text-white transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-[#1d2938] hover:bg-[#13b37e] p-2 rounded-full text-white transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#07ef5c] w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    
    const timer = setInterval(() => {
      start += step;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-[#07ef5c] mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#1d2938] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#07ef5c] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#13b37e] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Measurable <span className="text-[#07ef5c]">Results</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our computer vision technology delivers impressive outcomes for parking facility operators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1d2938]/80 backdrop-blur-sm rounded-lg border border-[#2a616e]/30 shadow-lg">
            <StatCounter value={98} label="Accuracy Rate" suffix="%" />
          </div>
          <div className="bg-[#1d2938]/80 backdrop-blur-sm rounded-lg border border-[#2a616e]/30 shadow-lg">
            <StatCounter value={30} label="Time Saved Finding Parking" suffix="%" />
          </div>
          <div className="bg-[#1d2938]/80 backdrop-blur-sm rounded-lg border border-[#2a616e]/30 shadow-lg">
            <StatCounter value={15} label="Revenue Increase" suffix="%" />
          </div>
          <div className="bg-[#1d2938]/80 backdrop-blur-sm rounded-lg border border-[#2a616e]/30 shadow-lg">
            <StatCounter value={24} label="Data-Driven Insights" suffix="/7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
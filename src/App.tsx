import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Carousel from './components/Carousel';
// import Stats from './components/Stats';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "VISION CORE - Smart Parking Management";
  }, []);

  return (
    <div className="min-h-screen bg-[#1d2938] text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Stats /> */}
      <Carousel />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
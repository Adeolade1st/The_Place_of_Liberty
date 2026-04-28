import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // The 3 images from your image are defined here
  const slides = [
    {
      image: '/starboy.JPG',
      title: 'Every Child Deserves',
      highlight: 'A Chance To Thrive',
      subtitle: 'We provide a safe, nurturing environment where children discover their unique abilities.'
    },
    {
      image: '/Playtime.jpeg',
      title: 'Education Is',
      highlight: 'A Right, Not A Privilege',
      subtitle: 'Inclusive education transforms lives, families, and communities.'
    },
    {
      image: '/teach.JPG',
      title: 'Together We Build',
      highlight: 'Brighter Futures',
      subtitle: 'Your support enables us to provide world-class special education and therapy.'
    }
  ];

  // Logic to rotate through ALL 3 images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background image for current slide */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover opacity-50" 
          />
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
            <h2 className="text-xl md:text-2xl font-light mb-2">{slide.title}</h2>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">{slide.highlight}</h1>
            <p className="max-w-3xl text-lg md:text-xl opacity-90">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <ChevronDown size={48} className="text-white" />
      </div>
    </div>
  );
};

export default Hero;


      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Special Needs Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {slides[current].title}{' '}
              <span className="text-orange-400">{slides[current].highlight}</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Learn More
              </a>
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8 py-3 rounded-full transition-all duration-200"
              >
                Support Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 w-8' : 'bg-white/50 w-4 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-orange-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

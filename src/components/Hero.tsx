import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    image: '/starboy.JPG',
    title: 'Every Child Deserves',
    highlight: 'A Chance To Thrive',
    subtitle: 'We provide a safe, nurturing environment where children with developmental disabilities discover their unique abilities.',
  },
  {
    image: '/Playtime.jpeg',
    title: 'Education Is',
    highlight: 'A Right, Not A Privilege',
    subtitle: 'At The Place of Liberty, we believe inclusive education transforms lives, families, and communities across Nigeria.',
  },
  {
    image: '/teach.JPG',
    title: 'Together We Build',
    highlight: 'Brighter Futures',
    subtitle: 'Your support enables us to provide world-class special education, therapy, and care for children who need it most.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-[#0a0a0a]">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* IMPROVEMENT: Replaced opacity with brightness/contrast for a "faded" look without the mud */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.35] contrast-[1.1] blur-[1px] scale-105 transition-transform duration-[5000ms]"
              style={{ transform: index === current ? 'scale(1.1)' : 'scale(1.05)' }}
            />
            
            {/* IMPROVEMENT: Radial gradient focuses light in the center, darkening only the text area */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.8)_100%)]" />
          </div>
        </div>
      ))}

      {/* Main Content Layer */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-[0.2em] shadow-lg">
              Special Needs Education
            </span>
            
            {/* IMPROVEMENT: Better leading (line spacing) and tracking (letter spacing) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              {slides[current].title} <br />
              <span className="text-orange-500">{slides[current].highlight}</span>
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl opacity-90">
              {slides[current].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="#about"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Learn More
              </a>
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group border-2 border-white/30 backdrop-blur-md text-white hover:border-orange-500 font-bold px-10 py-4 rounded-full transition-all duration-300"
              >
                <span className="group-hover:text-orange-500 transition-colors">Support Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* IMPROVEMENT: Refined Slide Indicators (Wider active state) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current 
                ? 'bg-orange-500 w-12 h-1.5' 
                : 'bg-white/20 w-3 h-1.5 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-orange-500 transition-colors animate-bounce"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </button>
    </section>
  );
}

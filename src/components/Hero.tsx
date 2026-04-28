import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    image: '/starboy.JPG',
    title: 'Every Child Deserves',
    highlight: 'A Chance To Thrive',
    subtitle:
      'We provide a safe, nurturing environment where children with developmental disabilities discover their unique abilities and reach their full potential.',
  },
  {
    image: '/Playtime.jpeg',
    title: 'Education Is',
    highlight: 'A Right, Not A Privilege',
    subtitle:
      'At The Place of Liberty, we believe inclusive education transforms lives, families, and communities across Nigeria.',
  },
  {
    image: '/teach.JPG',
    title: 'Together We Build',
    highlight: 'Brighter Futures',
    subtitle:
      'Your support enables us to provide world-class special education, therapy, and care for children who need it most.',
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
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
      ))}

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
              <a>
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

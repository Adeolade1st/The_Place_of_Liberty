import { useEffect, useState } from 'react';

type Page = 'home' | 'gallery' | 'history' | 'contact' | 'who-about' | 'offer-special-ed' | 'offer-vocational' | 'offer-therapy' | 'donate' | 'donate-vocational' | 'donate-medication' | 'donate-backtoschool';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    image: '/starboy.JPG',
    tag: 'Helping Today, Helping Tomorrow',
    title: 'Give Every Child The',
    highlight: 'Gift of Education',
    subtitle: 'A free school for children with special needs — powered by love, faith, and community.',
  },
  {
    image: '/Playtime.jpeg',
    tag: 'Education is a right, not a privilege',
    title: 'Unlocking Every',
    highlight: "Child's Potential",
    subtitle: 'Therapy, vocational training, and tuition-free learning for indigent families in Lagos.',
  },
  {
    image: '/CHILDREN.jpg',
    tag: 'Together we build brighter futures',
    title: 'Your Support',
    highlight: 'Changes Lives',
    subtitle: 'Join us to make a difference.',
    
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 9000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[100dvh] min-h-[550px] md:min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt={s.title}
            {/* Focuses on the right side where the subjects are on mobile */}
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Dark overlay to make white/orange text pop on bright backgrounds */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        </div>
      ))}

      {/* Centered content wrapper */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <span className="text-sm md:text-lg font-semibold text-orange-400 uppercase tracking-wider mb-2">
          Education is a right, not a privilege
        </span>
        
        {/* Responsive text scaling */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Unlocking Every <span className="text-orange-400">Child's Potential</span>
        </h1>
        
        <p className="text-sm md:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed">
          Therapy, vocational training, and tuition-free learning for indigent families in Lagos.
        </p>

        {/* Stacked buttons on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <button className="w-full sm:w-auto px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-full transition-all">
            DISCOVER MORE
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded-full transition-all">
            SUPPORT US
          </button>
        </div>
      </div>
    </section>
  );

    

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Italic tagline — gold/amber, matches reference */}
        <p
          className={`text-amber-400 italic text-base md:text-lg font-medium mb-4 transition-opacity duration-700 ${current >= 0 ? 'opacity-100' : 'opacity-0'}`}
        >
          {slide.tag}
        </p>

        {/* Main headline — large, bold, white, 2 lines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-8 max-w-4xl">
          {slide.title}
          <br />
          <span className="text-amber-400">{slide.highlight}</span>
        </h1>

        <p className="text-white/100 text-base md:text-md font-extrabold leading-relaxed mb-10 max-w-xl">
          {slide.subtitle}
        </p>

        {/* CTA buttons — pill style matching reference */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            Discover More
          </a>
          <button
            onClick={() => onNavigate('donate')}
            className="border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200"
          >
            Support Us
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === current ? 'bg-amber-400 w-10' : 'bg-white/30 w-3 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

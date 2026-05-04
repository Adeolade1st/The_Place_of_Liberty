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
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark green overlay — matching reference design */}
      <div className="absolute inset-0 bg-green-900/75" />

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

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
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

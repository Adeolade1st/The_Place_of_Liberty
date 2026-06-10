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
    position: 'object-center' // Centered focal point so the frame content stays readable
  },
  {
    image: '/Playtime.jpeg',
    tag: 'Education is a right, not a privilege',
    title: 'Unlocking Every',
    highlight: "Child's Potential",
    subtitle: 'Therapy, vocational training, and tuition-free learning for indigent families in Lagos.',
    position: 'object-right md:object-center' // Shifts right on mobile to focus on the child/therapist
  },
  {
    image: '/CHILDREN.jpg',
    tag: 'Together we build brighter futures',
    title: 'Your Support',
    highlight: 'Changes Lives',
    subtitle: 'Join us to make a difference.',
    position: 'object-center' // Standard balanced landscape alignment
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 9000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

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
    position: 'object-center'
  },
  {
    image: '/Playtime.jpeg',
    tag: 'Education is a right, not a privilege',
    title: 'Unlocking Every',
    highlight: "Child's Potential",
    subtitle: 'Therapy, vocational training, and tuition-free learning for indigent families in Lagos.',
    position: 'object-right md:object-center'
  },
  {
    image: '/CHILDREN.jpg',
    tag: 'Together we build brighter futures',
    title: 'Your Support',
    highlight: 'Changes Lives',
    subtitle: 'Join us to make a difference.',
    position: 'object-center'
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  // Safe fallback to prevent runtime crashes if the index is out of bounds
  const currentSlide = slides[current] || slides[0];

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
            alt={s.title || 'Background Slide'}
            className={`w-full h-full object-cover ${s.position || 'object-center'}`}
          />
          <div className="absolute inset-0 bg-black/55 md:bg-black/40" />
        </div>
      ))}

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <p className="text-amber-400 italic text-base md:text-lg font-medium mb-4">
          {currentSlide.tag}
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          {currentSlide.title}
          <br />
          <span className="text-amber-400">{currentSlide.highlight}</span>
        </h1>

        <p className="text-white text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-xl">
          {currentSlide.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto text-center bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            Discover More
          </a>
          <button
            onClick={() => onNavigate('donate')}
            className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200"
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

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        {/* Italic tagline — gold/amber */}
        <p
          className="text-amber-400 italic text-base md:text-lg font-medium mb-4"
        >
          {slide.tag}
        </p>

        {/* Main headline — fully responsive typography layout */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          {slide.title}
          <br />
          <span className="text-amber-400">{slide.highlight}</span>
        </h1>

        <p className="text-white text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-xl">
          {slide.subtitle}
        </p>

        {/* CTA buttons — stacked layout on small screens, row on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto text-center bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            Discover More
          </a>
          <button
            onClick={() => onNavigate('donate')}
            className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white hover:text-green-900 font-bold px-10 py-3.5 rounded-full text-sm uppercase tracking-widest transition-all duration-200"
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

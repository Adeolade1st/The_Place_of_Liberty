import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      "Before Place of Liberty, I had lost hope. Doctors told me my son would never speak or learn. Today he reads simple words, plays with other children, and smiles every single morning when he puts on his uniform. This school gave us back our joy.",
    author: 'Mrs. Funke Adeyemi',
    role: 'Parent of a Primary 2 student',
    initials: 'FA',
    color: 'bg-orange-500',
  },
  {
    quote:
      "The therapists here don't just do their jobs — they love these children. My daughter's physiotherapy sessions have transformed her mobility in ways I never thought possible. The patience and dedication of every staff member is remarkable.",
    author: 'Mr. Emeka Eze',
    role: 'Parent of a Nursery student',
    initials: 'EE',
    color: 'bg-green-700',
  },
  {
    quote:
      "What CM Life has supported here at Place of Liberty is truly extraordinary. Seeing children who came in withdrawn and frightened now thriving, learning vocational skills, and building confidence — it makes every contribution worthwhile.",
    author: 'Mr. Manish Patel',
    role: 'Co-Founder, CM Life',
    initials: 'MP',
    color: 'bg-orange-500',
  },
  {
    quote:
      "The vocational programme changed my child's future. He can now make liquid soap and laundry products on his own. Last month he helped sell them at our church bazaar. He beamed with pride. I never imagined this day would come.",
    author: 'Mrs. Bola Ogundimu',
    role: 'Parent of a Vocational student',
    initials: 'BO',
    color: 'bg-green-700',
  },
  {
    quote:
      "As a teacher here, I see miracles happen every week. A child who couldn't hold a pencil last term is now writing her name. These children simply need the right environment, the right love, and the right tools. Place of Liberty provides all three.",
    author: 'Miss Adaeze Okonkwo',
    role: 'Special Education Teacher',
    initials: 'AO',
    color: 'bg-orange-500',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + testimonials.length) % testimonials.length);
        setAnimating(false);
      }, 280);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 md:py-24 bg-gray-50 sr-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Voices of Hope
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Families Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            The real impact of Place of Liberty is best told through the words of those who live it every day.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div
            className={`bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 transition-all duration-280 ${
              animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
            style={{ transition: 'opacity 0.28s ease, transform 0.28s ease' }}
          >
            {/* Quote icon */}
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-6">
              <Quote size={26} className="text-orange-500" />
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-8">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${t.color}`}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-7 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-7 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-orange-500 w-7' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Attribution strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.author}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-200 text-sm ${
                i === current
                  ? 'border-orange-300 bg-orange-50 text-orange-700 font-semibold shadow-sm'
                  : 'border-gray-200 bg-white text-gray-500 hover:border-orange-200 hover:text-gray-700'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold flex-shrink-0 ${item.color}`}
              >
                {item.initials}
              </span>
              <span className="hidden sm:inline">{item.author.split(' ')[0]} {item.author.split(' ')[1]}</span>
              <span className="sm:hidden">{item.initials}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

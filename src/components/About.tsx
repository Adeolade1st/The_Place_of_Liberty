import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Users, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { icon: BookOpen, value: 39, label: 'Children Enrolled', suffix: '' },
  { icon: Users, value: 17, label: 'Qualified Staff', suffix: '' },
  { icon: Heart, value: 5, label: 'Years of Service', suffix: '' },
  
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const statsRef = useScrollReveal<HTMLDivElement>();
  const imagesRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="pt-20">
      {/* Stats banner */}
      <div className="bg-green-800 text-white py-10">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 sr-stagger sr-hidden">
          {stats.map(({ icon: Icon, value, label, suffix }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-2">
                <Icon size={28} className="text-orange-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                <Counter target={value} suffix={suffix} />
              </div>
              <p className="text-green-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div ref={imagesRef} className="relative sr-hidden-left">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/voca.webp"
                alt="Feeding girl"
                className="rounded-2xl w-full h-56 object-cover shadow-lg"
              />
              <img
                src="/therapy.webp"
                alt="Therapy session"
                className="rounded-2xl w-full h-56 object-cover shadow-lg mt-8"
              />
              <img
                src="/mont.webp"
                alt="Team work"
                className="rounded-2xl w-full h-48 object-cover object-top shadow-lg -mt-4"
              />
              <img
                src="/game.webp"
                alt="group photo"
                className="rounded-2xl w-full h-48 object-cover shadow-lg mt-4"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl p-4 shadow-xl text-center hidden md:block">
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs leading-tight">Years<br />of Service</div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="sr-hidden-right">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Welcome to The Place of Liberty
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Nurturing Every Child's <span className="text-green-700">Unique Potential</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Place of Liberty is a <span className="font-semibold text-gray-800">free nursery and primary school</span> dedicated to children with special needs from indigent families in Lagos, Nigeria. The school is powered by the Anglican Diocese of Lagos Mainland and supported by CM Life and the Oluwole Family.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We provide holistic, tuition-free education and therapeutic services — ensuring every child, regardless of ability or background, has the opportunity to learn, grow, and thrive.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Functional Academics (Montessori Standard)',
                'Therapy (Physio, Occupational & Speech)',
                'Vocational Training',
                'Activities of Daily Living (ADL)',
                'Community Integration',
                'Free Lunch & Transportation',
                 'In-house Medical Consultation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-4 h-4 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-orange-500 block" />
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-700 font-bold text-xs">☎</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                  <p className="text-sm font-semibold leading-snug">+234 806 063 6704</p>
                  <p className="text-sm font-semibold leading-snug">+234 802 312 6250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

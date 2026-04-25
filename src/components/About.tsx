import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Users, BookOpen } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: 120, label: 'Children Enrolled', suffix: '+' },
  { icon: Users, value: 35, label: 'Qualified Staff', suffix: '+' },
  { icon: Heart, value: 8, label: 'Years of Service', suffix: '' },
  { icon: Award, value: 95, label: 'Success Rate', suffix: '%' },
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
  return (
    <section id="about" className="pt-20">
      {/* Stats banner */}
      <div className="bg-green-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
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
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Children learning"
                className="rounded-2xl w-full h-56 object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Teacher with students"
                className="rounded-2xl w-full h-56 object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/8613060/pexels-photo-8613060.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Art therapy"
                className="rounded-2xl w-full h-48 object-cover shadow-lg -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/3769983/pexels-photo-3769983.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Children playing"
                className="rounded-2xl w-full h-48 object-cover shadow-lg mt-4"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl p-4 shadow-xl text-center hidden md:block">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-xs leading-tight">Years<br />of Service</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
              Welcome to The Place of Liberty
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Nurturing Every Child's <span className="text-green-700">Unique Potential</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Place of Liberty Nursery and Primary School is a specialist educational institution dedicated to children with developmental disabilities in Nigeria. Founded on the belief that every child — regardless of ability — deserves quality education, love, and opportunity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We provide a structured, inclusive learning environment staffed by trained special-education teachers, therapists, and care workers who are passionate about child development. Our holistic approach combines academics, therapy, and social skills training to empower our students.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Certified Special Education',
                'Speech & Occupational Therapy',
                'Individualised Learning Plans',
                'Safe & Inclusive Environment',
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
              <a
                href="#what-we-do"
                onClick={(e) => { e.preventDefault(); document.querySelector('#what-we-do')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                What We Do
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">☎</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="text-sm font-semibold">+234 (0) 800 000 0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

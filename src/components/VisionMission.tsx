import { Eye, Target, Star, CheckCircle } from 'lucide-react';

const values = [
  { label: 'Inclusion', desc: 'Every child belongs and is valued.' },
  { label: 'Compassion', desc: 'We serve with love, patience, and understanding.' },
  { label: 'Excellence', desc: 'We commit to the highest standards of care and education.' },
  { label: 'Integrity', desc: 'We are transparent, ethical, and accountable.' },
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vision &amp; Mission
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Everything we do is guided by a clear purpose — to create a world where every child with a developmental disability can live a full, meaningful, and dignified life.
          </p>
        </div>

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="relative bg-green-800 text-white rounded-2xl p-8 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-700 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-700 rounded-full opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
                <Eye size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed text-base">
                To be Nigeria's foremost centre of excellence for special needs education — a place where every child with developmental disabilities is seen, celebrated, and empowered to realise their God-given potential, contributing meaningfully to society.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-orange-500 text-white rounded-2xl p-8 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-400 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-400 rounded-full opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-orange-50 leading-relaxed text-base">
                To provide an inclusive, nurturing, and therapeutically-rich educational environment that equips children with developmental disabilities with the skills, confidence, and independence they need — while supporting their families throughout the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h3>
            <div className="space-y-4">
              {values.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-200 group">
                  <CheckCircle size={22} className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-0.5">{label}</h4>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Teacher and child"
              className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
            />
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 md:-left-8 bg-white rounded-2xl p-5 shadow-xl max-w-xs border-l-4 border-orange-500">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed">
                "Every child who walks through our doors carries immense potential waiting to be unlocked."
              </p>
              <p className="text-green-700 font-semibold text-xs mt-2">— School Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

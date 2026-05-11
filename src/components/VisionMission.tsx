import { Eye, Target, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const missions = [
  'To provide a Christ-centered and safe environment where children of indigent families will be valued, liberated, and inspired to develop and grow spiritually, mentally, and psychologically.',
  'To transform the lives of the children so that they be given "beauty instead of ashes; the oil of joy instead of sadness; the garment of praise instead of a spirit of heaviness, such that they will be called trees of righteousness; planted by the Lord, that His name will be glorified because of them". (Isa. 61:3)',
  'To support the parents and family of the children thereby restoring and sustaining in them hope and confidence for the future.',
];

export default function VisionMission() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const visionRef = useScrollReveal<HTMLDivElement>();
  const missionRef = useScrollReveal<HTMLDivElement>();
  const memorialRef = useScrollReveal<HTMLDivElement>();
  const valuesLeftRef = useScrollReveal<HTMLDivElement>();
  const valuesRightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vision-mission" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 sr-hidden">
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

        {/* Vision card */}
        <div ref={visionRef} className="relative bg-green-800 text-white rounded-2xl p-8 md:p-10 overflow-hidden mb-8 sr-hidden-left">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-green-700 rounded-full opacity-40" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-700 rounded-full opacity-25" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Eye size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Vision Statement</h3>
              <p className="text-green-100 leading-relaxed text-base md:text-lg">
                To provide compassionate care and liberating education to children with special needs in order that they may attain the highest possible levels of their human capacity.
              </p>
            </div>
          </div>
        </div>

        {/* Mission card */}
        <div ref={missionRef} className="relative bg-orange-500 text-white rounded-2xl p-8 md:p-10 overflow-hidden mb-16 sr-hidden-right">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-400 rounded-full opacity-40" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full opacity-25" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-bold self-center">Mission Statements</h3>
            </div>
            <div className="space-y-5">
              {missions.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-orange-50 leading-relaxed text-sm md:text-base">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      

      </div>
    </section>
  );
}
import { GraduationCap, Briefcase, Stethoscope, ArrowRight } from 'lucide-react';

type Page = 'home' | 'gallery' | 'history' | 'contact' | 'who-about' | 'offer-special-ed' | 'offer-vocational' | 'offer-therapy' | 'donate' | 'donate-vocational' | 'donate-medication' | 'donate-backtoschool';

interface Props {
  onNavigate?: (page: Page) => void;
}

const services = [
  {
    page: 'offer-special-ed' as Page,
    icon: GraduationCap,
    title: 'Special Education',
    sub: 'Montessori Standard',
    desc: 'Individualised Montessori-based academic programmes designed around each child\'s unique learning style, pace, and cognitive abilities.',
    color: 'bg-orange-50 text-orange-600',
    border: 'border-orange-200',
    accent: 'bg-orange-500',
  },
  {
    page: 'offer-vocational' as Page,
    icon: Briefcase,
    title: 'Vocational Training',
    sub: 'Skills & Empowerment',
    desc: 'Life-skills coaching, specialised vocational tracks, and "Startup Kits" that transform graduates into economically independent adults.',
    color: 'bg-green-50 text-green-700',
    border: 'border-green-200',
    accent: 'bg-green-700',
  },
  {
    page: 'offer-therapy' as Page,
    icon: Stethoscope,
    title: 'Therapy',
    sub: 'Physio, Occupational & Speech',
    desc: 'A holistic therapeutic team providing physiotherapy, occupational therapy, and speech & language therapy tailored to each child\'s needs.',
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-200',
    accent: 'bg-blue-600',
  },
];

export default function WhatWeDo({ onNavigate }: Props) {
  return (
    <section id="what-we-do" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of specialised educational and therapeutic services tailored to meet the diverse needs of every child in our care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ page, icon: Icon, title, sub, desc, color, border, accent }) => (
            <div
              key={title}
              className={`bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border ${border} flex flex-col`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-0.5">{title}</h3>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${color.split(' ')[1]}`}>{sub}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
              {onNavigate && (
                <button
                  onClick={() => onNavigate(page)}
                  className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${color.split(' ')[1]} hover:gap-2.5 transition-all duration-200`}
                >
                  Learn more <ArrowRight size={13} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 bg-green-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Ready to enrol your child?
            </h3>
            <p className="text-green-200 text-sm leading-relaxed max-w-lg">
              Our admissions team is available to guide you through the enrolment process and answer any questions you may have.
            </p>
          </div>
          <a
            href="mailto:info@theplaceofiberty.edu.ng"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
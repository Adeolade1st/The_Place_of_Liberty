import { Brain, Palette, Music, Activity, BookOpen, Users } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Special Education',
    desc: 'Individualised academic programs designed around each child\'s unique learning style, pace, and cognitive abilities.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Activity,
    title: 'Occupational Therapy',
    desc: 'Hands-on therapy sessions that develop fine motor skills, daily living skills, and sensory integration.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: BookOpen,
    title: 'Speech & Language',
    desc: 'Professional speech therapy to improve communication, language development, and social interaction skills.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Palette,
    title: 'Art & Creative Therapy',
    desc: 'Creative expression through art, drawing, and craft therapy to boost confidence and emotional wellbeing.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Music,
    title: 'Music Therapy',
    desc: 'Evidence-based music therapy sessions that support emotional regulation, memory, and social skills.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Users,
    title: 'Parental Support',
    desc: 'Counselling, workshops, and home-support programs to equip families with skills to support their children.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of specialised educational and therapeutic services tailored to meet the diverse needs of every child in our care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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

import { GraduationCap, CheckCircle, BookOpen, Users, Star, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '39', label: 'Children Enrolled', sub: 'across all programmes' },
  { icon: Star, value: '95%', label: 'Progress Rate', sub: 'showing measurable improvement' },
  { icon: Award, value: '5+', label: 'Years of Excellence', sub: 'in special education' },
  { icon: BookOpen, value: '1:4', label: 'Teacher-Child Ratio', sub: 'for personalised attention' },
];

const principles = [
  { title: 'Child-Led Learning', desc: 'Each child moves at their own pace, following their natural curiosity and readiness.' },
  { title: 'Prepared Environment', desc: 'Classrooms are carefully arranged to foster independence, order, and exploration.' },
  { title: 'Hands-On Materials', desc: 'Tactile, concrete Montessori materials make abstract concepts tangible and accessible.' },
  { title: 'Whole-Child Focus', desc: 'We develop intellectual, social, emotional, and physical skills in equal measure.' },
  { title: 'Uninterrupted Work Cycles', desc: 'Extended focus periods allow children to deepen concentration and self-regulation.' },
  { title: 'Individualised IEPs', desc: 'Every child has an Individual Education Plan tailored to their unique profile.' },
];

export default function SpecialEdPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(234,88,12,0.88), rgba(194,65,12,0.83)), url('/teacherteach1.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4 mx-auto">
          <GraduationCap size={28} />
        </div>
        <p className="text-orange-200 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Education</h1>
        <p className="text-orange-50 font-semibold text-lg mb-2">Montessori Standard</p>
        <p className="text-orange-100 max-w-2xl mx-auto leading-relaxed text-sm">
          Individualised Montessori-based learning that meets each child exactly where they are, unlocking potential through structure, freedom, and respect.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Montessori Education Adapted for <span className="text-orange-500">Every Learner</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We apply the internationally acclaimed Montessori method to the unique context of children with developmental disabilities. Rather than forcing children to adapt to a rigid curriculum, we adapt the curriculum to fit the child — their learning style, sensory preferences, and pace of development.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our trained Montessori-certified educators work alongside therapists to create a seamless learning experience that bridges academic progress with therapeutic goals, ensuring every child is seen, valued, and challenged appropriately.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each child's journey is guided by a personalised Individual Education Plan (IEP), developed collaboratively with parents, educators, and therapists.
            </p>
          </div>
          <div className="relative">
            <img
              src='/teacherteach.JPG'
              alt="Teacher with child"
              className="rounded-2xl w-full h-80 object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
              <p className="text-2xl font-bold">1:4</p>
              <p className="text-orange-100 text-xs">Teacher-to-child ratio</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-100">
              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">{value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Foundations</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Montessori Principles We Live By</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Enrol Your Child Today</h3>
            <p className="text-orange-100 text-sm leading-relaxed max-w-lg">
              Contact our admissions team to learn more about our Special Education programme and how we can support your child's unique learning journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a href="mailto:info@theplaceofiberty.edu.ng" className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-7 py-3 rounded-full transition-colors text-sm">
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

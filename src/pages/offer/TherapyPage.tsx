import { Stethoscope, Activity, MessageCircle, PersonStanding, CheckCircle, Users, Star, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '85+', label: 'Children in Therapy', sub: 'currently receiving sessions' },
  { icon: Star, value: '3', label: 'Therapy Disciplines', sub: 'under one roof' },
  { icon: TrendingUp, value: '91%', label: 'Functional Improvement', sub: 'reported by families' },
  { icon: Activity, value: '2x/week', label: 'Session Frequency', sub: 'per child on average' },
];

const therapies = [
  {
    icon: PersonStanding,
    title: 'Physiotherapy',
    color: 'bg-teal-50 text-teal-700',
    border: 'border-teal-200',
    heading: 'Building Strength & Mobility',
    desc: 'Our physiotherapists work to improve gross motor skills, muscle tone, balance, coordination, and overall physical function. We design personalised exercise programmes and use specialised equipment to help children move with greater confidence and independence.',
    benefits: [
      'Gross motor skill development',
      'Muscle tone regulation',
      'Balance and coordination',
      'Postural support',
      'Pain management',
      'Mobility & independence',
    ],
  },
  {
    icon: Activity,
    title: 'Occupational Therapy',
    color: 'bg-blue-50 text-blue-700',
    border: 'border-blue-200',
    heading: 'Enabling Daily Life Skills',
    desc: 'Occupational therapists help children develop the fine motor skills, sensory integration abilities, and daily living skills they need to participate fully in school and home life. Sessions are play-based, engaging, and always purposeful.',
    benefits: [
      'Fine motor skill development',
      'Sensory integration',
      'Self-care and daily routines',
      'Handwriting & pencil grip',
      'Cognitive processing',
      'School readiness skills',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Speech & Language Therapy',
    color: 'bg-orange-50 text-orange-600',
    border: 'border-orange-200',
    heading: 'Finding Every Child\'s Voice',
    desc: 'Our speech and language therapists support children with communication difficulties — whether verbal, non-verbal, or somewhere in between. We use evidence-based techniques alongside assistive technology and AAC (Augmentative and Alternative Communication) tools.',
    benefits: [
      'Expressive language development',
      'Receptive language skills',
      'Articulation & pronunciation',
      'AAC (Augmentative Communication)',
      'Social communication skills',
      'Feeding & swallowing support',
    ],
  },
];

export default function TherapyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(14,116,144,0.88), rgba(8,78,100,0.93)), url(https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4 mx-auto">
          <Stethoscope size={28} />
        </div>
        <p className="text-cyan-200 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Therapy Services</h1>
        <p className="text-cyan-50 font-semibold text-lg mb-2">Physiotherapy · Occupational · Speech</p>
        <p className="text-cyan-100 max-w-2xl mx-auto leading-relaxed text-sm">
          A multidisciplinary team of qualified therapists working together to help every child achieve their fullest physical, functional, and communicative potential.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="bg-cyan-50 rounded-2xl p-6 text-center border border-cyan-100">
              <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-cyan-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">{value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Three Disciplines</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Holistic Therapeutic Support</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Rather than treating symptoms in isolation, our therapists collaborate with each other and with classroom teachers to deliver a unified, whole-child approach. Therapy goals are embedded into the school day, making progress natural and consistent.
          </p>
        </div>

        {/* Therapy cards */}
        <div className="space-y-8 mb-16">
          {therapies.map(({ icon: Icon, title, color, border, heading, desc, benefits }, i) => (
            <div
              key={title}
              className={`grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl p-8 border ${border} shadow-sm`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className={`text-sm font-semibold mb-3 ${color.split(' ')[1]}`}>{heading}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
              <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                <h4 className="font-bold text-gray-900 mb-3 text-sm">What We Address:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${color.split(' ')[1]}`} />
                      <span className="text-sm text-gray-600 leading-tight">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our process */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mb-16 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">How Therapy Works at Our School</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Assessment', desc: 'Each child undergoes a thorough initial assessment to identify needs and set goals.' },
              { step: '02', title: 'ITP Design', desc: 'A personalised Individual Therapy Plan is created with input from parents and teachers.' },
              { step: '03', title: 'Sessions', desc: 'Regular therapy sessions — individual or small group — delivered in the school setting.' },
              { step: '04', title: 'Review', desc: 'Progress is reviewed every term, goals adjusted, and parents are kept fully informed.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">{step}</div>
                <h4 className="font-bold text-gray-900 mb-1.5">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cyan-800 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Request a Therapy Assessment</h3>
            <p className="text-cyan-100 text-sm leading-relaxed max-w-lg">
              Not sure where to start? Contact us to arrange an initial consultation with one of our therapists.
            </p>
          </div>
          <a href="mailto:info@theplaceofiberty.edu.ng" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full transition-colors text-sm flex-shrink-0">
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

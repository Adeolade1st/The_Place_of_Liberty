import { Briefcase, Wrench, TrendingUp, Users, Award, DollarSign, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, value: '17', label: 'Currently Enrolled', sub: 'since programme launch' },
  { icon: Award, value: '6', label: 'Vocational Tracks', sub: 'available to students' },
];

const tracks = [
 
  { name: 'Craft & Beadwork', desc: 'Jewellery production, bead artistry, and handmade crafts.' },
  { name: 'Home care Essentials', desc: 'Formulation, packaging, and selling personal care products( Liquid soap & antiseptic ).' },
  { name: 'Hair Care & Braiding', desc: 'Hair care techniques for the Nigerian market.' },
  { name: 'Mopping Stick', desc: 'Making mopping sticks for household use and commercial purposes.' },
 
 
 
];

const launchpadFeatures = [
  'Personalised business plan development',
  'Starter tools and equipment provision',
  'Market linkage and customer development',
  'Mentorship by established business owners',
  'First-year business check-ins and support',
];

export default function VocationalOfferPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(134,28,12,0.88), rgba(94,25,12,0.63))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4 mx-auto">
          <Briefcase size={28} />
        </div>
        <p className="text-green-200 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vocational Training</h1>
        <p className="text-green-50 font-semibold text-lg mb-2">Skills & Economic Empowerment</p>
        <p className="text-green-100 max-w-2xl mx-auto leading-relaxed text-sm">
          Practical life skills, specialised vocational tracks, and "Launchpad" support that turn graduates into confident, economically independent adults.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-16">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="bg-green-50 rouned-2xl p-6 text-center border border-green-100">
              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-green-700" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">{value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        {/* Programme overview */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-2">Programme Overview</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              From the Classroom to a <span className="text-green-700">Sustainable Livelihood</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-gray-900 mb-1">Holistic Training</p>
                <p>We integrate essential life skills — financial literacy, business management, communication, and customer service — alongside specialised vocational tracks, ensuring graduates are work-ready in every sense.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Adapted Learning</p>
                <p>All vocational training is delivered with adaptations for each student's ability, using hands-on, task-based methodologies that suit diverse learning styles and cognitive profiles.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Certification</p>
                <p>Students who complete the programme receive a certificate of vocational competency, increasing their credibility and employability in the open market.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src='/voca.webp'
              alt="Vocational training session"
              className="rounded-2xl w-auto h-100 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Tracks grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench size={22} className="text-green-700" />
            <h3 className="font-bold text-gray-900 text-xl">Vocational Tracks Offered</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map(({ name, desc }) => (
              <div key={name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-1.5 text-sm">{name}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Launchpad */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-10 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={22} className="text-orange-400" />
            <h3 className="font-bold text-xl">The "Launchpad" Support</h3>
          </div>
          <p className="text-green-200 text-sm mb-6 leading-relaxed">
            Success doesn't end at graduation. Graduating students receive a personalised Startup Kit — the tools, equipment, and mentorship they need to launch their own business immediately after completing training.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {launchpadFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <CheckCircle size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-100 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Enroll in Our Vocational Programme</h3>
            <p className="text-orange-100 text-sm leading-relaxed max-w-lg">
              Contact us to find out eligibility, available tracks, and how to register your child or young adult.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a href="mailto:info@theplaceofiberty.edu.ng" className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-7 py-3 rounded-full transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

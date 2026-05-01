import { Briefcase, Heart, BookOpen, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

type Page = 'home' | 'gallery' | 'history' | 'donate-vocational' | 'donate-medication' | 'donate-backtoschool';

interface Props {
  onNavigate: (page: Page) => void;
}

const initiatives = [
  {
    page: 'donate-vocational' as Page,
    icon: Briefcase,
    title: 'Support Our Vocational School',
    desc: 'Equip graduates with life skills, vocational training, and "Startup Kits" that transform education into immediate economic independence.',
    color: 'from-green-700 to-green-900',
    badge: 'Empowerment',
    badgeColor: 'bg-green-100 text-green-800',
    stat: '47 graduates supported',
  },
  {
    page: 'donate-medication' as Page,
    icon: Heart,
    title: 'Sponsor a Child\'s Medication',
    desc: "Bridge the gap between financial hardship and life-saving healthcare. Sponsor a child's monthly or yearly medical costs.",
    color: 'from-red-700 to-red-900',
    badge: 'Healthcare',
    badgeColor: 'bg-red-100 text-red-800',
    stat: '63 children receiving medication',
  },
  {
    page: 'donate-backtoschool' as Page,
    icon: BookOpen,
    title: 'Back to School Initiative',
    desc: 'Ensure every child starts the academic year with dignity — uniforms, bags, footwear, and stationery so no child misses school.',
    color: 'from-amber-700 to-amber-900',
    badge: 'Education',
    badgeColor: 'bg-amber-100 text-amber-800',
    stat: '210 children equipped last year',
  },
];

const overallStats = [
  { icon: Users, value: '320+', label: 'Lives Impacted', desc: 'children & families supported' },
  { icon: DollarSign, value: '₦12M+', label: 'Raised This Year', desc: 'from generous donors like you' },
  { icon: TrendingUp, value: '8 Years', label: 'Consistent Impact', desc: 'of transforming lives in Lagos' },
];

export default function DonatePage({ onNavigate }: Props) {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(21,128,61,0.88), rgba(21,128,61,0.93))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Make a Difference</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose How to Give</h1>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed">
          Every gift — large or small — changes a child's story. Select the initiative that speaks to your heart and make your donation count today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overall stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {overallStats.map(({ icon: Icon, value, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="font-semibold text-gray-800 mb-1">{label}</div>
              <div className="text-xs text-gray-400">{desc}</div>
            </div>
          ))}
        </div>

        {/* Initiative cards */}
        <div className="mb-10 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Initiatives</p>
          <h2 className="text-3xl font-bold text-gray-900">Where Would You Like to Give?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {initiatives.map(({ page, icon: Icon, title, desc, color, badge, badgeColor, stat }) => (
            <div
              key={page}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon size={26} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>{badge}</span>
                <h3 className="text-xl font-bold mt-3 leading-tight">{title}</h3>
              </div>
              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-5">
                  <TrendingUp size={13} className="text-orange-400" />
                  {stat}
                </div>
                <button
                  onClick={() => onNavigate(page)}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  Donate to This Cause
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scripture */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <div className="text-4xl font-serif text-white/30 mb-3">"</div>
          <p className="text-green-100 text-lg md:text-xl leading-relaxed italic max-w-3xl mx-auto mb-4">
            He who gives to the poor will lack nothing, but he who closes his eyes to them receives many curses.
          </p>
          <p className="text-orange-300 font-semibold text-sm">— Proverbs 28:27</p>
        </div>
      </div>
    </div>
  );
}

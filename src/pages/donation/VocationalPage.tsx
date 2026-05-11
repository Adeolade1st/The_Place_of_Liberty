import { Briefcase, Wrench, TrendingUp, Users, BookOpen, Award } from 'lucide-react';
import DonationLayout from './DonationLayout';

const stats = [
  { icon: Users, value: '47', label: 'Graduates Supported', sub: 'since programme launch' },
  { icon: Briefcase, value: '32', label: 'Businesses Started', sub: 'by our alumni' },
  { icon: TrendingUp, value: '89%', label: 'Economic Independence', sub: 'rate within 6 months' },
  { icon: Award, value: '12', label: 'Vocational Tracks', sub: 'available to students' },
];

const impactTiers = [
  { amount: '₦50,000', impact: 'Provides a "Startup Kit" for a graduating student' },
  { amount: '₦300,000', impact: 'Sponsors all student\'s full vocational programme' },
];
export default function VocationalPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(134,28,12,0.88), rgba(94,25,12,0.63))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 mb-4 mx-auto">
          <Briefcase size={26} />
        </div>
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Donate</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Vocational School</h1>
        <p className="text-green-100 max-w-2xl mx-auto leading-relaxed">
          Equip young people with disabilities with real-world skills, life coaching, and "Startup Kits" that transform graduation into immediate economic independence.
        </p>
      </div>

      {/* Programme overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Vocational Training & Empowerment</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              From Classroom to Livelihood
            </h2>
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-gray-900 mb-1">Objective</p>
                <p>To strengthen our vocational framework by integrating life-skills coaching and providing "Startup Kits" for graduates to ensure immediate economic independence.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Holistic Training</p>
                <p>We are expanding our curriculum to include essential life skills — such as financial literacy and business management alongside specialised vocational tracks including tailoring, catering, digital skills, and craft production.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">The "Launchpad" Support</p>
                <p>Success doesn't end at graduation. We provide high-performing alumni with the necessary tools and equipment to set up their own workshops or businesses, ensuring they move directly from training into sustainable livelihoods.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src='/creatives.webp'
              alt="Vocational training"
              className="rounded-2xl w-full h-72 object-cover shadow-lg mb-6"
            />
            {/* Impact tiers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-orange-500" />
                <h3 className="font-bold text-gray-900">Your Donation's Impact</h3>
              </div>
              <div className="space-y-3">
                {impactTiers.map(({ amount, impact }) => (
                  <div key={amount} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-sm flex-shrink-0 w-20">{amount}</span>
                    <span className="text-gray-600 text-sm">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tracks */}
        <div className="bg-green-800 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <Wrench size={22} className="text-orange-400" />
            <h3 className="font-bold text-lg">Vocational Tracks Offered</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Craft & Beadwork', 'Soap Making(Liquid soap & Antiseptic wash)', 'Hair Care', 'Mopping Stick Making', 'Shoe Polishing',].map((track) => (
              <div key={track} className="bg-green-700/50 rounded-xl px-4 py-2.5 text-sm text-green-100 text-center">
                {track}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation form */}
      <DonationLayout title="Support Our Vocational School" accentColor="#15803d">
        <div />
      </DonationLayout>
    </div>
  );
}

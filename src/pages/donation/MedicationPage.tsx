import { Heart, ShieldCheck, Activity, Users, Calendar, TrendingUp } from 'lucide-react';
import DonationLayout from './DonationLayout';

const stats = [
  { icon: Users, value: '63', label: 'Children Sponsored', sub: 'receiving consistent medication' },
  { icon: Calendar, value: '12', label: 'Months Coverage', sub: 'per full sponsorship' },
  { icon: ShieldCheck, value: '100%', label: 'Healthcare Reach', sub: 'for sponsored children' },
  { icon: TrendingUp, value: '78%', label: 'Health Improvement', sub: 'reported by families' },
];

const impactTiers = [
  { amount: '₦3,000', label: 'Monthly', impact: 'Sponsors one child\'s monthly medication costs' },
  { amount: '₦8,000', label: 'Quarterly', impact: 'Three months of uninterrupted treatment for a child' },
  { amount: '₦30,000', label: 'Yearly', impact: 'Full-year medication coverage for one child' },
  { amount: '₦60,000', label: 'Two Children', impact: 'A full year of healthcare for two children' },
];

const conditions = [
  'Epilepsy / Seizure Disorders',
  'Autism-related medications',
  'ADHD management',
  'Cerebral Palsy support',
  'Nutritional supplements',
  'Sensory processing aids',
];

export default function MedicationPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(185,28,28,0.82), rgba(153,27,27,0.88)), url(https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 mb-4 mx-auto">
          <Heart size={26} />
        </div>
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Donate</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sponsor a Child's Medication</h1>
        <p className="text-red-100 max-w-2xl mx-auto leading-relaxed">
          Bridge the gap between financial hardship and life-saving healthcare. Your monthly or yearly gift ensures a child never misses a critical dose.
        </p>
      </div>

      {/* Programme overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Sponsor a Child Medication Initiative</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              A Healthy Child Can Learn
            </h2>
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-gray-900 mb-1">Objective</p>
                <p>To bridge the gap between financial hardship and life-saving healthcare for vulnerable children enrolled at The Place of Liberty.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Critical Care Access</p>
                <p>Many children living with chronic conditions face life-threatening risks simply because their families cannot afford consistent medication. Missed doses don't just cause discomfort — they can lead to regression, hospitalisation, and in some cases, permanent harm.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Your Impact</p>
                <p>This initiative invites donors to sponsor the monthly or yearly medical costs for a specific child. By removing the financial barrier to healthcare, we aren't just providing medicine — we are providing these children with the foundation for a healthy, functional future.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8613060/pexels-photo-8613060.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Child receiving care"
              className="rounded-2xl w-full h-72 object-cover shadow-lg mb-6"
            />
            {/* Conditions covered */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={18} className="text-orange-500" />
                <h3 className="font-bold text-gray-900">Conditions Supported</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-red-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-0.5">{label}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          ))}
        </div>

        {/* Impact tiers */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
          <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">What Your Gift Does</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {impactTiers.map(({ amount, label, impact }) => (
              <div key={amount} className="bg-red-50 rounded-xl p-5 text-center border border-red-100">
                <div className="text-2xl font-bold text-gray-900 mb-0.5">{amount}</div>
                <div className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">{label}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 mb-12">
          <div className="text-4xl font-serif text-white/40 mb-2">"</div>
          <p className="text-orange-50 leading-relaxed italic mb-4 text-base">
            Before this programme, we sometimes had to choose between feeding our daughter and buying her medication. Now she attends school every day and has not had a seizure in over four months.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">AN</div>
            <div>
              <p className="font-bold text-sm">Mrs. Adaeze N.</p>
              <p className="text-orange-200 text-xs">Parent of a sponsored child</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation form */}
      <DonationLayout title="Sponsor a Child's Medication" accentColor="#b91c1c">
        <div />
      </DonationLayout>
    </div>
  );
}

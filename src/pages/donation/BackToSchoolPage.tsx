import { BookOpen, ShoppingBag, Users, Star, Package, TrendingUp } from 'lucide-react';
import DonationLayout from './DonationLayout';

const stats = [
  { icon: Users, value: '39', label: 'Children Equipped', sub: 'in the last academic year' },
  { icon: Star, value: '94%', label: 'Attendance Increase', sub: 'among kit recipients' },
  { icon: TrendingUp, value: '3x', label: 'More Likely to Stay', sub: 'in school full term' },
];

const kitContents = [
  'School uniform (2 sets)',
  'Sturdy school bag',
  'Footwear (shoes)',
  'Notebooks & exercise books',
  'Pens, pencils & rulers',
  'Geometry set',
  'Lunch box',
  'Name labels & ID card holder',
];

const impactTiers = [
  { amount: '₦5,000', impact: 'Provides stationery and supplies for one child' },
  { amount: '₦45,000', impact: 'Buys a complete uniform set and school bag' },
  { amount: '₦59,500', impact: 'Funds a full Academic Kit for one child' },

];

export default function BackToSchoolPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
           backgroundImage: `linear-gradient(rgba(14,116,144,0.88), rgba(8,78,100,0.63)), url('/teach.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 mb-4 mx-auto">
          <BookOpen size={26} />
        </div>
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Donate</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">"Back to School" Initiative</h1>
        <p className="text-amber-100 max-w-2xl mx-auto leading-relaxed">
          Ensure every child begins the academic year with dignity and the physical tools required for success. No child should miss school because they lack a bag or a uniform.
        </p>
      </div>

      {/* Programme overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Back to School Initiative</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Every Child Deserves to Show Up Ready
            </h2>
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-gray-900 mb-1">Objective</p>
                <p>To ensure every child begins the academic year with dignity and the physical tools required for success.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Removing Barriers to Education</p>
                <p>Lack of basic supplies is a primary reason for school absenteeism. We aim to equip students with full "Academic Kits," including uniforms, sturdy school bags, footwear, and stationery.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">The Goal</p>
                <p>Our mission is to ensure that no child feels out of place or is forced to stay home due to a lack of supplies. By providing the basics, we allow students to focus entirely on their learning and growth.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src='/teach.JPG'
              alt="Children with school supplies"
              className="rounded-2xl w-full h-72 object-cover shadow-lg mb-6"
            />
            {/* Kit contents */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag size={18} className="text-orange-500" />
                <h3 className="font-bold text-gray-900">What's in an Academic Kit?</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {kitContents.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      

        {/* Impact tiers */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
          <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">What Your Gift Does</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {impactTiers.map(({ amount, impact }) => (
              <div key={amount} className="bg-amber-50 rounded-xl p-5 text-center border border-amber-100">
                <div className="text-2xl font-bold text-gray-900 mb-3">{amount}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-green-800 text-white rounded-2xl p-8 mb-12">
          <div className="text-4xl font-serif text-white/40 mb-2">"</div>
          <p className="text-green-100 leading-relaxed italic mb-4 text-base">
            My son was so embarrassed about his torn bag that he refused to go to school. When we received the kit, he cried with joy. He hasn't missed a single day since.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">CO</div>
            <div>
              <p className="font-bold text-sm">Mr. Chukwuemeka O.</p>
              <p className="text-green-200 text-xs">Parent of a recipient child</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation form */}
      <DonationLayout title="Back to School Initiative" accentColor="#b45309">
        <div />
      </DonationLayout>
    </div>
  );
}

import { BookOpen, Heart, Star, Users, Award, Lightbulb, Handshake, Church } from 'lucide-react';

const timeline = [
  {
    year: 'Sep 2018 & 2020',
    title: 'Inspiration — Papa & Mama Oluwole',
    desc: 'Place of Liberty was established in memory of Mr. Oluwole and his wife of 62 years, Mrs. Modupe Olabisi Oluwole, both of blessed memory. Both died two years apart on the same date — September 18, 2018 and September 18, 2020 respectively. They had a deep passion for charitable giving and caring for children with special needs.',
    icon: Heart,
    color: 'bg-orange-500',
  },
  {
    year: 'Apr 2021',
    title: 'Anglican Diocese of Lagos Mainland Joins',
    desc: 'Asiwaju Femi Somolu brokered a meeting between the Lord Bishop (Right Rev. Akinpelu Johnson), Lady Chikwue Ochiagha, and Ladipo Oluwole at 1, Alhaji Masha Road on April 2, 2021. The Bishop and Lagos Mainland Diocese agreed to power the special needs school, and in partnership with the Oluwole family and CM Life, the vision came to life.',
    icon: Church,
    color: 'bg-orange-500',
  },
  {
    year: 'May 11, 2021',
    title: 'The Name "Place of Liberty" is Born',
    desc: 'The Bishop directed the founding team to Isaiah 61:1–3 — "to proclaim LIBERTY to the captives... to give unto them beauty for ashes, oil of joy for mourning." After brainstorming, the name Place of Liberty was birthed and the vision and mission statements were formed around this Bible passage.',
    icon: BookOpen,
    color: 'bg-green-700',
  },
  {
    year: 'Sep 18, 2021',
    title: "Founder's Day — The School is Dedicated",
    desc: 'On the anniversary of Papa and Mama Oluwole\'s deaths, the school was dedicated by the Lord Bishop of Lagos Mainland Diocese, in the presence of diocesan leaders, family and friends. This date has since been declared the Founder\'s Day of Place of Liberty.',
    icon: Award,
    color: 'bg-orange-500',
  },
  {
    year: '2021–2024',
    title: 'Growth & Impact',
    desc: 'The school started with eight (8) children and grew to twenty-four (24) children in the Nursery and Primary School. The multidisciplinary team expanded, bringing physiotherapy, occupational therapy, and speech & language therapy under one roof.',
    icon: Users,
    color: 'bg-green-700',
  },
  {
    year: 'Sep 2024',
    title: 'Vocational School Established',
    desc: 'In September 2024, the vocational school was established as an after-school programme. Eleven (11) students transitioned from the primary programme into vocational training. Currently 15 children are enrolled. Training areas include: liquid soap & hygiene products production, fashion & craft, laundry services, car wash & janitorial services, and mop making.',
    icon: Handshake,
    color: 'bg-orange-500',
  },
  {
    year: 'Today',
    title: 'Continuing the Mission',
    desc: 'Place of Liberty continues to provide tuition-free special education and therapy to children from indigent families in Lagos. Powered by the Anglican Diocese of Lagos Mainland and supported by CM Life and the Oluwole Family, the school remains a beacon of dignity, hope, and possibility.',
    icon: Star,
    color: 'bg-green-700',
  },
];

const boardMembers = [
  'Bishop Akinpelu Johnson — Chairman',
  'Prince Adeyeloye Lipede',
  'Lady Chikwue Ochiagha',
  'Dr. (Mrs) Adebunmi Odiakosa',
  'Rev. Adekunle Olaitan',
  'Mr. Ladipo Oluwole',
  'Mr. Olusoji Oluwole',
  'Late Asiwaju Femi Somolu',
  'Late Mrs. Femi Sonaike',
];

const values = [
  {
    title: 'Founded on Faith',
    desc: 'Rooted in Isaiah 61:1–3, the school was built on the belief that every child — regardless of ability — deserves liberty, dignity, and the chance to flourish.',
  },
  {
    title: 'Built by Community',
    desc: 'From the Oluwole family to CM Life to the Anglican Diocese, Place of Liberty is a testament to what happens when people of goodwill unite around a shared vision.',
  },
  {
    title: 'Driven by Love',
    desc: 'We measure success in the smiles of children who found their voices, the confidence of parents who found hope, and the transformation of lives that continues to unfold.',
  },
];

export default function HistoryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero banner */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Who We Are</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed">
          From a family's act of love and generosity to a thriving free school — discover how Place of Liberty came to be.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Inspiration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">The Inspiration</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              In Memory of <span className="text-green-700">Papa & Mama Oluwole</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Place of Liberty was established in memory of Mr. Oluwole and his wife of 62 years, Mrs. Modupe Olabisi Oluwole, both of blessed memory. Both died two years apart on the same date — September 18, 2018 and September 18, 2020 respectively.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Papa and Mama Oluwole were very generous people who had a passion for charitable giving. One of their greatest passions was caring for Children with Special Needs. Until his death, papa was invited every year to give the opening prayer at the Christmas fundraising event of Ile Aanu School for the physically disabled.
            </p>

          </div>
          <div className="relative">
            <img
              src="/Playtime.jpeg"
              alt="Children at Place of Liberty"
              className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-orange-500 text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold">Sep 18</p>
              <p className="text-orange-100 text-sm mt-1 leading-tight">Founder's Day — in memory of Papa & Mama Oluwole</p>
            </div>
          </div>
        </div>

        {/* Scripture */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-10 mb-20 text-center relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-green-700 rounded-full opacity-30" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-green-700 rounded-full opacity-30" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-orange-500 mx-auto flex items-center justify-center mb-5">
              <BookOpen size={28} />
            </div>
            <p className="text-orange-300 font-semibold text-xs uppercase tracking-widest mb-3">The Name's Origin — Isaiah 61:1–3</p>
            <blockquote className="text-green-100 leading-relaxed max-w-3xl mx-auto italic text-base md:text-lg">
              "The Spirit of the Lord GOD is upon me... to proclaim <strong className="text-orange-300 not-italic">LIBERTY</strong> to the captives... to give unto them beauty for ashes, oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the LORD, that he might be glorified."
            </blockquote>
            <p className="text-green-200 text-sm mt-4">— Isaiah 61:1–3</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline of Milestones</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>{item.year}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="md:w-2/12 flex justify-center z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${item.color}`}>
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className="md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Board of Governors */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mb-16 border border-gray-100">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Governance</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Foundation Board of Governors</h2>
            <p className="text-gray-500 text-sm mt-2">Selected by the Lord Bishop to be the foundation members of the Board</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {boardMembers.map((member) => (
              <div key={member} className="flex items-start gap-2.5 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                <span className="text-gray-700 text-sm">{member}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What defines us */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Identity</p>
            <h2 className="text-3xl font-bold text-gray-900">What Defines Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-10 mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Our Commitment</h3>
          <p className="text-orange-100 text-sm leading-relaxed max-w-3xl mx-auto text-center">
            At Place of Liberty, we are committed to restoring dignity, unlocking potential, and creating opportunities for children who might otherwise be overlooked. Through education, therapy, and community support, we are building a future filled with hope, purpose, and possibility.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Be Part of Our Story</h3>
            <p className="text-green-200 text-sm leading-relaxed max-w-lg">
              Whether you donate, volunteer, or partner with us — you become part of a legacy of hope, liberation, and transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="mailto:info@theplaceofiberty.edu.ng"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

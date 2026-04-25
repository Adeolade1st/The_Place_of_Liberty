import { BookOpen, Heart, Star, Users, Award, Lightbulb } from 'lucide-react';

const timeline = [
  {
    year: '2015',
    title: 'A Vision is Born',
    desc: 'The Very Reverend Akinola and Mrs. Modupe Oluwole, driven by compassion for children with special needs who were excluded from mainstream education, began to pray and plan for a school that would truly liberate these children.',
    icon: Lightbulb,
    color: 'bg-orange-500',
  },
  {
    year: '2016',
    title: 'Doors Open for the First Time',
    desc: 'The Place of Liberty Nursery & Primary School opened its doors at 1, Alhaji Masha Road, Onisemo Junction, Surulere, Lagos — welcoming its first cohort of seven children with developmental disabilities into a safe, Christ-centred learning environment.',
    icon: BookOpen,
    color: 'bg-green-700',
  },
  {
    year: '2017',
    title: 'Growing the Team',
    desc: 'Recognising the need for specialist expertise, the school recruited trained special-education teachers, a speech therapist, and an occupational therapist — establishing a multidisciplinary care team dedicated to each child\'s progress.',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    year: '2018',
    title: 'Community Recognition',
    desc: 'Word spread through Surulere and beyond. Families who had been turned away by mainstream schools finally found a home for their children. Enrolment doubled, and the school expanded its classroom space to accommodate the growing need.',
    icon: Heart,
    color: 'bg-green-700',
  },
  {
    year: '2019',
    title: 'First Graduation Ceremony',
    desc: 'The school celebrated its first graduating class — children who, just a few years earlier, many had written off. Families wept tears of joy as their sons and daughters crossed the stage, proof that liberation through education is real.',
    icon: Award,
    color: 'bg-orange-500',
  },
  {
    year: '2020',
    title: 'Resilience Through a Pandemic',
    desc: 'COVID-19 brought unprecedented challenges, but the school adapted with home-learning packs, phone-based parent coaching, and community support drives — ensuring no child lost contact with their teachers and therapists.',
    icon: Star,
    color: 'bg-green-700',
  },
  {
    year: '2021',
    title: 'Partnerships & Expansion',
    desc: 'New partnerships with UNICEF Nigeria and the Autism Society of Nigeria enabled the school to introduce new therapeutic programmes, train additional staff, and extend outreach to families in underserved communities across Lagos.',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    year: '2022',
    title: 'In Honour of the Founders',
    desc: 'The Very Reverend Akinola and Mrs. Modupe Oluwole were honoured for their tireless sacrifice and faith. Their names were enshrined as the founding pillars of the school\'s legacy — a testimony to the power of love in action.',
    icon: Heart,
    color: 'bg-green-700',
  },
  {
    year: 'Today',
    title: 'Continuing the Mission',
    desc: 'With over 120 children enrolled, a dedicated team of 35+ staff, and a growing network of partners and supporters, The Place of Liberty continues to be a beacon of hope — transforming lives, one child at a time.',
    icon: Star,
    color: 'bg-orange-500',
  },
];

const values = [
  {
    title: 'Founded on Faith',
    desc: 'From the very beginning, the school has been rooted in Christ-centred values — the belief that every child is made in God\'s image and deserves to be treated with dignity, love, and respect.',
  },
  {
    title: 'Built by Sacrifice',
    desc: 'The founders gave selflessly — time, resources, and energy — to ensure that children who had no other options would find a home at The Place of Liberty.',
  },
  {
    title: 'Driven by Results',
    desc: 'We measure success not in test scores alone but in the smiles of children who have found their voices, the confidence of parents who have found hope, and the transformation of lives that continues to unfold.',
  },
];

export default function HistoryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero banner */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(21,128,61,0.88), rgba(21,128,61,0.93)), url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed">
          From a heartfelt vision to a thriving school — discover how The Place of Liberty came to be and how it has changed hundreds of lives.
        </p>
      </div>

      {/* Founding story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">How It Began</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              A Dream Rooted in <span className="text-green-700">Compassion &amp; Faith</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Place of Liberty Nursery & Primary School was born from the deep compassion of the Very Reverend Akinola and Mrs. Modupe Oluwole. Having witnessed firsthand how children with developmental disabilities were turned away from mainstream schools and left without hope, they resolved — with faith as their foundation — to build a place where these children would be liberated, not limited.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              They chose the name deliberately: <em>"The Place of Liberty"</em> — drawn from the Biblical promise in Isaiah 61:3, that children once weighed down by life's challenges would be given beauty for ashes, joy for sorrow, and praise for heaviness.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began with a handful of children in a modest space in Surulere, Lagos, has grown into a community of learners, educators, therapists, and families united by a single belief — that every child can flourish.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Founding spirit"
              className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-orange-500 text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold">8+</p>
              <p className="text-orange-100 text-sm mt-1 leading-tight">Years of transforming lives in Lagos</p>
            </div>
          </div>
        </div>

        {/* Memorial */}
        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-10 mb-20 text-center relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-green-700 rounded-full opacity-30" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-green-700 rounded-full opacity-30" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-orange-500 mx-auto flex items-center justify-center mb-5">
              <Heart size={28} />
            </div>
            <p className="text-orange-300 font-semibold text-xs uppercase tracking-widest mb-3">In Loving Memory</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Very Reverend Akinola &amp; Mrs. Modupe Oluwole
            </h3>
            <p className="text-green-100 leading-relaxed max-w-2xl mx-auto">
              Their unwavering faith and sacrificial love laid the foundation of The Place of Liberty. Though they are no longer with us, their legacy lives on in the laughter of every child who walks through our doors, the progress of every student who discovers their potential, and the hope of every family that finds healing here.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <div className="w-8 h-1 bg-orange-400 rounded-full" />
              <div className="w-4 h-1 bg-white/40 rounded-full" />
              <div className="w-2 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline of Milestones</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${isLeft ? '' : ''}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className={`md:w-2/12 flex justify-center z-10`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${item.color}`}>
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:w-5/12" />
                  </div>
                );
              })}
            </div>
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

        {/* CTA */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Be Part of Our Story</h3>
            <p className="text-orange-100 text-sm leading-relaxed max-w-lg">
              Whether you donate, volunteer, or partner with us — you become part of a legacy of hope, liberation, and transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-7 py-3 rounded-full transition-colors text-sm"
            >
              Donate Now
            </a>
            <a
              href="mailto:info@theplaceofiberty.edu.ng"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-full transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

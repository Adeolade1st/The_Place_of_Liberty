import { Handshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const partners = [
  {
    name: 'Mitra Life',
    logo: '/ChalkMitra-removebg-preview.png',
  },
];

const testimonials = [
  {
    quote: "The transformation in our daughter has been extraordinary. The school's approach is unlike anything we've experienced.",
    author: 'Mrs. Adaeze Okonkwo',
    role: 'Parent of 7-year-old student',
  },
  {
    quote: 'As a partner organisation, we are consistently impressed by the professionalism and genuine care shown by the entire team.',
    author: 'Dr. Emeka Nwosu',
    role: 'Partner Organisation Representative',
  },
];

export default function Partners() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const logosRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const testimonialsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="partners" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sr-hidden">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Community
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsor</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            We are grateful to our sponsor who share our vision and help us extend our reach and impact across Nigeria.
          </p>
        </div>

        {/* Partner logos */}
        <div ref={logosRef} className="flex flex-wrap justify-center gap-10 mb-16 sr-stagger sr-hidden">
          {partners.map(({ name, logo }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 group w-64"
            >
              <img
                src={logo}
                alt={name}
                className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-600 text-sm font-semibold mt-4 text-center">{name}</p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div ref={ctaRef} className="bg-green-800 rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row sr-hidden items-center justify-between gap-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex-shrink-0 flex items-center justify-center">
              <Handshake size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Become a Partner</h3>
              <p className="text-green-200 text-sm leading-relaxed max-w-lg">
                Join our growing network of organisations committed to transforming the lives of children with developmental disabilities in Nigeria.
              </p>
            </div>
          </div>
          <a
            href="mailto:partnerships@theplaceofiberty.edu.ng"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Partner With Us
          </a>
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef} className="grid md:grid-cols-2 gap-6 sr-stagger sr-hidden">
          {testimonials.map(({ quote, author, role }) => (
            <div key={author} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 relative">
              <div className="text-5xl text-orange-300 font-serif leading-none mb-3">"</div>
              <p className="text-gray-700 leading-relaxed italic mb-5">{quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{author}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

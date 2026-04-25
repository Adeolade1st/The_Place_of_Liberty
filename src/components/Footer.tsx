import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Vision & Mission', href: '#vision-mission' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Partners', href: '#partners' },
  { label: 'Donate', href: '#donate' },
];

const programmes = [
  'Special Education',
  'Speech Therapy',
  'Occupational Therapy',
  'Art & Music Therapy',
  'Parent Support',
  'After-School Care',
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

function handleNav(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">PL</span>
            </div>
            <div>
              <p className="font-bold text-white text-sm leading-tight">The Place of Liberty</p>
              <p className="text-orange-400 text-xs">Nur & Pry School</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Empowering children with developmental disabilities through quality education, therapy, and compassionate care in Nigeria.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Our Programmes</h4>
          <ul className="space-y-2">
            {programmes.map((p) => (
              <li key={p} className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400 text-sm">1 Liberty Road, Surulere, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-orange-500 flex-shrink-0" />
              <a href="tel:+2348000000000" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                +234 (0) 800 000 0000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-orange-500 flex-shrink-0" />
              <a href="mailto:info@theplaceofiberty.edu.ng" className="text-gray-400 hover:text-orange-400 text-sm transition-colors break-all">
                info@theplaceofiberty.edu.ng
              </a>
            </li>
          </ul>
          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-white text-sm font-semibold mb-2">Newsletter</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} The Place of Liberty Nur & Pry School. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-orange-500 fill-orange-500" /> for the children of Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

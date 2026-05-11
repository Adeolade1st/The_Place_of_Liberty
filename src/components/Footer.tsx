import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

type Page = 'home' | 'history' | 'contact' | 'who-about' | 'offer-special-ed' | 'offer-vocational' | 'offer-therapy' | 'donate' | 'donate-vocational' | 'donate-medication' | 'donate-backtoschool';

interface FooterProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const quickLinks: { label: string; page?: Page; sectionId?: string }[] = [
  { label: 'About Us', page: 'who-about' },
  { label: 'Our History', page: 'history' },
  { label: 'Vision & Mission', page: 'who-about' },
  { label: 'What We Offer', sectionId: 'what-we-do' },
  { label: 'Our Partners', sectionId: 'partners' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Donate', page: 'donate' },
];

const donateLinks: { label: string; page: Page }[] = [
  { label: 'Support Our Vocational School', page: 'donate-vocational' },
  { label: "Sponsor a Child's Medication", page: 'donate-medication' },
  { label: '"Back to School" Initiative', page: 'donate-backtoschool' },
];

const programmes = [
  'Functional Academics',
  'Speech Therapy',
  'Physio Therapy',
  'Occupational Therapy',
  'Art & Music Therapy',
  'Vocational Training',

];

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61557011231497&mibextid=LQQJ4d' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/place_ofliberty?s=11' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/place_ofliberty?igsh=eWJtZWY3OHd1aDBq&utm_source=qr' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@PlaceofLiberty' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleLink = (item: typeof quickLinks[0]) => {
    if (item.page) {
      onNavigate(item.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.sectionId) {
      onNavigate('home', item.sectionId);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <button onClick={() => onNavigate('home')} className="mb-4 focus:outline-none">
            <img
              src="/pol_logo.png"
              alt="Place of Liberty Nursery & Primary School"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </button>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Empowering children with developmental disabilities through quality education, therapy, and compassionate care in Nigeria.
          </p>
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
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleLink(link)}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Ways to Give</h4>
          <ul className="space-y-2 mb-6">
            {donateLinks.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 text-left leading-tight"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Our Programmes</h4>
          <ul className="space-y-1.5">
            {programmes.slice(0, 4).map((p) => (
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
              <span className="text-gray-400 text-sm">
                1, Alhaji Masha Road, Onisemo Junction, Surulere, Lagos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <a href="tel:+2348060636704" className="text-gray-400 hover:text-orange-400 text-sm transition-colors block">
                  +234 806 063 6704
                </a>
                <a href="tel:+2348023126250" className="text-gray-400 hover:text-orange-400 text-sm transition-colors block">
                  +234 802 312 6250
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-orange-500 flex-shrink-0" />
              <a href="mailto:info@placeofiberty.com" className="text-gray-400 hover:text-orange-400 text-sm transition-colors break-all">
                info@placeofliberty.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} The Place of Liberty Nursery &amp; Primary School. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}

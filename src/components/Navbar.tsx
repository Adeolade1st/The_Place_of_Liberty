import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Vision & Mission', href: '#vision-mission' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Partners', href: '#partners' },
  { label: 'Donate', href: '#donate' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-green-800 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              +234 (0) 800 000 0000
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} />
              info@theplaceofiberty.edu.ng
            </span>
          </div>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            Lagos, Nigeria
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">PL</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-green-800 leading-tight text-sm">The Place of Liberty</p>
              <p className="text-orange-500 text-xs leading-tight">Nur & Pry School</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="hover:text-orange-500 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); handleNav('#donate'); }}
              className="hidden sm:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              Donate Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
          <ul className="px-4 py-3 flex flex-col gap-1 bg-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="block py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); handleNav('#donate'); }}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

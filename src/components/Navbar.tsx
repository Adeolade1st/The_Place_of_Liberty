import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

type Page = 'home' | 'gallery' | 'history';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, sectionId?: string) => void;
}

const sectionLinks = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'What We Do', sectionId: 'what-we-do' },
  { label: 'Vision & Mission', sectionId: 'vision-mission' },
  { label: 'Partners', sectionId: 'partners' },
  { label: 'Donate', sectionId: 'donate' },
];

const pageLinks: { label: string; page: Page }[] = [
  { label: 'Gallery', page: 'gallery' },
  { label: 'Our History', page: 'history' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home', sectionId);
    } else {
      document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageClick = (page: Page) => {
    setOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            1, Alhaji Masha Road, Surulere, Lagos
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handlePageClick('home')}
            className="flex items-center gap-1 focus:outline-none"
            aria-label="Go to home"
          >
            <img
              src="/pol_logo-removebg-preview.png"
              alt="Place of Liberty Nursery & Primary School logo"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
            {sectionLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  onClick={() => handleSectionClick(link.sectionId)}
                  className={`hover:text-orange-500 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500 ${
                    currentPage === 'home' ? '' : 'opacity-80'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            {pageLinks.map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => handlePageClick(link.page)}
                  className={`transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500 ${
                    currentPage === link.page
                      ? 'text-orange-500 border-orange-500'
                      : 'hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSectionClick('donate')}
              className="hidden sm:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              Donate Now
            </button>
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
            {sectionLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  onClick={() => handleSectionClick(link.sectionId)}
                  className="w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {pageLinks.map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => handlePageClick(link.page)}
                  className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleSectionClick('donate')}
                className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
              >
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Briefcase, Heart, BookOpen } from 'lucide-react';

type Page = 'home' | 'gallery' | 'history' | 'donate' | 'donate-vocational' | 'donate-medication' | 'donate-backtoschool';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, sectionId?: string) => void;
}

const donateLinks: { label: string; page: Page; icon: typeof Briefcase; desc: string }[] = [
  { label: 'Support Our Vocational School', page: 'donate-vocational', icon: Briefcase, desc: 'Skills & economic empowerment' },
  { label: "Sponsor a Child's Medication", page: 'donate-medication', icon: Heart, desc: 'Life-saving healthcare access' },
  { label: '"Back to School" Initiative', page: 'donate-backtoschool', icon: BookOpen, desc: 'Academic kits & supplies' },
];

const sectionLinks = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'What We Do', sectionId: 'what-we-do' },
  { label: 'Vision & Mission', sectionId: 'vision-mission' },
  { label: 'Partners', sectionId: 'partners' },
];

const pageLinks: { label: string; page: Page }[] = [
  { label: 'Gallery', page: 'gallery' },
  { label: 'Our History', page: 'history' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [mobileDonateOpen, setMobileDonateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDonateOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setOpen(false);
    setDonateOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home', sectionId);
    } else {
      document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageClick = (page: Page) => {
    setOpen(false);
    setDonateOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDonateActive = currentPage === 'donate' || currentPage === 'donate-vocational' || currentPage === 'donate-medication' || currentPage === 'donate-backtoschool';

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
                  className="hover:text-orange-500 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {pageLinks.map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => handlePageClick(link.page)}
                  className={`transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 ${
                    currentPage === link.page ? 'text-orange-500 border-orange-500' : ''
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

            {/* Donate dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDonateOpen((v) => !v)}
                className={`flex items-center gap-1 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 ${
                  isDonateActive ? 'text-orange-500 border-orange-500' : ''
                }`}
              >
                Donate
                <ChevronDown size={14} className={`transition-transform duration-200 ${donateOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel */}
              <div className={`absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top-right ${
                donateOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-2">
                  {donateLinks.map(({ label, page, icon: Icon, desc }) => (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl text-left hover:bg-orange-50 transition-colors group ${
                        currentPage === page ? 'bg-orange-50' : ''
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        currentPage === page ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                      }`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-tight">{label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-3">
                  <button
                    onClick={() => handlePageClick('donate')}
                    className="w-full text-center text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                  >
                    View all giving options →
                  </button>
                </div>
              </div>
            </li>
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePageClick('donate')}
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
                    currentPage === link.page ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

            {/* Mobile donate accordion */}
            <li>
              <button
                onClick={() => setMobileDonateOpen((v) => !v)}
                className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                  isDonateActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                Donate
                <ChevronDown size={14} className={`transition-transform ${mobileDonateOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDonateOpen && (
                <div className="ml-3 mt-1 space-y-1">
                  {donateLinks.map(({ label, page, icon: Icon }) => (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      className="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <Icon size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </li>

            <li className="pt-2">
              <button
                onClick={() => handlePageClick('donate')}
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

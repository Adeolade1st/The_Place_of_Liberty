import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Briefcase, Heart, BookOpen, GraduationCap, Stethoscope,
  History, Eye, Info, MessageCircle,
} from 'lucide-react';

type Page =
  | 'home'
  | 'history'
  | 'contact'
  | 'who-about'
  | 'offer-special-ed'
  | 'offer-vocational'
  | 'offer-therapy'
  | 'donate'
  | 'donate-vocational'
  | 'donate-medication'
  | 'donate-backtoschool';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, sectionId?: string) => void;
}

const whoWeAreLinks: { label: string; page: Page; icon: typeof Info; desc: string }[] = [
  { label: 'About Us', page: 'who-about', icon: Info, desc: 'Our story and founding values' },
  { label: 'Our History', page: 'history', icon: History, desc: 'From vision to a thriving school' },
  { label: 'Vision & Mission', page: 'who-about', icon: Eye, desc: 'What drives everything we do' },
];

const whatWeOfferLinks: { label: string; page: Page; icon: typeof GraduationCap; desc: string }[] = [
  { label: 'Special Education (Montessori Standard)', page: 'offer-special-ed', icon: GraduationCap, desc: 'Individualised Montessori-based learning' },
  { label: 'Vocational Training', page: 'offer-vocational', icon: Briefcase, desc: 'Skills & economic empowerment' },
  { label: 'Therapy (Physio, Occupational & Speech)', page: 'offer-therapy', icon: Stethoscope, desc: 'Holistic therapeutic support' },
];

const donateLinks: { label: string; page: Page; icon: typeof Briefcase; desc: string }[] = [
  { label: 'Support Our Vocational School', page: 'donate-vocational', icon: Briefcase, desc: 'Skills & economic empowerment' },
  { label: "Sponsor a Child's Medication", page: 'donate-medication', icon: Heart, desc: 'Life-saving healthcare access' },
  { label: '"Back to School" Initiative', page: 'donate-backtoschool', icon: BookOpen, desc: 'Academic kits & supplies' },
];

type DropdownKey = 'who' | 'offer' | 'donate' | null;

function useOutsideClick(ref: React.RefObject<HTMLElement>, onClose: () => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [ref, onClose]);
}

interface DropdownPanelProps {
  items: { label: string; page: Page; icon: typeof Info; desc: string }[];
  currentPage: Page;
  onSelect: (page: Page) => void;
  footer?: { label: string; page: Page };
}

function DropdownPanel({ items, currentPage, onSelect, footer }: DropdownPanelProps) {
  return (
    <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
      <div className="p-2">
        {items.map(({ label, page, icon: Icon, desc }) => (
          <button
            key={`${page}-${label}`}
            onClick={() => onSelect(page)}
            className={`w-full flex items-start gap-3 p-3 rounded-xl text-left hover:bg-orange-50 transition-colors group ${currentPage === page ? 'bg-orange-50' : ''}`}
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
      {footer && (
        <div className="border-t border-gray-100 p-3">
          <button
            onClick={() => onSelect(footer.page)}
            className="w-full text-center text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            {footer.label} →
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useOutsideClick(navRef as React.RefObject<HTMLElement>, () => setActiveDropdown(null));

  const toggle = (key: DropdownKey) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const handlePageClick = (page: Page) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (currentPage !== 'home') {
      onNavigate('home', sectionId);
    } else {
      document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isWhoActive = ['who-about', 'history'].includes(currentPage);
  const isOfferActive = ['offer-special-ed', 'offer-vocational', 'offer-therapy'].includes(currentPage);
  const isDonateActive = ['donate', 'donate-vocational', 'donate-medication', 'donate-backtoschool'].includes(currentPage);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-green-800 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Phone size={12} />+234 806 063 6704, +234 802 312 6250

</span>
            <span className="flex items-center gap-1"><Mail size={12} />example@pol.edu.ng</span>
          </div>
          <span className="flex items-center gap-1"><MapPin size={12} /> 1, Alhaji Masha Road, Onisemo Junction, Surulere, Lagos</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handlePageClick('home')} className="focus:outline-none" aria-label="Go to home">
            <img src="/pol_logo-removebg-preview.png" alt="Place of Liberty logo" className="h-12 w-auto object-contain" />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700">
            {/* Home */}
            <li>
              <button
                onClick={() => handleSectionClick('home')}
                className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-orange-500 transition-colors"
              >
                Home
              </button>
            </li>

            {/* Who We Are dropdown */}
            <li className="relative">
              <button
                onClick={() => toggle('who')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${isWhoActive ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                Who We Are
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'who' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'who' && (
                <DropdownPanel
                  items={[
                    { label: 'About Us', page: 'who-about', icon: Info, desc: 'Our story and founding values' },
                    { label: 'Our History', page: 'history', icon: History, desc: 'From vision to a thriving school' },
                    { label: 'Vision & Mission', page: 'who-about', icon: Eye, desc: 'What drives everything we do' },
                  ]}
                  currentPage={currentPage}
                  onSelect={handlePageClick}
                />
              )}
            </li>

            {/* What We Offer dropdown */}
            <li className="relative">
              <button
                onClick={() => toggle('offer')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${isOfferActive ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                What We Offer
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'offer' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'offer' && (
                <DropdownPanel
                  items={whatWeOfferLinks}
                  currentPage={currentPage}
                  onSelect={handlePageClick}
                />
              )}
            </li>


            {/* Donate dropdown */}
            <li className="relative">
              <button
                onClick={() => toggle('donate')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${isDonateActive ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                Donate
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'donate' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'donate' && (
                <DropdownPanel
                  items={donateLinks}
                  currentPage={currentPage}
                  onSelect={handlePageClick}
                  footer={{ label: 'View all giving options', page: 'donate' }}
                />
              )}
            </li>

            {/* Contact Us */}
            <li>
              <button
                onClick={() => handlePageClick('contact')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${currentPage === 'contact' ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                <MessageCircle size={14} />
                Contact Us
              </button>
            </li>
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePageClick('donate')}
              className="hidden sm:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Donate Now
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
          <ul className="px-4 py-3 flex flex-col gap-1 bg-white">
            <li>
              <button onClick={() => handleSectionClick('home')} className="w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                Home
              </button>
            </li>

            {/* Who We Are */}
            <li>
              <button
                onClick={() => setMobileExpanded((v) => v === 'who' ? null : 'who')}
                className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${isWhoActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              >
                Who We Are <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'who' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'who' && (
                <div className="ml-3 mt-1 space-y-1">
                  {[
                    { label: 'About Us', page: 'who-about' as Page, icon: Info },
                    { label: 'Our History', page: 'history' as Page, icon: History },
                    { label: 'Vision & Mission', page: 'who-about' as Page, icon: Eye },
                  ].map(({ label, page, icon: Icon }) => (
                    <button key={`${page}-${label}`} onClick={() => handlePageClick(page)} className="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      <Icon size={14} />{label}
                    </button>
                  ))}
                </div>
              )}
            </li>

            {/* What We Offer */}
            <li>
              <button
                onClick={() => setMobileExpanded((v) => v === 'offer' ? null : 'offer')}
                className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${isOfferActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              >
                What We Offer <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'offer' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'offer' && (
                <div className="ml-3 mt-1 space-y-1">
                  {whatWeOfferLinks.map(({ label, page, icon: Icon }) => (
                    <button key={page} onClick={() => handlePageClick(page)} className="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      <Icon size={14} />{label}
                    </button>
                  ))}
                </div>
              )}
            </li>

           
            {/* Donate */}
            <li>
              <button
                onClick={() => setMobileExpanded((v) => v === 'donate' ? null : 'donate')}
                className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${isDonateActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              >
                Donate <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'donate' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'donate' && (
                <div className="ml-3 mt-1 space-y-1">
                  {donateLinks.map(({ label, page, icon: Icon }) => (
                    <button key={page} onClick={() => handlePageClick(page)} className="w-full flex items-center gap-2 py-2 px-3 rounded-md text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      <Icon size={14} />{label}
                    </button>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button onClick={() => handlePageClick('contact')} className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-colors ${currentPage === 'contact' ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}>
                Contact Us
              </button>
            </li>

            <li className="pt-2">
              <button onClick={() => handlePageClick('donate')} className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

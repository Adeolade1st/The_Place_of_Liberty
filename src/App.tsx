import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import VisionMission from './components/VisionMission';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import HistoryPage from './pages/HistoryPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/donation/DonatePage';
import VocationalPage from './pages/donation/VocationalPage';
import MedicationPage from './pages/donation/MedicationPage';
import BackToSchoolPage from './pages/donation/BackToSchoolPage';
import SpecialEdPage from './pages/offer/SpecialEdPage';
import VocationalOfferPage from './pages/offer/VocationalOfferPage';
import TherapyPage from './pages/offer/TherapyPage';

type Page =
  | 'home'
  | 'gallery'
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const handleNavigate = (page: Page, sectionId?: string) => {
    if (page === 'home' && sectionId) {
      if (currentPage === 'home') {
        document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        setPendingSection(sectionId);
      }
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (pendingSection && currentPage === 'home') {
      const timer = setTimeout(() => {
        document.querySelector(`#${pendingSection}`)?.scrollIntoView({ behavior: 'smooth' });
        setPendingSection(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pendingSection, currentPage]);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <WhatWeDo onNavigate={handleNavigate} />
            <VisionMission />
            <Testimonials />
            <Partners />
          </>
        )}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'history' && <HistoryPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'who-about' && (
          <>
            <About /
            <div className="pt-20"><VisionMission /></div>
          </>
        )}
        {currentPage === 'offer-special-ed' && <SpecialEdPage />}
        {currentPage === 'offer-vocational' && <VocationalOfferPage />}
        {currentPage === 'offer-therapy' && <TherapyPage />}
        {currentPage === 'donate' && <DonatePage onNavigate={handleNavigate} />}
        {currentPage === 'donate-vocational' && <VocationalPage />}
        {currentPage === 'donate-medication' && <MedicationPage />}
        {currentPage === 'donate-backtoschool' && <BackToSchoolPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

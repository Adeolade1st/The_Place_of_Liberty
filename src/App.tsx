import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import VisionMission from './components/VisionMission';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Donation from './components/Donation';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import HistoryPage from './pages/HistoryPage';

type Page = 'home' | 'gallery' | 'history';

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
            <Hero />
            <About />
            <WhatWeDo />
            <VisionMission />
            <Gallery />
            <Partners />
            <Donation />
          </>
        )}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'history' && <HistoryPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import VisionMission from './components/VisionMission';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Donation from './components/Donation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <VisionMission />
        <Gallery />
        <Partners />
        <Donation />
      </main>
      <Footer />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberBackground from './components/CyberBackground';
import StatsBar from './components/StatsBar';
import ThreatGrid from './components/ThreatGrid';
import WorkshopCurriculum from './components/WorkshopCurriculum';
import TrainerSection from './components/TrainerSection';
import PerksSection from './components/PerksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    // 1. Find the contact section
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      // 2. Scroll to it usingLenis (accessible via window since it's global in SmoothScroll)
      // Or just use the native scroll if we want to be safe, but Lenis is active.
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 3. Open the modal after a short delay for cinematic effect
    setTimeout(() => {
      setIsBookingOpen(true);
    }, 600);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cyber-bg text-cyber-white selection:bg-cyber-teal/30 selection:text-cyber-teal">
        <CyberBackground />
        
        <div className="relative z-10 font-sans">
          <Navbar onBookClick={handleBookClick} />
          
          <main>
            <AnimatePresence mode="wait">
              <Hero key="hero" onBookClick={handleBookClick} />
              
              <ScrollReveal key="stats" className="relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-border to-transparent" />
                <StatsBar />
              </ScrollReveal>
              
              <ScrollReveal key="threats">
                <ThreatGrid />
              </ScrollReveal>
              <ScrollReveal key="curriculum">
                <WorkshopCurriculum onBookClick={handleBookClick} />
              </ScrollReveal>

              <ScrollReveal key="trainer">
                <TrainerSection />
              </ScrollReveal>

              <ScrollReveal key="perks">
                <PerksSection />
              </ScrollReveal>

              <ScrollReveal key="contact">
                <ContactSection onBookClick={handleBookClick} />
              </ScrollReveal>
            </AnimatePresence>
          </main>

          <Footer />
        </div>

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

        {/* Global Noise Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
          <svg filter='url(#noiseFilter)' className='w-full h-full'>
            <filter id='noiseFilter'>
              <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.6' 
                stitchTiles='stitch' />
            </filter>
          </svg>
        </div>
      </div>
    </SmoothScroll>
  );
}

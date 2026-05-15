/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-cyber-bg text-cyber-white selection:bg-cyber-teal/30 selection:text-cyber-teal">
      <CyberBackground />
      
      <div className="relative z-10 font-sans">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Hero key="hero" />
            
            <motion.div
              key="stats"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-border to-transparent" />
              <StatsBar />
            </motion.div>
            
            <ThreatGrid key="threats" />
            <WorkshopCurriculum key="curriculum" />
            <TrainerSection key="trainer" />
            <PerksSection key="perks" />
            <ContactSection key="contact" />
          </AnimatePresence>
        </main>

        <Footer />
      </div>

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
  );
}

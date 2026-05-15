/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import ProfileCard from './ProfileCard';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 font-mono text-[10px] sm:text-xs text-cyber-teal border border-cyber-teal/30 px-4 py-2 rounded-sm mb-8 tracking-[0.2em] uppercase bg-cyber-teal/5"
          >
            <span className="w-2 h-2 bg-cyber-teal rounded-full animate-pulse shadow-[0_0_10px_var(--color-cyber-teal)]" />
            Cybersecurity Education Initiative
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight mb-8 group cursor-default">
            Phishing<br />
            <span className="text-cyber-teal bg-gradient-to-r from-cyber-teal to-cyber-blue bg-clip-text text-transparent group-hover:text-shimmer transition-all duration-500">Awareness</span><br />
            Workshop
          </h1>
          
          <div className="text-lg text-cyber-muted max-w-xl mb-12 leading-relaxed h-[4.5rem]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {"A hands-on, interactive session designed to teach students and staff how to identify, avoid, and report phishing attacks — the #1 cyber threat facing schools today.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[1.2rem] bg-cyber-teal ml-1 translate-y-[3px]"
              />
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-cyber-teal text-cyber-bg font-bold rounded-lg shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] transition-all flex items-center gap-2 group"
            >
              Book the Workshop
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#curriculum"
              whileHover={{ backgroundColor: "rgba(0,212,170,0.05)", y: -2 }}
              className="px-10 py-5 border border-cyber-border text-cyber-white font-bold rounded-lg transition-all flex items-center gap-2 group"
            >
              See Curriculum
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRight size={20} className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-28 perspective-1000"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

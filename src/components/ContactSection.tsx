/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MessageCircle, Linkedin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-card !p-16 text-center relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Animated Background Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyber-teal to-transparent animate-shimmer scale-x-150" />
          
          <div className="relative z-10">
            <p className="font-mono text-[10px] text-cyber-teal tracking-[0.3em] uppercase mb-6">// Let's Make It Happen</p>
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Ready to book<br />the workshop?</h2>
            <p className="text-xl text-cyber-muted max-w-2xl mx-auto mb-12">Reach out with your preferred date and we'll coordinate everything. It only takes one message to get started.</p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 bg-cyber-teal text-cyber-bg font-bold rounded-xl shadow-[0_0_30px_rgba(0,212,170,0.3)] hover:shadow-[0_0_50px_rgba(0,212,170,0.5)] transition-all flex items-center gap-3 mx-auto mb-16 text-lg"
            >
              Book the Workshop
              <ArrowRight size={22} />
            </motion.button>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ContactLink icon={<Mail size={20} />} label="vaibhavchaurasiya2507@gmail.com" href="mailto:vaibhavchaurasiya2507@gmail.com" />
              <ContactLink icon={<MessageCircle size={20} />} label="+91 9335870275" href="https://wa.me/919335870275" />
              <ContactLink icon={<Linkedin size={20} />} label="LinkedIn" href="https://www.linkedin.com/in/vaibhav-chaurasiya-aab9aa335/" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes border-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: border-shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, borderColor: 'var(--color-cyber-teal)' }}
      className="flex items-center gap-3 px-8 py-4 bg-cyber-bg-alt/50 border border-cyber-border rounded-xl text-sm font-medium hover:text-cyber-teal transition-all group"
    >
      <span className="text-cyber-muted group-hover:text-cyber-teal transition-colors">{icon}</span>
      {label}
    </motion.a>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Trainer', href: '#trainer' },
    { name: 'Book Now', href: '#contact', isAction: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyber-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-cyber-teal tracking-widest text-sm translate-y-[1px]">
          <Terminal size={18} />
          <span>&gt;_ VC / WORKSHOP</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                if (link.isAction) {
                  e.preventDefault();
                  onBookClick();
                }
              }}
              whileHover="hover"
              className={`relative text-sm font-medium transition-colors tracking-wide py-2 overflow-hidden ${
                link.isAction ? 'text-cyber-teal hover:text-cyber-teal-light' : 'text-cyber-muted hover:text-cyber-white'
              }`}
            >
              {link.name}
              <motion.div 
                variants={{
                  hover: { x: 0 }
                }}
                initial={{ x: '-100%' }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-cyber-teal"
              />
            </motion.a>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-cyber-teal"
        >
          {/* Mobile menu icon could go here */}
          <Terminal size={24} />
        </motion.button>
      </div>
    </motion.nav>
  );
}

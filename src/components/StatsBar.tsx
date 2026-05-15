/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function StatsBar() {
  const stats = [
    { num: '91%', label: 'of cyberattacks start with phishing' },
    { num: '1 in 3', label: 'students have encountered a phishing link' },
    { num: '90-120m', label: 'intensive session duration' },
    { num: '₹799', label: 'professional workshop fee' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card !p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden"
      >
        {stats.map((stat, idx) => (
          <div 
            key={stat.label} 
            className={`p-10 text-center flex flex-col items-center justify-center border-cyber-border ${idx !== stats.length - 1 ? 'lg:border-r' : ''} ${idx % 2 === 0 && idx < 2 ? 'md:border-r' : ''} ${idx < 2 ? 'border-b md:border-b-0' : ''} ${idx === 1 ? 'border-b lg:border-b-0' : ''}`}
          >
            <h4 className="text-4xl font-bold text-cyber-teal font-mono mb-2">{stat.num}</h4>
            <p className="text-xs text-cyber-muted font-medium max-w-[200px]">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

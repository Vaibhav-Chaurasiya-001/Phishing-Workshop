/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Target, Award, Code, Globe } from 'lucide-react';

export default function ProfileCard() {
  const stats = [
    { label: 'TryHackMe', val: 'Top 1%', color: 'text-cyber-teal' },
    { label: 'Global Rank', val: '#18562', color: 'text-white' },
    { label: 'Rooms Done', val: '184', color: 'text-cyber-teal' },
    { label: 'Badges', val: '22', color: 'text-cyber-teal' },
  ];

  const badges = [
    { name: 'Pen Testing', icon: <Shield size={14} /> },
    { name: 'Networking', icon: <Globe size={14} /> },
    { name: 'OSINT', icon: <Target size={14} /> },
    { name: 'Kali Linux', icon: <Code size={14} /> },
    { name: 'Red Teamer', icon: <Award size={14} /> },
  ];

  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className="glass-card w-full group overflow-visible"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-teal to-transparent group-hover:scale-x-110 transition-transform duration-500" />
      
      {/* Avatar Container */}
      <div className="relative w-20 h-20 mb-8 mx-auto lg:mx-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-4px] border-2 border-dashed border-cyber-teal/30 rounded-full"
        />
        <div className="absolute inset-0 bg-cyber-bg-alt border-2 border-cyber-teal rounded-full flex items-center justify-center font-mono text-2xl font-bold text-cyber-teal shadow-[0_0_20px_rgba(0,212,170,0.2)]">
          VC
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1">Vaibhav Chaurasiya</h3>
      <p className="font-mono text-[10px] text-cyber-teal tracking-widest uppercase mb-8">
        &gt;_ Ethical Hacker & Cybersecurity Enthusiast
      </p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-cyber-card-alt border border-cyber-border rounded-xl p-4 hover:border-cyber-teal/40 transition-colors">
            <p className="font-mono text-[8px] text-cyber-muted tracking-widest uppercase mb-1">{stat.label}</p>
            <p className={`text-sm font-bold ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span 
            key={badge.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-border bg-cyber-bg-alt/50 text-xs text-cyber-muted font-medium hover:border-cyber-teal/30 hover:text-cyber-white transition-all cursor-default"
          >
            {badge.icon}
            {badge.name}
          </span>
        ))}
      </div>

      {/* Decorative pulse element */}
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyber-teal rounded-full animate-ping opacity-20" />
    </motion.div>
  );
}

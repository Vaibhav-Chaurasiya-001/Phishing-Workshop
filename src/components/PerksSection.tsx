/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Presentation, Award, FileText, Clock, MessageSquare, DollarSign } from 'lucide-react';

export default function PerksSection() {
  const perks = [
    {
      title: 'Structured Presentation',
      desc: 'A well-prepared slide deck with real examples, visuals, and case studies — designed for student-age audiences.',
      icon: <Presentation size={24} className="text-cyber-teal" />,
    },
    {
      title: 'Participation Certificate',
      desc: 'Students can receive a digital certificate of participation to acknowledge their cybersecurity awareness training.',
      icon: <Award size={24} className="text-cyan-400" />,
    },
    {
      title: 'Safety Checklist',
      desc: 'A simple one-page guide students take home — a quick reference card on how to stay safe online.',
      icon: <FileText size={24} className="text-blue-400" />,
    },
    {
      title: '90-120 Min Intensive',
      desc: 'An in-depth, deep-dive session. Focused on practical skills and real-world defense patterns over 1.5 to 2 hours.',
      icon: <Clock size={24} className="text-purple-400" />,
    },
    {
      title: 'Post-Workshop Support',
      desc: 'Students or teachers can reach out after the session with questions — we stay available to help.',
      icon: <MessageSquare size={24} className="text-pink-400" />,
    },
    {
      title: 'Professional Value',
      desc: '₹799 per session. An investment in student safety and digital literacy that pays off for a lifetime.',
      icon: <DollarSign size={24} className="text-cyber-teal" />,
    },
  ];

  return (
    <section className="py-24 bg-cyber-bg-alt/30 border-y border-cyber-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <p className="font-mono text-[10px] text-cyber-teal tracking-[0.2em] uppercase mb-4">// What Your School Gets</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Expert Education. Incredible Value.</h2>
          <p className="text-cyber-muted max-w-2xl text-lg">This workshop is a complete, career-grade awareness package delivered at an affordable institutional rate.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="glass-card !p-8 group hover:border-cyber-teal/30 hover:shadow-[0_0_20px_rgba(0,212,170,0.05)] transition-all"
            >
              <div className="mb-6 p-4 bg-cyber-bg-alt rounded-2xl w-fit border border-cyber-border group-hover:border-cyber-teal/20 transition-all group-hover:bg-cyber-teal/5">
                {perk.icon}
              </div>
              <h4 className="text-lg font-bold mb-3">{perk.title}</h4>
              <p className="text-sm text-cyber-muted leading-relaxed line-clamp-3">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

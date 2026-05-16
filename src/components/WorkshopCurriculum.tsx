/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { RevealItem } from './ScrollReveal';

export default function WorkshopCurriculum() {
  const steps = [
    {
      num: '01',
      title: 'What is Phishing?',
      desc: 'Understanding the concept, history, and how phishing has evolved — from basic email scams to sophisticated spear-phishing attacks.',
    },
    {
      num: '02',
      title: 'Spotting a Fake Email',
      desc: 'Live analysis of real phishing emails — identifying red flags like spoofed senders, urgent language, and suspicious links.',
    },
    {
      num: '03',
      title: 'Fake Websites & URLs',
      desc: 'How attackers clone real websites. Students learn to read URLs, check SSL certificates, and spot lookalike domains.',
    },
    {
      num: '04',
      title: 'Social Engineering Tactics',
      desc: 'The psychology behind manipulation — urgency, authority, and fear. How to pause and think before acting on requests.',
    },
    {
      num: '05',
      title: 'Mobile & Social Media Phishing',
      desc: 'WhatsApp forwards, Instagram DMs, fake prize links — students see how attacks look on the devices they use every day.',
    },
    {
      num: '06',
      title: 'Reporting & Response',
      desc: 'Practical response steps — who to tell, how to report, changing passwords, and how to stay protected going forward.',
    }
  ];

  return (
    <section id="curriculum" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <RevealItem>
            <p className="font-mono text-[10px] text-cyber-teal tracking-[0.2em] uppercase mb-4">// Workshop Curriculum</p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Students Will Learn</h2>
          </RevealItem>
          <RevealItem>
            <p className="text-cyber-muted max-w-2xl text-lg">A fully interactive 90-120 minute session covering real-world threats, live demonstrations, and deep-dive Q&A.</p>
          </RevealItem>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {steps.map((step) => (
            <RevealItem key={step.num}>
              <motion.div
                whileHover={{ 
                  x: 10, 
                  borderColor: 'var(--color-cyber-teal)',
                  backgroundColor: 'rgba(17, 24, 32, 0.6)'
                }}
                className="glass-card group hover:border-cyber-teal/30 flex gap-8 items-start !p-8 bg-cyber-card-alt/30 transition-all h-full"
              >
                <motion.div 
                  className="font-mono text-xs text-cyber-teal bg-cyber-teal/5 border border-cyber-teal/20 px-3 py-2 rounded-md group-hover:bg-cyber-teal group-hover:text-cyber-bg transition-colors shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  {step.num}
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-teal transition-colors">{step.title}</h4>
                  <p className="text-sm text-cyber-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Smartphone, Users } from 'lucide-react';
import { RevealItem } from './ScrollReveal';

export default function ThreatGrid() {
  const threats = [
    {
      title: 'Fake Login Pages',
      desc: 'Students receive emails mimicking Google, YouTube or school portals asking for their password. One mistake and their account is gone.',
      icon: <ShieldAlert className="text-cyber-danger" size={32} />,
      border: 'border-t-2 border-t-cyber-danger',
    },
    {
      title: 'SMS & WhatsApp Scams',
      desc: 'Phishing isn\'t just email anymore. Fake prize messages and "verify your account" texts target students daily on their phones.',
      icon: <Smartphone className="text-cyber-teal" size={32} />,
      border: 'border-t-2 border-t-cyber-teal',
    },
    {
      title: 'Social Engineering',
      desc: 'Attackers impersonate teachers or admin staff. Without awareness, even cautious students can be manipulated into sharing sensitive data.',
      icon: <Users className="text-cyber-blue" size={32} />,
      border: 'border-t-2 border-t-cyber-blue',
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <RevealItem>
            <p className="font-mono text-[10px] text-cyber-teal tracking-[0.2em] uppercase mb-4">// Why It Matters</p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Schools are a prime target.<br />Your students need to know this.</h2>
          </RevealItem>
          <RevealItem>
            <p className="text-cyber-muted max-w-2xl text-lg">Cybercriminals specifically target younger audiences because they're less suspicious. One click on a fake link can compromise an entire school network.</p>
          </RevealItem>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {threats.map((threat) => (
            <RevealItem key={threat.title}>
              <motion.div
                whileHover={{ 
                  y: -10, 
                  borderColor: 'var(--color-cyber-teal)',
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`glass-card ${threat.border} h-full p-10 hover:shadow-[0_20px_50px_rgba(0,212,170,0.1)] transition-all flex flex-col items-center text-center group bg-cyber-card-alt/30 hover:bg-cyber-card-alt/50`}
              >
                <motion.div 
                  className="mb-6 bg-cyber-bg-alt w-16 h-16 rounded-full flex items-center justify-center border border-cyber-border group-hover:border-cyber-teal/30 transition-colors"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {threat.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-4">{threat.title}</h4>
                <p className="text-sm text-cyber-muted leading-relaxed">{threat.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Smartphone, Users } from 'lucide-react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] text-cyber-teal tracking-[0.2em] uppercase mb-4">// Why It Matters</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Schools are a prime target.<br />Your students need to know this.</h2>
          <p className="text-cyber-muted max-w-2xl text-lg">Cybercriminals specifically target younger audiences because they're less suspicious. One click on a fake link can compromise an entire school network.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {threats.map((threat, idx) => (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'var(--color-cyber-teal)' }}
              className={`glass-card ${threat.border} p-10 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)] transition-all flex flex-col items-center text-center group`}
            >
              <div className="mb-6 bg-cyber-bg-alt w-16 h-16 rounded-full flex items-center justify-center border border-cyber-border group-hover:border-cyber-teal/30 transition-colors">
                {threat.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{threat.title}</h4>
              <p className="text-sm text-cyber-muted leading-relaxed">{threat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

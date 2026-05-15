/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export default function CyberBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -400]);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 cyber-grid opacity-30"
      />
      
      {/* Animated Scan Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-teal/5 to-transparent h-20 w-full animate-[scan_8s_linear_infinite]" />

      {/* Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-teal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-cyber-blue/10 rounded-full blur-[100px]" />
      
      {/* Mouse Follow Light */}
      <div 
        className="absolute w-[600px] h-[600px] bg-cyber-teal/5 rounded-full blur-[100px] transition-all duration-300 ease-out"
        style={{ 
          left: mousePos.x - 300, 
          top: mousePos.y - 300,
        }} 
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,20,0.4)_100%)]" />
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}

function Particle() {
  const [styles, setStyles] = useState({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    size: 1 + Math.random() * 3,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.5, 0],
        y: [0, -100],
        x: [0, (Math.random() - 0.5) * 50]
      }}
      transition={{
        duration: styles.duration,
        repeat: Infinity,
        delay: styles.delay,
        ease: "linear"
      }}
      className="absolute bg-cyber-teal rounded-full"
      style={{
        left: styles.left,
        top: styles.top,
        width: styles.size,
        height: styles.size,
        boxShadow: `0 0 10px var(--color-cyber-teal)`,
      }}
    />
  );
}

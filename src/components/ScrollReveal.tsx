import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  key?: string | number;
}

export default function ScrollReveal({ children, className = "", stagger = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Cinematic blur and fade out as section leaves
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: springOpacity,
        y: springY,
        scale: springScale,
        filter: blur,
      }}
      className={className}
    >
      {stagger ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }
            }
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

export const RevealItem = ({ children, className = "", key }: { children: ReactNode; className?: string; key?: string | number }) => {
  return (
    <motion.div
      key={key}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

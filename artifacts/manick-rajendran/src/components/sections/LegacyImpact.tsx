import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useState, useEffect } from "react";

const STATS = [
  { value: 35, suffix: "+", label: "Years of Leadership", sub: "Spanning banking, healthcare & technology" },
  { value: 7, suffix: "", label: "Countries", sub: "India, USA, Sweden, South Korea, Tanzania, Malawi + more" },
  { value: 500, suffix: "K+", label: "Doctors Impacted", sub: "National telemedicine training initiative" },
  { value: 2100, suffix: "+", label: "Hospital Beds Managed", sub: "As CEO of Velammal Medical College Hospital" },
  { value: 10, suffix: "+", label: "Startups Mentored", sub: "Velammal Knowledge Park & beyond" },
  { value: 4, suffix: "+", label: "National Programs", sub: "Government health initiatives led or contributed to" },
];

function StatItem({ value, suffix, label, sub, delay, inView }: { value: number; suffix: string; label: string; sub: string; delay: number; inView: boolean }) {
  const [trigger, setTrigger] = useState(false);
  const count = useCountUp(value, 2000, trigger);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setTrigger(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 py-8 border-b border-white/10 md:border-b-0 md:border-r last:border-0 group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="font-mono text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
        {count}{suffix}
      </div>
      <div className="text-base font-serif font-semibold text-white/80 mb-2">{label}</div>
      <div className="text-sm font-sans text-white/40 leading-snug max-w-[180px]">{sub}</div>
    </motion.div>
  );
}

export function LegacyImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#0a3a6b]" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-white/40 uppercase">
            Three Decades of Measurable Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
            Scale &amp; Legacy
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x-0 md:divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} delay={200 + i * 120} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

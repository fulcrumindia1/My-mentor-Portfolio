import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useState, useEffect } from "react";

const INSTITUTIONS = [
  {
    org: "StartupTN",
    program: "Periyar Social Justice Venture Lab",
    role: "Head, Project Management Unit",
    outcome: "Ecosystem development for marginalized community entrepreneurs across Tamil Nadu",
    weight: "primary",
  },
  {
    org: "TiE Chennai",
    program: "Business Model Canvas & Ecosystem Value Creation Programs",
    role: "Governing Council Member",
    outcome: "10,000+ entrepreneurs impacted through workshops, courses, and mentorship",
    weight: "primary",
  },
  {
    org: "Venture Studio Program",
    program: "International Market Connections",
    role: "Program Lead",
    outcome: "Bridging Tamil Nadu startups with global markets through structured ecosystem development",
    weight: "primary",
  },
  {
    org: "Velammal Knowledge Park",
    program: "STEM Integration & 21st Century Skills",
    role: "Chief Mentor",
    outcome: "Global best practices from USA, UK, Australia, Singapore integrated into curriculum",
    weight: "secondary",
  },
  {
    org: "Xcode Life Sciences",
    program: "Pharmacogenomics Go-to-Market",
    role: "President & Mentor",
    outcome: "Guided founder through product-market fit for Clopidogrel Resistance testing",
    weight: "secondary",
  },
];

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const [trigger, setTrigger] = useState(false);
  const count = useCountUp(value, 2000, trigger);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setTrigger(true), 400);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}

export function InstitutionalLeadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const primary = INSTITUTIONS.filter((i) => i.weight === "primary");
  const secondary = INSTITUTIONS.filter((i) => i.weight === "secondary");

  return (
    <section id="institutions" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Systems Shaped
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Institutional Leadership &amp; Ecosystem Building
          </h2>
          <div className="w-12 h-1 bg-primary mb-5" />
          <p className="text-muted-foreground font-sans max-w-2xl text-lg leading-relaxed">
            Designing and leading platforms, programs, and institutions that create compounding value for entrepreneurs, industries, and communities.
          </p>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-14 py-8 border-y border-border/50"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatItem value={10000} suffix="+" label="Entrepreneurs Impacted" inView={inView} />
          <StatItem value={100} suffix="+" label="SC/ST Entrepreneurs Mentored" inView={inView} />
          <StatItem value={35} suffix="+" label="Years of Ecosystem Building" inView={inView} />
        </motion.div>

        {/* Primary institutions — Institution → Program → Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {primary.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-primary text-primary-foreground p-8 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              data-testid={`institution-primary-${i}`}
            >
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                {item.role}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">{item.org}</h3>
              <p className="text-accent font-semibold font-sans text-sm mb-3">{item.program}</p>
              <div className="w-6 h-px bg-white/20 mb-3" />
              <p className="text-white/50 font-sans text-sm leading-relaxed">{item.outcome}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary institutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secondary.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-background border border-border p-6 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              data-testid={`institution-secondary-${i}`}
            >
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                {item.role}
              </div>
              <h3 className="text-base font-serif font-bold text-foreground mb-1">{item.org}</h3>
              <p className="text-primary font-medium font-sans text-sm mb-1">{item.program}</p>
              <p className="text-muted-foreground font-sans text-xs">{item.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

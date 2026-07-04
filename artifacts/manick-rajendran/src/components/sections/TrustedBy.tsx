import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ORGS = [
  { name: "Deutsche Bank", category: "Banking" },
  { name: "Bankers Trust", category: "Banking" },
  { name: "HIMSS", category: "Standards" },
  { name: "Bureau of Indian Standards", category: "Standards" },
  { name: "ISO", category: "Standards" },
  { name: "Velammal Hospitals", category: "Healthcare" },
  { name: "LifeLine Hospitals", category: "Healthcare" },
  { name: "BillingParadise", category: "HealthTech" },
  { name: "Xcode Life Sciences", category: "Genomics" },
  { name: "HITSP", category: "Interoperability" },
];

export function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 bg-background border-y border-border" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.p
          className="text-center text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Selected Organizations &amp; Institutions
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {ORGS.map((org, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-1 group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              data-testid={`org-${org.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className="text-base md:text-lg font-serif font-semibold text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300 whitespace-nowrap">
                {org.name}
              </span>
              <span className="text-[10px] font-sans font-medium tracking-widest text-muted-foreground/50 uppercase">
                {org.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

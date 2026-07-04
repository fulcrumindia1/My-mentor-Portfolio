import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  { num: "01", statement: "Evidence over opinion." },
  { num: "02", statement: "Institutions over individuals." },
  { num: "03", statement: "Execution over intention." },
  { num: "04", statement: "Innovation with accountability." },
  { num: "05", statement: "Leadership measured by long-term impact." },
];

const WAVE_STAGES = [
  {
    num: "01",
    label: "Preparation",
    desc: "Building technical, strategic, and relational capabilities long before market opportunity arrives.",
  },
  {
    num: "02",
    label: "Opportunity",
    desc: "Recognizing the precise convergence of market readiness, institutional need, and execution capability.",
  },
  {
    num: "03",
    label: "Momentum",
    desc: "Channeling preparation into decisive action when conditions align — neither prematurely nor late.",
  },
  {
    num: "04",
    label: "Transformation",
    desc: "Driving measurable, systemic change across organizations and ecosystems with disciplined execution.",
  },
  {
    num: "05",
    label: "Institution",
    desc: "Converting successful transformation into durable structures and standards that outlast the leader.",
  },
  {
    num: "06",
    label: "Legacy",
    desc: "The compounding, self-sustaining impact of institutions that continue creating value independently.",
  },
];

export function ExecutivePhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        
        {/* --- PRINCIPLES (Top Half) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Left: Label + Heading */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Executive Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-5 leading-tight">
              How We Lead
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-sans leading-relaxed text-base">
              Five convictions, tested across three decades of building enterprises, institutions, and public systems.
            </p>
          </motion.div>

          {/* Right: Principle statements — larger typography, 15-20% reduced row whitespace */}
          <div className="lg:col-span-8 space-y-0 divide-y divide-border">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                className="group py-5 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                data-testid={`principle-${i}`}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-xs font-bold text-muted-foreground/50 tracking-wider flex-shrink-0">
                    {p.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {p.statement}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- THE WAVE PRINCIPLE (Bottom Half) — Instant visual clarity, zero clicks required --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-14">
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Intellectual Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              The Wave Principle
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-base leading-relaxed">
              Success results from preparation meeting opportunity — the right capabilities developed at the right time for the right market moment. Developed across 35 years of building ventures and institutions.
            </p>
          </div>

          {/* Instant 6-stage process grid — readable in 5 seconds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {WAVE_STAGES.map((stage, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border p-7 rounded-sm relative group hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                data-testid={`wave-stage-${i}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">
                      {stage.num}
                    </span>
                    {i < WAVE_STAGES.length - 1 && (
                      <span className="hidden lg:inline-block text-muted-foreground/30 text-xs font-mono">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {stage.label}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

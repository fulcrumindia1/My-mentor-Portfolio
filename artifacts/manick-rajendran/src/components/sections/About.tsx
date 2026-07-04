import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    "BIS Chairman",
    "TiE Chennai — Governing Council",
    "StartupTN — PMU Head",
    "HIMSS Board",
    "ISO Delegation Head",
    "IIM Bangalore MBA",
  ];

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Executive Summary</h2>
          <div className="w-12 h-1 bg-primary mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote className="text-muted w-16 h-16 rotate-180 mb-[-2rem] opacity-50" />
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              "Building institutions that create compounding value — across healthcare, finance, public systems, and innovation ecosystems — for communities that need them most."
            </p>
            <div className="mt-8 text-muted-foreground font-sans leading-relaxed space-y-4">
              <p>
                With an MBA from IIM Bangalore and over 35 years of leadership across multiple sectors and geographies, Manick Rajendran's career is defined by a singular pattern: entering complex systems and leaving behind institutions that continue creating value independently.
              </p>
              <p>
                From serving as Vice President at Deutsche Bank on Wall Street to leading 2,100-bed hospital systems as CEO, from chairing national standards committees at BIS to architecting entrepreneurship ecosystems that have impacted 10,000+ entrepreneurs through TiE Chennai — his trajectory bridges corporate leadership with institution building at every stage.
              </p>
              <p>
                What makes his approach distinctive is the convergence of three capabilities rarely found together: deep global corporate experience, hands-on institution building, and a sustained commitment to strengthening public systems — particularly for marginalized communities. He focuses on long-term capability rather than short-term consulting.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card border border-border p-8 rounded-sm shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-lg font-serif font-bold text-foreground mb-6 uppercase tracking-wider">Key Credentials</h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground border border-border/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-12 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Education</h4>
                  <p className="text-muted-foreground">MBA, IIM Bangalore (1986)</p>
                  <p className="text-muted-foreground">BE Mechanical, Anna University (1984)</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Distinctive Perspective</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Bridges business, healthcare, public systems, and innovation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Combines global corporate leadership with institution building
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Focuses on long-term capability rather than short-term consulting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
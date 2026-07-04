import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const TIMELINE_DATA = [
  { year: "1998–2005", role: "Vice President", org: "Deutsche Bank / Bankers Trust (USA)", desc: "Led Retirement Services Technology (40-person staff). Co-architect of GSS Technology Roadmap. Reduced baseline costs 20% while maintaining SLA. Managed Global Billing System architecture.", tag: "Finance" },
  { year: "2003–2006", role: "Co-Founder & CEO", org: "MedAZ", desc: "Built CCHIT-certified, Canada Collaboratory–approved Practice Management EMR product. First transition from corporate leadership to entrepreneurship.", tag: "Entrepreneurship" },
  { year: "2007–2014", role: "Group CEO & Director Strategy", org: "LifeLine Hospitals · Velammal Hospitals", desc: "Led a 320-bed tertiary group (LifeLine) and a 2,100-bed academic medical facility (Velammal) as CEO. Launched five new clinical programs. Drove operational stability and institutional growth across Tamil Nadu's healthcare infrastructure.", tag: "Healthcare" },
  { year: "2007–Present", role: "Chairman · Co-Chairman · Delegation Head", org: "BIS · ISO · HITSP · HIMSS", desc: "Chairman of BIS Informatics–AYUSH. Led India's ISO delegation at Gothenburg, Daegu, and Arlington. Co-Chairman of HITSP Admin & Finance Domain. Shaped national interoperability frameworks across US and India.", tag: "Standards" },
  { year: "2014–2019", role: "Governing Council Member", org: "TiE Chennai", desc: "Conceptualized and led Business Model Canvas (BMC) and Ecosystem Value Creation (EVC) programs across colleges and industries, impacting 10,000+ entrepreneurs across Tamil Nadu.", tag: "Ecosystem" },
  { year: "2016–2021", role: "Founder & CEO", org: "Cardiac Advisory Company (iMMi Life)", desc: "Built a telecardiology platform enabling small hospitals to transmit ECGs to a virtual cardiologist committee. Deployed across India, Tanzania, and Malawi. Included in PM's national telecardiology initiative.", tag: "Entrepreneurship" },
  { year: "2022–Present", role: "CSO · COO · Venture Studio Lead", org: "BillingParadise · iSource · International Markets", desc: "Overseeing AI-driven healthcare transformation as Chief Strategy Officer. Leading digital health operations as COO. Bridging Tamil Nadu startups with global markets through structured ecosystem development.", tag: "Leadership" },
  { year: "2025–2026", role: "Head, Project Management Unit", org: "StartupTN — Periyar Social Justice Venture Lab", desc: "Led the Project Management Unit for the Periyar Social Justice Venture Lab under StartupTN, focusing on entrepreneurship development and market access for marginalized SC/ST community entrepreneurs across Tamil Nadu.", tag: "Government" },
];

const TAG_COLORS: Record<string, string> = {
  Finance: "bg-blue-100 text-blue-700",
  Entrepreneurship: "bg-amber-100 text-amber-700",
  Healthcare: "bg-teal-100 text-teal-700",
  Standards: "bg-purple-100 text-purple-700",
  Ecosystem: "bg-green-100 text-green-700",
  Leadership: "bg-primary/15 text-primary",
  Government: "bg-orange-100 text-orange-700",
};

function TimelineItem({ item, index, inView }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="relative pl-8 md:pl-0 w-full mb-8 cursor-pointer group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
        {/* Left side (Year) */}
        <div className="hidden md:block text-right pt-1">
          <span className="font-mono text-primary font-medium">{item.year}</span>
        </div>

        {/* Center Node */}
        <div className="absolute left-0 md:static flex justify-center pt-1.5 md:pt-1 z-10">
          <div className="w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(44,182,125,0.4)]" />
        </div>

        {/* Right side (Content) */}
        <div className="md:text-left bg-card hover:bg-muted/50 transition-colors p-6 rounded-sm border border-border/50 shadow-sm relative">
          <div className="md:hidden font-mono text-primary font-medium mb-2">{item.year}</div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-serif font-bold text-foreground">{item.role}</h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${TAG_COLORS[item.tag] ?? "bg-muted text-muted-foreground"}`}>
              {item.tag}
            </span>
          </div>
          <h4 className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-wide mb-3">{item.org}</h4>
          
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-foreground/80 leading-relaxed font-sans pb-4">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="absolute bottom-4 right-4 text-muted-foreground/50 group-hover:text-primary transition-colors">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Three Decades of Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Leadership Journey</h2>
          <div className="w-12 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Line */}
          <motion.div 
            className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-full bg-primary shadow-[0_0_15px_rgba(15,76,129,0.8)]"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </motion.div>

          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
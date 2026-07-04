import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SPEAKING = [
  {
    topic: "Telemedicine at National Scale",
    venue: "PM's National Telemedicine Initiative",
    category: "Telemedicine",
    desc: "Architecture and deployment of telemedicine platforms reaching 500,000+ clinicians across India, Tanzania, and Malawi."
  },
  {
    topic: "Healthcare Interoperability Standards",
    venue: "HITSP / ISO / CCHIT",
    category: "Standards & Policy",
    desc: "Practical frameworks for EHR interoperability — from HITSP Co-Chairman to ISO Delegation Head at international standards meetings."
  },
  {
    topic: "AI in Revenue Cycle Management",
    venue: "Healthcare Operations Forums",
    category: "Healthcare Finance",
    desc: "How AI and automation are reshaping medical billing, denial management, and Remote Patient Monitoring revenue lines."
  },
  {
    topic: "Hospital Leadership & Transformation",
    venue: "Hospital Administration Conferences",
    category: "Hospital Operations",
    desc: "Lessons from leading a 2,100-bed academic hospital and a multi-facility group through growth, restructuring, and sustained improvement."
  },
  {
    topic: "Digital Health in Emerging Markets",
    venue: "Global Health Technology Summits",
    category: "Global Health",
    desc: "Building robust digital health infrastructure across resource-constrained settings — India, Africa, and Southeast Asia."
  },
  {
    topic: "HealthTech Mentorship & Scaling",
    venue: "Velammal Knowledge Park & Academic Institutions",
    category: "Mentorship",
    desc: "From genomics to cardiac telemedicine — guiding HealthTech founders through product-market fit, clinical validation, and exit."
  },
];

const CATEGORY_COLOR: Record<string, string> = {
  "Telemedicine": "text-accent",
  "Standards & Policy": "text-secondary",
  "Healthcare Finance": "text-primary",
  "Hospital Operations": "text-orange-600",
  "Global Health": "text-teal-600",
  "Mentorship": "text-purple-600",
};

export function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="insights" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Expertise in Practice
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Speaking &amp; Conference Topics
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <p className="text-muted-foreground font-sans max-w-md text-lg leading-relaxed">
            Perspectives drawn from frontline leadership — not theory, but three decades of applied practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPEAKING.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-background border border-border p-7 hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              data-testid={`insight-card-${i}`}
            >
              <span className={`text-xs font-bold uppercase tracking-widest mb-3 ${CATEGORY_COLOR[item.category] ?? "text-muted-foreground"}`}>
                {item.category}
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {item.topic}
              </h3>
              <p className="text-xs font-sans text-muted-foreground/70 uppercase tracking-wide mb-4 font-medium">
                {item.venue}
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

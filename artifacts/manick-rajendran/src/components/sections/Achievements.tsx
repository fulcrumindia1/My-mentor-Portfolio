import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACHIEVEMENTS = [
  {
    num: "01",
    title: "National Telemedicine Initiative",
    challenge: "Scaling specialized cardiac care to remote regions lacking cardiologists, across economically diverse populations in three countries.",
    response: "Built a cardiac telemedicine platform enabling small hospitals to transmit ECGs digitally to a virtual committee of five cardiologists, who provide a majority opinion in real time.",
    outcome: "Deployed across India, Tanzania, and Malawi. Included in the Prime Minister's national telemedicine initiative. Trained 500,000 doctors nationally.",
    lesson: "Public health transformation requires technology simple enough for resource-constrained environments.",
    metrics: [
      { value: "3", label: "Countries Deployed" },
      { value: "National", label: "PM's Initiative" },
    ]
  },
  {
    num: "02",
    title: "2,100-Bed Academic Hospital Leadership",
    challenge: "Managing one of Tamil Nadu's largest academic medical facilities while simultaneously driving corporate hospital strategy.",
    response: "Served as CEO of Velammal Medical College Hospital & Research Institute — overseeing both clinical operations and academic administration, working directly with Trustees on long-term institutional vision.",
    outcome: "Delivered operational stability and institutional growth for a 2,100-bed facility spanning academic and corporate hospital verticals.",
    lesson: "Academic healthcare institutions require balancing clinical excellence with educational mission.",
    metrics: [
      { value: "2,100+", label: "Hospital Beds Led" },
      { value: "1", label: "of TN's Largest" },
    ]
  },
  {
    num: "03",
    title: "Startup Ecosystem Architecture — Tamil Nadu",
    challenge: "Building a structured entrepreneurship ecosystem for first-generation entrepreneurs, including those from marginalized communities, across Tamil Nadu.",
    response: "As TiE Chennai Governing Council member, conceptualized and led Business Model Canvas (BMC) and Ecosystem Value Creation (EVC) programs across colleges and industries. As StartupTN PMU Head, directed the Periyar Social Justice Venture Lab.",
    outcome: "Impacted 10,000+ entrepreneurs across Tamil Nadu. Provided business mentoring for 100+ entrepreneurs from SC/ST communities in India and the USA.",
    lesson: "Sustainable ecosystems are built through institutions and programs, not individual mentorship alone.",
    metrics: [
      { value: "10,000+", label: "Entrepreneurs Impacted" },
      { value: "100+", label: "SC/ST Entrepreneurs" },
    ]
  },
  {
    num: "04",
    title: "Global Healthcare Standards Architecture",
    challenge: "Fragmented health information systems preventing interoperability between hospitals, payers, and government agencies across the US and India.",
    response: "Served as Co-Chairman of HITSP Admin & Finance Domain TC. Led India's ISO delegation at Gothenburg (Sweden), Daegu (South Korea), and Arlington (USA). Chaired BIS Informatics–AYUSH.",
    outcome: "Shaped interoperability standards — covering EHR, Claims, Referrals, and Admin workflows — adopted nationally across two jurisdictions.",
    lesson: "Standards are institutions — they create value long after the architects have moved on.",
    metrics: [
      { value: "3", label: "Countries — ISO" },
      { value: "US+India", label: "Standards Jurisdictions" },
    ]
  },
  {
    num: "05",
    title: "Multi-Facility Hospital Group Expansion",
    challenge: "Building new specialist service lines across a tertiary-care group to capture underserved surgical markets in South India.",
    response: "As Group CEO of LifeLine Hospitals (320-bed flagship + 4 feeder facilities), systematically launched five new clinical programs with dedicated surgeon recruitment and facilities build-out.",
    outcome: "Successfully commissioned minimally invasive surgery, bariatric surgery, day-care surgery, and dental programs — all within a single leadership tenure.",
    lesson: "Healthcare expansion requires clinical-business alignment at the program level, not just the institutional level.",
    metrics: [
      { value: "5", label: "New Clinical Programs" },
      { value: "320+", label: "Bed Primary Facility" },
    ]
  },
];

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-muted/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Evidence of Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Executive Case Studies</h2>
          <div className="w-12 h-1 bg-primary" />
        </motion.div>

        <div className="space-y-20">
          {ACHIEVEMENTS.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start`}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                data-testid={`case-study-${i}`}
              >
                {/* Visual card — swaps order on alternating rows */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="bg-card border border-border p-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/60 to-accent/40" />
                    <div className="text-7xl md:text-8xl font-serif font-bold text-primary/10 select-none leading-none mb-[-1.5rem]">
                      {item.num}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight mb-8">
                      {item.title}
                    </h3>
                    {/* Metrics */}
                    <div className={`grid grid-cols-${item.metrics.length} gap-4`}>
                      {item.metrics.map((m, mi) => (
                        <div key={mi} className="border-l-2 border-primary/30 pl-4">
                          <div className="font-mono text-xl font-bold text-primary">{m.value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content — swaps order on alternating rows */}
                <div className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                      <span className="w-3 h-px bg-muted-foreground/50" />
                      Challenge
                    </span>
                    <p className="text-foreground/70 font-sans leading-relaxed">{item.challenge}</p>
                  </div>

                  <div className="pl-5 border-l-2 border-border">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-3">
                      Strategic Response
                    </span>
                    <p className="text-foreground/80 font-sans leading-relaxed">{item.response}</p>
                  </div>

                  <div className="bg-primary/5 border border-primary/15 p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                      Institutional Outcome
                    </span>
                    <p className="text-foreground font-sans font-medium leading-relaxed">{item.outcome}</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground font-sans italic">
                      <span className="text-primary font-semibold not-italic">Leadership Lesson:</span>{" "}
                      {item.lesson}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

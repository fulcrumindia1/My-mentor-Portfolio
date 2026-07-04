import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const ADVISORY_ITEMS = [
  { title: "Board Advisory", desc: "Strategic counsel on institutional transformation, digital health direction, and governance." },
  { title: "Enterprise Transformation", desc: "End-to-end advisory for organizations navigating operational change and technology adoption." },
  { title: "Innovation Ecosystem Strategy", desc: "Designing and scaling entrepreneurship ecosystems, venture studios, and startup platforms." },
  { title: "Healthcare Systems Leadership", desc: "Hospital operations, clinical program development, and multi-facility group strategy." },
  { title: "Public Policy & Standards", desc: "National standards development, government healthcare roadmaps, and interoperability frameworks." },
  { title: "Speaking & Thought Leadership", desc: "Keynote and panel engagements on enterprise transformation, ecosystem building, and innovation." },
];

const SPEAKING_TOPICS = [
  "Enterprise Transformation & Institutional Leadership",
  "Building Innovation Ecosystems at Scale",
  "Healthcare Standards & National Interoperability",
  "Entrepreneurship in Marginalized Communities",
  "Digital Health & AI in Healthcare Operations",
  "The Wave Principle — Preparation Meets Opportunity",
];

export function Advisory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section id="advisory" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              How to Engage
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Executive Advisory
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <p className="text-muted-foreground font-sans max-w-md text-lg leading-relaxed">
            Bringing 35 years of cross-sector leadership to organizations that demand transformational results.
          </p>
        </motion.div>

        {/* Advisory items — 6 cards in 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {ADVISORY_ITEMS.map((svc, i) => (
            <motion.div
              key={i}
              className="group bg-card border border-border p-6 hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              data-testid={`advisory-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-8 h-0.5 bg-accent mb-4 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-base font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Speaking topics — absorbed from Insights */}
        <motion.div
          className="bg-card border border-border p-8 md:p-10 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 uppercase tracking-wider">
            Speaking & Conference Topics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SPEAKING_TOPICS.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-full px-10 h-13 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            data-testid="button-advisory-contact"
          >
            Initiate a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

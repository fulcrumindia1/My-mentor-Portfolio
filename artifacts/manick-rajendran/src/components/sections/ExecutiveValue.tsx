import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Lightbulb, TrendingUp, Landmark } from "lucide-react";

const VALUE_CARDS = [
  {
    icon: TrendingUp,
    title: "Transforming Enterprises",
    desc: "Leading large-scale operational and organizational change across healthcare, finance, and public institutions.",
  },
  {
    icon: Building2,
    title: "Building Institutions",
    desc: "Designing innovation ecosystems, standards bodies, and entrepreneurship platforms that create value long after implementation.",
  },
  {
    icon: Lightbulb,
    title: "Scaling Innovation",
    desc: "Converting emerging technologies into measurable economic and social outcomes across multiple geographies.",
  },
  {
    icon: Landmark,
    title: "Strengthening Public Systems",
    desc: "Supporting governments and institutions through standards, governance, and long-term capability building.",
  },
];

export function ExecutiveValue() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Executive Focus
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              className="group flex flex-col p-8 bg-card border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              data-testid={`value-card-${i}`}
            >
              <div className="w-11 h-11 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

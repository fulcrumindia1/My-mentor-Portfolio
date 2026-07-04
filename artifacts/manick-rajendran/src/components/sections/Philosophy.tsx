import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    num: "01",
    title: "Technology must serve care.",
    body: "Every digital health initiative, every interoperability standard, every AI deployment exists for one purpose — better patient outcomes. Technology that does not measurably serve care is a distraction."
  },
  {
    num: "02",
    title: "Standards must enable innovation.",
    body: "Standards are not bureaucratic constraints. They are the interoperability scaffolding that allows innovators to build higher, faster, and with greater confidence across systems and borders."
  },
  {
    num: "03",
    title: "Transformation must be measurable.",
    body: "Change for its own sake is theater. True transformation produces metrics you can defend in a board room, a government committee, or a hospital annual report — beds utilized, costs reduced, lives reached."
  },
  {
    num: "04",
    title: "Leadership must outlast the leader.",
    body: "The highest measure of any executive is not what is built during their tenure — it is what continues to grow after they leave. Institutions, cultures, and capabilities that endure are the real legacy."
  }
];

export function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Label + Heading */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Guiding Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-5 leading-tight">
              Leadership Philosophy
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-sans leading-relaxed text-base">
              Thirty-five years across banking, hospital systems, digital health, and national standards work converge into four convictions that guide every engagement.
            </p>
          </motion.div>

          {/* Right: Principles */}
          <div className="lg:col-span-8 space-y-0 divide-y divide-border">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                className="group py-8 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                data-testid={`principle-${i}`}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-mono text-xs font-bold text-muted-foreground/40 tracking-wider pt-1 flex-shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed text-base">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

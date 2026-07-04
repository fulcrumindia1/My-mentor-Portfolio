import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/1711126551904_1782102099986.jfif";

const metrics = [
  { label: "Years of Leadership", value: 35, suffix: "+" },
  { label: "Entrepreneurs Impacted", value: 10000, suffix: "+" },
  { label: "Geographies", value: 7, suffix: "+" },
];

function MetricItem({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const [trigger, setTrigger] = useState(false);
  const count = useCountUp(value, 1800, trigger);

  useEffect(() => {
    const timer = setTimeout(() => setTrigger(true), delay * 1000 + 1600);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex flex-col" data-testid={`metric-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="font-mono text-3xl md:text-4xl font-semibold text-primary">
        {count}{suffix}
      </div>
      <div className="text-xs font-sans text-muted-foreground uppercase tracking-[0.15em] mt-1.5">
        {label}
      </div>
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: "easeOut" }
});

export function Hero() {
  const scrollProgress = useScrollProgress();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-50 origin-left transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
        data-testid="scroll-progress"
      />

      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100dvh-5rem)] py-16 lg:py-0">

          {/* Left: Typography */}
          <div className="lg:col-span-7 flex flex-col z-10">
            <motion.div {...fadeIn(0.2)}>
              <span className="inline-block text-xs font-sans font-semibold tracking-[0.22em] text-accent uppercase mb-5 border-b border-accent/30 pb-2">
                Enterprise Transformation Strategist · Innovation Architect
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-2xl font-sans font-bold text-foreground tracking-widest uppercase mb-4"
              {...fadeUp(0.4)}
            >
              Manick Rajendran, BE, MBA
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-serif font-bold text-foreground leading-[1.08] mb-5 tracking-tight"
              {...fadeUp(0.6)}
            >
              Building Institutions.{" "}
              <em className="text-primary not-italic">Leading Transformation.</em>{" "}
              Creating Long-Term Impact.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-10"
              {...fadeIn(0.8)}
            >
              Over 35 years leading transformation across healthcare, finance, entrepreneurship, public systems, and innovation ecosystems — spanning seven countries.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-16"
              {...fadeUp(1.0)}
            >
              <Button
                size="lg"
                className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-executive-inquiry"
              >
                Executive Inquiry
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 border-border hover:bg-muted font-medium transition-all hover:-translate-y-0.5"
                onClick={() => scrollToSection("#experience")}
                data-testid="button-explore-experience"
              >
                Explore Journey
              </Button>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/60"
              {...fadeIn(1.2)}
            >
              {metrics.map((metric, i) => (
                <MetricItem
                  key={metric.label}
                  {...metric}
                  delay={i * 0.12}
                />
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              className="relative w-full max-w-[440px] aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 border border-primary/25 translate-x-5 translate-y-5 rounded-sm pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden bg-muted rounded-sm shadow-2xl">
                <img
                  src={portraitImg}
                  alt="Manick Rajendran — Enterprise Transformation Strategist"
                  className="w-full h-full object-cover object-top"
                  data-testid="hero-portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <motion.div
                className="absolute -left-3 top-[10%] bottom-[10%] w-1 bg-accent rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Initiate a Conversation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-4 leading-tight">
              Executive Engagement
            </h2>
            <div className="w-12 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-4 max-w-2xl">
              Available for Board Advisory, Institutional Transformation, Public Systems Strategy, Healthcare Leadership, Ecosystem Development, and Speaking Engagements.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60 font-sans mb-14">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Based in Atlanta, Georgia &nbsp;·&nbsp; Engaging globally</span>
            </div>
          </motion.div>

          {/* Contact channels */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <a
              href="mailto:manick@manick.com"
              className="group flex items-center gap-5 px-7 py-5 bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 flex-1"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Email</p>
                <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  manick@manick.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/manickrajendran"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 px-7 py-5 bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 flex-1"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  linkedin.com/in/manickrajendran
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-12 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-medium"
              data-testid="button-connect-linkedin"
            >
              <a href="https://linkedin.com/in/manickrajendran" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

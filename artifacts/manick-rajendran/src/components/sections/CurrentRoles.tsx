import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROLES = [
  {
    title: "Chief Strategy Officer",
    org: "BillingParadise",
    type: "Healthcare RCM & AI Transformation",
    since: "Current"
  },
  {
    title: "Head, Project Management Unit",
    org: "StartupTN — Periyar Social Justice Venture Lab",
    type: "Government Ecosystem Development",
    since: "Current"
  },
  {
    title: "Governing Council Member",
    org: "TiE Chennai",
    type: "Entrepreneurship Ecosystem Leadership",
    since: "Current"
  },
  {
    title: "Chief Operating Officer",
    org: "iSource ITES",
    type: "Digital Health Operations",
    since: "Current"
  },
  {
    title: "Venture Studio Program Lead",
    org: "International Market Connections",
    type: "Startup Ecosystem Development",
    since: "Current"
  },
  {
    title: "Founder",
    org: "iMMi Life",
    type: "Healthcare Innovation",
    since: "Current"
  }
];

export function CurrentRoles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="current" className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-white/50 uppercase">
            Active Today
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">
            Current Engagements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              className="group bg-white/10 border border-white/20 hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 p-6 rounded-sm focus-visible:outline-2 focus-visible:outline-white"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
              data-testid={`role-card-${i}`}
              tabIndex={0}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-sans font-bold text-accent uppercase tracking-wider">
                  {role.since}
                </span>
              </div>
              <p className="text-sm font-sans font-semibold text-white/60 uppercase tracking-wide mb-1">
                {role.title}
              </p>
              <h3 className="text-lg font-serif font-bold text-white mb-2 leading-tight">
                {role.org}
              </h3>
              <p className="text-sm text-white/50 font-sans">
                {role.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

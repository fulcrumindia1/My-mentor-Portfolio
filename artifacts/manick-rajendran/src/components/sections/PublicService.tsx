import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Users, Heart, Globe, Mic2, Scale } from "lucide-react";

const CONTRIBUTIONS = [
  {
    icon: Landmark,
    title: "StartupTN — Periyar Social Justice Venture Lab",
    desc: "Led the Project Management Unit for a government initiative focused on entrepreneurship development among marginalized communities across Tamil Nadu.",
    tag: "Government",
  },
  {
    icon: Users,
    title: "Marginalized Community Entrepreneurship",
    desc: "Provided business mentoring for 100+ entrepreneurs from SC/ST communities in India and the United States, focusing on capability building and market access.",
    tag: "Equity",
  },
  {
    icon: Heart,
    title: "National Telecardiology Initiative",
    desc: "Contributed to the Prime Minister's national telecardiology program, enabling cardiac consultation access for underserved populations across India, Tanzania, and Malawi.",
    tag: "Healthcare",
  },
  {
    icon: Globe,
    title: "Punjab Healthcare Transformation Roadmap",
    desc: "Developed the strategic roadmap for healthcare transformation for the Government of Punjab, addressing systemic capacity and governance challenges.",
    tag: "Government",
  },
  {
    icon: Mic2,
    title: "Global Digital Health Summit 2024",
    desc: "Featured speaker in Mumbai, showcasing healthcare innovation by marginalized community entrepreneurs — bridging entrepreneurship and public health.",
    tag: "Thought Leadership",
  },
  {
    icon: Scale,
    title: "National Standards — Pro Bono Governance",
    desc: "Served as BIS Chairman (Informatics — AYUSH) and ISO Delegation Head, contributing to national and international healthcare interoperability standards as institutional service.",
    tag: "Standards",
  },
];

const TAG_COLORS: Record<string, string> = {
  Government: "text-primary",
  Equity: "text-accent",
  Healthcare: "text-secondary",
  "Thought Leadership": "text-orange-600",
  Standards: "text-teal-600",
};

export function PublicService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="public-service" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-sans font-semibold tracking-[0.22em] text-white/40 uppercase">
              Beyond Business
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4">
              Institutional Contribution
            </h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            <p className="text-white/70 font-sans text-lg leading-relaxed mb-8">
              A consistent record of contributing to public institutions, government programs, and communities — driven by the conviction that enterprise leadership carries an obligation to strengthen the systems that enable it.
            </p>
            <div className="bg-white/10 border border-white/20 p-6 rounded-sm">
              <p className="text-white/90 font-serif italic text-lg leading-relaxed">
                "The true measure of leadership is not the organizations we manage, but the institutions we leave stronger than we found them."
              </p>
              <p className="text-accent font-sans text-sm font-medium mt-3">— Manick Rajendran</p>
            </div>
          </motion.div>

          {/* Right Column — Contribution cards */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTRIBUTIONS.map((item, i) => (
                <motion.div
                  key={i}
                  className="group bg-white/10 border border-white/15 p-6 rounded-sm hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  data-testid={`contribution-${i}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${TAG_COLORS[item.tag] ?? "text-white/50"}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

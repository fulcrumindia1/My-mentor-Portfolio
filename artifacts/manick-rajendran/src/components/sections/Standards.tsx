import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BOARDS = [
  {
    org: "Bureau of Indian Standards (BIS)",
    role: "Chairman",
    sub: "Informatics — AYUSH Subcommittee",
    region: "India",
    weight: "primary"
  },
  {
    org: "HIMSS India",
    role: "Board Member",
    sub: "Healthcare Information & Management Systems",
    region: "India",
    weight: "primary"
  },
  {
    org: "ISO",
    role: "Delegation Head",
    sub: "Gothenburg · Daegu · Arlington",
    region: "Sweden · South Korea · USA",
    weight: "primary"
  },
  {
    org: "HITSP",
    role: "Co-Chairman",
    sub: "Admin & Finance Domain Technical Committee",
    region: "USA",
    weight: "secondary"
  },
  {
    org: "CCHIT",
    role: "Workgroup Member",
    sub: "Interoperability Workgroup",
    region: "USA",
    weight: "secondary"
  },
  {
    org: "Telemedicine Society of India",
    role: "Joint Secretary",
    sub: "National professional body for telemedicine",
    region: "India",
    weight: "secondary"
  },
  {
    org: "Digital Health India",
    role: "Member",
    sub: "National digital health ecosystem initiative",
    region: "India",
    weight: "secondary"
  },
  {
    org: "Trust Hospital Chennai",
    role: "Director",
    sub: "Board of Directors",
    region: "India",
    weight: "secondary"
  }
];

const INITIATIVES = [
  "PM's National Telemedicine Initiative — trained 500,000 doctors across India",
  "Punjab State Government Healthcare Transformation Roadmap",
  "IHE India entity formation and Indian Testathon (IHE Connectathon model)",
  "HIMSS India interoperability-based nationwide care ecosystem",
  "CCHIT product certification — MedAZ (USA) and Canada Collaboratory approval",
  "EHR-Centric Tiger Team — interoperability specifications for US national health IT",
];

export function Standards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const primary = BOARDS.filter(b => b.weight === "primary");
  const secondary = BOARDS.filter(b => b.weight === "secondary");

  return (
    <section id="standards" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Rare Institutional Authority
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            National &amp; Global Standards Leadership
          </h2>
          <div className="w-12 h-1 bg-primary mb-5" />
          <p className="text-muted-foreground font-sans max-w-2xl text-lg leading-relaxed">
            Very few executives carry national standards authority. Shaping the interoperability frameworks, digital health policies, and governance structures that power modern healthcare systems across two continents.
          </p>
        </motion.div>

        {/* Primary (leadership) roles — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {primary.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-primary text-primary-foreground p-8 hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              data-testid={`standard-primary-${i}`}
            >
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">{item.region}</div>
              <div className="text-4xl font-serif font-bold text-white/10 select-none leading-none mb-[-0.5rem]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1 mt-2">{item.org}</h3>
              <p className="text-accent font-semibold font-sans text-sm mb-2">{item.role}</p>
              <p className="text-white/50 font-sans text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary roles — compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {secondary.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-card border border-border p-6 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              data-testid={`standard-secondary-${i}`}
            >
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">{item.region}</div>
              <h3 className="text-base font-serif font-bold text-foreground mb-1">{item.org}</h3>
              <p className="text-primary font-medium font-sans text-sm mb-1">{item.role}</p>
              <p className="text-muted-foreground font-sans text-xs">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* National Initiatives */}
        <motion.div
          className="bg-muted/30 border border-border p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 uppercase tracking-wider">
            National &amp; Government Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INITIATIVES.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

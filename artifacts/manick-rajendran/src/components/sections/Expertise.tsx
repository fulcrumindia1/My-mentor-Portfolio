import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  TrendingUp, Building2, Cpu, Stethoscope, 
  Network, Scale, Landmark, Lightbulb
} from "lucide-react";

const EXPERTISE = [
  { icon: TrendingUp, title: "Enterprise Transformation", desc: "Large-scale operational and organizational change across healthcare, finance, and public institutions." },
  { icon: Building2, title: "Institution Building", desc: "Designing ecosystems, standards bodies, and platforms that create compounding value independently." },
  { icon: Lightbulb, title: "Startup Ecosystem Architecture", desc: "Structuring innovation ecosystems — BMC, EVC programs, venture studios, and founder mentorship at scale." },
  { icon: Stethoscope, title: "Healthcare Strategy", desc: "Hospital operations, clinical program development, and healthcare system transformation." },
  { icon: Cpu, title: "Digital Health & AI", desc: "AI-powered healthcare operations, telemedicine platforms, remote patient monitoring, and EHR systems." },
  { icon: Network, title: "Healthcare Interoperability", desc: "HITSP, CCHIT, HL7, FHIR — standards-based architecture and national digital health policy." },
  { icon: Scale, title: "Healthcare Standards & Policy", desc: "BIS Chairman, ISO Delegation Head — shaping national and international healthcare governance." },
  { icon: Landmark, title: "Public Systems & Governance", desc: "Government advisory, public health programs, and institutional strengthening for marginalized communities." },
];

export function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Domains of Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Areas of Expertise</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-card border border-border p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
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
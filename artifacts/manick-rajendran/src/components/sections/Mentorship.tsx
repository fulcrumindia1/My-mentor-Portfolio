import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function Mentorship() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const faculties = [
    "College of Engineering, Anna University (Chennai)",
    "Thiagarajar School of Management (Madurai)",
    "Holy Cross College (Trichy)",
    "Velammal Knowledge Park (Chief Mentor)"
  ];

  const activities = [
    "Startup lifecycle mentorship",
    "Design thinking workshops",
    "Innovation competitions",
    "21st Century Skills integration"
  ];

  return (
    <section id="mentorship" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Mentorship & Education</h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            
            <p className="text-primary-foreground/80 font-sans text-lg leading-relaxed mb-12">
              Beyond corporate leadership, Manick is dedicated to cultivating the next generation of innovators and healthcare leaders through active mentorship and academic engagement.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 p-6 rounded-sm border border-white/20">
                <div className="text-4xl font-mono font-bold text-accent mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider font-medium text-white/90">Startups Mentored</div>
              </div>
              <div className="bg-white/10 p-6 rounded-sm border border-white/20">
                <div className="text-4xl font-mono font-bold text-accent mb-2">20+</div>
                <div className="text-sm uppercase tracking-wider font-medium text-white/90">Colleges Visited</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-4">Core Focus Areas</h3>
              {activities.map((act, i) => (
                <div key={i} className="flex items-center gap-3 text-primary-foreground/90">
                  <Award className="w-5 h-5 text-accent" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card text-card-foreground p-8 md:p-12 rounded-sm shadow-xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8 relative z-10">Visiting Faculty & Institutional Roles</h3>
              
              <div className="space-y-8 relative z-10">
                {faculties.map((faculty, i) => (
                  <div key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <p className="font-serif text-lg font-medium text-foreground">{faculty}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
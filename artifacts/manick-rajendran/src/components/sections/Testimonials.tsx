import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Manick's ability to bridge the gap between clinical needs and technology architecture is unparalleled. He doesn't just build systems; he transforms how care is delivered at scale.",
    name: "Representative Colleague",
    title: "Chief Medical Officer",
    org: "Major Hospital Network"
  },
  {
    quote: "Working with him on interoperability standards gave me firsthand insight into his visionary approach. He anticipates the future of healthcare IT years before the market gets there.",
    name: "Representative Peer",
    title: "Director of Digital Health",
    org: "National Standards Body"
  },
  {
    quote: "His mentorship was instrumental in our startup's successful exit. He brings decades of Fortune 500 discipline to agile HealthTech environments.",
    name: "Representative Founder",
    title: "CEO",
    org: "HealthTech Startup"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 bg-secondary text-secondary-foreground overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"
        >
          <Quote className="w-64 h-64" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[250px] flex flex-col justify-center"
            >
              <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-10 text-white">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wider text-accent mb-1">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-white/80 font-medium">
                  {TESTIMONIALS[currentIndex].title}, {TESTIMONIALS[currentIndex].org}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-accent' : 'bg-white/20'}`} 
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
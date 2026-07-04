import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LOCATIONS = [
  {
    id: "india",
    name: "India",
    coordinates: [78.9629, 20.5937] as [number, number],
    highlights: ["StartupTN — Head, Project Management Unit", "TiE Chennai Governing Council — 10,000+ entrepreneurs", "BIS Chairman — Informatics AYUSH", "Hospital CEO — 2,100-bed facility", "National Telecardiology Initiative", "HIMSS India Board Member"],
    tag: "Ecosystem & Systems"
  },
  {
    id: "usa",
    name: "United States",
    coordinates: [-95.7129, 37.0902] as [number, number],
    highlights: ["VP, Deutsche Bank — Retirement Services", "VP, Bankers Trust", "Co-Founder & CEO, MedAZ (EMR startup)", "CEO, Medical Billing Company, NYC", "HITSP Co-Chairman", "CCHIT Interoperability Workgroup"],
    tag: "Finance & Enterprise"
  },
  {
    id: "sweden",
    name: "Sweden",
    coordinates: [18.6435, 60.1282] as [number, number],
    highlights: ["ISO Delegation Head", "Standards meetings — Gothenburg", "Healthcare interoperability frameworks"],
    tag: "Global Standards"
  },
  {
    id: "korea",
    name: "South Korea",
    coordinates: [127.7669, 35.9078] as [number, number],
    highlights: ["ISO Delegation Head", "Standards meetings — Daegu", "Digital health policy discussions"],
    tag: "Global Standards"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    coordinates: [34.8888, -6.3690] as [number, number],
    highlights: ["Telecardiology platform deployment", "Founder — Cardiac Advisory Company", "ECG-to-cardiologist digital transmission", "Rural hospital network support"],
    tag: "Public Health"
  },
  {
    id: "malawi",
    name: "Malawi",
    coordinates: [34.3015, -13.2543] as [number, number],
    highlights: ["Telecardiology platform deployment", "Founder — Cardiac Advisory Company", "Multi-specialty telecardiology services"],
    tag: "Public Health"
  }
];

const CONNECTIONS = [
  { from: [-95.7129, 37.0902], to: [78.9629, 20.5937], color: "hsl(var(--primary))", delay: 0.8, duration: 2 },
  { from: [78.9629, 20.5937], to: [34.8888, -6.3690], color: "hsl(var(--accent))", delay: 1.5, duration: 1.5 },
  { from: [78.9629, 20.5937], to: [34.3015, -13.2543], color: "hsl(var(--accent))", delay: 1.8, duration: 1.5 },
  { from: [-95.7129, 37.0902], to: [18.6435, 60.1282], color: "hsl(var(--secondary))", delay: 2, duration: 1.5 },
  { from: [-95.7129, 37.0902], to: [127.7669, 35.9078], color: "hsl(var(--secondary))", delay: 1.2, duration: 2 },
];

const TAG_COLORS: Record<string, string> = {
  "Ecosystem & Systems": "bg-primary/20 text-primary",
  "Finance & Enterprise": "bg-secondary/20 text-secondary",
  "Global Standards": "bg-accent/20 text-accent",
  "Public Health": "bg-orange-500/20 text-orange-600",
};

export function GlobalImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(LOCATIONS[0]);

  return (
    <section id="impact" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Global Operating Footprint
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">Global Reach &amp; Impact</h2>
          <div className="w-12 h-1 bg-primary mb-5" />
          <p className="text-muted-foreground font-sans max-w-2xl text-lg leading-relaxed">
            Deploying platforms, establishing standards, and driving enterprise, healthcare, and ecosystem transformation across 7 geographies over three decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="lg:col-span-2 relative aspect-[16/9] bg-muted/20 border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Grid dot background */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "20px 20px" }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center p-4 pt-12">
              <ComposableMap
                projection="geoEquirectangular"
                projectionConfig={{
                  scale: 280,
                  center: [10, 25]
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <ZoomableGroup zoom={1} minZoom={0.5} maxZoom={4} center={[0, 0]}>
                  <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="hsl(var(--foreground)/0.05)"
                        stroke="hsl(var(--foreground)/0.15)"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "hsl(var(--foreground)/0.1)" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Connections */}
                {CONNECTIONS.map((conn, idx) => (
                  <Line
                    key={`line-${idx}`}
                    from={conn.from as [number, number]}
                    to={conn.to as [number, number]}
                    stroke={conn.color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    className="opacity-50"
                  />
                ))}

                {/* Markers */}
                {LOCATIONS.map((loc, i) => (
                  <Marker
                    key={loc.id}
                    coordinates={loc.coordinates}
                    onClick={() => setActive(loc)}
                    onMouseEnter={() => setActive(loc)}
                    className="cursor-pointer outline-none"
                  >
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    >
                      {/* Pulse rings */}
                      <circle
                        r={12}
                        fill="none"
                        stroke={active.id === loc.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        strokeWidth={1}
                        className="animate-ping opacity-75"
                        style={{ animationDuration: '3s' }}
                      />
                      <circle
                        r={active.id === loc.id ? 6 : 4}
                        fill={active.id === loc.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        className="transition-all duration-300"
                      />
                      <text
                        textAnchor="middle"
                        y={active.id === loc.id ? -12 : -8}
                        style={{ fontFamily: "system-ui", fill: active.id === loc.id ? "hsl(var(--accent))" : "hsl(var(--foreground))" }}
                        className={`text-[8px] font-bold uppercase tracking-wide transition-colors ${active.id === loc.id ? 'opacity-100' : 'opacity-50'}`}
                      >
                        {loc.name === "United States" ? "USA" : loc.name}
                      </text>
                    </motion.g>
                  </Marker>
                ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-background border border-border p-7 h-full">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${TAG_COLORS[active.tag]}`}>
                  {active.tag}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-5">{active.name}</h3>
              <ul className="space-y-2.5">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Geography selector buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActive(loc)}
                  className={`text-xs font-medium px-3 py-1.5 border transition-all ${active.id === loc.id ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                  data-testid={`country-btn-${loc.id}`}
                >
                  {loc.name === "United States" ? "USA" : loc.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

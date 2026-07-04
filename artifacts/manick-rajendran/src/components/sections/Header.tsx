import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Institutions", href: "#institutions" },
  { label: "Standards", href: "#standards" },
  { label: "Impact", href: "#impact" },
  { label: "Public Service", href: "#public-service" },
  { label: "Advisory", href: "#advisory" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.querySelector(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((n) => n.href);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "h-[60px] bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "h-[80px] bg-background border-b border-transparent"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto h-full px-6 md:px-10 max-w-[1440px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, "#top")}
          className="flex items-center gap-3 group z-50"
          data-testid="link-logo"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-sm group-hover:bg-secondary transition-colors duration-200 shadow-sm">
            <span className="font-serif font-bold text-lg tracking-wider">MR</span>
          </div>
          <span className="font-sans font-bold text-lg md:text-xl text-foreground tracking-tight hidden sm:block">
            Manick Rajendran
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="relative text-sm font-medium transition-colors duration-200 py-1"
                style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <Button
            onClick={(e) => scrollTo(e as any, "#contact")}
            className="ml-2 rounded-full px-6 h-9 text-sm font-medium bg-primary hover:bg-secondary transition-colors duration-200 shadow-sm"
            data-testid="btn-nav-contact"
          >
            Executive Inquiry
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-50 text-foreground p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="btn-mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-24 px-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    onClick={(e) => scrollTo(e as any, "#contact")}
                    className="w-full rounded-full bg-primary h-14 text-lg"
                  >
                    Executive Inquiry
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

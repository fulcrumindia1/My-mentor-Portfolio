export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Col 1 */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded mb-6">
              <span className="font-serif font-bold text-xl tracking-wider">MR</span>
            </div>
            <p className="text-white/80 font-serif italic text-lg mb-4">
              "Building institutions that outlast individuals."
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Three decades across enterprise transformation, healthcare systems, public governance, and global standards leadership.
            </p>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Journey', href: '#experience' },
                { label: 'Institutions', href: '#institutions' },
                { label: 'Standards', href: '#standards' },
                { label: 'Impact', href: '#impact' },
                { label: 'Public Service', href: '#public-service' },
                { label: 'Advisory', href: '#advisory' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Affiliations</h4>
            <ul className="space-y-3 text-muted-foreground text-sm mb-8">
              <li>IIM Bangalore Alumni (MBA 1986)</li>
              <li>BIS Chairman — Informatics AYUSH</li>
              <li>TiE Chennai — Governing Council</li>
              <li>StartupTN — PMU Head</li>
              <li>HIMSS India Board Member</li>
              <li>ISO Delegation Head</li>
            </ul>
            <a href="mailto:manick@gmail.com" className="text-white hover:text-primary transition-colors font-medium border-b border-primary/50 pb-1 text-sm">
              manick@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Manick Rajendran. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Professional Disclaimer</a>
            <button onClick={scrollToTop} className="text-white hover:text-primary transition-colors uppercase tracking-wider font-bold">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

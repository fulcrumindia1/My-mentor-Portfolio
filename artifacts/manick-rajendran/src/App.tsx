import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ExecutiveValue } from "@/components/sections/ExecutiveValue";
import { CurrentRoles } from "@/components/sections/CurrentRoles";
import { About } from "@/components/sections/About";
import { ExecutivePhilosophy } from "@/components/sections/ExecutivePhilosophy";
import { InstitutionalLeadership } from "@/components/sections/InstitutionalLeadership";
import { Standards } from "@/components/sections/Standards";
import { Timeline } from "@/components/sections/Timeline";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { Achievements } from "@/components/sections/Achievements";
import { PublicService } from "@/components/sections/PublicService";
import { Expertise } from "@/components/sections/Expertise";
import { Advisory } from "@/components/sections/Advisory";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <ExecutiveValue />
        <CurrentRoles />
        <About />
        <ExecutivePhilosophy />
        <InstitutionalLeadership />
        <Standards />
        <Timeline />
        <GlobalImpact />
        <Achievements />
        <PublicService />
        <Expertise />
        <Advisory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

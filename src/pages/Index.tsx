import HeroSection from "@/components/HeroSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import ProofSection from "@/components/ProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ExperienceSection />
      <ProofSection />
      <section style={{ backgroundColor: "#F7F4EE", padding: "4rem 0", textAlign: "center" }}>
        <div className="section-container">
          <a href="/portfolio" style={{ backgroundColor: "#2B5EA7", color: "white", padding: "1rem 2rem", borderRadius: "0.5rem", fontFamily: "Inter, sans-serif", textDecoration: "none", fontSize: "0.875rem", display: "inline-block" }}>View Case Studies</a>
        </div>
      </section>
      <HowIThinkSection />
      <AIWorkflowSection />
      <CTASection />
      <footer className="py-8 text-center text-muted-foreground text-xs mono-text border-t border-border">
        {new Date().getFullYear()} Lena Kail.
      </footer>
    </main>
  );
};

export default Index;

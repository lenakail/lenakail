import HeroSection from "@/components/HeroSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import ProofSection from "@/components/ProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <ExperienceSection />
    <ProofSection />

    {/* Portfolio CTA */}
    <section className="py-16" style={{ backgroundColor: "#F7F4EE" }}>
      <div className="section-container text-center">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          Work
        </p>
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Selected{" "}
          <em style={{ color: "#2B5EA7", fontStyle: "italic" }}>case studies</em>
        </h2>
        <p
          className="text-sm mb-8 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          Real projects, real outcomes, public proof.
        </p>
        
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2B5EA7", fontFamily: "Inter, sans-serif" }}
        >
          View Case Studies →
        </a>
      </div>
    </section>

    <HowIThinkSection />
    <AIWorkflowSection />
    <CTASection />
    <footer className="py-8 text-center text-muted-foreground text-xs mono-text border-t border-border">
      © {new Date().getFullYear()} Lena Kail.
    </footer>
  </main>
);

export default Index;

import HeroSection from "@/components/HeroSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import ProofSection from "@/components/ProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import CTASection from "@/components/CTASection";
const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <HowIThinkSection />
    <ProofSection />
    <ExperienceSection />
    <AIWorkflowSection />
    <CTASection />
    <footer className="py-8 text-center text-muted-foreground text-xs mono-text border-t border-border">
      © {new Date().getFullYear()} Lena Kail.
    </footer>
  </main>
);

export default Index;

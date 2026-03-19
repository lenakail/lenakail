import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import ProofSection from "@/components/ProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import WorkStyleSection from "@/components/WorkStyleSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <main className="overflow-x-hidden pt-14">
    <Header />
    <HeroSection />
    <HowIThinkSection />
    <ProofSection />
    <ExperienceSection />
    <AIWorkflowSection />
    <WorkStyleSection />
    <CTASection />
    <footer className="py-8 text-center text-muted-foreground text-xs mono-text border-t border-border">
      © {new Date().getFullYear()} Lena Kail. Built with Lovable.
    </footer>
  </main>
);

export default Index;

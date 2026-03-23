import { motion } from "framer-motion";
import { Cpu, PenLine, Zap, BarChart3, GitBranch } from "lucide-react";

const items = [
  { icon: PenLine, text: "AI-powered landing pages & narratives" },
  { icon: Cpu, text: "From idea to execution with LLMs" },
  { icon: GitBranch, text: "Repo-based customization & deployment" },
  { icon: Zap, text: "No-code / low-code prototyping" },
  { icon: BarChart3, text: "AI-driven research & insights" },
];

const AIWorkflowSection = () => (
  <section className="py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
        >
          AI-Native <em style={{ color: '#2B5EA7', fontStyle: 'italic' }}>Workflow</em>
        </h2>
        <p
          clas

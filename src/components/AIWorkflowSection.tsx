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
  <section className="py-8 md:py-10">
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
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 400 }}
        >
          AI-Native <em style={{ color: "#2B5EA7", fontStyle: "italic" }}>Workflow</em>
        </h2>
        <p
          className="text-sm leading-relaxed max-w-xl"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          I use AI tools to accelerate the full product marketing cycle — from
          research and positioning to asset creation and iteration.
        </p>
      </motion.div>

      <div className="space-y-3 max-w-2xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-4 card-glass rounded-xl"
            style={{ padding: "14px 20px" }}
          >
            <item.icon
              size={18}
              className="shrink-0"
              style={{ color: "#2B5EA7" }}
            />
            <span
              className="text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "#1a1a1a" }}
            >
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AIWorkflowSection;

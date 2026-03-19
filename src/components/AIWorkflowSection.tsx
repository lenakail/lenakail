import { motion } from "framer-motion";
import { Cpu, PenLine, Zap, BarChart3 } from "lucide-react";

const items = [
  { icon: PenLine, text: "Landing pages and narratives with Lovable" },
  { icon: Cpu, text: "Messaging iteration with LLMs" },
  { icon: Zap, text: "Rapid GTM asset prototyping" },
  { icon: BarChart3, text: "Market research and trend synthesis" },
];

const AIWorkflowSection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="section-title">
          AI-Native <span className="gradient-text">Workflow</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I use AI tools to accelerate the full product marketing cycle — from
          research and positioning to asset creation and iteration.
        </p>
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 card-glass rounded-lg"
            >
              <item.icon className="text-primary shrink-0" size={20} />
              <span className="text-foreground text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AIWorkflowSection;

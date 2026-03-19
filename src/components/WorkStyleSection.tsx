import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const points = [
  "Cross-functional bridge between product, engineering, and marketing",
  "Strong ownership without formal authority",
  "Fast, iterative execution",
  "Comfortable in ambiguity and early-stage environments",
];

const WorkStyleSection = () => (
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
          How I <span className="gradient-text">Work</span>
        </h2>
        <div className="space-y-4 mt-10">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <ArrowRight className="text-primary shrink-0" size={16} />
              <span className="text-muted-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkStyleSection;

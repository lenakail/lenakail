import { motion } from "framer-motion";

const metrics = [
  { value: "13.8M", label: "organic reach", desc: "earned media strategy (no paid ads)" },
  { value: "5x", label: "community growth", desc: "from 3K to 15K in 4 months" },
  { value: "4x", label: "token holders growth", desc: "through product & marketing alignment" },
  { value: "+20%", label: "sales", desc: "tokenized product launch" },
];

const ProofSection = () => (
  <section className="py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Proof of <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {metrics.map((m, i) => (
          <motion.div
            key={m.value}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-glass hover-lift p-8 text-center"
          >
            <div className="metric-value mb-2">{m.value}</div>
            <div className="text-foreground font-semibold text-sm mb-1">{m.label}</div>
            <div className="text-muted-foreground text-xs">{m.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;

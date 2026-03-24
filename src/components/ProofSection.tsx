import { motion } from "framer-motion";

const metrics = [
  { value: "13.8M", label: "organic reach via PR-strategy" },
  { value: "5x", label: "community growth from 2K to 10K in 4 months" },
  { value: "4x", label: "token holders growth through product & marketing alignment" },
  { value: "+20%", label: "sales via tokenized product launch" },
];

const ProofSection = () => (
  <section className="py-8 md:py-10">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          Results
        </p>
        <h2
          className="text-3xl md:text-4xl"
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 400 }}
        >
          Proof of <em style={{ color: "#2B5EA7", fontStyle: "italic" }}>work</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-glass p-8"
          >
            <div
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 400, color: "#2B5EA7" }}
            >
              {m.value}
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#6b6357" }}
            >
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;

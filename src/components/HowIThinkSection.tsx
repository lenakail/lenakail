import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Deep dive into product",
    desc: "Work closely with product & engineering to understand the technology and real value",
  },
  {
    num: "02",
    title: "Positioning & messaging",
    desc: "Translate complexity into clear, customer-focused narratives",
  },
  {
    num: "03",
    title: "Offer packaging",
    desc: "Turn features into structured offers — use cases, pain points, benefits",
  },
  {
    num: "04",
    title: "GTM execution",
    desc: "Launch campaigns, coordinate teams, and drive market traction",
  },
];

const HowIThinkSection = () => (
  <section className="py-12 md:py-16">
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
          style={{ fontFamily: 'Inter, sans-serif', color: '#7a7060' }}
        >
          Process
        </p>
        <h2
          className="text-3xl md:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
        >
          How I turn products into{" "}
          <em style={{ color: '#2B5EA7', fontStyle: 'italic' }}>market-ready offers</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p
              className="text-sm font-medium mb-3"
              style={{ fontFamily: 'Inter, sans-serif', color: '#2B5EA7' }}
            >
              {s.num}
            </p>
            <h3
              className="text-base font-medium mb-2"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}
            >
              {s.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#7a7060' }}
            >
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIThinkSection;

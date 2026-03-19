import { motion } from "framer-motion";
import { Search, MessageSquare, Package, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Deep Dive into Product",
    desc: "Work closely with product & engineering to understand the technology and real value",
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "Positioning & Messaging",
    desc: "Translate complexity into clear, customer-focused narratives",
  },
  {
    icon: Package,
    num: "03",
    title: "Offer Packaging",
    desc: "Turn features into structured offers (use cases, pain points, benefits)",
  },
  {
    icon: Rocket,
    num: "04",
    title: "GTM Execution",
    desc: "Launch campaigns, coordinate teams, and drive market traction",
  },
];

const HowIThinkSection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          How I Turn Products into{" "}
          <span className="gradient-text">Market-Ready Offers</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <span className="mono-text text-primary/30 text-6xl font-bold absolute -top-4 -left-1">
              {s.num}
            </span>
            <div className="pt-12">
              <s.icon className="text-primary mb-4" size={22} />
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIThinkSection;

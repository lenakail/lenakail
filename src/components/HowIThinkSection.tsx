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
          style={{ fontFa

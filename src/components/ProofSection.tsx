import { motion } from "framer-motion";

const metrics = [
  { value: "13.8M", label: "organic reach via social media strategy" },
  { value: "5x", label: "community growth from 2K to 10K in 4 months" },
  { value: "4x", label: "token holders growth through product & marketing alignment" },
  { value: "+20%", label: "sales via tokenized product launch" },
];

const ProofSection = () => (
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
          style={{ fontFamily: 'Inter, sans-serif', color: '#7a706

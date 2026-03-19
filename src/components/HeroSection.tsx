import { motion } from "framer-motion";
import { Globe, Users, Sparkles, Target, Send } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Web3 & Fintech Expertise",
    desc: "6+ years building and scaling blockchain and fintech products",
  },
  {
    icon: Users,
    title: "B2B & Ecosystem Growth",
    desc: "Experience with conferences and high-profile partnerships",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Execution",
    desc: "Using AI tools (incl. Lovable) to rapidly create and iterate marketing assets",
  },
  {
    icon: Target,
    title: "Go-to-Market & Positioning",
    desc: "Turning product complexity into clear offers and messaging",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center py-12 md:py-16">
    <div className="section-container w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Lena Kail
        </p>
        <p className="mono-text text-primary text-sm mb-6 tracking-wider uppercase">
          Product Marketing Manager
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
          I turn complex Web3 products into clear, compelling offers{" "}
          <span className="gradient-text">that people actually buy</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Product Marketing Manager with 6+ years in Web3 & fintech. Bridging
          product, engineering, and market — from positioning to GTM execution.
        </p>
        <a
          href="https://t.me/awesomelena"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
        >
          <Send size={18} />
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="card-glass hover-lift p-6"
          >
            <f.icon className="text-primary mb-4" size={24} />
            <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

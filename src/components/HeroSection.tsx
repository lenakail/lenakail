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
    desc: "Turning product complexity into clear offers and messages",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
  className="text-5xl md:text-6xl mb-3"
  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, color: '#1a1a1a' }}
>
  Lena Kail
</h1>
<p
  className="text-2xl md:text-3xl mb-6 leading-snug"
  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, color: '#1a1a1a' }}
>
  From complex products to{" "}
  <em style={{ color: '#2B5EA7', fontStyle: 'italic' }}>clear, compelling offers</em>
</p>
          <p className="text-base max-w-lg mb-10 leading-relaxed" style={{ color: '#6b6357' }}>
            Product Marketing Manager with 6+ years of experience in Web3 & fintech. Bridging
            product, engineering, and market — from positioning to GTM execution.
          </p>
          
            <a href="https://t.me/awesomelena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded font-medium text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E8631A' }}
          >
            <Send size={16} />
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="/hero-illustration.png"
            alt="Lena Kail illustration"
            className="w-full max-w-sm"
          />
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="card-glass hover-lift p-6"
          >
            <f.icon size={20} className="mb-4" style={{ color: '#2B5EA7' }} />
            <h3 className="font-medium text-sm mb-2" style={{ color: '#1a1a1a', fontFamily: 'Inter, sans-serif' }}>
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#7a7060' }}>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default HeroSection;

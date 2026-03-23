import { motion } from "framer-motion";
import { Linkedin, Send } from "lucide-react";

const CTASection = () => (
  <section className="py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass p-12 md:p-16 rounded-2xl text-center max-w-3xl mx-auto"
        style={{ boxShadow: "0 0 60px -15px hsl(173 80% 50% / 0.15)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something <span style={{ color: "#E8631A", fontStyle: "italic" }}>Great</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          If you're building complex products and need someone to turn them into
          clear, market-ready offers — let's talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/lena-kail-b25251198/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://t.me/awesomelena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Send size={18} />
            Telegram
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

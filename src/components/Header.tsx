import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
  >
    <div className="section-container flex items-center h-14">
      <span className="font-semibold text-foreground tracking-tight">
        Lena Kail
      </span>
      <span className="hidden sm:inline ml-3 text-muted-foreground text-xs mono-text">
        Product Marketing Manager · Web3
      </span>
    </div>
  </motion.header>
);

export default Header;

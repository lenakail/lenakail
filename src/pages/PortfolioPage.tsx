import { motion } from "framer-motion";
import { ExternalLink, Youtube, Linkedin, Send, ChevronDown, Layers, Trophy, Palette } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cases = [
  {
    id: "airdao",
    emoji: "layers",
    label: "Case Study 01",
    company: "AirDAO",
    period: "2022 — 2025",
    tag: "Layer-1 Blockchain · Web3",
    title: "Building Product Marketing from Scratch for a Community-Governed Blockchain",
    challenge:
      "AirDAO had a product and a vision — but no marketing function, no positioning, and a community of 3K. The task was to build everything from zero: strategy, team, messaging, and GTM.",
    what: [
      "Defined positioning, messaging framework, and GTM playbook for a developer-focused L1 blockchain",
      "Acted as bridge between product, engineering, and marketing — translated technical updates into user-facing campaigns",
      "Managed content and campaign release calendar aligned with product milestones",
      "Owned website revamp as acting PM — improved developer-facing messaging and UX",
      "Led marketing execution for Token2049, ETHGlobal Hackathons (SF & Singapore), and Binance Blockchain Week",
      "Secured integrations and partnerships (SafePal, ETHGlobal) and drove tier-1 media coverage across The Block, CoinTelegraph, BeInCrypto, and CoinGecko",
    ],
    results: [
      { value: "5x", label: "community growth in 4 months (3K → 15K)" },
      { value: "4x", label: "token holders growth (10K → 40K)" },
      { value: "14K→90K", label: "Twitter / X audience" },
      { value: "x5", label: "site traffic via tier-1 media & KOL campaigns (2K → 10K monthly visitors)" },
    ],
    links: [
      { label: "The Block — Cross-chain Bridge Launch", url: "https://www.theblock.co/post/182643/airdao-launches-ethereum-cross-chain-bridge-for-its-layer-1-network" },
      { label: "CoinGecko — Tokenomics Update", url: "https://www.coingecko.com/learn/pivotal-airdao-tokenomics-update" },
      { label: "BeInCrypto — SafePal Integration", url: "https://beincrypto.com/airdao-collaborates-with-safepal-launches-kosmos-and-joins-ethglobal-hackathons/" },
      { label: "CoinTelegraph — DAO Governance", url: "https://cointelegraph.com/sponsored/whales-sybil-attacks-and-low-trust-can-daos-avoid-centralization-pitfalls" },
      { label: "ETHGlobal SF — AirDAO Prize Track", url: "https://ethglobal.com/events/sanfrancisco2024/prizes/airdao" },
      { label: "Binance Square — ETHGlobal Sponsorship", url: "https://www.binance.com/en/square/post/2024-08-29-airdao-becomes-major-sponsor-of-ethglobal-hackathon-in-singapore-12806977067529" },
      { label: "Conference Presentation", url: "https://www.youtube.com/watch?v=rYx4KljevhM", type: "youtube" },
    ],
  },
  {
    id: "fbs",
    emoji: "trophy",
    label: "Case Study 02",
    company: "FBS Trading Broker",
    period: "2019 — 2021",
    tag: "Global Fintech · Regulated Markets",
    title: "FC Barcelona Partnership & Global PR Strategy for a Regulated Fintech Brand",
    challenge:
      "FBS needed to grow brand trust and visibility across SEA, MENA, and LatAm — highly competitive, regulated markets. The flagship initiative was a high-profile global partnership with FC Barcelona.",
    whatSections: [
      {
        title: "FC Barcelona Partnership",
        items: [
          "Led partnership negotiations and full communications rollout across multiple regions — from signing to global activation",
          "Acting as PM of the partnership across 4 global product lines, orchestrating all deliverables to meet contractual obligations: website and app updates, promo launches, contests, stadium LED creatives, and announcements — all on time and fully compliant with Barcelona's strict brand guidelines",
          "Conceptualized and produced joint contests with FC Barcelona, including a live-streamed global prize draw with custom lottery equipment for FBS's 12-year anniversary campaign",
        ]
      },
      {
        title: "Global PR Strategy",
        items: [
          "Developed and executed PR strategy across SEA, MENA, LatAm, and Europe during COVID-19; contributed to user base growth from 16M to 20M (2020–2021) through integrated PR and brand efforts",
          "Organized FBS presence at industry exhibitions across MENA",
          "Supported influencer briefs and messaging quality for regional campaigns, including top-performing collaborations reaching 7.6M views (Vietnam) and 3.2M views (India)",
          "Managed brand reputation across Trustpilot, App Store, Google Play; led crisis communications for data/security incidents",
          "Organized 15 charity events across LatAm, MENA, and SEA",
        ]
      }
    ],
    what: [],
    results: [
      { value: "Up to 15%", label: "Brand Lift across key markets via FC Barcelona partnership (based on brand surveys)" },
      { value: "200+", label: "earned media mentions driven by Barcelona collaboration" },
      { value: "15", label: "charity events organized across LatAm, MENA, and SEA" },
      { value: "5", label: "Best Forex Broker awards in 2020" },
    ],
    links: [
      { label: "FC Barcelona — Partnership Announcement", url: "https://www.fcbarcelona.com/en/news/1573644/fc-barcelona-and-fbs-sign-new-global-partnership-agreement" },
      { label: "FC Barcelona — Joint Contest", url: "https://www.fcbarcelona.com/en/news/2181352/new-joint-contest-with-fbs-to-win-signed-barca-jersey" },
      { label: "Finance Magnates — FBS Copy Challenge", url: "https://www.financemagnates.com/thought-leadership/fbs-copy-challenge-a-social-trading-contest-for-tickets-to-fc-barcelona/" },
      { label: "Vietnam Campaign — 7.6M views", url: "https://www.youtube.com/watch?v=wI2sORI_Uug", type: "youtube" },
      { label: "India Campaign — 3.2M views", url: "https://www.youtube.com/watch?v=9tRYgYOL3F4", type: "youtube" },
      { label: "Anniversary Draw Stream", url: "https://www.youtube.com/watch?v=YBKNaQckXi4", type: "youtube" },
      { label: "Charity Events Report", url: "https://www.youtube.com/watch?v=qjC3GOf4e10", type: "youtube" },
      { label: "Best Broker SEA Award", url: "https://fbs.com/en/news/fbs-named-the-best-trading-broker-in-south-east-asia-1888" },
    ],
  },
  {
    id: "10101",
    emoji: "palette",
    label: "Case Study 03",
    company: "10101.art",
    period: "2025 — 2026",
    tag: "Tokenized Fine Art · Web3",
    title: "GTM & Brand Strategy for a Tokenized Art Platform",
    challenge:
      "10101.art needed to build brand credibility and market presence at the intersection of fine art, Web3, and mainstream audiences — without a paid media budget.",
    what: [
      "Built brand platform, positioning framework, and Tone of Voice from scratch for both 10101.art and 10101.cult",
      "Led GTM for tokenized artwork launches — including 'Dora Maar' by Pablo Picasso in partnership with BNB Smart Chain",
      "Translated complex Web3 mechanics (tokenization, blockchain ownership) into clear narratives for crypto-native and mainstream audiences",
      "Developed earned media strategy through cultural partnerships — zero paid spend",
      "Conceptualized and launched Art Talks format at Dubai Mall as part of brand positioning strategy",
      "Secured placements in Visit Dubai, Platinumlist, Buro 24/7, WhatsOn, BTCC, MEXC and other regional and crypto media",
    ],
    results: [
      { value: "13.8M", label: "media reach — zero paid spend" },
      { value: "13", label: "organic media placements" },
      { value: "+20%", label: "sales uplift from Picasso launch via BNB Chain audience activation" },
      { value: "500K+", label: "social reach from Art Talks Dubai" },
    ],
    links: [
      { label: "Visit Dubai — Exhibition Listing", url: "https://www.visitdubai.com/en/festivals-and-events/dubai-events-calendar/unseen-masterpieces" },
      { label: "Platinumlist — Unseen Masterpieces", url: "https://platinumlist.net/guide/7-unseen-artworks-by-picasso-dali-warhol-banksy-are-free-to-see-in-dubai-mall-this-october/" },
      { label: "Buro 24/7 — Weekend Playbook", url: "https://buro247.me/lifestyle/buros-weekend-playbook-5-exciting-things-to-do-in-dubai-this-weekend-85/" },
      { label: "WhatsOn — Picasso to Banksy", url: "https://whatson.ae/2025/10/picasso-to-banksy-visit-these-unseen-masterpieces-in-dubai-mall-this-month/" },
      { label: "MEXC — Luxury Meets Legacy", url: "https://www.mexc.co/en-IN/news/10101-art-when-luxury-meets-legacy-how-web3-brings-masterpieces-back-to-the-people/138897" },
      { label: "BTCC — Coverage", url: "https://www.btcc.com/en-US/square/Global%20Cryptocurrency/1096308" },
    ],
  },
];

const LinkIcon = ({ type }: { type?: string }) => {
  if (type === "youtube") return <Youtube size={13} style={{ color: "#E8631A" }} />;
  return <ExternalLink size={13} style={{ color: "#2B5EA7" }} />;
};

const ResultCard = ({ value, label }: { value: string; label: string }) => (
  <div
    className="p-8 rounded-xl flex flex-col"
    style={{
      background: "#ffffff",
      border: "1px solid #ddd8cf",
      height: "100%",
    }}
  >
    <div
      className="text-4xl md:text-5xl mb-3"
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 400,
        color: "#2B5EA7",
      }}
    >
      {value}
    </div>
    <p
      className="text-sm leading-relaxed"
      style={{ fontFamily: "Inter, sans-serif", color: "#6b6357" }}
    >
      {label}
    </p>
  </div>
);


const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  trophy: Trophy,
  palette: Palette,
};

const CaseIcon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} style={{ color: "#2B5EA7" }} />;
};

const PortfolioPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <main className="min-h-screen py-20" style={{ backgroundColor: "#F7F4EE" }}>

      {/* Sticky header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(247, 244, 238, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "0.5px solid #ddd8cf" : "none",
          padding: scrolled ? "12px 0" : "0",
          pointerEvents: scrolled ? "auto" : "none",
          opacity: scrolled ? 1 : 0,
        }}
      >
        <div className="section-container flex items-center justify-between">
          <a
            href="/"
            className="text-sm hover:opacity-60 transition-opacity"
            style={{ fontFamily: "Inter, sans-serif", color: "#2B5EA7" }}
          >
            ← Lena Kail
          </a>
          <div className="flex items-center gap-6">
            {cases.map((c) => (
              <a
                key={c.id}
                href={"#" + c.id}
                className="text-xs hover:opacity-60 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
              >
                <CaseIcon name={c.emoji} size={12} /> {c.company}
              </a>
            ))}
          </div>
        </div>
      </div>

    <div className="section-container">

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Inter, sans-serif", color: "#2B5EA7" }}
        >
          ← Back to main
        </a>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          Work
        </p>
        <h1
          className="text-4xl md:text-5xl mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          Selected{" "}
          <em style={{ color: "#2B5EA7", fontStyle: "italic" }}>case studies</em>
        </h1>
        <p
          className="text-base max-w-xl leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
        >
          A selection of projects across Web3, fintech, and global brand marketing — with real outcomes and public proof.
        </p>
      </motion.div>

      {/* Case navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-2 mb-16 flex-wrap"
      >
        {cases.map((c) => (
          <a
            key={c.id}
            href={"#" + c.id}
            className="inline-flex items-center gap-2 rounded-full text-xs transition-opacity hover:opacity-70"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#4a4035",
              background: "#ffffff",
              border: "1px solid #ddd8cf",
              padding: "6px 14px",
            }}
          >
            <CaseIcon name={c.emoji} size={13} />
            <span>{c.company}</span>
          </a>
        ))}
      </motion.div>

      {/* Cases */}
      <div className="space-y-28">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            id={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Case meta */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-5">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
              >
                {c.label}
              </span>
              <span style={{ color: "#ddd8cf" }}>·</span>
              <span
                className="text-xs"
                style={{ fontFamily: "Inter, sans-serif", color: "#2B5EA7" }}
              >
                {c.tag}
              </span>
              <span style={{ color: "#ddd8cf" }}>·</span>
              <span
                className="text-xs"
                style={{ fontFamily: "Inter, sans-serif", color: "#9a9080" }}
              >
                {c.period}
              </span>
            </div>

            <div className="flex items-start gap-3 mb-4" style={{ maxWidth: "700px" }}>
              <div className="mt-1 p-2 rounded-lg" style={{ background: "rgba(43, 94, 167, 0.08)" }}>
                <CaseIcon name={c.emoji} size={22} />
              </div>
              <h2
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  color: "#1a1a1a",
                }}
              >
                {c.title}
              </h2>
            </div>

            <p
              className="text-sm leading-relaxed mb-12"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#7a7060",
                maxWidth: "620px",
              }}
            >
              {c.challenge}
            </p>

            {/* Results */}
            <div className="mb-12">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
              >
                Results
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ alignItems: "stretch" }}>
                {c.results.map((r, j) => (
                  <motion.div
                    key={j}
                    style={{ height: "100%" }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.08 }}
                  >
                    <ResultCard value={r.value} label={r.label} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What I did — accordion */}
            <div className="mb-12 max-w-2xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="what" style={{ borderBottom: "0.5px solid #ddd8cf", borderTop: "0.5px solid #ddd8cf" }}>
                  <AccordionTrigger className="hover:no-underline py-5" style={{ textDecoration: "none" }}>
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
                    >
                      What I did
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    {c.whatSections ? (
                      <div className="space-y-6">
                        {c.whatSections.map((section, si) => (
                          <div key={si}>
                            <p
                              className="text-xs font-medium mb-3"
                              style={{ fontFamily: "Inter, sans-serif", color: "#2B5EA7", letterSpacing: "0.03em" }}
                            >
                              {section.title}
                            </p>
                            <ul className="space-y-2">
                              {section.items.map((w, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <span
                                    className="shrink-0"
                                    style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "#2B5EA7", display: "inline-block" }}
                                  />
                                  <span className="text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4a4035" }}>
                                    {w}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {c.what.map((w, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span
                              className="shrink-0"
                              style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "#2B5EA7", display: "inline-block" }}
                            />
                            <span className="text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4a4035" }}>
                              {w}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Public proof links */}
            {c.links.length > 0 && (
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
                >
                  Public proof
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 card-glass rounded-lg hover-lift"
                      style={{ padding: "5px 10px" }}
                    >
                      <LinkIcon type={link.type} />
                      <span
                        className="text-xs"
                        style={{ fontFamily: "Inter, sans-serif", color: "#1a1a1a" }}
                      >
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            {i < cases.length - 1 && (
              <div
                className="mt-28"
                style={{ borderBottom: "0.5px solid #ddd8cf" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-24"
      >
        <div
          className="p-12 md:p-16 rounded-2xl text-center"
          style={{ background: "#ffffff", border: "1px solid #ddd8cf" }}
        >
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, color: "#1a1a1a" }}
          >
            Get in{" "}
            <em style={{ color: "#E8631A", fontStyle: "italic" }}>touch</em>
          </h2>
          <p
            className="text-sm mb-10 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
          >
            Ready to bring this experience to your product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/lena-kail-b25251198/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2B5EA7", fontFamily: "Inter, sans-serif" }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://t.me/awesomelena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E8631A", fontFamily: "Inter, sans-serif" }}
            >
              <Send size={16} />
              Telegram
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </main>

  );
};

export default PortfolioPage;

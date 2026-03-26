import { motion } from "framer-motion";
import { ExternalLink, Youtube } from "lucide-react";

const cases = [
  {
    id: "airdao",
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
      "Secured integrations and partnerships (SafePal, ETHGlobal) and drove ecosystem media coverage",
    ],
    results: [
      { value: "5x", label: "community growth in 4 months (3K → 15K)" },
      { value: "4x", label: "token holders growth (10K → 40K)" },
      { value: "14K→90K", label: "Twitter / X audience" },
      { value: "Top Tier", label: "coverage: The Block, CoinTelegraph, BeInCrypto, CoinGecko" },
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
    label: "Case Study 02",
    company: "FBS Trading Broker",
    period: "2019 — 2021",
    tag: "Global Fintech · Regulated Markets",
    title: "FC Barcelona Partnership & Global PR Strategy for a Regulated Fintech Brand",
    challenge:
      "FBS needed to grow brand trust and visibility across SEA, MENA, and LatAm — highly competitive, regulated markets. The flagship initiative was a high-profile global partnership with FC Barcelona.",
    what: [
      "Led negotiations and full activation of the FC Barcelona global partnership — from signing to communications rollout across multiple regions",
      "Developed and executed global PR strategy covering SEA, MENA, LatAm, and Europe",
      "Conceptualized and produced joint contests with FC Barcelona to drive engagement and brand awareness",
      "Organized a live-streamed global prize draw with custom lottery equipment — 12-year anniversary campaign",
      "Collaborated with regional influencers on co-created campaigns: 7.6M views (Vietnam), 3.2M views (India)",
      "Managed brand reputation across Trustpilot, App Store, Google Play; led crisis communications for data/security incidents",
    ],
    results: [
      { value: "7.6M", label: "views — influencer campaign, Vietnam" },
      { value: "3.2M", label: "views — influencer campaign, India" },
      { value: "Global", label: "FC Barcelona partnership across SEA, MENA, LatAm, Europe" },
      { value: "×2", label: "Best Broker awards — SEA & Thailand 2021" },
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
    label: "Case Study 03",
    company: "10101.art",
    period: "2025 — Present",
    tag: "Tokenized Fine Art · Web3",
    title: "GTM & Brand Strategy for a Tokenized Art Platform — From Zero to Pablo Picasso",
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
      { value: "+20%", label: "sales uplift from Picasso launch via single organic publication" },
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
    className="p-8 rounded-xl"
    style={{ background: "#ffffff", border: "1px solid #ddd8cf" }}
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

const PortfolioPage = () => (
  <main className="min-h-screen py-20" style={{ backgroundColor: "#F7F4EE" }}>
    <div className="section-container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
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

      {/* Cases */}
      <div className="space-y-28">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
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

            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                color: "#1a1a1a",
                maxWidth: "700px",
              }}
            >
              {c.title}
            </h2>

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

            {/* Results — full width cards like screenshot */}
            <div className="mb-12">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
              >
                Results
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {c.results.map((r, j) => (
                  <motion.div
                    key={j}
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

            {/* What I did */}
            <div className="mb-12">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "Inter, sans-serif", color: "#7a7060" }}
              >
                What I did
              </p>
              <ul className="space-y-3 max-w-2xl">
                {c.what.map((w, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="shrink-0"
                      style={{
                        marginTop: "8px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#2B5EA7",
                        display: "inline-block",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", color: "#4a4035" }}
                    >
                      {w}
                    </span>
                  </li>
                ))}
              </ul>
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
                      style={{ padding: "7px 13px" }}
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

      {/* Footer nav */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 flex items-center justify-between"
      >
        <a
          href="/"
          className="text-sm hover:opacity-60 transition-opacity"
          style={{ fontFamily: "Inter, sans-serif", color: "#2B5EA7" }}
        >
          ← Back to main
        </a>
        <span
          className="text-xs mono-text"
          style={{ color: "#9a9080" }}
        >
          lenakail.com/portfolio
        </span>
      </motion.div>

    </div>
  </main>
);

export default PortfolioPage;

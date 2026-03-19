import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jobs = [
  {
    role: "Brand / PR Manager",
    company: "10101.art",
    dates: "Sep 2025 — Present",
    points: [
      "Translated Web3 product concepts (tokenized art, ownership) into clear positioning and messaging",
      "Built brand platform, positioning, and Tone of Voice",
      "Developed earned media strategy (13.8M reach, no paid ads)",
      "Launched Art Talks format in Dubai (500K+ social reach)",
      "Partnered with ecosystem players (BNB Smart Chain) on product launches",
      "Built strategic partnerships with artists and institutions",
    ],
  },
  {
    role: "Marketing Lead / Brand Owner",
    company: "AirDAO",
    dates: "May 2022 — Feb 2025",
    points: [
      "Built marketing function from scratch (team, processes, strategy)",
      "Translated product updates into user-facing messaging and campaigns",
      "Led go-to-market strategy and execution",
      "Grew community 5x (3K → 15K)",
      "Increased token holders 4x (10K → 40K)",
      "Coordinated cross-functional teams (product, engineering, marketing)",
      "Supported website redesign as acting Product Manager",
      "Led marketing execution for industry events (Token2049, ETHGlobal, Binance Blockchain Week), including GTM assets, merch, and meetups",
    ],
  },
  {
    role: "Head of PR",
    company: "FBS Trading Broker",
    dates: "Oct 2019 — May 2021",
    points: [
      "Developed and executed global PR strategy",
      "Led partnership with FC Barcelona (negotiation → activation → communications)",
      "Managed brand reputation across digital platforms",
      "Led crisis communications and risk management",
      "Worked closely with legal and compliance teams",
    ],
  },
  {
    role: "Senior Marketing Manager",
    company: "Vostock Capital",
    dates: "Sep 2016 — Oct 2019",
    points: [
      "Led marketing and PR for large-scale B2B events",
      "Supported expansion into Latin American markets",
    ],
  },
  {
    role: "PR Manager",
    company: "Rugion Group",
    dates: "Jan 2014 — Aug 2016",
    points: [
      "Developed PR strategies for media and events",
      "Managed partnerships and campaigns",
      "Organized cultural and tech events",
    ],
  },
  {
    role: "Press Attaché",
    company: "PG Paramon",
    dates: "Sep 2010 — Dec 2013",
    points: [
      "Led PR for media and large-scale events",
      "Managed media relations",
    ],
  },
];

const ExperienceSection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A track record of building, positioning, and scaling products across Web3, fintech, and B2B environments
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {jobs.map((job, i) => (
            <AccordionItem
              key={i}
              value={`job-${i}`}
              className="card-glass border-border px-6 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-left">
                  <span className="font-semibold text-foreground">
                    {job.role} — <span className="gradient-text">{job.company}</span>
                  </span>
                  <span className="mono-text text-muted-foreground text-xs">{job.dates}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-2 ml-1">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;

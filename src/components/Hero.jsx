import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE } from "../lib/translations";
import NetworkBackground from "./NetworkBackground";

const Hero = () => {
  const { t } = useLanguage();

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden isolate"
    >
      {/* Background: grid + network + cyan glow */}
      <NetworkBackground />

      {/* Smooth fade to solid black at bottom so next section blends */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,1) 100%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6 md:mb-10"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#22d3ee",
              boxShadow: "0 0 10px rgba(34,211,238,0.8)",
            }}
          />
          <span className="label-eyebrow" style={{ color: "#7dd3fc" }}>
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <h1
          data-testid="hero-title"
          className="font-display-tight text-white text-[44px] sm:text-[64px] md:text-[88px] lg:text-[110px] xl:text-[124px] leading-[0.92]"
          style={{ textWrap: "balance" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {t.hero.title_1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
            style={{
              color: "#22d3ee",
              textShadow: "0 0 60px rgba(34,211,238,0.45)",
            }}
          >
            {t.hero.title_2}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 md:mt-14 text-secondary text-base md:text-lg leading-relaxed max-w-2xl"
          data-testid="hero-subtitle"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            data-testid="hero-cta-primary"
            onClick={() => goTo("contact")}
            className="btn-pill bg-white text-black px-6 py-3.5 text-sm hover:bg-white/90 group"
            style={{ boxShadow: "0 0 40px -5px rgba(34,211,238,0.4)" }}
          >
            {t.hero.cta_primary}
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            data-testid="hero-cta-secondary"
            onClick={() => goTo("pricing")}
            className="btn-pill bg-transparent px-6 py-3.5 text-sm hover:bg-cyan-400/5"
            style={{
              border: "1px solid rgba(34,211,238,0.4)",
              color: "#7dd3fc",
            }}
          >
            {t.hero.cta_secondary}
          </button>
          <a
            data-testid="hero-call-link"
            href={`tel:${PHONE.tel}`}
            className="btn-pill px-4 py-3 text-sm text-secondary hover:text-white"
          >
            <Phone size={14} strokeWidth={1.7} />
            {PHONE.display}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[12px] uppercase tracking-[0.2em] text-tertiary"
        >
          <span className="flex items-center gap-2">
            <span
              className="w-1 h-1 rounded-full"
              style={{
                background: "#22d3ee",
                boxShadow: "0 0 6px rgba(34,211,238,0.9)",
              }}
            />
            {t.hero.meta_1}
          </span>
          <span className="flex items-center gap-2">
            <span
              className="w-1 h-1 rounded-full"
              style={{
                background: "#22d3ee",
                boxShadow: "0 0 6px rgba(34,211,238,0.9)",
              }}
            />
            {t.hero.meta_2}
          </span>
          <span className="flex items-center gap-2">
            <span
              className="w-1 h-1 rounded-full"
              style={{
                background: "#22d3ee",
                boxShadow: "0 0 6px rgba(34,211,238,0.9)",
              }}
            />
            {t.hero.meta_3}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

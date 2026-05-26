import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Sparkles,
  MousePointerClick,
  Smartphone,
  Zap,
  Search,
  Layers,
} from "lucide-react";

const ICONS = [Sparkles, MousePointerClick, Smartphone, Zap, Search, Layers];

const Solution = () => {
  const { t } = useLanguage();

  return (
    <section
      id="solution"
      data-testid="solution-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="dot-divider" />
                <span className="label-eyebrow">{t.solution.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-3xl">
                {t.solution.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-secondary text-base md:text-lg max-w-md leading-relaxed">
              {t.solution.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.solution.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`solution-card-${i}`}
                  className="group relative bg-[#0c0c0c] border border-white/[0.06] rounded-2xl p-7 md:p-8 h-full transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className="w-11 h-11 rounded-xl border flex items-center justify-center mb-6 transition-colors"
                    style={{
                      borderColor: "rgba(34,211,238,0.2)",
                      background: "rgba(34,211,238,0.04)",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} style={{ color: "#22d3ee" }} />
                  </div>
                  <h3 className="font-display text-xl md:text-[22px] font-bold mb-3 tracking-tight">
                    {it.title}
                  </h3>
                  <p className="text-secondary text-sm md:text-[15px] leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;

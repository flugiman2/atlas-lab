import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      data-testid="benefits-section"
      className="relative py-24 md:py-32 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="dot-divider" />
                <span className="label-eyebrow">{t.benefits.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-3xl">
                {t.benefits.title}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {t.benefits.items.map((b, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                data-testid={`benefit-${i}`}
                className="bg-[#080808] p-6 md:p-8 h-full"
              >
                <div className="text-[11px] tracking-[0.22em] text-tertiary uppercase mb-6">
                  {b.k}
                </div>
                <div className="font-display text-xl md:text-2xl font-extrabold mb-2 tracking-tight">
                  {b.t}
                </div>
                <div className="text-secondary text-sm">{b.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

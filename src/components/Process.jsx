import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="dot-divider" />
              <span className="label-eyebrow">{t.process.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
              {t.process.title}
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Horizontal line with cyan glow */}
          <div
            className="hidden md:block absolute top-[34px] left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.5) 50%, rgba(34,211,238,0) 100%)",
            }}
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {t.process.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  data-testid={`process-step-${i}`}
                  className="relative md:pr-6 md:pt-12"
                >
                  <div
                    className="hidden md:block absolute top-7 left-0 w-3 h-3 rounded-full"
                    style={{
                      background: "#22d3ee",
                      boxShadow: "0 0 12px rgba(34,211,238,0.9)",
                    }}
                  />
                  <div className="text-[11px] tracking-[0.22em] text-tertiary uppercase mb-4">
                    Step {s.n}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold mb-3 tracking-tight">
                    {s.t}
                  </h3>
                  <p className="text-secondary text-[15px] leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

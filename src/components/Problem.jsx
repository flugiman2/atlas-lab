import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="dot-divider" />
            <span className="label-eyebrow">{t.problem.eyebrow}</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
                {t.problem.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 space-y-6 md:pt-2">
            <Reveal delay={0.1}>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {t.problem.body_1}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {t.problem.body_2}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {[
            { v: t.problem.stat_1_v, l: t.problem.stat_1_l },
            { v: t.problem.stat_2_v, l: t.problem.stat_2_l },
            { v: t.problem.stat_3_v, l: t.problem.stat_3_l },
          ].map((s, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="bg-[#080808] p-8 md:p-10 h-full">
                <div className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter">
                  {s.v}
                </div>
                <div className="mt-3 text-sm text-secondary max-w-[16ch]">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

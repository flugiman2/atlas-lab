import React from "react";
import Reveal from "./Reveal";
import { Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const PlanCard = ({ plan, highlighted, testId }) => {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      data-testid={testId}
      className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col ${
        highlighted
          ? "bg-[#0e0e0e] glow-border"
          : "bg-[#0a0a0a] border border-white/[0.06]"
      } transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className={`text-[11px] uppercase tracking-[0.22em] ${
            highlighted ? "text-white" : "text-tertiary"
          }`}
        >
          {plan.tag}
        </span>
        {highlighted && (
          <span
            className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium"
            style={{
              background: "#22d3ee",
              color: "#001418",
              boxShadow: "0 0 20px rgba(34,211,238,0.5)",
            }}
          >
            ★ Recomendado
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
        {plan.name}
      </h3>
      <p className="text-secondary text-sm md:text-[15px] mb-8 leading-relaxed">
        {plan.desc}
      </p>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter">
            {plan.price}
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-tertiary mt-2">
          {plan.priceSub}
        </div>
      </div>

      <ul className="space-y-3 mb-10 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={16}
              strokeWidth={1.7}
              className={highlighted ? "mt-0.5" : "text-secondary mt-0.5"}
              style={highlighted ? { color: "#22d3ee" } : undefined}
            />
            <span className="text-[15px] text-secondary">{f}</span>
          </li>
        ))}
      </ul>

      <button
        data-testid={`${testId}-cta`}
        onClick={() => goTo("contact")}
        className={`btn-pill w-full py-3.5 text-sm group ${
          highlighted
            ? "bg-white text-black hover:bg-white/90"
            : "border border-white/15 text-white hover:bg-white/[0.04]"
        }`}
      >
        {plan.cta}
        <ArrowUpRight
          size={16}
          strokeWidth={1.7}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="dot-divider" />
              <span className="label-eyebrow">{t.pricing.eyebrow}</span>
              <span className="dot-divider" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
              {t.pricing.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-secondary text-base md:text-lg leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Reveal>
            <PlanCard
              plan={t.pricing.plan_a}
              highlighted={false}
              testId="plan-basic"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PlanCard
              plan={t.pricing.plan_b}
              highlighted={true}
              testId="plan-recommended"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

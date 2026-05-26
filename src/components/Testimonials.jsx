import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const PORTRAITS = [
  "https://images.unsplash.com/photo-1772987292949-4b1bdc01a612?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTc3NzU3NzUwNHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1585240975908-ed6c1475abc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTc3NzU3NzUwNHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1631253205777-9f792356b1f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTc3NzU3NzUwNHww&ixlib=rb-4.1.0&q=85",
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="dot-divider" />
              <span className="label-eyebrow">{t.testimonials.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
              {t.testimonials.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.testimonials.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure
                data-testid={`testimonial-${i}`}
                className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-7 md:p-8 h-full flex flex-col"
              >
                <blockquote className="font-display text-lg md:text-[19px] leading-snug text-white/90 italic font-light flex-1">
                  “{it.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={PORTRAITS[i % PORTRAITS.length]}
                    alt={it.name}
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm text-white">{it.name}</div>
                    <div className="text-xs text-tertiary">{it.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

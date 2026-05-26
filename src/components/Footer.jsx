import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE } from "../lib/translations";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="main-footer"
      className="relative border-t border-white/[0.06] py-14 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="block w-2 h-2 rounded-full"
                style={{
                  background: "#22d3ee",
                  boxShadow: "0 0 10px rgba(34,211,238,0.9)",
                }}
              />
              <span className="font-display text-[15px] tracking-[0.18em] font-medium uppercase">
                Atlas<span style={{ color: "#22d3ee" }}>Lab</span>
              </span>
            </div>
            <p className="text-secondary text-sm md:text-[15px] max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-4">{t.footer.contact}</div>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${PHONE.email}`}
                className="block text-white/90 hover:text-white"
              >
                {PHONE.email}
              </a>
              <a
                href={`tel:${PHONE.tel}`}
                className="block text-secondary hover:text-white"
              >
                {PHONE.display}
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="label-eyebrow mb-4">España · Remote</div>
            <div className="text-sm text-secondary leading-relaxed">
              {t.footer.tagline}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-tertiary">
          <div>
            © {year} ATLAS LAB. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              {t.footer.legal}
            </a>
            <a href="#" className="hover:text-white">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const navItems = (t) => [
  { id: "solution", label: t.nav.services },
  { id: "pricing", label: t.nav.pricing },
  { id: "process", label: t.nav.process },
  { id: "contact", label: t.nav.contact },
];

const Header = () => {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/[0.06]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          data-testid="logo-btn"
          onClick={() => goTo("hero")}
          className="flex items-center gap-2 group"
        >
          <span
            className="block w-2 h-2 rounded-full group-hover:scale-125 transition-transform"
            style={{
              background: "#22d3ee",
              boxShadow: "0 0 10px rgba(34,211,238,0.9)",
            }}
          />
          <span className="font-display text-[15px] tracking-[0.18em] font-medium uppercase">
            Atlas<span style={{ color: "#22d3ee" }}>Lab</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems(t).map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => goTo(item.id)}
              className="text-[13px] text-secondary hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <div
            className="hidden md:flex items-center text-[12px] tracking-widest text-secondary border rounded-full overflow-hidden"
            style={{ borderColor: "rgba(34,211,238,0.25)" }}
            data-testid="locale-toggle"
          >
            <button
              data-testid="locale-es"
              onClick={() => setLocale("es")}
              className={`px-3 py-1.5 transition-colors ${
                locale === "es" ? "text-black" : "hover:text-white"
              }`}
              style={{
                background: locale === "es" ? "#22d3ee" : "transparent",
              }}
            >
              ES
            </button>
            <button
              data-testid="locale-en"
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 transition-colors ${
                locale === "en" ? "text-black" : "hover:text-white"
              }`}
              style={{
                background: locale === "en" ? "#22d3ee" : "transparent",
              }}
            >
              EN
            </button>
          </div>

          <button
            data-testid="header-cta"
            onClick={() => goTo("contact")}
            className="hidden md:inline-flex btn-pill bg-white text-black px-5 py-2.5 text-[13px] hover:bg-white/90"
          >
            {t.nav.cta}
          </button>

          {/* Mobile toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          className="md:hidden glass border-t border-white/[0.06]"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems(t).map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => goTo(item.id)}
                className="text-left text-base text-secondary hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLocale("es")}
                className={`px-3 py-1 rounded-full border border-white/10 text-xs ${
                  locale === "es" ? "bg-white text-black" : "text-secondary"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1 rounded-full border border-white/10 text-xs ${
                  locale === "en" ? "bg-white text-black" : "text-secondary"
                }`}
              >
                EN
              </button>
            </div>
            <button
              data-testid="mobile-header-cta"
              onClick={() => goTo("contact")}
              className="btn-pill bg-white text-black px-5 py-3 text-sm w-full mt-2"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

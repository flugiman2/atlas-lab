import React, { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Phone, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import Reveal from "./Reveal";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE } from "../lib/translations";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CtaContact = () => {
  const { t, locale } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", suggestion: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.suggestion.trim())
      return;
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, locale });
      toast.success(t.contact.success);
      setForm({ name: "", phone: "", suggestion: "" });
      // Open mailto with prefilled content as a friendly fallback for the user
      const subject = encodeURIComponent(
        `Nuevo lead web — ${form.name}`
      );
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nTeléfono: ${form.phone}\n\n${form.suggestion}`
      );
      window.open(
        `mailto:${PHONE.email}?subject=${subject}&body=${body}`,
        "_blank"
      );
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="orb animate-drift bg-white/[0.06] w-[600px] h-[600px] -top-40 -right-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="dot-divider" />
                <span className="label-eyebrow">{t.contact.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-tight leading-[0.95]">
                {t.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-secondary text-base md:text-lg max-w-lg leading-relaxed">
                {t.contact.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 space-y-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-tertiary">
                  {t.contact.or}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    data-testid="contact-call-link"
                    href={`tel:${PHONE.tel}`}
                    className="btn-pill border border-white/15 px-5 py-3 text-sm hover:bg-white/[0.04]"
                  >
                    <Phone size={14} strokeWidth={1.7} />
                    {PHONE.display}
                  </a>
                  <a
                    data-testid="contact-whatsapp-link"
                    href={`https://wa.me/${PHONE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill border border-white/15 px-5 py-3 text-sm hover:bg-white/[0.04]"
                  >
                    <MessageCircle size={14} strokeWidth={1.7} />
                    WhatsApp
                  </a>
                  <a
                    data-testid="contact-email-link"
                    href={`mailto:${PHONE.email}`}
                    className="btn-pill border border-white/15 px-5 py-3 text-sm hover:bg-white/[0.04]"
                  >
                    <Mail size={14} strokeWidth={1.7} />
                    {PHONE.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-7 md:p-10"
              >
                <div className="space-y-2">
                  <label className="label-eyebrow">{t.contact.name}</label>
                  <input
                    data-testid="contact-name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    required
                    placeholder="—"
                    className="atlas-input"
                  />
                </div>
                <div className="space-y-2 mt-8">
                  <label className="label-eyebrow">{t.contact.phone}</label>
                  <input
                    data-testid="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    type="tel"
                    required
                    placeholder="—"
                    className="atlas-input"
                  />
                </div>
                <div className="space-y-2 mt-8">
                  <label className="label-eyebrow">
                    {t.contact.suggestion}
                  </label>
                  <textarea
                    data-testid="contact-suggestion"
                    name="suggestion"
                    value={form.suggestion}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="—"
                    className="atlas-input resize-none"
                  />
                </div>

                <button
                  data-testid="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="mt-10 btn-pill bg-white text-black w-full py-4 text-sm hover:bg-white/90 disabled:opacity-50 group"
                >
                  {loading ? t.contact.sending : t.contact.submit}
                  {!loading && (
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;

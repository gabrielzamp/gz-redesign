"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/ga";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-16 pb-8">
          <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">
                {t("common.footer.kicker")}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {t("common.footer.ctaTitle")}
              </h3>
              <p className="text-white/70 mt-2 max-w-xl">
                {t("common.footer.ctaSubtitle")}
              </p>
            </div>
            <Link
              href="https://calendly.com/gabriel-growwithzamp/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  action: "book_growth_call_click",
                  category: "cta",
                  label: "footer",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-orange text-white text-sm font-bold hover:bg-orange-600 transition-all shadow-lg group"
            >
              {t("common.bookCall")}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                🧑‍🔬 grow<span className="text-white/60">.with.</span>zamp
              </Link>
              <p className="text-white/70 max-w-sm leading-relaxed mb-6">
                {t("common.footer.desc")}
              </p>
              <div className="flex gap-4">
                <SocialLink
                  href="https://linkedin.com/in/gabrielzamp"
                  label="LinkedIn"
                  icon={<Linkedin size={20} />}
                />
                <SocialLink
                  href="https://github.com/gabrielzamp"
                  label="GitHub"
                  icon={<Github size={20} />}
                />
                <SocialLink
                  href="mailto:gabriel@growwithzamp.com"
                  label="Email"
                  icon={<Mail size={20} />}
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">{t("common.footer.menu")}</h3>
              <ul className="space-y-3">
                <FooterLink href="/" label={t("common.nav.home")} />
                <FooterLink href="/about" label={t("common.nav.about")} />
                <FooterLink href="/case-studies" label={t("common.nav.caseStudies")} />
                <FooterLink href="/methodology" label={t("common.nav.methodology")} />
              </ul>
            </div>



            <div>
              <h3 className="text-white font-semibold mb-6">{t("common.footer.contact")}</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>{t("common.footer.location")}</li>
                <li>
                  <a
                    href="mailto:gabriel@growwithzamp.com"
                    className="hover:text-white transition-colors"
                  >
                    gabriel@growwithzamp.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {currentYear} Grow With Zamp. {t("common.footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Pequenos componentes auxiliares para limpar o código principal
function SocialLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-slate-900 transition-all duration-300 border border-white/10"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/70 hover:text-white transition-colors text-sm"
      >
        {label}
      </Link>
    </li>
  );
}

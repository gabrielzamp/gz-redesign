"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

// --- Components ---

function AboutHero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              {t("about.hero.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("about.hero.title1")} <br />
              <span className="text-blue-200">
                {t("about.hero.title2")}
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl font-medium">
              {t("about.hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://calendly.com/gabriel-growwithzamp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-10 rounded-md bg-brand-orange text-white font-bold flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg group"
              >
                {t("common.bookCall")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto">
              <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full"></div>
              <Image
                src="/img/gabriel-about.jpg"
                alt="Gabriel Zampieri"
                width={500}
                height={500}
                className="relative z-10 rounded-2xl border border-white/10 bg-white/5 object-cover shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { t } = useLanguage();
  const stats = [
    { label: t("about.stats.experience"), value: "11+" },
    { label: t("about.stats.adSpend"), value: "$4M+" },
    { label: t("about.stats.revenue"), value: "1.3K%" },
    { label: t("about.stats.regions"), value: "US, CA, EU" },
  ];

  return (
    <section className="section-padding border-y border-border bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heading mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyHighlights() {
  const { t } = useLanguage();
  const highlights = [
    {
      icon: Target,
      title: t("about.highlights.items.budget.title"),
      desc: t("about.highlights.items.budget.desc"),
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: t("about.highlights.items.revenue.title"),
      desc: t("about.highlights.items.revenue.desc"),
      color: "green",
    },
    {
      icon: Users,
      title: t("about.highlights.items.saas.title"),
      desc: t("about.highlights.items.saas.desc"),
      color: "purple",
    },
    {
      icon: Zap,
      title: t("about.highlights.items.seo.title"),
      desc: t("about.highlights.items.seo.desc"),
      color: "orange",
    },
  ];

  const colorMap = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
  };

  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading mb-4">{t("about.highlights.title")}</h2>
          <p className="text-body">
            {t("about.highlights.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-100 hover:border-blue-500/50 transition-all hover:shadow-lg group"
            >
              <div className={`w-12 h-12 rounded-lg ${colorMap[item.color as keyof typeof colorMap]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const { t, dict } = useLanguage();
  const expertise = dict.about.expertise.items;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">{t("about.expertise.title")}</h2>
          <p className="text-body">
            {t("about.expertise.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {expertise.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const { t, dict } = useLanguage();
  const experiences = dict.about.experience.items;

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-600" /> {t("about.experience.title")}
        </h2>

        <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-8 relative">
              {/* Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white"></div>

              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded mt-2 sm:mt-0 inline-block">
                    {exp.period}
                  </span>
                </div>
                <div className="text-blue-600 font-semibold mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const { t } = useLanguage();
  return (
    <section className="py-24 border-t border-slate-100 bg-slate-50/50">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-600" /> {t("about.education.title")}
        </h2>

        <div className="grid gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-100 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0 font-bold text-slate-400">
              MBA
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {t("about.education.mba.title")}
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                {t("about.education.mba.school")}
              </p>
              <p className="text-xs text-slate-500">
                {t("about.education.mba.desc")}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-100 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0 font-bold text-slate-400">
              BS
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {t("about.education.bs.title")}
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                {t("about.education.bs.school")}
              </p>
              <p className="text-xs text-slate-500">
                {t("about.education.bs.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center border-t border-slate-100">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          {t("about.cta.title")}
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          {t("about.cta.subtitle")}
        </p>
        <Link
          href="https://calendly.com/gabriel-growwithzamp/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg items-center justify-center hover:bg-orange-600 transition-colors shadow-lg group"
        >
          {t("common.bookCall")}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30">
      <AboutHero />
      <StatsSection />
      <KeyHighlights />
      <ExpertiseSection />
      <ExperienceTimeline />
      <Education />
      <FinalCTA />
    </main>
  );
}

"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Zap,
  Code2,
  Database,
  Target,
  Search,
  Rocket,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

// --- 1. Visual Hierarchy Layer (Hero) ---
function Hero() {
  const { t, dict } = useLanguage();
  const companies = [
    "Interactive Financial",
    "Wishpond",
    "Lift Ventures",
    "Hostinger",
    "Essen",
    "Way2",
  ];

  const heroStats = dict.hero?.stats ?? [];
  const heroCard = dict.home?.heroCard;

  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]"></div>

      <div className="container px-4 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/10 border border-green-400/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-green-100">{t("hero.badge")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            {t("hero.title1")} <br className="hidden md:block" />
            {t("hero.title2")}
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed font-medium">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
            <Button asChild size="lg" className="h-14 px-10 text-lg shadow-xl bg-brand-orange hover:bg-orange-600 text-white border-0 font-bold rounded-md group">
              <Link href="https://calendly.com/gabriel-growwithzamp/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                {t("common.bookCall")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link href="/case-studies" className="text-blue-100 hover:text-white text-sm font-medium">
              {t("results.cta")}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {heroStats.map((stat) => (
              <span
                key={stat}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/80"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between text-xs uppercase text-white/60">
              <span>{heroCard?.title}</span>
              <span className="text-green-300">{heroCard?.status}</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs text-white/60">{heroCard?.revenueLift}</p>
                <p className="text-2xl font-bold text-white">{heroCard?.revenueValue}</p>
                <p className="text-xs text-green-300">{heroCard?.roasValue}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs text-white/60">{heroCard?.payback}</p>
                <p className="text-2xl font-bold text-white">{heroCard?.paybackValue}</p>
                <p className="text-xs text-blue-200">{heroCard?.stableCac}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white/10 p-4 border border-white/10">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{heroCard?.momentum}</span>
                <span className="text-green-300">{heroCard?.momentumValue}</span>
              </div>
              <div className="mt-3 h-24 rounded-lg bg-[linear-gradient(135deg,rgba(251,146,60,0.45),rgba(16,185,129,0.35))] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_100%]"></div>
                <div className="absolute bottom-0 left-0 h-16 w-full bg-[linear-gradient(120deg,rgba(14,165,233,0.6),rgba(255,255,255,0.2))] opacity-70"></div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-white/10 p-4 border border-white/10">
              <div>
                <p className="text-xs text-white/60">{heroCard?.activeExperiments}</p>
                <p className="text-lg font-semibold text-white">{heroCard?.activeExperimentsValue}</p>
              </div>
              <span className="text-xs text-white/70">{heroCard?.growsLoop}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto pb-12">
        <div className="flex items-center justify-center gap-4 text-sm text-blue-200 font-medium mb-6">
          <span className="text-2xl">❤️</span>
          <span>{t("hero.trustedBy")}</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          {companies.map((company) => (
            <span key={company} className="text-lg md:text-2xl font-bold text-white tracking-tight">
              {company}
            </span>
          ))}
        </div>
        <p className="text-blue-200/80 text-xs mt-6 text-center">{t("results.title")}</p>
      </div>
    </section>
  );
}

// --- 2. Persuasion Layer (Outcomes & Proof) ---
function ResultsLayer() {
  const { dict } = useLanguage();
  const stats = [
    { value: "52%", label: dict.resultsLayer.stats.tiktok, icon: TrendingUp },
    { value: "$4M+", label: dict.resultsLayer.stats.adSpend, icon: BarChart3 },
    { value: "86%", label: dict.resultsLayer.stats.churn, icon: CheckCircle2 },
    { value: "5x", label: dict.resultsLayer.stats.ai, icon: Zap },
  ];

  const proofPoints = dict.resultsLayer.proofPoints;

  return (
    <section id="case-studies" className="section-padding bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
              {dict.resultsLayer.kicker}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              {dict.resultsLayer.title}
            </h2>
            <p className="text-body mb-6">
              {dict.resultsLayer.subtitle}
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-6 hover:text-blue-500"
            >
              {dict.results.cta} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold text-heading mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { dict } = useLanguage();
  const steps = [
    { icon: Search, ...dict.howItWorks.steps[0] },
    { icon: Target, ...dict.howItWorks.steps[1] },
    { icon: Rocket, ...dict.howItWorks.steps[2] },
    { icon: LineChart, ...dict.howItWorks.steps[3] },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              {dict.howItWorks.title}
            </h2>
            <p className="text-body">
              {dict.howItWorks.subtitle}
            </p>
            <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-600">
                {dict.howItWorks.note}
              </p>
            </div>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-6 hover:text-blue-500"
            >
              {dict.howItWorks.link} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-slate-200 pl-6 space-y-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[14px] top-1 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                    </div>
                    <p className="text-sm text-body leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const { dict } = useLanguage();
  const benefits = [
    { ...dict.valueProposition.benefits.engineering, icon: Target },
    { ...dict.valueProposition.benefits.tshaped, icon: Code2 },
    { ...dict.valueProposition.benefits.profit, icon: Database },
  ];

  const skills = [
    {
      area: dict.skills.categories.channels.title,
      items: dict.skills.categories.channels.items,
    },
    {
      area: dict.skills.categories.technical.title,
      items: dict.skills.categories.technical.items,
    },
    {
      area: dict.skills.categories.strategy.title,
      items: dict.skills.categories.strategy.items,
    },
  ];

  const [primaryBenefit, ...secondaryBenefits] = benefits;
  const PrimaryIcon = primaryBenefit.icon;

  return (
    <section className="section-padding bg-secondary/40 border-y border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">{dict.home.capabilitiesTitle}</h2>
            <p className="text-body max-w-2xl">{dict.home.capabilitiesSubtitle}</p>
          </div>
          <Link
            href="/tools/t-shaped-marketer-tool"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center gap-1"
          >
            {dict.skills.interactive} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <PrimaryIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-heading">{primaryBenefit.title}</h3>
              </div>
              <p className="text-body">{primaryBenefit.desc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {secondaryBenefits.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                  </div>
                  <p className="text-sm text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-blue text-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">{dict.skills.title}</h3>
              <p className="text-blue-100 text-sm mb-6">{dict.skills.subtitle}</p>
              <div className="space-y-4">
                {skills.map((category) => (
                  <div key={category.area}>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200 mb-2">{category.area}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h4 className="text-lg font-bold text-heading mb-2">{dict.home.playbooksTitle}</h4>
              <p className="text-sm text-body">{dict.home.playbooksDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 3. Qualification Layer (FAQ & CTA) ---
function FaqSection() {
  const { dict } = useLanguage();
  const faqs = dict.faq.items;

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-heading text-center mb-12">
          {dict.faq.title}
        </h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-slate-50 border border-slate-100"
            >
              <h3 className="text-lg font-semibold text-heading mb-2">
                {item.q}
              </h3>
              <p className="text-body">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const { dict } = useLanguage();

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center border-t border-slate-100">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {dict.finalCta.title}
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          {dict.finalCta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://calendly.com/gabriel-growwithzamp/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-xl group"
          >
            {dict.finalCta.button}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <ResultsLayer />
      <HowItWorksSection />
      <CapabilitiesSection />
      <FaqSection />
      <ContactCTA />
    </main>
  );
}

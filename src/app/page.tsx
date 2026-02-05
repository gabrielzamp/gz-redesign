"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Zap,
  Code2,
  Database,
  Target,
  Building2,
  ShoppingCart,
  Briefcase,
  Search,
  Rocket,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- 1. Visual Hierarchy Layer (Hero) ---
function Hero() {
  const { t } = useLanguage();
  const companies = [
    "Interactive Financial ",
    "Wishpond",
    "Lift Ventures",
    "Hostinger",
    "Essen", 
    "Way2"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto text-center relative z-10 max-w-6xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/10 border border-green-400/20 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-green-100">{t("hero.badge")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
          {t("hero.title1")} <br className="hidden md:block" />
          {t("hero.title2")}
          <span className="text-brand-orange inline-block ml-2 align-top text-4xl md:text-6xl">
            ✨  
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="h-14 px-10 text-lg shadow-xl bg-brand-orange hover:bg-orange-600 text-white border-0 font-bold rounded-md group">
            <Link href="https://calendly.com/gabriel-growwithzamp/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {t("common.bookCall")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mini Social Proof */}
        <div className="flex items-center justify-center gap-4 text-sm text-blue-200 font-medium mb-16">
          <div className="flex items-center gap-2">
             <span className="text-2xl">❤️</span>
             <span>{t("hero.trustedBy")}</span>
          </div>
        </div>

        {/* Dashboard Image */}
      

         {/* Logos */}
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            {companies.map((company) => (
             <span
               key={company}
               className="text-xl md:text-2xl font-bold text-white tracking-tight"
             >
               {company}
             </span>
           ))}
         </div>
         <p className="text-blue-300 text-xs mt-8">
            {t("results.title")}
         </p>
      </div>
    </section>
  );
}


// SocialProof component removed as it is now integrated into Hero

// --- 2. Persuasion Layer (Results & Benefits) ---
function ResultsLayer() {
  const { t } = useLanguage();
  const stats = [
    { value: "52%", label: t("resultsLayer.stats.tiktok"), icon: TrendingUp },
    { value: "$4M+", label: t("resultsLayer.stats.adSpend"), icon: BarChart3 },
    { value: "86%", label: t("resultsLayer.stats.churn"), icon: CheckCircle2 },
    { value: "5x", label: t("resultsLayer.stats.ai"), icon: Zap },
  ];

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            {t("resultsLayer.title1")}{" "}
            <span className="text-blue-600">{t("resultsLayer.title2")}</span>
          </h2>
          <p className="text-body">
            {t("resultsLayer.desc1")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/50 transition-colors group"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold text-heading mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const { t } = useLanguage();
  const benefits = [
    {
      title: t("valueProposition.benefits.engineering.title"),
      desc: t("valueProposition.benefits.engineering.desc"),
      icon: Target,
    },
    {
      title: t("valueProposition.benefits.tshaped.title"),
      desc: t("valueProposition.benefits.tshaped.desc"),
      icon: Code2,
    },
    {
      title: t("valueProposition.benefits.profit.title"),
      desc: t("valueProposition.benefits.profit.desc"),
      icon: Database,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-blue-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonasSection() {
  const { t } = useLanguage();
  const personas = [
    {
      title: t("personas.items.saas.title"),
      icon: Rocket,
      description: t("personas.items.saas.desc"),
      metric: t("personas.items.saas.metric"),
    },
    {
      title: t("personas.items.ecommerce.title"),
      icon: ShoppingCart,
      description: t("personas.items.ecommerce.desc"),
      metric: t("personas.items.ecommerce.metric"),
    },
    {
      title: t("personas.items.b2b.title"),
      icon: Building2,
      description: t("personas.items.b2b.desc"),
      metric: t("personas.items.b2b.metric"),
    },
    {
      title: t("personas.items.agencies.title"),
      icon: Briefcase,
      description: t("personas.items.agencies.desc"),
      metric: t("personas.items.agencies.metric"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            {t("personas.title")}
          </h2>
          <p className="text-body">
            {t("personas.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-100 hover:border-blue-500/50 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <persona.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">
                {persona.title}
              </h3>
              <p className="text-body text-sm mb-4 leading-relaxed">
                {persona.description}
              </p>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {persona.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { t, dict } = useLanguage();
  const stepsData = dict.howItWorks.steps;
  const steps = [
    {
      number: "01",
      title: stepsData[0].title,
      icon: Search,
      description: stepsData[0].desc,
    },
    {
      number: "02",
      title: stepsData[1].title,
      icon: Target,
      description: stepsData[1].desc,
    },
    {
      number: "03",
      title: stepsData[2].title,
      icon: Rocket,
      description: stepsData[2].desc,
    },
    {
      number: "04",
      title: stepsData[3].title,
      icon: LineChart,
      description: stepsData[3].desc,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            {t("howItWorks.title")}
          </h2>
          <p className="text-body">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -z-10" />
              )}
              
              <div className="text-center space-y-4">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                    {t("common.step") || "Step"} {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TShapedSection() {
  const { t, dict } = useLanguage();
  const skillsData = dict.skills.categories;
  const skills = [
    {
      area: skillsData.channels.title,
      items: skillsData.channels.items,
    },
    {
      area: skillsData.technical.title,
      items: skillsData.technical.items,
    },
    {
      area: skillsData.strategy.title,
      items: skillsData.strategy.items,
    },
  ];

  return (
    <section className="py-20 border-y border-border bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {t("skills.title")}
            </h2>
            <p className="text-slate-600">
              {t("skills.subtitle")}
            </p>
          </div>
          <Link
            href="/tools/t-shaped-marketer-tool"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center gap-1"
          >
            {t("skills.interactive")} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-100"
            >
              <h4 className="text-slate-900 font-semibold mb-4 border-b border-slate-100 pb-2">
                {category.area}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-slate-50 text-slate-700 text-xs border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 3. Qualification Layer (FAQ & CTA) ---
function FaqSection() {
  const { t, dict } = useLanguage();
  const faqs = dict.faq.items;

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-heading text-center mb-12">
          {t("faq.title")}
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
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center border-t border-slate-100">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {t("finalCta.title")}
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          {t("finalCta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://calendly.com/gabriel-growwithzamp/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-xl group"
          >
            {t("finalCta.button")}
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
      <PersonasSection />
      <HowItWorksSection />
      <TShapedSection />
      <ValueProposition />
      <FaqSection />
      <ContactCTA />
    </main>
  );
}

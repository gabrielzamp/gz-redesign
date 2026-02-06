"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/ga";

export default function PricingPage() {
  const { dict } = useLanguage();
  const pricing = dict.pricing;

  const handleCta = (label: string) =>
    trackEvent({
      action: "book_growth_call_click",
      category: "cta",
      label,
    });

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <section className="page-hero bg-brand-blue text-white">
        <div className="container px-4 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-white/80">
                {pricing.hero.badge}
              </span>
            </div>
            <h1 className="page-title text-white mb-6">{pricing.hero.title}</h1>
            <p className="page-subtitle text-blue-100 max-w-2xl">
              {pricing.hero.subtitle}
            </p>
            <div className="mt-8 space-y-3">
              {pricing.hero.bullets.map((bullet: string) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5" />
                  <span className="text-blue-100">{bullet}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="https://calendly.com/gabriel-growwithzamp/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCta("pricing_hero")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-orange text-white font-bold shadow-lg hover:bg-orange-600 transition-colors group"
              >
                {pricing.hero.primaryCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#plans"
                className="text-white/80 hover:text-white font-semibold"
              >
                {pricing.hero.secondaryCta}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">{pricing.hero.note}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-white/10 blur-2xl" />
            <Image
              src="/img/illustrations/pricing-hero.svg"
              alt={pricing.hero.visualAlt}
              width={960}
              height={720}
              priority
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.trust.items.map((item: { value: string; label: string }) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="text-sm text-slate-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="section-padding bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-slate-900">{pricing.plans.title}</h2>
            <p className="section-subtitle text-slate-600 mt-4">
              {pricing.plans.subtitle}
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 px-6 py-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {pricing.plans.offer.title}
            </p>
            <p className="text-slate-700 mt-2">{pricing.plans.offer.detail}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.plans.tiers.map(
              (tier: {
                name: string;
                tag: string;
                price: string;
                originalPrice?: string;
                discount?: string;
                description: string;
                features: string[];
                cta: string;
                highlight?: boolean;
              }) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl border p-8 shadow-xl transition-all ${
                    tier.highlight
                      ? "bg-brand-blue text-white border-brand-blue scale-[1.02]"
                      : "bg-white text-slate-900 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          tier.highlight ? "text-white/60" : "text-slate-400"
                        }`}
                      >
                        {tier.tag}
                      </p>
                      <h3 className={`text-2xl font-bold mt-3 ${tier.name === "Growth" ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
                    </div>
                    {tier.highlight && (
                      <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                        {pricing.plans.popularLabel}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-center gap-3 flex-wrap">
                    <p className="text-3xl font-bold">{tier.price}</p>
                    {tier.originalPrice && (
                      <span className={`text-sm line-through ${tier.highlight ? "text-white/50" : "text-slate-400"}`}>
                        {tier.originalPrice}
                      </span>
                    )}
                    {tier.discount && (
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tier.highlight ? "bg-white/15 text-white" : "bg-brand-orange/10 text-brand-orange"}`}>
                        {tier.discount}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 ${
                      tier.highlight ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 mt-0.5 ${
                            tier.highlight ? "text-green-300" : "text-brand-orange"
                          }`}
                        />
                        <span
                          className={
                            tier.highlight ? "text-white/80" : "text-slate-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://calendly.com/gabriel-growwithzamp/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCta(`pricing_${tier.name.toLowerCase()}`)}
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full h-12 rounded-md font-semibold transition-colors ${
                      tier.highlight
                        ? "bg-brand-orange text-white hover:bg-orange-600"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            )}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            {pricing.plans.note}
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container px-4 mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <h2 className="section-title text-slate-900">{pricing.value.title}</h2>
            <p className="section-subtitle text-slate-600 mt-4">
              {pricing.value.subtitle}
            </p>
            <div className="mt-8 grid gap-4">
              {pricing.value.cards.map(
                (card: { title: string; description: string }) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{card.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/img/illustrations/pricing-metrics.svg"
              alt={pricing.value.visualAlt}
              width={880}
              height={520}
              className="w-full h-auto rounded-3xl border border-slate-200 shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-slate-900">{pricing.process.title}</h2>
            <p className="section-subtitle text-slate-600 mt-4">
              {pricing.process.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.process.steps.map(
              (step: { title: string; description: string }, index: number) => {
                const icons = [LineChart, Shield, Zap, Sparkles];
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mt-2">{step.description}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <section id="compare" className="section-padding bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-slate-900">{pricing.comparison.title}</h2>
            <p className="section-subtitle text-slate-600 mt-4">
              {pricing.comparison.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4">{pricing.comparison.headers.feature}</th>
                  <th className="px-6 py-4">{pricing.comparison.headers.starter}</th>
                  <th className="px-6 py-4">{pricing.comparison.headers.growth}</th>
                  <th className="px-6 py-4">{pricing.comparison.headers.scale}</th>
                </tr>
              </thead>
              <tbody>
                {pricing.comparison.rows.map(
                  (row: {
                    label: string;
                    starter: string;
                    growth: string;
                    scale: string;
                  }) => (
                    <tr key={row.label} className="border-t border-slate-100">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{row.starter}</td>
                      <td className="px-6 py-4 text-slate-600">{row.growth}</td>
                      <td className="px-6 py-4 text-slate-600">{row.scale}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-slate-900">{pricing.faq.title}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricing.faq.items.map((item: { q: string; a: string }) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="text-slate-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-blue text-white">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <h2 className="section-title text-white">{pricing.finalCta.title}</h2>
          <p className="text-blue-100 mt-4 text-lg">{pricing.finalCta.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://calendly.com/gabriel-growwithzamp/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCta("pricing_final_cta")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-orange text-white font-bold shadow-lg hover:bg-orange-600 transition-colors group"
            >
              {pricing.finalCta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {pricing.finalCta.secondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

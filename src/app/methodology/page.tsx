"use client";

import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  Layers,
  LineChart,
  Sparkles,
  Target,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MethodologyPage() {
  const { dict } = useLanguage();
  const m = dict.methodology;

  const overviewIcons = [Target, Layers, Beaker, LineChart];

  return (
    <main className="min-h-screen bg-background text-body selection:bg-brand-blue/30">
      <section className="relative overflow-hidden bg-brand-blue text-white">
        <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_60%)]"></div>

        <div className="container px-4 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-32 pb-20 md:pt-48 md:pb-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">{m.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {m.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium max-w-2xl">
              {m.hero.subtitle}
            </p>
            <p className="mt-6 text-blue-100 text-base md:text-lg">{m.hero.quote}</p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
                {m.intro.quickLook}
              </p>
              <div className="space-y-3">
                {m.overview.map((item, index) => {
                  const Icon = overviewIcons[index] ?? Sparkles;
                  return (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white/10 border border-white/15 p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container px-4 mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{m.intro.title}</h2>
            <div className="space-y-4 text-body">
              <p>{m.intro.p1}</p>
              <p>{m.intro.p2}</p>
              <p>{m.intro.p3}</p>
              <p>{m.intro.p4}</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
                {m.intro.quickLook}
              </p>
              <div className="space-y-3">
                {m.overview.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-semibold"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-orange/30 bg-orange-50 p-6">
              <h3 className="text-sm font-bold text-orange-700 mb-2">{m.intro.calloutTitle}</h3>
              <p className="text-sm text-orange-900/80">{m.intro.calloutBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50 border-t border-border">
        <div className="container px-4 mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6">
              {m.step1.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">{m.step1.title}</h2>
            <p className="text-body mb-6">{m.step1.lead}</p>
            <div className="rounded-2xl border border-brand-orange/40 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-2">{m.step1.foundationTitle}</h3>
              <p className="text-sm text-body">{m.step1.foundationBody}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-4">{m.step1.pmfChecklistTitle}</h3>
              <ul className="space-y-3 text-sm text-body">
                {m.step1.pmfChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-heading mb-3">{m.step1.signalsTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {m.step1.signals.map((signal) => (
                  <div key={signal.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                    <h4 className="font-bold text-heading mb-3">{signal.title}</h4>
                    <ul className="space-y-2 text-sm text-body">
                      {signal.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-blue-600 font-bold">-</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-2">{m.step1.overlapTitle}</h3>
              <p className="text-sm text-body">{m.step1.overlapBody}</p>
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <h3 className="text-lg font-bold text-heading mb-2">{m.step1.timingTitle}</h3>
              <p className="text-sm text-body">{m.step1.timingBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-4">
                {m.step2.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">{m.step2.title}</h2>
              <p className="text-body max-w-2xl">{m.step2.lead}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 max-w-md">
              <p className="text-sm text-body">{m.step2.teamNote}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {m.step2.cards.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-3">{m.step2.personaTitle}</h3>
              <ul className="space-y-2 text-sm text-body">
                {m.step2.personaPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-purple-600 font-bold">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-heading mb-2">{m.step2.omtmTitle}</h3>
              <p className="text-sm text-body">{m.step2.omtmBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50 border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-bold mb-6">
                {m.step3.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">{m.step3.title}</h2>
              <p className="text-body mb-4">{m.step3.lead}</p>
              <p className="text-body">{m.step3.note}</p>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
              {m.step3.grows.map((step) => (
                <div key={step.letter} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                      {step.letter}
                    </span>
                    <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                  </div>
                  <p className="text-sm text-body mb-3">{step.desc}</p>
                  <ul className="space-y-2 text-sm text-body">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-green-600 font-bold">-</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-3">{m.step3.analysisTitle}</h3>
              <ul className="space-y-2 text-sm text-body">
                {m.step3.analysisPoints.map((phase) => (
                  <li key={phase} className="flex gap-2">
                    <span className="text-green-600 font-bold">-</span>
                    <span>{phase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-3">{m.step3.abPrereqsTitle}</h3>
              <ul className="space-y-2 text-sm text-body">
                {m.step3.abPrereqs.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-blue-600 font-bold">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-3">{m.step3.abNotesTitle}</h3>
              <div className="grid gap-3">
                {m.step3.abNotes.map((note) => (
                  <div key={note.title} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <h4 className="text-sm font-bold text-heading mb-2">{note.title}</h4>
                    <ul className="space-y-2 text-sm text-body">
                      {note.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-blue-600 font-bold">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-t border-border">
        <div className="container px-4 mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-6">
              {m.step4.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">{m.step4.title}</h2>
            <p className="text-body">{m.step4.lead}</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-body">
                {m.step4.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <p className="text-sm text-body">{m.step4.note}</p>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="py-20 bg-brand-blue text-white">
        <div className="container px-4 mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{m.cta.title}</h2>
            <p className="text-blue-100 text-lg mb-6">{m.cta.subtitle}</p>
            <ul className="space-y-3 text-sm text-blue-100">
              {m.cta.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70 mb-6">{m.cta.note}</p>
              <Link
                href="https://calendly.com/gabriel-growwithzamp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 px-6 rounded-md bg-brand-orange text-white font-bold items-center justify-center hover:bg-orange-600 transition-colors shadow-lg group"
              >
                {m.cta.button}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

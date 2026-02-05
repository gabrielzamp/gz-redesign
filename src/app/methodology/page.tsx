"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function MethodologyPage() {
  const { dict } = useLanguage();
  const content = dict.methodology;

  return (
    <main className="min-h-screen bg-background text-body selection:bg-brand-blue/30">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-brand-blue text-white">
        <div className="container px-4 mx-auto text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-6">
            {content.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
            {content.hero.subtitle}
          </p>
          <p className="mt-6 text-blue-100 text-base md:text-lg">{content.hero.quote}</p>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </section>

      <section className="section-padding bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{content.intro.title}</h2>
          <p className="text-body leading-relaxed mb-6">{content.intro.p1}</p>
          <p className="text-body leading-relaxed mb-6">{content.intro.p2}</p>
          <p className="text-body leading-relaxed mb-6">{content.intro.p3}</p>
          <p className="text-body leading-relaxed mb-8">{content.intro.p4}</p>
          <p className="text-sm font-semibold text-muted-foreground mb-4">{content.intro.quickLook}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {content.overview.map((item) => (
              <div key={item} className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="text-sm font-semibold text-heading">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-muted/50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6">
            {content.step1.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{content.step1.title}</h2>
          <p className="text-body leading-relaxed mb-6">{content.step1.p1}</p>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm mb-8">
            <h3 className="text-lg font-bold text-heading mb-2">{content.step1.noteTitle}</h3>
            <p className="text-body leading-relaxed">{content.step1.noteBody}</p>
          </div>

          <h3 className="text-lg font-bold text-heading mb-4">{content.step1.signalsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.step1.signals.map((signal) => (
              <div key={signal.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-lg font-bold text-heading mb-3">{signal.title}</h4>
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

          <div className="mt-8 p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-heading mb-3">{content.step1.overlapTitle}</h3>
            <p className="text-body leading-relaxed">{content.step1.overlapBody}</p>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-blue-50 border border-blue-100">
            <h3 className="text-lg font-bold text-heading mb-2">{content.step1.timingTitle}</h3>
            <p className="text-body leading-relaxed">{content.step1.timingBody}</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-6">
            {content.step2.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{content.step2.title}</h2>
          <p className="text-body leading-relaxed mb-6">{content.step2.p1}</p>
          <p className="text-body leading-relaxed mb-8">{content.step2.p2}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {content.step2.cards.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-muted/40 border border-slate-200">
                <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-heading mb-3">{content.step2.personaTitle}</h3>
            <ul className="space-y-2 text-sm text-body">
              {content.step2.personaPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-purple-600 font-bold">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 p-6 rounded-xl bg-muted/40 border border-slate-200">
            <h3 className="text-lg font-bold text-heading mb-2">{content.step2.omtmTitle}</h3>
            <p className="text-sm text-body">{content.step2.omtmBody}</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-muted/50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-bold mb-6">
            {content.step3.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{content.step3.title}</h2>
          <p className="text-body leading-relaxed mb-6">{content.step3.p1}</p>
          <p className="text-body leading-relaxed mb-8">{content.step3.p2}</p>

          <div className="space-y-6">
            {content.step3.grows.map((step) => (
              <div key={step.letter} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                    {step.letter}
                  </div>
                  <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                </div>
                <p className="text-body text-sm mb-4">{step.desc}</p>
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

          <div className="mt-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-heading mb-3">{content.step3.analysisTitle}</h3>
            <ul className="space-y-2 text-sm text-body mb-6">
              {content.step3.analysisPoints.map((phase) => (
                <li key={phase} className="flex gap-2">
                  <span className="text-green-600 font-bold">-</span>
                  <span>{phase}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-heading mb-3">{content.step3.abPrereqsTitle}</h3>
            <ul className="space-y-2 text-sm text-body mb-6">
              {content.step3.abPrereqs.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-blue-600 font-bold">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-heading mb-3">{content.step3.abNotesTitle}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {content.step3.abNotes.map((note) => (
                <div key={note.title}>
                  <h4 className="text-base font-bold text-heading mb-2">{note.title}</h4>
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
      </section>

      <section className="section-padding border-t border-border bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-6">
            {content.step4.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">{content.step4.title}</h2>
          <p className="text-body leading-relaxed mb-6">{content.step4.p1}</p>
          <p className="text-body leading-relaxed">{content.step4.p2}</p>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 px-8 rounded-md bg-brand-orange text-white font-bold items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
            >
              {content.step4.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

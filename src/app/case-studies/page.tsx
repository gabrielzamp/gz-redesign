"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  TrendingUp,
  Users,
} from "lucide-react";

// --- Components ---

function CaseStudyHero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto text-center relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} className="mr-2" /> {t("common.backToHome")}
        </Link>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          {t("caseStudies.hero.title1")}{" "}
          <span className="text-blue-200">
            {t("caseStudies.hero.title2")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
          {t("caseStudies.hero.subtitle")}
        </p>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
    </section>
  );
}

// Case Study 1: InterActive Financial - TikTok Ads
function CaseStudy1() {
  const { t } = useLanguage();
  return (
    <section className="section-padding border-t border-border bg-muted/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context & Challenge */}
          <div className="md:sticky md:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6">
              <Bot size={14} /> {t("caseStudies.cs1.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              {t("caseStudies.cs1.title")}
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              {t("caseStudies.cs1.company")}
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>{t("common.challenge") || "The Challenge"}:</strong> {t("caseStudies.cs1.challenge")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs1.beforeCpl")}</div>
                <div className="text-2xl font-mono text-red-500">$5.00+</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs1.launchTime")}</div>
                <div className="text-2xl font-mono text-red-500">{t("caseStudies.cs1.launchTimeValue")}</div>
              </div>
            </div>
          </div>

          {/* Right: The Solution */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  01
                </span>
                {t("caseStudies.cs1.step1.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs1.step1.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs1.step1.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                {t("caseStudies.cs1.step2.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs1.step2.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs1.step2.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                {t("caseStudies.cs1.step3.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs1.step3.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs1.step3.result")}
              </p>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wider">
                {t("common.finalImpact") || "Final Impact"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {t("caseStudies.cs1.impact.title")}
              </div>
              <div className="text-slate-600 text-sm">
                {t("caseStudies.cs1.impact.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study 2: Wishpond - SaaS Churn Reduction
function CaseStudy2() {
  const { t } = useLanguage();
  return (
    <section className="section-padding border-t border-border bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="md:sticky md:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-6">
              <Users size={14} /> {t("caseStudies.cs2.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              {t("caseStudies.cs2.title")}
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              {t("caseStudies.cs2.company")}
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>{t("common.challenge") || "The Challenge"}:</strong> {t("caseStudies.cs2.challenge")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs2.metric1")}</div>
                <div className="text-2xl font-mono text-red-500">{t("caseStudies.cs2.metric1Value")}</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs2.metric2")}</div>
                <div className="text-2xl font-mono text-red-500">{t("caseStudies.cs2.metric2Value")}</div>
              </div>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  01
                </span>
                {t("caseStudies.cs2.step1.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs2.step1.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs2.step1.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                {t("caseStudies.cs2.step2.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs2.step2.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs2.step2.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                {t("caseStudies.cs2.step3.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs2.step3.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs2.step3.result")}
              </p>
            </div>

            <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl">
              <div className="text-sm text-purple-600 font-bold mb-2 uppercase tracking-wider">
                {t("common.finalImpact") || "Final Impact"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {t("caseStudies.cs2.impact.title")}
              </div>
              <div className="text-slate-600 text-sm">
                {t("caseStudies.cs2.impact.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study 3: Lift Ventures - 1.3K% Sales Growth
function CaseStudy3() {
  const { t } = useLanguage();
  return (
    <section className="section-padding border-t border-border bg-muted/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="md:sticky md:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-bold mb-6">
              <TrendingUp size={14} /> {t("caseStudies.cs3.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              {t("caseStudies.cs3.title")}
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              {t("caseStudies.cs3.company")}
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>{t("common.challenge") || "The Challenge"}:</strong> {t("caseStudies.cs3.challenge")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs3.metric1")}</div>
                <div className="text-2xl font-mono text-green-600">1,300%</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs3.metric2")}</div>
                <div className="text-2xl font-mono text-green-600">18%</div>
              </div>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  01
                </span>
                {t("caseStudies.cs3.step1.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs3.step1.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs3.step1.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                {t("caseStudies.cs3.step2.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs3.step2.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs3.step2.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                {t("caseStudies.cs3.step3.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs3.step3.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs3.step3.result")}
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
              <div className="text-sm text-green-600 font-bold mb-2 uppercase tracking-wider">
                {t("common.finalImpact") || "Final Impact"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {t("caseStudies.cs3.impact.title")}
              </div>
              <div className="text-slate-600 text-sm">
                {t("caseStudies.cs3.impact.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study 4: Hostinger - Global Expansion
function CaseStudy4() {
  const { t } = useLanguage();
  return (
    <section className="section-padding border-t border-border bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="md:sticky md:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-6">
              <BarChart3 size={14} /> {t("caseStudies.cs4.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              {t("caseStudies.cs4.title")}
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              {t("caseStudies.cs4.company")}
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>{t("common.challenge") || "The Challenge"}:</strong> {t("caseStudies.cs4.challenge")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs4.metric1")}</div>
                <div className="text-2xl font-mono text-orange-600">20+</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">{t("caseStudies.cs4.metric2")}</div>
                <div className="text-2xl font-mono text-orange-600">$1M+</div>
              </div>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  01
                </span>
                {t("caseStudies.cs4.step1.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs4.step1.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs4.step1.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                {t("caseStudies.cs4.step2.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs4.step2.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs4.step2.result")}
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                {t("caseStudies.cs4.step3.title")}
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                {t("caseStudies.cs4.step3.desc")}
                <br />
                <br />
                <span className="text-heading font-medium">{t("common.result") || "Result"}:</span> {t("caseStudies.cs4.step3.result")}
              </p>
            </div>

            <div className="p-6 bg-orange-50 border border-orange-100 rounded-xl">
              <div className="text-sm text-orange-600 font-bold mb-2 uppercase tracking-wider">
                {t("common.finalImpact") || "Final Impact"}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {t("caseStudies.cs4.impact.title")}
              </div>
              <div className="text-slate-600 text-sm">
                {t("caseStudies.cs4.impact.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="section-padding border-t border-border bg-background text-center">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-heading mb-6">
          {t("caseStudies.caseStudiesCta.title")}
        </h2>
        <p className="text-body mb-8">
          {t("caseStudies.caseStudiesCta.subtitle")}
        </p>
        <Link
          href="https://calendly.com/gabriel-growwithzamp/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg items-center justify-center hover:bg-orange-600 transition-colors shadow-xl group"
        >
          {t("common.bookCall")}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-body selection:bg-brand-blue/30">
      <CaseStudyHero />
      <CaseStudy1 />
      <CaseStudy2 />
      <CaseStudy3 />
      <CaseStudy4 />
      <CTASection />
    </main>
  );
}

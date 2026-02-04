import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  TrendingUp,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// --- Components ---

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              The Story So Far
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Not just a Marketer. <br />
              <span className="text-blue-200">
                A Growth Engineer.
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl font-medium">
              I bridge the gap between <strong>creative marketing</strong> and{" "}
              <strong>technical engineering</strong>. While most marketers
              guess, I build systems, write code, and analyze data to engineer
              predictable growth.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="h-14 px-10 rounded-md bg-brand-orange text-white font-bold flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg group"
              >
                Book a Growth Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto">
              <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full"></div>
              <Image
                src="/img/gabriel-zamp-3.png"
                alt="Gabriel Zamp"
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
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Ad Spend Managed", value: "$4M+" },
    { label: "Products Scaled", value: "10+" },
    { label: "Countries Reached", value: "US & CA" },
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

function Philosophy() {
  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading mb-4">My Philosophy</h2>
          <p className="text-body">
            Why I deliver results where others fail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-muted border border-border">
            <Code2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-heading mb-3">
              Code-First Approach
            </h3>
            <p className="text-body text-sm leading-relaxed">
              I don&apos;t rely on developers for tracking or automation. I write
              Python scripts for data analysis, build custom AI agents, and fix
              pixel issues myself.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted border border-border">
            <Database className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-heading mb-3">
              Data Over Opinions
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Creativity is important, but math pays the bills. Every campaign
              is backed by Unit Economics, LTV:CAC ratios, and rigorous A/B
              testing.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted border border-border">
            <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-heading mb-3">
              Full-Funnel Ownership
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Clicks don&apos;t matter if they don&apos;t convert. I optimize the entire
              journey: from the first ad impression to the landing page and
              post-purchase retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const experiences = [
    {
      company: "Interactive Financial Marketing Group",
      role: "Sr Digital Marketing Strategist",
      period: "Feb 2025 - Present",
      desc: "Managing $4M+ lead gen budget. Restructured TikTok Ads reducing CPL by 52%. Built AI Agents to speed up campaign launches by 5x.",
    },
    {
      company: "Wishpond (TSXV:WISH)",
      role: "Digital Marketing Manager",
      period: "Jan 2023 - Jan 2024",
      desc: "Spearheaded growth loops driving 10% MRR increase. Implemented SaaS upsell model increasing ARPU by 406%. Reduced churn by 86%.",
    },
    {
      company: "Lift Ventures",
      role: "Performance Marketing Manager",
      period: "Aug 2021 - Jan 2023",
      desc: "Managed Google Ads with 18% ROAS improvement. Established PPC as a channel representing 25% of new revenue. Implemented GA4 for 3M+ users.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-600" /> Career Journey
        </h2>

        <div className="relative border-l border-slate-200 ml-3 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-8 relative">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <div className="text-blue-600 font-medium mb-3">
                {exp.company}
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-24 border-t border-slate-100 bg-slate-50/50">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-600" /> Education
        </h2>

        <div className="grid gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-100 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0 font-bold text-slate-400">
              MBA
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                MBA in Marketing, Growth & Branding
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Pontifical Catholic University (PUCRS)
              </p>
              <p className="text-xs text-slate-500">
                Focus on Business Growth and Brand Strategy.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-100 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0 font-bold text-slate-400">
              BS
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Bachelor&apos;s in Information Science
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Federal University of Santa Catarina (UFSC)
              </p>
              <p className="text-xs text-slate-500">
                Emphasis on Data Analysis (Python, SQL) and Startup Business
                Models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center border-t border-slate-100">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Ready to engineer your growth?
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          I&apos;m currently open for new challenges and consulting projects.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg items-center justify-center hover:bg-orange-600 transition-colors shadow-lg group"
        >
          Book a Growth Call
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
      <Philosophy />
      <ExperienceTimeline />
      <Education />
      <FinalCTA />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// --- Components ---

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              The Story So Far
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Not just a Marketer. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                A Growth Engineer.
              </span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
              I bridge the gap between <strong>creative marketing</strong> and{" "}
              <strong>technical engineering</strong>. While most marketers
              guess, I build systems, write code, and analyze data to engineer
              predictable growth.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="h-12 px-8 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                Let's Talk Business
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <Image
                src="/img/gabriel-zamp-3.png" // Certifique-se que esta imagem existe ou use outra
                alt="Gabriel Zamp"
                width={500}
                height={500}
                className="relative z-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 object-cover shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
    <section className="py-12 border-y border-zinc-900 bg-black/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
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
    <section className="py-24 bg-zinc-950">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Philosophy</h2>
          <p className="text-zinc-400">
            Why I deliver results where others fail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <Code2 className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Code-First Approach
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I don't rely on developers for tracking or automation. I write
              Python scripts for data analysis, build custom AI agents, and fix
              pixel issues myself.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <Database className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Data Over Opinions
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Creativity is important, but math pays the bills. Every campaign
              is backed by Unit Economics, LTV:CAC ratios, and rigorous A/B
              testing.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Full-Funnel Ownership
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Clicks don't matter if they don't convert. I optimize the entire
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
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-500" /> Career Journey
        </h2>

        <div className="relative border-l border-zinc-800 ml-3 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-8 relative">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <div className="text-blue-400 font-medium mb-3">
                {exp.company}
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
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
    <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-500" /> Education
        </h2>

        <div className="grid gap-6">
          <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center shrink-0 font-bold text-zinc-500">
              MBA
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                MBA in Marketing, Growth & Branding
              </h3>
              <p className="text-zinc-400 text-sm mb-2">
                Pontifical Catholic University (PUCRS)
              </p>
              <p className="text-xs text-zinc-500">
                Focus on Business Growth and Brand Strategy.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center shrink-0 font-bold text-zinc-500">
              BS
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Bachelor's in Information Science
              </h3>
              <p className="text-zinc-400 text-sm mb-2">
                Federal University of Santa Catarina (UFSC)
              </p>
              <p className="text-xs text-zinc-500">
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
    <section className="py-32 bg-gradient-to-b from-zinc-900 to-black text-center border-t border-zinc-800">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to engineer your growth?
        </h2>
        <p className="text-lg text-zinc-400 mb-10">
          I'm currently open for new challenges and consulting projects.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-14 px-10 rounded-full bg-white text-black font-bold text-lg items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
        >
          Work With Me
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30">
      <AboutHero />
      <StatsSection />
      <Philosophy />
      <ExperienceTimeline />
      <Education />
      <FinalCTA />
    </main>
  );
}

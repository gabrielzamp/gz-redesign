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

// --- 1. Visual Hierarchy Layer (Hero) ---
function Hero() {
  const companies = [
    "Interactive Financial",
    "Wishpond",
    "Lift Ventures",
    "Hostinger",
    "Essen",
    "Way2",
  ];

  const heroStats = [
    "52% CPL drop",
    "5x faster launches",
    "$4M+ ad spend managed",
  ];

  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]"></div>

      <div className="container px-4 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/10 border border-green-400/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-green-100">Available for new growth projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Scale Your Revenue With <br className="hidden md:block" />
            The G.R.O.W.S Method
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed font-medium">
            A growth marketing service for ambitious companies that want to grow fast. Run by experts, driven by data,
            and focused on measurable results without long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
            <Button asChild size="lg" className="h-14 px-10 text-lg shadow-xl bg-brand-orange hover:bg-orange-600 text-white border-0 font-bold rounded-md group">
              <Link href="https://calendly.com/gabriel-growwithzamp/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Book a Growth Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link href="/case-studies" className="text-blue-100 hover:text-white text-sm font-medium">
              See case studies
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
              <span>Growth Engine</span>
              <span className="text-green-300">Live</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs text-white/60">Revenue Lift</p>
                <p className="text-2xl font-bold text-white">1.3K%</p>
                <p className="text-xs text-green-300">+18% ROAS</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs text-white/60">Payback</p>
                <p className="text-2xl font-bold text-white">45 days</p>
                <p className="text-xs text-blue-200">Stable CAC</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white/10 p-4 border border-white/10">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Weekly momentum</span>
                <span className="text-green-300">+24%</span>
              </div>
              <div className="mt-3 h-24 rounded-lg bg-[linear-gradient(135deg,rgba(251,146,60,0.45),rgba(16,185,129,0.35))] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_100%]"></div>
                <div className="absolute bottom-0 left-0 h-16 w-full bg-[linear-gradient(120deg,rgba(14,165,233,0.6),rgba(255,255,255,0.2))] opacity-70"></div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-white/10 p-4 border border-white/10">
              <div>
                <p className="text-xs text-white/60">Active experiments</p>
                <p className="text-lg font-semibold text-white">8 running</p>
              </div>
              <span className="text-xs text-white/70">G.R.O.W.S loop</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto pb-12">
        <div className="flex items-center justify-center gap-4 text-sm text-blue-200 font-medium mb-6">
          <span className="text-2xl">❤️</span>
          <span>Trusted by 40+ teams around the world who play to win</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          {companies.map((company) => (
            <span key={company} className="text-lg md:text-2xl font-bold text-white tracking-tight">
              {company}
            </span>
          ))}
        </div>
        <p className="text-blue-200/80 text-xs mt-6 text-center">
          Firms that adopt experimentation see a 30% to 100% improvement in performance in just one year.
        </p>
      </div>
    </section>
  );
}

// --- 2. Persuasion Layer (Outcomes & Proof) ---
function ResultsLayer() {
  const stats = [
    { value: "52%", label: "Reduction in CPA (TikTok Ads)", icon: TrendingUp },
    { value: "$4M+", label: "Annual Ad Spend Managed", icon: BarChart3 },
    { value: "86%", label: "Reduction in Revenue Churn", icon: CheckCircle2 },
    { value: "5x", label: "Faster Campaign Launch (AI)", icon: Zap },
  ];

  const proofPoints = [
    "Multi-million dollar budgets managed with ROI discipline.",
    "Full-funnel optimization across acquisition, activation, and retention.",
    "Fast experimentation cycles with clear, measurable outcomes.",
  ];

  return (
    <section id="case-studies" className="section-padding bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              Results that compound over time
            </h2>
            <p className="text-body mb-6">
              Most marketers talk about clicks. I focus on revenue, retention, and scaling efficiency with a system
              built for compounding gains.
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
              Explore case studies <ArrowRight size={16} />
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
  const steps = [
    {
      number: "01",
      title: "Audit & Analysis",
      icon: Search,
      description: "Deep dive into your current marketing stack, tracking setup, and funnel performance to identify gaps.",
    },
    {
      number: "02",
      title: "Foundational Strategy",
      icon: Target,
      description: "Develop strategic assets to ensure the success of the G.R.O.W.S process implementation.",
    },
    {
      number: "03",
      title: "Launch G.R.O.W.S",
      icon: Rocket,
      description: "Curate high-impact ideas, prioritize concepts, launch A/B tests, learn from data, and scale winners.",
    },
    {
      number: "04",
      title: "Optimize & Report",
      icon: LineChart,
      description: "Continuous improvement through data analysis, creative iteration, and transparent ROI reporting.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">How It Works</h2>
            <p className="text-body">
              A structured loop that blends strategy, execution, and experimentation. Built for speed, clarity, and
              measurable momentum.
            </p>
            <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-600">
                Typical kickoff in 7-10 days with a sprint cadence that keeps your growth engine moving.
              </p>
            </div>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-6 hover:text-blue-500"
            >
              Read the methodology <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-slate-200 pl-6 space-y-8">
              {steps.map((step) => (
                <li key={step.number} className="relative">
                  <span className="absolute -left-[14px] top-1 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </span>
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                    </div>
                    <p className="text-sm text-body leading-relaxed">{step.description}</p>
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
  const benefits = [
    {
      title: "Full-Funnel Engineering",
      desc: "I don’t just run ads. I fix tracking (GA4/Server-side), optimize landing page CRO, and align creatives. A broken funnel kills the best ads.",
      icon: Target,
    },
    {
      title: "The T-Shaped Advantage",
      desc: "A rare mix of marketing and data depth lets me analyze, launch, optimize, and scale across channels quickly and independently.",
      icon: Code2,
    },
    {
      title: "Profit-First Scaling",
      desc: "Scaling isn’t just spending more. It’s about maintaining unit economics and pushing budget only when LTV:CAC supports it.",
      icon: Database,
    },
  ];

  const skills = [
    {
      area: "Growth Channels",
      items: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "SEO"],
    },
    {
      area: "Technical & Data",
      items: ["Python", "SQL", "GA4 & GTM", "HTML/CSS/JS", "Next.js"],
    },
    {
      area: "Strategy",
      items: ["CRO", "Unit Economics", "Retention/Churn", "Marketing Automation", "AI Agents"],
    },
  ];

  const [primaryBenefit, ...secondaryBenefits] = benefits;
  const PrimaryIcon = primaryBenefit.icon;

  return (
    <section className="section-padding bg-secondary/40 border-y border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-2">Your growth engine, end-to-end</h2>
            <p className="text-body max-w-2xl">
              Strategy, experimentation, and execution built around sustainable growth. Everything ties back to your
              North Star metric.
            </p>
          </div>
          <Link
            href="/tools/t-shaped-marketer-tool"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center gap-1"
          >
            View Interactive Map <ArrowRight size={14} />
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
              <h3 className="text-2xl font-bold mb-2 text-white">My T-Shaped Stack</h3>
              <p className="text-blue-100 text-sm mb-6">
                Bridging marketing, data, and engineering to move faster across the funnel.
              </p>
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
              <h4 className="text-lg font-bold text-heading mb-2">Playbooks & Experimentation</h4>
              <p className="text-sm text-body">
                Every experiment is documented and turned into playbooks for faster onboarding, clearer learning, and
                smarter iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 3. Qualification Layer (FAQ & CTA) ---
function FaqSection() {
  const faqs = [
    {
      q: "What exactly do you help with?",
      a: "I manage the full growth system—ad strategy, media buying, tracking (GA4/server-side), creative optimization, landing page CRO, and experimentation.",
    },
    {
      q: "Is this just performance marketing, or full growth strategy?",
      a: "It's full-funnel growth. I go beyond ads to align acquisition, activation, retention, and referral with your business goals using proven frameworks like G.R.O.W.S.",
    },
    {
      q: "What budgets do you work with?",
      a: "I deliver the best impact for companies spending between $10k - $200k/month on ads who want to scale efficiently and learn fast.",
    },
    {
      q: "How fast can we launch?",
      a: "With my pre-built AI agents and growth frameworks, we can typically audit, fix tracking, and launch new campaigns within 7–10 days.",
    },
    {
      q: "Do I need in-house resources to work with you?",
      a: "Not necessarily. I can run end-to-end or plug into your team. I handle setup, tracking, creatives, execution, and reporting.",
    },
    {
      q: "Do you work as a freelancer or agency?",
      a: "Think of me as your external growth partner—with the flexibility of a freelancer and the process of a well-run growth team.",
    },
    {
      q: "How do you measure success?",
      a: "Every project starts with your main KPI—CAC, ROAS, LTV, conversion rate, etc.—and we track progress through weekly reporting.",
    },
    {
      q: "Are there long-term contracts?",
      a: "No. I work in flexible sprints or month-to-month retainers. You stay because it works—not because you're locked in.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-heading text-center mb-12">
          Common Questions
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
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center border-t border-slate-100">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Ready to scale past your current plateau?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          I only take on 2 new growth projects per quarter to ensure maximum
          focus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://calendly.com/gabriel-growwithzamp/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-xl group"
          >
            Book a Growth Call
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

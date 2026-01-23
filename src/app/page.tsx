import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Zap,
  Code2,
  Database,
  Users,
  Target,
} from "lucide-react";

// --- 1. Visual Hierarchy Layer (Hero) ---
function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new growth projects
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          I Turn Marketing Budgets Into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Predictable Revenue Engines.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Growth Marketer & Engineer managing <strong>$4M+/year</strong> in ad
          spend. I help companies scale profit with data-driven creative
          strategies. Not guesswork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"
          >
            Get a Growth Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#case-studies"
            className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-medium flex items-center transition-all"
          >
            See Results
          </Link>
        </div>

        {/* Mini Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-3 text-sm text-zinc-500">
          <div className="flex -space-x-3">
            {[2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden relative"
              >
                <Image
                  src={`/img/gabriel-zamp-${i}.png`}
                  fill
                  className="object-cover"
                  alt="Client"
                />
              </div>
            ))}
          </div>
          <p>Trusted by growth leaders in US & Canada</p>
        </div>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </section>
  );
}

function SocialProof() {
  const companies = [
    "Interactive Financial",
    "Wishpond",
    "Lift Ventures",
    "Conversion Experts",
  ];

  return (
    <section className="py-10 border-y border-zinc-900 bg-black/50">
      <div className="container px-4 mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest text-zinc-600 uppercase mb-8">
          Driving Growth For
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <span
              key={company}
              className="text-xl md:text-2xl font-bold text-zinc-300"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 2. Persuasion Layer (Results & Benefits) ---
function ResultsLayer() {
  const stats = [
    { value: "52%", label: "Reduction in CPA (TikTok Ads)", icon: TrendingUp },
    { value: "$4M+", label: "Annual Ad Spend Managed", icon: BarChart3 },
    { value: "86%", label: "Reduction in Revenue Churn", icon: CheckCircle2 },
    { value: "5x", label: "Faster Campaign Launch (AI)", icon: Zap },
  ];

  return (
    <section id="case-studies" className="py-24 bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Results That Matter.{" "}
            <span className="text-blue-500">Not Just Vanity Metrics.</span>
          </h2>
          <p className="text-zinc-400">
            Most marketers talk about "clicks". I talk about revenue, retention,
            and scaling efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-colors group"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const benefits = [
    {
      title: "Full-Funnel Engineering",
      desc: "I don't just run ads. I fix the tracking (GA4/Server-side), optimize the landing page CRO, and align the creatives. A broken funnel kills the best ads.",
      icon: Target,
    },
    {
      title: "The T-Shaped Advantage",
      desc: "My background in Information Science means I can code custom scripts, automate reporting with SQL/Python, and build AI agents to scale faster than humanly possible.",
      icon: Code2,
    },
    {
      title: "Profit-First Scaling",
      desc: "Scaling isn't just spending more. It's about maintaining unit economics. I use LTV:CAC ratios to determine exactly when and where to push the budget.",
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-blue-400">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TShapedSection() {
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
      items: [
        "CRO",
        "Unit Economics",
        "Retention/Churn",
        "Marketing Automation",
        "AI Agents",
      ],
    },
  ];

  return (
    <section className="py-24 border-y border-zinc-900 bg-zinc-950/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              My T-Shaped Skill Stack
            </h2>
            <p className="text-zinc-400">
              Bridging the gap between Marketing, Data, and Engineering.
            </p>
          </div>
          <Link
            href="/tools/t-shaped-marketer-tool"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
          >
            View Interactive Map <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"
            >
              <h4 className="text-white font-semibold mb-4 border-b border-zinc-800 pb-2">
                {category.area}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs border border-zinc-700"
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
  const faqs = [
    {
      q: "Do you only do ads?",
      a: "No. I manage the entire growth loop: Ad Creative Strategy, Media Buying, Tracking/Analytics Setup, and Landing Page CRO.",
    },
    {
      q: "What budgets do you work with?",
      a: "I deliver the best impact for companies spending between $10k - $200k/month on ads who want to scale efficiently.",
    },
    {
      q: "How fast can we launch?",
      a: "With my pre-built AI agents and growth frameworks, we can typically audit, fix tracking, and launch new campaigns within 7-10 days.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.q}
              </h3>
              <p className="text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-zinc-900 to-black text-center border-t border-zinc-800">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to scale past your current plateau?
        </h2>
        <p className="text-xl text-zinc-400 mb-10">
          I only take on 2 new growth projects per quarter to ensure maximum
          focus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center hover:bg-zinc-200 transition-colors"
          >
            Book a Growth Call
          </Link>
          <a
            href="mailto:gabriel@gabrielzamp.com"
            className="h-14 px-10 rounded-full bg-transparent border border-zinc-700 text-white font-semibold text-lg flex items-center justify-center hover:bg-zinc-900 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30">
      <Hero />
      <SocialProof />
      <ResultsLayer />
      <ValueProposition />
      <TShapedSection />
      <FaqSection />
      <ContactCTA />
    </main>
  );
}

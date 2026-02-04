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
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- 1. Visual Hierarchy Layer (Hero) ---
function Hero() {
  const companies = [
    "Interactive Financial",
    "Wishpond",
    "Lift Ventures",
    "Conversion Experts",
    "Westpac", 
    "Expedia"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto text-center relative z-10 max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
          I Turn Marketing Budgets Into <br className="hidden md:block" />
          Predictable Revenue Engines
          <span className="text-brand-orange inline-block ml-2 align-top text-4xl md:text-6xl">
            ✨  
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Growth Marketer & Engineer managing <strong>$4M+/year</strong> in ad
          spend. See what people want, fix what holds you back, and track your growth—that&apos;s what a marketing platform should do.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="h-14 px-10 text-lg shadow-xl bg-brand-orange hover:bg-orange-600 text-white border-0 font-bold rounded-md group">
            <Link href="/contact" className="flex items-center gap-2">
              Book a Growth Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mini Social Proof */}
        <div className="flex items-center justify-center gap-4 text-sm text-blue-200 font-medium mb-16">
          <div className="flex items-center gap-2">
             <span className="text-2xl">❤️</span>
             <span>Trusted by <strong>20,000+</strong> marketers</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-400"></div>
          <div className="max-md:hidden">
              Joined in the last 7 days
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
            Marketers at 44% of the Fortune 500 use these strategies to stay ahead.
         </p>
      </div>
    </section>
  );
}


// SocialProof component removed as it is now integrated into Hero

// --- 2. Persuasion Layer (Results & Benefits) ---
function ResultsLayer() {
  const stats = [
    { value: "52%", label: "Reduction in CPA (TikTok Ads)", icon: TrendingUp },
    { value: "$4M+", label: "Annual Ad Spend Managed", icon: BarChart3 },
    { value: "86%", label: "Reduction in Revenue Churn", icon: CheckCircle2 },
    { value: "5x", label: "Faster Campaign Launch (AI)", icon: Zap },
  ];

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            Results That Matter.{" "}
            <span className="text-blue-600">Not Just Vanity Metrics.</span>
          </h2>
          <p className="text-body">
            Most marketers talk about &quot;clicks&quot;. I talk about revenue, retention,
            and scaling efficiency.
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
    <section className="py-20 border-y border-border bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              My T-Shaped Skill Stack
            </h2>
            <p className="text-slate-600">
              Bridging the gap between Marketing, Data, and Engineering.
            </p>
          </div>
          <Link
            href="/tools/t-shaped-marketer-tool"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center gap-1"
          >
            View Interactive Map <ArrowRight size={14} />
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
            href="/contact"
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
      <ValueProposition />
      <TShapedSection />
      <FaqSection />
      <ContactCTA />
    </main>
  );
}

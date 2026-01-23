import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  LineChart,
  Target,
  Zap,
} from "lucide-react";

// --- Components ---

function CaseStudyHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      <div className="container px-4 mx-auto text-center z-10 relative">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Growth
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Real problems, technical solutions, and audited results. <br />
          No fluff—just the mechanics of how we scaled revenue.
        </p>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </section>
  );
}

function CaseStudy1() {
  return (
    <section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context & Challenge */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <Bot size={14} /> AI & Automation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Scaling Auto Finance Leads with AI Agents
            </h2>
            <div className="text-lg text-zinc-300 font-medium mb-6">
              Interactive Financial Marketing Group
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              **The Challenge:** Launching search campaigns for new car
              inventory was too slow manually, and TikTok ads were bleeding
              money with a $5.00 CPL.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-1">Before CPL</div>
                <div className="text-2xl font-mono text-red-400">$5.00</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-1">Launch Speed</div>
                <div className="text-2xl font-mono text-red-400">2 Days</div>
              </div>
            </div>
          </div>

          {/* Right: The Solution (Technical) */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  01
                </span>
                The AI Agent Solution
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                I built a custom AI agent (using Python & LLMs) that automates
                the creation of Google Search campaigns. It reads the car
                inventory feed and auto-generates keywords, ad copy, and
                campaign structures.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span> Campaign
                launch time dropped from days to minutes (5x faster), allowing
                us to capture demand instantly.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  02
                </span>
                TikTok Creative Restructuring
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                We stopped treating TikTok like Facebook. I implemented a
                creative testing framework focused on "UGC-style" native content
                and aggressive A/B testing of hooks.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span> CPL
                dropped from $5.00 to <strong>$2.40</strong> (-52%), unlocking
                TikTok as a scalable channel.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-blue-500/30 rounded-xl">
              <div className="text-sm text-blue-400 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                52% Reduction in CPL
              </div>
              <div className="text-zinc-400 text-sm">
                Plus 5x faster speed-to-market with AI automation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy2() {
  return (
    <section className="py-20 border-t border-zinc-900 bg-black">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="md:order-2 sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6">
              <LineChart size={14} /> SaaS Economics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tripling ARPU & Fixing Churn
            </h2>
            <div className="text-lg text-zinc-300 font-medium mb-6">
              Wishpond (TSXV:WISH)
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              **The Challenge:** The company needed to increase MRR without just
              "spending more on ads". We needed to squeeze more revenue from
              existing users and stop them from leaving.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-1">Metric Focus</div>
                <div className="text-xl font-bold text-white">LTV:CAC</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-1">Target</div>
                <div className="text-xl font-bold text-white">Retention</div>
              </div>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="md:order-1 space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  01
                </span>
                The Upsell Growth Loop
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                Implemented a new SaaS business model focused on "outcome-based"
                upselling rather than just feature gating. We identified
                high-usage users and triggered automated upsell offers.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span> ARPU
                (Average Revenue Per User) skyrocketed by <strong>406%</strong>.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  02
                </span>
                Churn Prevention Framework
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                Deployed a Customer Success framework that flagged "at-risk"
                accounts based on usage drops. We launched personalized
                retention campaigns before they even cancelled.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span> Revenue
                Churn reduced by <strong>86%</strong>.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-900/20 to-zinc-900 border border-purple-500/30 rounded-xl">
              <div className="text-sm text-purple-400 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                406% Increase in ARPU
              </div>
              <div className="text-zinc-400 text-sm">
                And 10% total MRR growth from optimization alone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy3() {
  return (
    <section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6">
              <BarChart3 size={14} /> Data & Analytics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Scale & Tracking for 3M+ Users
            </h2>
            <div className="text-lg text-zinc-300 font-medium mb-6">
              Lift Ventures
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              **The Challenge:** Managing scale for a massive user base (3M+).
              The data was messy, and we needed to prove that paid ads (PPC)
              could be a sustainable, profitable channel, not just a cost
              center.
            </p>
          </div>

          {/* Right: Solution */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  01
                </span>
                Advanced GA4 Implementation
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                Led the migration and customization of Google Analytics 4 across
                3 products. This wasn't just basic tracking; we set up custom
                events to track user behavior deeply for over 3 million monthly
                users.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span>{" "}
                Actionable data that allowed us to kill wasted spend.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm border border-zinc-700">
                  02
                </span>
                Scientific A/B Testing
              </h3>
              <p className="text-zinc-400 leading-relaxed pl-10 border-l border-zinc-800 ml-4 pb-4">
                Collaborated with Conversion Rate Experts to run rigorous
                pricing and messaging tests. We managed Google Ads with a focus
                on incremental lift.
                <br />
                <br />
                <span className="text-white font-medium">Result:</span> 18%
                improvement in ROAS and established PPC as a channel driving 25%
                of new revenue.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-900/20 to-zinc-900 border border-green-500/30 rounded-xl">
              <div className="text-sm text-green-400 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                18% ROAS Improvement
              </div>
              <div className="text-zinc-400 text-sm">
                PPC became a sustainable 25% revenue driver.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASecton() {
  return (
    <section className="py-24 border-t border-zinc-900 bg-black text-center">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Want results like these?
        </h2>
        <p className="text-zinc-400 mb-8">
          I apply this same engineering mindset to every project I take on.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-14 px-10 rounded-full bg-white text-black font-bold text-lg items-center justify-center hover:bg-zinc-200 transition-colors"
        >
          Book a Growth Audit
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30">
      <CaseStudyHero />
      <CaseStudy1 />
      <CaseStudy2 />
      <CaseStudy3 />
      <CTASecton />
    </main>
  );
}

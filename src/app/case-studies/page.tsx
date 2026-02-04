import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  LineChart,
  TrendingUp,
  Users,
} from "lucide-react";

// --- Components ---

function CaseStudyHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue text-white">
      <div className="container px-4 mx-auto text-center relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Real Results.{" "}
          <span className="text-blue-200">
            Real Growth.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
          Data-driven case studies from scaling multi-million dollar budgets across US, Canada, and Europe.
        </p>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
    </section>
  );
}

// Case Study 1: InterActive Financial - TikTok Ads
function CaseStudy1() {
  return (
    <section className="section-padding border-t border-border bg-muted/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context & Challenge */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6">
              <Bot size={14} /> AI & Paid Media
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Cutting CPL, Increasing RPL, and Launching Faster
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              InterActive Financial Marketing Group
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>The Challenge:</strong> Managing $4M+ in lead generation spend for auto finance across Google, Microsoft, and TikTok Ads. TikTok campaigns were hemorrhaging budget with a $5.00+ CPL while competitors were acquiring leads at half that cost.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Before CPL</div>
                <div className="text-2xl font-mono text-red-500">$5.00+</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Campaign Launch</div>
                <div className="text-2xl font-mono text-red-500">2 Days</div>
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
                Complete TikTok Account Restructure
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Ran comprehensive A/B tests on creative formats, audience segments, and bidding strategies. Identified that user-generated content (UGC) style ads with direct CTAs outperformed polished brand content by 3x.
                <br />
                <br />
                Restructured campaigns around winning creative patterns and implemented systematic creative testing framework.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> CPL dropped from $5.00 to $2.40 (-52%) within 6 weeks.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                AI-Powered Campaign Automation
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Built a custom AI agent using Python and LLMs to automate Google Search campaign creation. The agent reads new car inventory feeds and auto-generates keywords, ad copy, and campaign structures.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Campaign launch time dropped from 2 days to 4 hours (5x faster), capturing demand immediately.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                RPL-Based Geo-Targeting
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Implemented audience segmentation based on Revenue Per Lead (RPL) metrics. Analyzed which geographic regions converted at higher rates and adjusted bids accordingly.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> RPL increased by 30% through strategic geo-targeting.
              </p>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                52% CPL Reduction + 5x Faster Launches
              </div>
              <div className="text-slate-600 text-sm">
                Saved budget on lowering cost per lead while improving lead revenue and time-to-market.
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
  return (
    <section className="section-padding border-t border-border bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-6">
              <Users size={14} /> SaaS Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              86% Churn Reduction Through Growth Marketing
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              Wishpond (TSXV:WISH)
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>The Challenge:</strong> A publicly-traded SaaS company ($20M+ ARR) was bleeding revenue with high monthly churn. Users weren't seeing value fast enough, and onboarding was broken.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Monthly Churn</div>
                <div className="text-2xl font-mono text-red-500">High</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">ARPU</div>
                <div className="text-2xl font-mono text-red-500">Low</div>
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
                Onboarding Flow Redesign
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Collaborated with Product and Customer Success teams to completely redesign onboarding. Implemented progressive onboarding with milestone-based activation triggers and in-app guidance.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Active users grew by 47% as more users reached "aha moment" faster.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                Subscription Model Optimization
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Designed and implemented a new subscription-based pricing model with strategic upsell triggers. Created data-driven upgrade paths based on usage patterns and feature engagement.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Average Revenue Per User (ARPU) increased by 406%.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                Customer Success Framework
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Deployed personalized account management system with automated retention campaigns targeting at-risk accounts. Built churn prediction model to proactively intervene.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Revenue churn decreased by 86%.
              </p>
            </div>

            <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl">
              <div className="text-sm text-purple-600 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                86% Churn Reduction + 406% ARPU Increase
              </div>
              <div className="text-slate-600 text-sm">
                Plus 10% MRR growth and 47% increase in Active Users.
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
  return (
    <section className="section-padding border-t border-border bg-muted/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-bold mb-6">
              <TrendingUp size={14} /> PPC & Scale
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              1,300% Sales Increase via Google Ads Optimization
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              Lift Ventures
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>The Challenge:</strong> A startup studio with 7+ products and 10M+ users needed to prove that paid advertising could be a sustainable revenue engine, not just a cost center.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Monthly Sales</div>
                <div className="text-2xl font-mono text-red-500">Flat</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">ROAS</div>
                <div className="text-2xl font-mono text-red-500">Negative</div>
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
                Advanced GA4 Implementation
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Championed the migration and customization of Google Analytics 4 across 3 products serving 3M+ monthly users. Implemented custom events for deep behavioral tracking and conversion attribution.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Actionable data infrastructure that eliminated wasted spend.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                Scientific A/B Testing with CRO Experts
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Collaborated with Conversion Rate Experts (CRE) consultants to run rigorous pricing and messaging tests. Managed Google Ads with a focus on incremental lift, not vanity metrics.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> 18% improvement in ROAS through data-driven optimization.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                Campaign Scale & Optimization
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Systematically scaled winning campaigns while ruthlessly cutting underperformers. Established PPC as a sustainable channel through continuous optimization cycles.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> 1,300% increase in monthly sales. Google Ads became 25% of new revenue.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
              <div className="text-sm text-green-600 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                1,300% Sales Growth + 18% ROAS Improvement
              </div>
              <div className="text-slate-600 text-sm">
                Established PPC as sustainable channel driving 25% of revenue.
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
  return (
    <section className="section-padding border-t border-border bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-6">
              <BarChart3 size={14} /> International Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              287% PPC Revenue Growth + 473K Organic Users
            </h2>
            <div className="text-lg text-body font-medium mb-6">
              Hostinger International
            </div>
            <p className="text-body leading-relaxed mb-6">
              <strong>The Challenge:</strong> Europe's fastest-growing web hosting company needed to scale PPC revenue in 20+ countries while simultaneously building organic traffic foundation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Countries</div>
                <div className="text-2xl font-mono text-blue-600">20+</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-sm text-slate-400 mb-1">Quarterly Budget</div>
                <div className="text-2xl font-mono text-blue-600">$1M+</div>
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
                Multi-Country PPC Management
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Collaborated on managing $1M+ quarterly PPC budget across 20+ countries. Managed Paid Search, Display, Video, and Social Ads campaigns for the Brazilian branch.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> 287% growth in monthly PPC revenue within one year.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  02
                </span>
                Strategic SEO & Content
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Ran comprehensive keyword research and coordinated SEO projects including technical audits, on-page optimizations, and link building campaigns.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Generated over 473,000 new monthly organic users.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm border border-border">
                  03
                </span>
                Global Expansion Strategy
              </h3>
              <p className="text-body leading-relaxed pl-10 border-l border-border ml-4 pb-4">
                Accelerated PPC global expansion into 9+ new countries by launching accounts and conducting market research for budget allocation and creative localization.
                <br />
                <br />
                <span className="text-heading font-medium">Result:</span> Successfully entered 9 new markets with profitable CAC.
              </p>
            </div>

            <div className="p-6 bg-orange-50 border border-orange-100 rounded-xl">
              <div className="text-sm text-orange-600 font-bold mb-2 uppercase tracking-wider">
                Final Impact
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                287% PPC Growth + 473K Organic Users
              </div>
              <div className="text-slate-600 text-sm">
                Plus successful expansion into 9 new international markets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding border-t border-border bg-background text-center">
      <div className="container px-4 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-heading mb-6">
          Want results like these?
        </h2>
        <p className="text-body mb-8">
          I apply the same data-driven approach and growth frameworks to every project.
        </p>
        <Link
          href="https://calendly.com/gabriel-growwithzamp/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 px-10 rounded-md bg-brand-orange text-white font-bold text-lg items-center justify-center hover:bg-orange-600 transition-colors shadow-xl group"
        >
          Book a Growth Call
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

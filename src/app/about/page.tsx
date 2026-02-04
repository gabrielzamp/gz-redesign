import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Zap,
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
              Data-Driven Growth. <br />
              <span className="text-blue-200">
                Proven Results.
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl font-medium">
              A Growth Marketing and Paid Media Specialist with a proven track record of scaling revenue and optimizing multi-million dollar budgets for high-growth companies across the US, Canada, and Europe.
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
                src="/img/gabriel-about.jpg"
                alt="Gabriel Zampieri"
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
    { label: "Years Experience", value: "11+" },
    { label: "Ad Spend Managed", value: "$4M+" },
    { label: "Revenue Growth", value: "1.3K%" },
    { label: "Countries & Regions", value: "US, CA, EU" },
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

function KeyHighlights() {
  const highlights = [
    {
      icon: Target,
      title: "Budget Management",
      desc: "Managed over $4M in lead generation spend across Google, Microsoft, and TikTok Ads.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      desc: "Drove a 1.3K% increase in monthly sales and an 18% ROAS improvement at Lift Ventures.",
      color: "green",
    },
    {
      icon: Users,
      title: "SaaS Optimization",
      desc: "Redesigned onboarding flows at Wishpond, resulting in an 86% decrease in revenue churn.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "SEO Impact",
      desc: "Successfully coordinated SEO initiatives that delivered over 473K new monthly organic users.",
      color: "orange",
    },
  ];

  const colorMap = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
  };

  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading mb-4">Key Highlights</h2>
          <p className="text-body">
            Transforming paid channels into sustainable revenue engines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-100 hover:border-blue-500/50 transition-all hover:shadow-lg group"
            >
              <div className={`w-12 h-12 rounded-lg ${colorMap[item.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const expertise = [
    "PPC (Google/Meta/TikTok)",
    "Growth Marketing",
    "SEO Audits",
    "GA4/GTM Setup",
    "Data Analysis",
    "Lead Generation",
    "A/B Testing",
    "Search Engine Marketing (SEM)",
    "Budget Management",
    "Conversion Rate Optimization (CRO)",
    "Email Marketing",
    "Marketing Automation",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">Core Expertise</h2>
          <p className="text-body">
            Thriving at the intersection of data analysis and creative strategy.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {expertise.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const experiences = [
    {
      company: "InterActive Financial Marketing Group",
      role: "Sr Digital Marketing Strategist",
      period: "Feb 2025 - Nov 2025",
      location: "United States · Remote",
      highlights: [
        "Managed $4M lead generation budget across Google Ads, Microsoft Ads, and TikTok Ads for auto finance and new cars",
        "Restructured TikTok Ads account, leading to a CPL decrease of +50% through A/B testing",
        "Implemented audience segmentation driving RPL up by 30% through tailored geo-targeting",
        "Built an AI Agent that sped up 5x the launching of Search campaigns",
      ],
    },
    {
      company: "Wishpond (TSXV:WISH)",
      role: "Digital Marketing Manager",
      period: "Jan 2023 - Jan 2024",
      location: "Vancouver, BC · Remote",
      highlights: [
        "Spearheaded growth marketing initiatives driving a 10% increase in MRR",
        "Designed subscription-based business model resulting in 406% increase in ARPU",
        "Managed cross-functional collaboration achieving 47% growth in Active Users",
        "Deployed Customer Success framework achieving 86% Revenue Churn reduction",
      ],
    },
    {
      company: "Lift Ventures",
      role: "Performance Marketing Manager",
      period: "Aug 2021 - Jan 2023",
      location: "San Francisco Bay Area",
      highlights: [
        "Managed Google Ads leading a 1.3K% increase in monthly sales with 18% ROAS improvement",
        "Established Google Ads as sustainable channel representing +25% of monthly revenue",
        "Championed Google Analytics implementation in 3 products with +3M monthly users",
        "Collaborated on CRO A/B tests with Product team and CRE consultants",
      ],
    },
    {
      company: "Seasoned",
      role: "Sr Project Manager (Product Owner)",
      period: "Mar 2020 - Aug 2021",
      location: "Remote",
      highlights: [
        "Led team of developers and designers at SuperSummary.com and TheClearCut.com",
        "Led launching phases of a product with +1M monthly users",
        "Conducted feature Discovery with Startup founders and stakeholders",
      ],
    },
    {
      company: "Hostinger International",
      role: "Sr Paid Media Specialist",
      period: "Aug 2017 - Dec 2019",
      location: "Vilnius, Lithuania · Remote",
      highlights: [
        "Collaborated on managing +$1M quarterly PPC budget in +20 countries",
        "Grew monthly PPC revenue by 287% in one year across Paid Search, Display, Video, and Social Ads",
        "Ran keyword research that generated +473K new monthly organic users",
        "Accelerated PPC global expansion strategy for +9 countries",
      ],
    },
    {
      company: "NoxCar",
      role: "Marketing Assistant (Paid Media)",
      period: "Sep 2016 - Sep 2017",
      location: "Florianópolis, Brazil",
      highlights: [
        "Led a 3x online sales growth by implementing full-funnel strategy",
        "Grew monthly Organic traffic from 0 to +10k through Content and SEO strategies",
        "Implemented Sales Funnel process using CRM and training for +20 sales reps",
      ],
    },
    {
      company: "bn3",
      role: "Digital Marketing Intern",
      period: "Sep 2015 - Oct 2016",
      location: "Florianópolis, Brazil",
      highlights: [
        "4x client's revenue by implementing marketing funnels across Meta Ads and Email",
        "Developed funnel strategies for +20 SMB clients",
        "Managed team of copywriters, designers, and account managers for +10 clients",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-600" /> Career Journey
        </h2>

        <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-8 relative">
              {/* Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white"></div>

              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded mt-2 sm:mt-0 inline-block">
                    {exp.period}
                  </span>
                </div>
                <div className="text-blue-600 font-semibold mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
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
                Bridging technical execution and high-level business strategy.
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
                Emphasis on Data Analysis (Python, SQL) and Startup Business Models.
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
          Ready to scale your revenue?
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          I&apos;m currently open for new growth projects and consulting engagements.
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
      <KeyHighlights />
      <ExpertiseSection />
      <ExperienceTimeline />
      <Education />
      <FinalCTA />
    </main>
  );
}

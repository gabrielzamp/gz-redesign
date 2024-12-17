"use client";
import { ArrowUpRight, Mail, Linkedin, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Achievement {
  metric: string;
  description: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

const achievements: Achievement[] = [
  {
    metric: "$1M+",
    description: "Revenue generated for tech companies",
  },
  {
    metric: "5M+",
    description: "New users acquired",
  },
  {
    metric: "9+",
    description: "Years of digital marketing experience",
  },
  {
    metric: "20+",
    description: "Countries managed in campaigns",
  },
];

const skillCategories: SkillCategory[] = [
  {
    name: "Marketing Digital",
    skills: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "SEO",
      "PPC",
      "Analytics",
      "Growth Strategy",
      "Email Marketing",
      "Web Analytics",
      "Content Strategy",
      "Marketing Automation",
    ],
  },
  {
    name: "Product Management",
    skills: [
      "Product Strategy",
      "User Research",
      "A/B Testing",
      "Agile Management",
      "Product Discovery",
      "Data Analysis",
      "CRO",
      "User Journey Mapping",
    ],
  },
  {
    name: "Development",
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "SQL",
    ],
  },
];

const allExperiences: Experience[] = [
  {
    period: "Dec 2023 - Present",
    role: "Jr. Front-end Engineer",
    company: "Simoa",
    location: "São Paulo, Brazil",
    description: [
      "Designed front-end code using NextJS, React, HTML, CSS, and JavaScript",
      "Developed reusable components using React, NextJS, and Typescript",
      "Integrated front-end web application with back-end endpoints",
    ],
  },
  {
    period: "Feb 2023 - Dec 2023",
    role: "Digital Marketing Manager",
    company: "Wishpond",
    location: "Vancouver, Canada",
    description: [
      "Implemented a new business model leading to a 406% increase in ARPU",
      "Led Marketing, Product, and Customer Success teams driving a 47% growth in Active Users",
      "Raised app ratings on the Shopify Store from 3.5 to 4.0",
      "Achieved 86% Revenue Churn reduction through Customer Success implementation",
      "Launched growth marketing projects leading to a 10% increase in the MRR",
    ],
  },
  {
    period: "Jan 2018 - Dec 2023",
    role: "Digital Marketing Consultant",
    company: "Gabriel Zamp - Marketing Digital",
    location: "Remote",
    description: [
      "Paid Media: Strategy, Google Ads, Meta Ads, and LinkedIn Ads",
      "SEO: Strategy, SEO Audit, Keyword Research, Content, On-Page, and Off-Page",
      "Web Analytics: Strategy, Google Analytics, Google Tag Manager, and Google Data Studio",
      "Email Marketing: Strategy, Newsletter, Promotional, and Lead Nurturing",
    ],
  },
  {
    period: "Jun 2022 - Jan 2023",
    role: "Performance Marketing Manager",
    company: "Lift Ventures",
    location: "San Francisco Bay Area",
    description: [
      "Managed Google Ads leading a 1.3K% increase in monthly sales with an 18% improvement in ROAS",
      "Established Google Ads as a sustainable channel representing +25% of monthly new income revenue",
      "Implemented Google Analytics in 3 products with +3M monthly users",
      "Collaborated on CRO A/B tests with the Product team",
    ],
  },
  {
    period: "Jul 2020 - Aug 2021",
    role: "Product Owner",
    company: "Seasoned",
    location: "Remote",
    description: [
      "Led a team of developers and designers at SuperSummary.com and TheClearCut.com",
      "Collaborated in launching and post-launching phases of a product with +1M monthly users",
      "Led the Discovery of new features with Startup founders and multiple stakeholders",
    ],
  },
  {
    period: "Aug 2017 - Dec 2019",
    role: "Paid Media Specialist",
    company: "Hostinger International",
    location: "Vilnius, Lithuania",
    description: [
      "Collaborated on managing a +1M dollar paid media budget in +20 countries",
      "Grew monthly PPC revenue by 287% in one year",
      "Ran keyword research that generated +473K new monthly organic users",
      "Accelerated PPC global expansion strategy for +9 countries",
    ],
  },
];

const allCertifications: Certification[] = [
  {
    name: "Management of High Performance",
    issuer: "Reforge",
    year: "2022",
  },
  {
    name: "Digital Marketing",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Growth Series",
    issuer: "Reforge",
    year: "2022",
  },
  {
    name: "Growth Marketing",
    issuer: "Reforge",
    year: "2022",
  },
  {
    name: "Ecommerce Analytics: From Data to Decisions",
    issuer: "Coursera",
    year: "2021",
  },
  {
    name: "Microsoft SQL Server",
    issuer: "Microsoft",
    year: "2021",
  },
  {
    name: "Digital Product Management: Modern Fundamentals",
    issuer: "Coursera",
    year: "2021",
  },
];

export default function AboutPage() {
  const [visibleExperiences, setVisibleExperiences] = useState(2);
  const [visibleCertifications, setVisibleCertifications] = useState(3);

  const showMoreExperiences = () => {
    setVisibleExperiences((prev) => Math.min(prev + 2, allExperiences.length));
  };

  const showMoreCertifications = () => {
    setVisibleCertifications((prev) =>
      Math.min(prev + 2, allCertifications.length)
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="px-4 md:px-8 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,400px] gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-muted-foreground">About me</span>, a Growth
              Manager in Brazil
            </h1>
            <p className="text-xl text-muted-foreground">
              Marketing Manager with 9+ years of experience in PPC, SEO, and
              Social Ads. Currently focusing on growth strategies and front-end
              development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="mailto:gabriel@gabrielzamp.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail size={20} /> gabriel@gabrielzamp.com
              </Link>
              <Link
                href="https://linkedin.com/in/gabrielzamp"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={20} /> gabrielzamp
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/img/gabriel-zamp.png"
              alt="Gabriel Zampieri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-4 md:px-8 py-16 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.metric}
                </div>
                <div className="text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-12">
          {allExperiences.slice(0, visibleExperiences).map((exp, i) => (
            <div key={i} className="border-l-2 border-border pl-6">
              <div className="text-sm text-muted-foreground mb-2">
                {exp.period}
              </div>
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <div className="text-muted-foreground mb-4">
                {exp.company} • {exp.location}
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {visibleExperiences < allExperiences.length && (
            <button
              onClick={showMoreExperiences}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mx-auto mt-8"
            >
              Load More <ChevronDown size={20} />
            </button>
          )}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="px-4 md:px-8 py-16 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Skills</h2>
              <div className="space-y-8">
                {skillCategories.map((category, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 bg-background rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <div className="space-y-3">
                {allCertifications
                  .slice(0, visibleCertifications)
                  .map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ArrowUpRight size={16} />
                      <span>{cert.name}</span>
                      <span className="text-sm ml-auto">{cert.year}</span>
                    </div>
                  ))}
                {visibleCertifications < allCertifications.length && (
                  <button
                    onClick={showMoreCertifications}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground mt-4"
                  >
                    Load More <ChevronDown size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Want to work together?
        </h2>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Let&apos;s Talk <ArrowUpRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
}
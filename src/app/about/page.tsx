"use client";
import { ArrowUpRight, Mail, Linkedin, ChevronDown } from "lucide-react";
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
    description: "Revenue generated for  companies",
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
    period: "Feb 2025 - Nov 2025",
    role: "Sr Digital Marketing Strategist",
    company: "Interactive Financial Marketing Group",
    location: "Richmond, VA",
    description: [
      "Managed a $4M lead generation budget across Google Ads, Microsoft Ads, and TikTok Ads",
      "Restructured TikTok Ads to cut CPL from $5 to $2.4 through A/B testing",
      "Implemented audience segmentation based on RPL metrics, increasing RPL by 30% via tailored geo-targeting",
      "Led an SEO audit for a new car website, identifying and resolving 9+ technical issues",
      "Built an AI agent that sped up Search campaign launches by 5x for the new cars vertical",
    ],
  },
  {
    period: "Jan 2023 - Jan 2024",
    role: "Digital Marketing Manager",
    company: "Wishpond (TSXV:WISH)",
    location: "Vancouver, BC",
    description: [
      "Implemented growth loops and systems that drove a 10% increase in MRR",
      "Launched a new SaaS business model with upselling, boosting ARPU by 406%",
      "Led cross-functional collaboration to optimize onboarding and grow Active Users by 47%",
      "Deployed a Customer Success framework with personalized retention campaigns, reducing revenue churn by 86%",
    ],
  },
  {
    period: "Aug 2021 - Jan 2023",
    role: "Performance Marketing Manager",
    company: "Lift Ventures",
    location: "San Diego, CA",
    description: [
      "Partnered with Conversion Rate Experts on A/B testing to refine pricing and messaging",
      "Managed Google Ads to increase monthly sales by 1.3% with an 18% improvement in ROAS",
      "Established PPC as a sustainable channel representing over 25% of new monthly revenue for the top product",
      "Led Google Analytics 4 implementation across three products, enabling insights for 3M+ monthly users",
    ],
  },
  {
    period: "Mar 2020 - Aug 2021",
    role: "Sr Project Manager (Product Owner)",
    company: "Lift Ventures",
    location: "San Diego, CA",
    description: [
      "Collaborated on A/B testing programs to validate new features and pricing",
      "Coordinated cross-functional teams to deliver product improvements tied to revenue goals",
      "Implemented analytics customization to support experimentation and performance tracking",
    ],
  },
];

const allCertifications: Certification[] = [
  {
    name: "Growth Series",
    issuer: "Reforge",
    year: "2022",
  },
  {
    name: "Digital Product Management: Modern Fundamentals",
    issuer: "University of Virginia",
    year: "2020",
  },
  {
    name: "Experimentation Program Management",
    issuer: "CXL",
    year: "2021",
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    year: "2019",
  },
  {
    name: "Project Management with Scrum",
    issuer: "Alura",
    year: "2019",
  },
  {
    name: "Microsoft SQL Server",
    issuer: "Alura",
    year: "2019",
  },
  {
    name: "Ecommerce Analytics: From Data to Decisions",
    issuer: "Google",
    year: "2021",
  },
  {
    name: "Growth Marketing",
    issuer: "Reforge",
    year: "2022",
  },
  {
    name: "Management of High Performance Digital Marketing",
    issuer: "ComSchool",
    year: "2017",
  },

  {
    name: "CLIP: Collaborative Mindset",
    issuer: "Perestroika",
    year: "2020",
  },

  {
    name: "Google Ads Display Certification",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "Google Ads Search Certification",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "Google Ads Video Certification",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "Google Analytics 4",
    issuer: "CXL",
    year: "2019",
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Advanced Google Analytics",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Social Media Certification",
    issuer: "HubSpot",
    year: "2020",
  },
  {
    name: "Inbound Marketing Certified",
    issuer: "HubSpot",
    year: "2020",
  },
  {
    name: "Javascript",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "HTML5 & CSS3",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "React",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "Next.js",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "Tailwind",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "Typescript",
    issuer: "b7web",
    year: "2024",
  },
  {
    name: "Python",
    issuer: "CursoEmVideo",
    year: "2024",
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
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
              <span className="text-muted-foreground">A proud</span> generalist
              from Brazil
            </h1>
            <p className="text-xl text-muted-foreground">
              Versatile Product manager with Silicon Valley and New York startup
              experience, skilled front-end developer, and marketing leader with
              9+ years driving global digital strategies across North America,
              Europe, and Brazil. Uniquely positioned to bridge technical
              implementation, product strategy, and marketing to deliver
              measurable business growth.
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
              src="/img/gabriel-zamp-5.png"
              alt="Gabriel Zampieri"
              fill
              className="object-cover transform scale-x-[-1]"
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
        <div className="max-w-7xl mx-auto px-4">
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

            {/* Education & Certifications Column */}
            <div className="space-y-12">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-border pl-4 py-2">
                    <h3 className="font-semibold mb-1">
                      Master of Business Administration in Marketing, Growth, and
                      Branding
                    </h3>
                    <div className="text-muted-foreground text-sm">
                      Pontifical Catholic University of Rio Grande do Sul • Mar
                      2026
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-2">
                    <h3 className="font-semibold mb-1">
                      Bachelor&apos;s Degree in Information Science
                    </h3>
                    <div className="text-muted-foreground text-sm">
                      Federal University of Santa Catarina • 2018 - 2024
                    </div>
                  </div>
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
                        className="space-y-1 border-l-2 border-border pl-4 py-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{cert.name}</div>
                          <ArrowUpRight
                            size={16}
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4">
                          <span>{cert.issuer}</span>
                          {cert.year && <span>{cert.year}</span>}
                        </div>
                      </div>
                    ))}
                  {visibleCertifications < allCertifications.length && (
                    <button
                      onClick={showMoreCertifications}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground mt-4 mx-auto"
                    >
                      Load More <ChevronDown size={20} />
                    </button>
                  )}
                </div>
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

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutMeSection from "@/components/homepage/about-me-section";

// Types
interface ContentItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface SectionContent {
  title: string;
  items: ContentItem[];
}

interface Content {
  hero: {
    greeting: string;
    title: string;
    emphasisText: string;
    description: string;
  };
  works: SectionContent;
  insights: SectionContent;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

interface CardProps extends ContentItem {
  imageHeight?: string;
}

interface SectionProps extends SectionContent {
  type?: "works" | "insights";
}

// Constants
const CONTENT: Content = {
  hero: {
    greeting: "Hello! I'm Gabriel.",
    title: "Building & scaling businesses as",
    emphasisText: "digital marketeer",
    description:
      "A seasoned, multidisciplinary growth product manager with over 7 years of expertise working globally integrating digital marketing, product strategy, and development to drive business success.",
  },
  works: {
    title: "Previous works",
    items: [
      {
        title: "Simoa",
        description: "Jr. Front-end Engineer",
        imageSrc: "/api/placeholder/600/400",
      },
      {
        title: "Wishpond",
        description: "Marketing Manager",
        imageSrc: "/api/placeholder/600/400",
      },
      {
        title: "Lift Ventures",
        description: "Performance Marketing Manager",
        imageSrc: "/api/placeholder/600/400",
      },
    ],
  },
  insights: {
    title: "Insights",
    items: [
      {
        title: "The Power of Typography in Visual Design",
        description: "Exploring fundamentals and key principles",
        imageSrc: "/api/placeholder/400/300",
      },
      {
        title: "Breaking the User Experience",
        description: "Creating lasting and engaging experiences",
        imageSrc: "/api/placeholder/400/300",
      },
      {
        title: "Mastering the Art of Color Theory",
        description: "A comprehensive guide to color in design",
        imageSrc: "/api/placeholder/400/300",
      },
    ],
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full flex items-center gap-2 px-6 py-3 transition-all";
  const variantStyles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-900"
      : "border border-black hover:bg-black hover:text-white";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageHeight = "h-[280px]",
}) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-2xl mb-6">
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={400}
        className={`w-full transition-transform duration-500 group-hover:scale-105 object-cover ${imageHeight}`}
      />
    </div>
    <h3 className="text-2xl font-medium mb-3">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
);

const Section: React.FC<SectionProps> = ({
  title,
  items,
  type = "insights",
}) => (
  <div className="px-4 md:px-8 py-32 max-w-7xl mx-auto">
    <div className="flex items-center justify-between mb-16">
      <h2 className="text-4xl font-medium">{title}</h2>
      <Button variant="outline">
        View All {type === "works" ? "Works" : "Insights"}{" "}
        <ArrowRight size={20} />
      </Button>
    </div>
    <div
      className={`grid gap-8 ${
        type === "works"
          ? "grid-cols-1 lg:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        <Card
          key={i}
          {...item}
          imageHeight={type === "works" ? "h-[480px]" : "h-[280px]"}
        />
      ))}
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "growth product manager",
    "digital marketing manager",
    "front-end engineer",
    "digital entrepreneur",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 md:px-8 pt-20 md:pt-40 max-w-7xl mx-auto">
      <p className="text-xl mb-6">{CONTENT.hero.greeting}</p>
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl leading-[1.1] tracking-tighter font-semibold mb-12">
            {CONTENT.hero.title}{" "}
            <span className="text-gray-400 transition-all duration-300">
              {phrases[currentPhrase]}
            </span>
          </h1>
          <Button>
            Let's Talk <ArrowRight size={20} />
          </Button>
        </div>
        <p className="text-gray-600 text-xl self-end">
          {CONTENT.hero.description}
        </p>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <AboutMeSection />

      <footer className="px-4 md:px-8 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-medium">
            <span className="text-gray-500">show</span>
            <span>casy.</span>
          </div>
          <div className="text-gray-600 text-lg text-center md:text-right">
            A freelance digital designer and developer
            <br className="hidden md:inline" /> currently based in Munich
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;

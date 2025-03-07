"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AboutMeSection from "@/components/homepage/about-me-section";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

const CONTENT = {
  hero: {
    title: "Building & scaling businesses as",
    description:
      "A seasoned, multidisciplinary growth manager with over 7 years of expertise working globally integrating digital marketing, product strategy, and development to drive business success.",
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
      ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
      : "border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "growth manager",
    "product manager",
    "digital marketing manager",
    "front-end developer",
    "digital entrepreneur",
    "data analyst",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <div className="px-4 md:px-8 pt-20 md:pt-40 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl leading-[1.1] tracking-tighter font-semibold mb-12 dark:text-white">
            {CONTENT.hero.title}{" "}
            <span className="text-gray-400 dark:text-gray-500 transition-all duration-300">
              {phrases[currentPhrase]}
            </span>
          </h1>
          <Link href="/about/">
            <Button>
              Get to know me <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xl self-end">
          {CONTENT.hero.description}
        </p>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <AboutMeSection />
    </main>
  );
};

export default HomePage;

"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AboutMeSection from "@/components/homepage/about-me-section";

// Types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

// Constants
const CONTENT = {
  hero: {
    title: "Building & scaling businesses as",
    description:
      "A seasoned, multidisciplinary growth product manager with over 7 years of expertise working globally integrating digital marketing, product strategy, and development to drive business success.",
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
  }, [phrases.length]); // Added phrases.length as dependency

  return (
    <div className="px-4 md:px-8 pt-20 md:pt-40 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl leading-[1.1] tracking-tighter font-semibold mb-12">
            {CONTENT.hero.title}{" "}
            <span className="text-gray-400 transition-all duration-300">
              {phrases[currentPhrase]}
            </span>
          </h1>
          <Button>
            Let&apos;s Talk <ArrowRight size={20} />
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
            <span className="text-gray-500">gabriel</span>
            <span>zamp.</span>
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

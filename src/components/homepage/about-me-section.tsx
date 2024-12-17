"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ou um loader/skeleton
  }

  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/img/gabriel-zamp.png"
                alt="Designer portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover rounded-3xl"
                quality={100}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-6xl font-semibold leading-[1.1] tracking-tighter">
              Strategies that inspires action and drives revenue
            </h1>
            <p className="text-base text-gray-600">
              Concentrate on your primary objective which is expanding your
              business, and leave it to me to ensure that your business is
              efficiently portrayed in the digital realm and distinguishes
              itself from the rivals.
            </p>
            <p className="text-base text-gray-600">
              I helped tech companies from EUA, Canada, Europe, and Brazil to
              acquire over $1 million in revenue and 5 million new users. With
              9+ years of experience in PPC, SEO, and Web analytics, I am
              well-equipped to help your business succeed creating new
              acquisition channels and optimizing the existing ones.
            </p>
            <button className="group inline-flex items-center gap-2 text-lg font-medium">
              About Me
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col space-y-8">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/img/gabriel-zamp.png"
                alt="Designer portrait"
                fill
                sizes="100vw"
                priority
                className="object-cover rounded-3xl "
                quality={100}
              />
            </div>
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter">
              Strategies that inspires action and drives revenue
            </h1>
            <p className="text-base text-gray-600">
              Concentrate on your primary objective which is expanding your
              business, and leave it to me to ensure that your business is
              efficiently portrayed in the digital realm and distinguishes
              itself from the rivals. I helped tech companies from EUA, Canada,
              Europe, and Brazil to acquire over $1 million in revenue and 5
              million new users. With 9+ years of experience in PPC, SEO, and
              Web analytics, I am well-equipped to help your business succeed
              creating new acquisition channels and optimizing the existing
              ones.
            </p>
            <button className="group inline-flex items-center gap-2 text-base font-medium">
              About Me
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale("en")}
        className={`relative w-8 h-6 rounded overflow-hidden transition-all duration-300 filter ${
          locale === "en" ? "scale-110 shadow-md ring-2 ring-brand-orange" : "opacity-50 hover:opacity-100 grayscale-[50%]"
        }`}
        title="English"
      >
        <Image
          src="https://flagcdn.com/w80/us.png"
          alt="English"
          fill
          className="object-cover"
        />
      </button>
      <button
        onClick={() => setLocale("pt")}
        className={`relative w-8 h-6 rounded overflow-hidden transition-all duration-300 filter ${
          locale === "pt" ? "scale-110 shadow-md ring-2 ring-brand-orange" : "opacity-50 hover:opacity-100 grayscale-[50%]"
        }`}
        title="Português"
      >
        <Image
          src="https://flagcdn.com/w80/br.png"
          alt="Português"
          fill
          className="object-cover"
        />
      </button>
    </div>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const resolveBlogSlug = (targetLocale: "en" | "pt") => {
    if (!pathname.startsWith("/blog/")) {
      return null;
    }

    const slug = pathname.replace("/blog/", "");
    if (!slug || slug.includes("/")) {
      return null;
    }

    const baseSlug = slug.endsWith("-pt-br") ? slug.replace(/-pt-br$/, "") : slug;
    return targetLocale === "pt" ? `${baseSlug}-pt-br` : baseSlug;
  };

  const handleSwitch = (targetLocale: "en" | "pt") => {
    const blogSlug = resolveBlogSlug(targetLocale);
    if (blogSlug && blogSlug !== pathname.replace("/blog/", "")) {
      router.push(`/blog/${blogSlug}`);
      return;
    }
    setLocale(targetLocale);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleSwitch("en")}
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
        onClick={() => handleSwitch("pt")}
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

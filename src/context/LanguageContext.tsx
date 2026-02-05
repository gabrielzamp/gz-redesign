"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../dictionaries/en.json";
import pt from "../dictionaries/pt.json";

type Dictionary = typeof en;
type Locale = "en" | "pt";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any; 
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [dict, setDict] = useState<Dictionary>(en);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load preference from local storage
    const savedLocale = localStorage.getItem("language-preference") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "pt")) {
      setLocaleState(savedLocale);
      setDict(savedLocale === "en" ? en : pt);
    }
    setIsLoaded(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setDict(newLocale === "en" ? en : pt);
    localStorage.setItem("language-preference", newLocale);
  };

  // Helper function to get nested translation values
  const t = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return path.split(".").reduce((obj, key) => (obj as any)?.[key], dict) || path;
  };

  if (!isLoaded) {
    return null; // Prevent hydration mismatch
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

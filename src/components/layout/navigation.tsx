"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Detectar scroll para adicionar fundo "vidro"
  React.useEffect(() => {
    const handleScroll = () => {
      // No current use for isScrolled with fixed blue header
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
   // { name: "Tools", href: "/tools" },
    //{ name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={` top-0 left-0 right-0 z-50 transition-all duration-300 py-3 bg-brand-blue`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-white z-50 hover:text-white/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            grow<span className="text-white/80">.with.</span>zamp
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white/80 ${
                  pathname === link.href ? "text-white" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-orange text-white text-sm font-bold hover:bg-orange-600 transition-all shadow-md group"
            >
              Book a Growth Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav Overlay */}
          <div
            className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-slate-600 hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-orange text-white font-bold text-lg shadow-lg hover:bg-orange-600 transition-colors group"
            >
              Book a Growth Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

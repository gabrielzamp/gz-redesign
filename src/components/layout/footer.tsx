import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Marca & Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-slate-900 mb-4 block">
              grow<span className="text-slate-400">.with.</span>zamp
            </Link>
            <p className="text-slate-600 max-w-sm leading-relaxed mb-6">
              Helping companies scale revenue through
              data-driven experimentation programs and full-funnel optimization.
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://linkedin.com/in/gabrielzamp"
                icon={<Linkedin size={20} />}
              />
              <SocialLink
                href="https://github.com/gabrielzamp"
                icon={<Github size={20} />}
              />
              <SocialLink
                href="mailto:gabriel@gabrielzamp.com"
                icon={<Mail size={20} />}
              />
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/#case-studies" label="Case Studies" />
              {/*<FooterLink
                href="/tools/t-shaped-marketer-tool"
                label="Tools & Resources"
              />*/}
            </ul>
          </div>

          {/* Coluna 3: Legal / Contato */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-slate-600">
              <li>Brazil</li>
              <li>
                <a
                  href="mailto:gabriel@gabrielzamp.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  gabriel@growwithzamp.com
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="https://calendly.com/gabriel-growwithzamp/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                >
                  → Book a Growth Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} Grow With Zamp. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Pequenos componentes auxiliares para limpar o código principal
function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-200"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
      >
        {label}
      </Link>
    </li>
  );
}

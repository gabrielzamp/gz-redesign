import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Marca & Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              gabriel<span className="text-zinc-600">zamp.</span>
            </Link>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6">
              Growth Marketer & Engineer helping companies scale revenue through
              data-driven performance marketing and full-funnel optimization.
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
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Me" />
              <FooterLink href="/#case-studies" label="Case Studies" />
              <FooterLink
                href="/tools/t-shaped-marketer-tool"
                label="Tools & Resources"
              />
            </ul>
          </div>

          {/* Coluna 3: Legal / Contato */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>Florianópolis, Brazil</li>
              <li>
                <a
                  href="mailto:gabriel@gabrielzamp.com"
                  className="hover:text-white transition-colors"
                >
                  gabriel@gabrielzamp.com
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  → Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© {currentYear} Gabriel Zamp. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Pequenos componentes auxiliares para limpar o código principal
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300 border border-zinc-800"
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
        className="text-zinc-400 hover:text-white transition-colors text-sm"
      >
        {label}
      </Link>
    </li>
  );
}

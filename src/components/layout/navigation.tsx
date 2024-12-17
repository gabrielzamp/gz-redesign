"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-medium">
            <Link href="/" className="flex items-center">
              <span className="text-gray-500">show</span>
              <span>casy.</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="#works"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Works
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="#works"
              className="block py-2 text-gray-600 hover:text-black transition-colors"
            >
              Works
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

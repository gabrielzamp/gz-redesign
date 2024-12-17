"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";
import ThemeToggle from "./theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-medium dark:text-white">
            <Link href="/" className="flex items-center font-bold">
              <span className="text-gray-500 dark:text-gray-400">gabriel</span>
              <span>zamp.</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={24} className="dark:text-white" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about/"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact/"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link
              href="/"
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

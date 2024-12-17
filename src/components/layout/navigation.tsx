"use client";
import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", number: "01" },
    { title: "About Me", number: "02" },
    { title: "Works", number: "03" },
    { title: "Insights", number: "04" },
  ];

  const socialLinks = [
    { name: "INSTAGRAM", url: "#" },
    { name: "BEHANCE", url: "#" },
    { name: "TWITTER", url: "#" },
    { name: "DRIBBLE", url: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-6 md:px-8 flex justify-between items-center bg-white">
        {/* Logo */}
        <a
          href="/"
          className={`text-2xl font-medium transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-gray-500">show</span>
          <span>casy.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 border border-black rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
            Let's Talk <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Button - Only show when menu is closed */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Menu size={24} />
        </button>

        {/* Full Screen Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Close Button - Positioned relative to the overlay */}
          <div className="px-4 py-6 md:px-8 flex justify-between items-center">
            <a href="/" className="text-2xl font-medium text-white">
              <span className="text-gray-500">show</span>
              <span>casy.</span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white z-50"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="h-[calc(100%-5rem)] flex flex-col justify-between p-4 md:p-8 text-white">
            {/* Main Navigation */}
            <div className="mt-8">
              {menuItems.map((item) => (
                <div
                  key={item.number}
                  className="group relative py-4 border-b border-gray-800"
                >
                  <a
                    href={`#${item.title.toLowerCase()}`}
                    className="flex items-center justify-between text-3xl md:text-5xl font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                    <span className="text-gray-500 text-lg md:text-xl">
                      {item.number}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Footer Section */}
            <div className="pb-8">
              <div className="mb-8">
                <h3 className="text-gray-500 mb-4">Follow me.</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                    >
                      {social.name} <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-500 mb-4">Stay connected w/ me.</h3>
                <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full focus:outline-none text-white placeholder:text-gray-500"
                  />
                  <button className="text-white">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

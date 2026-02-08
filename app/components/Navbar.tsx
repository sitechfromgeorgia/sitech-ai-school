"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "კურსები", href: "#courses" },
    { name: "ფუნქციები", href: "#features" },
    { name: "მენტორობა", href: "#mentorship" },
    { name: "ფასები", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-cyan-900/10" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter group relative transition-all duration-300">
          SiTech<span className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300">.AI</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" 
                style={{ transition: 'width 0.4s var(--ease-smooth)' }}></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover-line"
              style={{ transition: 'color 0.3s var(--ease-smooth)' }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://t.me/SiTechagencybot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/20 hover:border-white/20 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            style={{ transition: 'all 0.4s var(--ease-smooth)' }}
          >
            შესვლა
          </Link>
          <Link
            href="/courses/ai-automation"
            className="relative px-5 py-2 rounded-full bg-cyan-600 text-white text-sm font-medium overflow-hidden group shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] shine-onsus"
            style={{ transition: 'all 0.4s var(--ease-elegant)' }}
          >
            <span className="relative z-10">დაწყება</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-white py-2 border-b border-white/5 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Link
              href="https://t.me/SiTechagencybot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              შესვლა
            </Link>
            <Link
              href="/courses/ai-automation"
              className="text-center py-3 rounded-lg bg-cyan-600 text-white font-medium shadow-lg shadow-cyan-500/20"
              onClick={() => setIsOpen(false)}
            >
              დაწყება
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

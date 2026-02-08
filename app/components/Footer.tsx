"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 inline-block hover:scale-105 transition-transform" style={{ transition: 'transform 0.3s var(--ease-smooth)' }}>
            SiTech AI სკოლა
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            ვქმნით AI-ზე ორიენტირებული დეველოპერებისა და სტრატეგების ახალ თაობას.
            შემოგვიერთდით მომავლის ინსტრუმენტების დასაუფლებლად.
          </p>
          
          {/* Newsletter Form */}
          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4 text-sm">სიახლეების გამოწერა</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="თქვენი ელ-ფოსტა"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 backdrop-blur-sm"
                style={{ 
                  transition: 'all 0.3s var(--ease-smooth)',
                  boxShadow: '0 0 0 0 rgba(6,182,212,0)'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(6,182,212,0.3)'}
                onBlur={(e) => e.target.style.boxShadow = '0 0 0 0 rgba(6,182,212,0)'}
              />
              <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] shine-onsus" style={{ transition: 'all 0.3s var(--ease-smooth)' }}>
                გაწევრიანება
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            {[
              { Icon: Twitter, name: 'Twitter' },
              { Icon: Linkedin, name: 'LinkedIn' },
              { Icon: Github, name: 'GitHub' },
              { Icon: Mail, name: 'Email' }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3, ease: [0.71, 1.7, 0.77, 1.24] }
                }}
                className="relative group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20"
                style={{ transition: 'all 0.3s var(--ease-smooth)' }}
              >
                <item.Icon className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-xl border border-white/10" style={{ transition: 'opacity 0.3s var(--ease-bouncy)' }}>
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-lg relative inline-block">
            პლატფორმა
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-cyan-500"></span>
          </h4>
          <ul className="space-y-3 text-slate-400">
            {["კურსები", "სასწავლო გზები", "ბიზნესისთვის", "ფასები"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-cyan-400 hover-line inline-block" style={{ transition: 'color 0.3s var(--ease-smooth)' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-lg relative inline-block">
            კომპანია
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-500"></span>
          </h4>
          <ul className="space-y-3 text-slate-400">
            {["ჩვენ შესახებ", "კარიერა", "ბლოგი", "კონტაქტი"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-cyan-400 hover-line inline-block" style={{ transition: 'color 0.3s var(--ease-smooth)' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; {currentYear} SiTech AI სკოლა. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}

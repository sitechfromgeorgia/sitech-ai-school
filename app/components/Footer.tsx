"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 inline-block hover:scale-105 transition-transform">
            SiTech AI სკოლა
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            ვქმნით AI-ზე ორიენტირებული დეველოპერებისა და სტრატეგების ახალ თაობას.
            შემოგვიერთდით მომავლის ინსტრუმენტების დასაუფლებლად.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <Icon className="w-5 h-5" />
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
                <Link href="#" className="hover:text-cyan-400 hover:pl-2 transition-all duration-300">
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
                <Link href="#" className="hover:text-cyan-400 hover:pl-2 transition-all duration-300">
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

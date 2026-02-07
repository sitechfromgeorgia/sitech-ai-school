"use client";

import { motion } from "framer-motion";
import { Brain, Database, Workflow } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              მთავარი ტექნოლოგია
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              პერსონალიზებული <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                სასწავლო ძრავა
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              ჩვენი AI ადაპტირდება თქვენს ტემპზე. ის პოულობს ცოდნის ხარვეზებს და დინამიურად ცვლის კურიკულუმს თითოეული კონცეფციის სრულყოფისთვის.
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: Brain, text: "სირთულის ადაპტური ზრდა შედეგების მიხედვით" },
                { icon: Database, text: "რეალურ დროში უკუკავშირი კოდსა და პროექტებზე" },
                { icon: Workflow, text: "ინდივიდუალური სასწავლო გზები თქვენი კარიერული მიზნებისთვის" },
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: -10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 rounded-3xl bg-slate-900/60 border border-white/10 p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="text-xs font-mono text-cyan-500/70">AI_TUTOR_V2.0</div>
            </div>

            <div className="space-y-6 font-mono text-sm relative z-10">
              <div className="flex gap-4">
                <div className="text-purple-400 shrink-0">User:</div>
                <div className="text-slate-300">როგორ გავაკეთო ამ React კომპონენტის ოპტიმიზაცია?</div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-cyan-400 shrink-0">AI:</div>
                <div className="text-slate-300">
                  <span className="animate-pulse">კოდის სტრუქტურის ანალიზი...</span>
                  <br />
                  <br />
                  <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 text-green-400 shadow-inner">
                    {`useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
                  </div>
                  <br />
                  `useMemo`-ს გამოყენება თავიდან აგაცილებთ ზედმეტ გამოთვლებს.
                </div>
              </div>

              <div className="h-px bg-white/5 my-4"></div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>სანდოობის ქულა</span>
                <span className="text-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">98.4%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-cyan-500 h-1.5 rounded-full shadow-[0_0_10px_cyan]"
                ></motion.div>
              </div>
            </div>

            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-2xl -z-10 group-hover:opacity-75 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Decorative Orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
}

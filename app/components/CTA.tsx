"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 border-glow"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-100">დაიწყე უფასოდ დღესვე</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ letterSpacing: '-0.03em' }}
        >
          მზად ხარ AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" 
                style={{ filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.4))' }}>
            რევოლუციისთვის?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          შემოგვიერთდი ათასობით სტუდენტს და დაეუფლე AI ინსტრუმენტებს, რომლებიც ცვლიან ინდუსტრიას
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="#courses"
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-semibold shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] overflow-hidden shine-onsus"
            style={{ transition: 'all 0.5s var(--ease-elegant)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              დაიწყე უფასოდ <ArrowRight className="w-5 h-5" style={{ transition: 'transform 0.3s var(--ease-smooth)' }} />
            </span>
          </Link>
          
          <Link
            href="#pricing"
            className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white text-lg font-semibold hover:bg-white/10 hover:border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            style={{ transition: 'all 0.4s var(--ease-smooth)' }}
          >
            ფასების ნახვა
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            უფასო საცდელი პერიოდი
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            შეუზღუდავი წვდომა
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            სერთიფიკატი
          </div>
        </motion.div>
      </div>
    </section>
  );
}

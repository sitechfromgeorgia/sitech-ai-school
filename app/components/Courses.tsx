"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Globe, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "AI ავტომატიზაცია",
    desc: "დაეუფლეთ რუტინული ამოცანების ავტომატიზაციას უახლესი AI აგენტებით.",
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web დეველოპმენტი",
    desc: "შექმენით თანამედროვე, ადაპტური აპლიკაციები React, Next.js და Tailwind CSS-ის გამოყენებით.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "პროცესების ავტომატიზაცია",
    desc: "დახვეწეთ სამუშაო პროცესები n8n და Make-ით ეფექტურობის 10x გასაზრდელად.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "ციფრული ტრანსფორმაცია",
    desc: "უხელმძღვანელეთ ციფრულ ცვლილებებს და მოამზადეთ ორგანიზაცია მომავლისთვის.",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            შერჩეული <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">სასწავლო გზები</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            აირჩიე შენი გზა. კოდირებიდან ავტომატიზაციამდე, ჩვენ გთავაზობთ სტრუქტურირებულ გზებს ოსტატობისკენ.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-card group relative p-8 rounded-3xl transition-all duration-500 overflow-hidden cursor-none"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 mb-6 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {course.desc}
                </p>
                
                <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer">
                  გაიგე მეტი <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

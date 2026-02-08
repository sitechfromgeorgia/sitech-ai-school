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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05, 
                translateY: -10,
                transition: { 
                  duration: 0.4,
                  ease: [0, 0, 0.44, 1.18]
                }
              }}
              className="glass-card group relative p-8 rounded-3xl overflow-hidden cursor-none border-2 border-white/10 hover:border-transparent"
              style={{ 
                transition: 'all 0.4s var(--ease-smooth)'
              } as any}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10`} style={{ transition: 'opacity 0.5s var(--ease-smooth)' }}></div>
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]`}
                  whileHover={{ 
                    rotate: 5,
                    transition: { duration: 0.3, ease: [0.3, 1, 0.35, 1] }
                  }}
                  style={{ transition: 'all 0.3s var(--ease-smooth)' }}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 mb-6 text-sm leading-relaxed group-hover:text-slate-300" style={{ transition: 'color 0.3s var(--ease-smooth)' }}>
                  {course.desc}
                </p>
                
                <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 cursor-pointer hover-line inline-flex" style={{ transition: 'color 0.3s var(--ease-smooth)' }}>
                  გაიგე მეტი <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2" style={{ transition: 'transform 0.3s var(--ease-smooth)' }} />
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%]" style={{ transition: 'all 1s var(--ease-smooth)' }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

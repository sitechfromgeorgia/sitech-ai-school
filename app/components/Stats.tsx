"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, BookOpen, Award, Headphones } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "აქტიური სტუდენტი",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: BookOpen,
    value: 15,
    suffix: "+",
    label: "პრაქტიკული კურსი",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "კმაყოფილება",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "მხარდაჭერა",
    color: "from-amber-500 to-orange-500"
  }
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 50, 
    stiffness: 100 
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <span className="tabular-nums" ref={ref}>
      0
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="glass-card p-8 rounded-3xl text-center group hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              style={{ transition: 'all 0.4s var(--ease-smooth)' }}
            >
              <motion.div 
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.suffix}</span>
              </div>
              
              <p className="text-slate-400 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

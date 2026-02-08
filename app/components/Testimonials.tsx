"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "გიორგი მელაშვილი",
    role: "Full-Stack Developer",
    text: "SiTech AI-ის კურსებმა ფუნდამენტურად შეცვალა ჩემი მიდგომა დეველოპმენტზე. AI ავტომატიზაცია 10x-ით გაზარდა ჩემს პროდუქტიულობას.",
    rating: 5,
    avatar: "🚀"
  },
  {
    name: "ნინო ჯავახიშვილი",
    role: "Business Owner",
    text: "ციფრული ტრანსფორმაციის კურსმა დამეხმარა ბიზნესის სრული ავტომატიზაცია მოვახდინე. აღარ ვკარგავ დროს რუტინულ ამოცანებზე.",
    rating: 5,
    avatar: "💼"
  },
  {
    name: "დავით კობახიძე",
    role: "Startup Founder",
    text: "საუკეთესო ინვესტიცია ჩემს კარიერაში. AI აგენტების დახმარებით შევქმენი 3 SaaS პროდუქტი 6 თვეში.",
    rating: 5,
    avatar: "⚡"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            რას ამბობენ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">სტუდენტები</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            შეუერთდი ათასობით კმაყოფილ სტუდენტს, რომლებმაც გარდაქმნეს თავიანთი კარიერა
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 hover:border-purple-500/30"
              style={{ transition: 'all 0.4s var(--ease-smooth)' }}
            >
              <Quote className="w-12 h-12 text-purple-400/30 mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.5s var(--ease-smooth)' }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatButton() {
  return (
    <motion.a
      href="https://t.me/SiTechagencybot"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-shadow group shine-onsus cursor-none"
      aria-label="დაგვიკავშირდით Telegram-ში"
    >
      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline text-sm">მოგვწერეთ</span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping pointer-events-none" />
    </motion.a>
  );
}

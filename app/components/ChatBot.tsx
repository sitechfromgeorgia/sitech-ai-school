'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'გამარჯობა! მე ვარ SiTech-ის ასისტენტი. რით შემიძლია დაგეხმაროთ?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Mock bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'გმადლობთ შეტყობინებისთვის! ჩვენი გუნდი მალე გიპასუხებთ. მანამდე შეგიძლიათ გაეცნოთ ჩვენს კურსებს.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">SiTech ასისტენტი</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-white/70 text-[10px] uppercase tracking-wider font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/80"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                      msg.sender === 'user' ? 'bg-cyan-500/20 border-cyan-500/30' : 'bg-slate-800 border-slate-700'
                    }`}>
                      {msg.sender === 'user' ? <User size={14} className="text-cyan-400" /> : <Bot size={14} className="text-slate-400" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-cyan-600 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
              <button className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-[11px] text-slate-300 transition-colors">
                📚 კურსები
              </button>
              <button className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-[11px] text-slate-300 transition-colors">
                💰 ფასები
              </button>
              <button className="whitespace-nowrap px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-[11px] text-slate-300 transition-colors">
                🤝 კონტაქტი
              </button>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="აკრიფეთ შეტყობინება..."
                  className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-2xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-all active:scale-90"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-cyan-600 text-white'
        }`}
      >
        {isOpen ? <ChevronDown size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;

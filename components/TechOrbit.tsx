"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface TechIcon {
  id: number;
  rx: number;
  ry: number;
  duration: number;
  logo: string;
  category: string;
  name: string;
}

const techIcons: TechIcon[] = [
  { id: 1, rx: 240, ry: 100, duration: 60, logo: "https://cdn.simpleicons.org/react", name: "React", category: "Front End" },
  { id: 2, rx: 240, ry: 100, duration: 60, logo: "https://cdn.simpleicons.org/typescript", name: "TypeScript", category: "Languages" },
  { id: 3, rx: 240, ry: 100, duration: 60, logo: "https://cdn.simpleicons.org/nextdotjs/000000", name: "Next.js", category: "Front End" },
  { id: 4, rx: 380, ry: 150, duration: 80, logo: "https://cdn.simpleicons.org/nodedotjs", name: "Node.js", category: "Back End" },
  { id: 5, rx: 380, ry: 150, duration: 80, logo: "https://cdn.simpleicons.org/tailwindcss", name: "Tailwind CSS", category: "Front End" },
  { id: 6, rx: 380, ry: 150, duration: 80, logo: "https://cdn.simpleicons.org/postgresql", name: "PostgreSQL", category: "Database" },
  { id: 7, rx: 380, ry: 150, duration: 80, logo: "https://cdn.simpleicons.org/docker", name: "Docker", category: "Cloud & DevOps" },
  { id: 8, rx: 380, ry: 150, duration: 80, logo: "https://cdn.simpleicons.org/redis", name: "Redis", category: "Database" },
  { id: 10, rx: 560, ry: 210, duration: 100, logo: "https://cdn.simpleicons.org/python", name: "Python", category: "Back End" },
  { id: 11, rx: 560, ry: 210, duration: 100, logo: "https://cdn.simpleicons.org/mongodb", name: "MongoDB", category: "Database" },
  { id: 12, rx: 560, ry: 210, duration: 100, logo: "https://cdn.simpleicons.org/kubernetes", name: "Kubernetes", category: "Cloud & DevOps" },
  { id: 16, rx: 560, ry: 210, duration: 100, logo: "https://cdn.simpleicons.org/aws", name: "AWS", category: "Cloud & DevOps" },
  { id: 18, rx: 560, ry: 210, duration: 100, logo: "https://cdn.simpleicons.org/git", name: "Git", category: "Cloud & DevOps" },
];

const categories = ["All Technologies", "Front End", "Back End", "Database", "Cloud & DevOps"];

const stackData = [
  { 
    badge: "Technology Excellence", 
    main: "Accelerating Growth with", 
    title: "Cutting-Edge Tech",
    p: "Dousoft delivers high-performance solutions using a world-class technology stack, ensuring scalability and innovation for your business."
  },
  { 
    badge: "Innovation Hub", 
    main: "Dousoft 2026 Tech Stack", 
    title: "Future-Ready Solutions",
    p: "We build robust architectures using modern tools to provide seamless and secure user experiences across all digital platforms."
  }
];

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Technologies");
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  // Advanced Responsive Scaling
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 380) setScale(0.24);      // Very Small Phones
      else if (w < 480) setScale(0.28); // Standard Phones
      else if (w < 640) setScale(0.38); // Large Phones
      else if (w < 768) setScale(0.48); // Tablets
      else if (w < 1024) setScale(0.65); // Small Laptops
      else if (w < 1280) setScale(0.80); // Laptops
      else setScale(1);                  // Desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % stackData.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const displayIcons = useMemo(() => {
    const filtered = techIcons.filter((i) => activeTab === "All Technologies" || i.category === activeTab);
    return filtered.map((icon) => {
      const sameRing = filtered.filter(i => i.rx === icon.rx);
      const pos = sameRing.findIndex(i => i.id === icon.id);
      return { ...icon, spreadDelay: (icon.duration / (sameRing.length || 1)) * pos };
    });
  }, [activeTab]);

  return (
    <section className="relative w-full min-h-[900px] md:min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden pt-10 pb-20 font-sans">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)`, backgroundSize: '60px 60px' }} />

      {/* Header Section */}
      <div className="relative z-[110] text-center px-6 max-w-4xl mb-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-emerald-50 text-emerald-600 border border-emerald-100 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
              {stackData[index].badge}
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
              {stackData[index].main} <br/>
              <span className="text-emerald-500 italic font-serif">{stackData[index].title}</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              {stackData[index].p}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Light Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 z-[110] px-4 mb-4 bg-white/70 backdrop-blur-xl p-2 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-[95%]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${
              activeTab === cat 
                ? "bg-white text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.1)] scale-105 border border-slate-100" 
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbit System Container */}
      <div className="relative w-full flex-grow flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        <div 
          style={{ 
            transform: `scale(${scale})`, 
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' 
          }} 
          className="relative w-[1200px] h-[600px] flex items-center justify-center"
        >
          
          {/* SOLID DARK RINGS */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-[0.12]" viewBox="0 0 1200 600">
            {[240, 380, 560].map((r, i) => {
              const ry = i === 0 ? 100 : i === 1 ? 150 : 210;
              return (
                <ellipse 
                  key={i} 
                  cx="600" 
                  cy="300" 
                  rx={r} 
                  ry={ry} 
                  fill="none" 
                  stroke="#000" 
                  strokeWidth="2.5" 
                />
              );
            })}
          </svg>

          {/* Central Logo */}
          <div className="relative z-50 w-24 h-24 md:w-36 md:h-36 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 border border-slate-50">
            <img src="/logo3.jpeg" alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* COLORFUL ORBITING ICONS */}
          <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
            <AnimatePresence>
              {displayIcons.map((icon) => (
                <motion.div
                  key={icon.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute pointer-events-auto"
                  style={{
                    width: '80px', height: '80px',
                    offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
                    animation: `orbit ${icon.duration}s linear infinite`,
                    animationDelay: `-${icon.spreadDelay}s`,
                    willChange: 'offset-distance',
                  }}
                >
                  <div className="group relative w-16 h-16 md:w-[80px] md:h-[80px] bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-slate-50 flex items-center justify-center p-4 hover:scale-125 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 cursor-pointer">
                    <img src={icon.logo} alt={icon.name} className="w-full h-full object-contain" />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white text-[10px] py-1.5 px-3 rounded-xl font-bold whitespace-nowrap z-[120] pointer-events-none shadow-xl">
                      {icon.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit { 
          from { offset-distance: 0%; } 
          to { offset-distance: 100%; } 
        }
      `}</style>
    </section>
  );
};

export default TechStack;
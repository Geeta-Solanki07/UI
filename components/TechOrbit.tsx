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

// --- Data (Adjusted RX/RY for Perfect Clearance) ---
const techIcons: TechIcon[] = [
  // Ring 1 - Increased RY so icons pass ABOVE and BELOW the logo, not THROUGH it
  // { id: 1, rx: 220, ry: 100, duration: 25, logo: "https://cdn.simpleicons.org/react", name: "React", category: "Front End" },
  // { id: 2, rx: 220, ry: 100, duration: 25, logo: "https://cdn.simpleicons.org/typescript", name: "TypeScript", category: "Languages" },
  // Ring 2 - Mid range
    // { id: 3, rx: 220, ry: 100, duration: 25, logo: "https://cdn.simpleicons.org/nextdotjs/000000", name: "Next.js", category: "Front End" },

  { id: 4, rx: 360, ry: 140, duration: 35, logo: "https://cdn.simpleicons.org/nodedotjs", name: "Node.js", category: "Back End" },
  { id: 5, rx: 360, ry: 140, duration: 35, logo: "https://cdn.simpleicons.org/tailwindcss", name: "Tailwind CSS", category: "Front End" },
  { id: 6, rx: 360, ry: 140, duration: 35, logo: "https://cdn.simpleicons.org/postgresql", name: "PostgreSQL", category: "Database" },
  { id: 7, rx: 360, ry: 140, duration: 35, logo: "https://cdn.simpleicons.org/docker", name: "Docker", category: "Cloud & DevOps" },
  { id: 8, rx: 360, ry: 140, duration: 35, logo: "https://cdn.simpleicons.org/redis", name: "Redis", category: "Database" },
  // Ring 3 - Outer range
  { id: 10, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/python", name: "Python", category: "Back End" },
  { id: 11, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/mongodb", name: "MongoDB", category: "Database" },
  { id: 12, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/kubernetes", name: "Kubernetes", category: "Cloud & DevOps" },
  { id: 13, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/terraform", name: "Terraform", category: "Cloud & DevOps" },
  { id: 14, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/googlecloud", name: "GCP", category: "Cloud & DevOps" },
  { id: 15, rx: 540, ry: 200, duration: 45, logo: "https://cdn.simpleicons.org/go", name: "Go", category: "Back End" },
];

const categories = ["All Technologies", "Front End", "Back End", "Database", "Cloud & DevOps"];

const stackData = [
  { badge: "Technology ", main: "Accelerating Growth with", title: "Cutting-Edge Technologies" },
  { badge: "Premium Technology Stack", main: "Dousoft 2026 Tech Stack Redesign", title: "Variant 2 of 2" },
];

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Technologies");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stackData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const displayIcons = useMemo(() => {
    const filtered = techIcons.filter((icon) =>
      activeTab === "All Technologies" ? true : icon.category === activeTab
    );
    return filtered.map((icon) => {
      const iconsInSameRing = filtered.filter(i => i.rx === icon.rx);
      const iconPosition = iconsInSameRing.findIndex(i => i.id === icon.id);
      const spreadDelay = (icon.duration / iconsInSameRing.length) * iconPosition;
      return { ...icon, spreadDelay };
    });
  }, [activeTab]);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex flex-col items-center justify-center overflow-hidden font-sans py-4">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* Header Section - No Changes */}
      <div className="relative z-[150] text-center px-4 max-w-5xl w-full flex flex-col items-center mb-6">
        <div className="h-10 mb-6">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`badge-${index}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-[#E7F9EE] text-[#039855] px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#C9EED8] animate-glow"
            >
              {stackData[index].badge}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-[140px] md:h-[160px] flex items-center justify-center relative w-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`heading-block-${index}`}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-full"
            >
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="text-[36px] md:text-[54px] font-black text-[#111827] leading-tight tracking-tighter"
              >
                {stackData[index].main.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent italic animate-text-shimmer">
                  {stackData[index].title}
                </span>
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Static Subtitle */}
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mt-4 font-medium leading-relaxed">
          Empowering your digital transformation with a world-class selection of tools, frameworks, and infrastructure.
        </p>
      </div>


      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 z-[150] mb-8 bg-white/70 backdrop-blur-2xl p-2 rounded-3xl border border-emerald-100/50 shadow-2xl shadow-emerald-100/20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-3 rounded-2xl text-[13px] font-extrabold transition-all duration-700 ease-out ${
              activeTab === cat
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/30 scale-105"
                : "text-emerald-700/70 hover:bg-emerald-50/80 hover:text-emerald-800 hover:scale-105 hover:shadow-lg hover:shadow-emerald-200/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbital Visual System */}
      <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center scale-90 lg:scale-100 flex-grow">
        
        {/* Central Glow - Advanced Gradient */}
        <div className="absolute w-[450px] h-[350px] bg-gradient-radial from-emerald-200/30 via-transparent to-transparent rounded-full blur-[120px] z-0" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1200 600">
          <defs>
            <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Enhanced Rings */}
          {[220, 360, 540].map((r, i) => {
            const currentRy = i === 0 ? 100 : r * 0.38;
            return (
              <React.Fragment key={i}>
                {/* Outer glow ring */}
                <ellipse cx="600" cy="300" rx={r + 15} ry={currentRy + 8} fill="url(#ringGlow)" opacity="0.4" className="animate-pulse-slow" />
                {/* Main ring */}
                <ellipse cx="600" cy="300" rx={r} ry={currentRy} fill="none" stroke="#E5E7EB" strokeWidth="2" />
                {/* Animated electric flow */}
                <ellipse 
                  cx="600" cy="300" rx={r} ry={currentRy} 
                  fill="none" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="3" 
                  strokeDasharray="100 300"
                  className="animate-electric-flow"
                  filter="url(#glowFilter)"
                />
                {/* Inner accent ring */}
                <ellipse cx="600" cy="300" rx={r - 8} ry={currentRy - 5} fill="none" stroke="#10B981" strokeWidth="1" opacity="0.6" className="animate-spin-reverse" />
              </React.Fragment>
            );
          })}
        </svg>

        {/* Central Logo - Advanced Glass Container */}
        <motion.div 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-[200] w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/90 backdrop-blur-3xl border-2 border-white/50 shadow-2xl shadow-emerald-200/40 flex items-center justify-center p-8"
        >
          <img src="/logo3.jpeg" alt="Logo" className="w-full h-full object-contain drop-shadow-lg" />
          {/* Multi-layer Rings */}
          <div className="absolute inset-[-16px] border-2 border-emerald-200/60 rounded-full opacity-80 animate-ping" />
          <div className="absolute inset-[-24px] border border-emerald-100/40 rounded-full opacity-60 animate-spin-slow" />
          <div className="absolute inset-[-32px] border border-emerald-50/20 rounded-full opacity-40 animate-spin-reverse" />
        </motion.div>

        {/* Orbiting Icons - Enhanced for Company Look */}
        <div className="absolute inset-0 z-[120] pointer-events-none flex items-center justify-center">
          <AnimatePresence>
            {displayIcons.map((icon) => {
               const currentRy = icon.rx === 220 ? 100 : icon.rx * 0.38;
               return (
                <motion.div
                  key={icon.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute pointer-events-auto"
                  style={{
                    width: '70px',
                    height: '70px',
                    offsetPath: `ellipse(${icon.rx}px ${currentRy}px at center)`,
                    animation: `orbit ${icon.duration}s linear infinite`,
                    animationDelay: `-${icon.spreadDelay}s`,
                  }}
                >
                  <div className="group relative w-full h-full bg-white/95 backdrop-blur-xl rounded-full shadow-xl border-2 border-gray-100/80 flex items-center justify-center p-4 hover:scale-130 hover:border-emerald-400/80 hover:shadow-2xl hover:shadow-emerald-300/50 transition-all duration-500 ease-out cursor-pointer">
                    <img src={icon.logo} alt={icon.name} className="w-full h-full object-contain drop-shadow-md" />
                    {/* Advanced Glow Effects */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-3 rounded-full border-2 border-emerald-300/50 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
                    {/* Enhanced Tooltip */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-[11px] py-2 px-4 rounded-xl shadow-2xl font-bold whitespace-nowrap border border-emerald-300/50 backdrop-blur-sm">
                      {icon.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-emerald-300/50"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        @keyframes electric-flow {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: -400; }
        }
        :global(.animate-electric-flow) {
          animation: electric-flow 15s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        :global(.animate-spin-slow) {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        :global(.animate-spin-reverse) {
          animation: spin-reverse 50s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        :global(.animate-pulse-slow) {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        :global(.animate-text-shimmer) {
          background-size: 200% 200%;
          animation: text-shimmer 4s linear infinite;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.2); }
          50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.2); }
        }
        :global(.animate-glow) {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
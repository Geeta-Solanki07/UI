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
}

// --- Optimized Data ---
const techIcons: TechIcon[] = [
  { id: 1, rx: 160, ry: 55, duration: 25, logo: "https://cdn.simpleicons.org/react/61DAFB", category: "Front End" },
  { id: 2, rx: 160, ry: 55, duration: 25, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D", category: "Front End" },
  // { id: 14, rx: 160, ry: 55, duration: 25, logo: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Front End" },
  { id: 3, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/angular/DD0031", category: "Front End" },
  { id: 5, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/svelte/FF3E00", category: "Front End" },
  { id: 4, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Back End" },
  { id: 15, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/php/777BB4", category: "Back End" },
  { id: 16, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/redis/DC382D", category: "Database" },
  { id: 6, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/python/3776AB", category: "Back End" },
  { id: 7, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/go/00ADD8", category: "Back End" },
  { id: 8, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { id: 9, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/mongodb/47A048", category: "Database" },
  { id: 10, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/docker/2496ED", category: "Cloud & DevOps" },
  { id: 11, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/googlecloud/4285F4", category: "Cloud & DevOps" },
  { id: 12, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/amazonaws/232F3E", category: "Cloud & DevOps" },
  { id: 13, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/kubernetes/326CE5", category: "Cloud & DevOps" },
];

const categories = ["All Technologies", "Front End", "Back End", "Database", "Cloud & DevOps"];

const stackData = [
  { badge: "Our Core Expertise", title: "Cutting-Edge Tech" },
  { badge: "Global Performance", title: "Robust Infrastructure" },
  { badge: "Modern Standards", title: "Modern Architecture" },
  { badge: "Seamless Growth", title: "Digital Innovation" }
];

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Technologies");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stackData.length);
    }, 4000);
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
    <section className="relative w-full min-h-screen bg-[#FDFMFA] flex flex-col items-center pt-16 pb-24 overflow-hidden font-sans">
      
      {/* 1. Header Section */}
      <div className="relative z-[150] text-center px-4 max-w-5xl w-full flex flex-col items-center mb-10">
        <div className="inline-flex items-center bg-[#E7F9EE] text-[#039855] px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#C9EED8] mb-6">
          <AnimatePresence mode="wait">
            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {stackData[index].badge}
            </motion.span>
          </AnimatePresence>
        </div>

        <h2 className="text-[40px] md:text-[58px] font-black text-[#111827] mb-6 leading-tight tracking-tighter">
          Accelerating Growth with <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent italic">
            {stackData[index].title}
          </span>
        </h2>
        
        <p className="text-[#4B5563] text-base md:text-lg max-w-2xl font-medium opacity-80">
          Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms to build high-performance digital solutions.
        </p>
      </div>

      {/* 2. Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 z-[150] mb-16 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-7 py-2.5 rounded-full border text-[13px] font-bold transition-all duration-300 ${
              activeTab === cat
                ? "bg-[#12B76A] text-white border-[#12B76A] shadow-xl"
                : "bg-white text-[#12B76A] border-[#D1FADF] hover:bg-emerald-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Orbit Visual Area */}
      <div className="relative w-full max-w-[1200px] h-[500px] grid place-items-center isolate scale-90 md:scale-100">
        
        {/* Darker Orbit Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 500">
            {[160, 300, 480].map((r, i) => (
              <ellipse 
                key={i} cx="600" cy="250" rx={r} ry={r * 0.35} 
                fill="none" stroke="#065f46" strokeWidth="2" strokeDasharray="8 4" opacity="0.25" 
              />
            ))}
          </svg>
        </div>

        {/* PERFECTLY CENTERED LOGO CORE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px] animate-pulse" />
          <div className="relative w-48 h-48 bg-white rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-6 transition-transform duration-500 hover:scale-105">
            <h3 className="text-[#111827] font-black text-lg text-center leading-tight mb-3">
              Dousoft<br /><span className="text-emerald-600 font-bold text-sm">Tech Hub</span>
            </h3>
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner group transition-all">
               <img src="/logo.png" alt="Dousoft" className="w-9 h-9 object-contain group-hover:rotate-12 transition-transform" />
            </div>
            <p className="text-[9px] text-emerald-700 font-bold uppercase tracking-[0.2em] mt-4">
              Core Expertise
            </p>
          </div>
        </div>

        {/* Orbiting Icons */}
        <div className="absolute inset-0 z-[120] pointer-events-none flex items-center justify-center overflow-visible">
          <AnimatePresence>
            {displayIcons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute pointer-events-auto"
                style={{
                  width: '60px',
                  height: '60px',
                  // Uses the same math as SVG for perfect alignment
                  offsetPath: `ellipse(${icon.rx}px ${icon.rx * 0.35}px at center)`,
                  animation: `orbit ${icon.duration}s linear infinite`,
                  animationDelay: `-${icon.spreadDelay}s`,
                }}
              >
                <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-emerald-50 flex items-center justify-center p-3 hover:scale-125 transition-all cursor-pointer group">
                  <img src={icon.logo} alt="tech" className="w-full h-full object-contain filter grayscale-0 group-hover:scale-110" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-900 text-white text-[10px] py-1.5 px-3 rounded shadow-xl whitespace-nowrap z-[200]">
                    {icon.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      <style jsx>{`
        @keyframes orbit {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        :global(.pointer-events-auto) {
          will-change: transform, offset-distance;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
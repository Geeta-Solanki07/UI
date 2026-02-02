"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techIcons = [
  { id: 1, rx: 160, ry: 50, duration: 25, logo: "https://cdn.simpleicons.org/react/61DAFB", category: "Front End" },
  { id: 2, rx: 160, ry: 50, duration: 25, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D", category: "Front End" },
  { id: 3, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/angular/DD0031", category: "Front End" },
  { id: 5, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/svelte/FF3E00", category: "Front End" },
  { id: 14, rx: 160, ry: 50, duration: 25, logo: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Front End" },
  { id: 4, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Back End" },
  { id: 6, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/python/3776AB", category: "Back End" },
  { id: 7, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/go/00ADD8", category: "Back End" },
  { id: 15, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/php/777BB4", category: "Back End" },
  { id: 8, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { id: 9, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/mongodb/47A048", category: "Database" },
  { id: 16, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/redis/DC382D", category: "Database" },
  { id: 10, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/docker/2496ED", category: "Cloud & DevOps" },
  { id: 11, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/googlecloud/4285F4", category: "Cloud & DevOps" },
  { id: 12, rx: 500, ry: 180, duration: 50, logo: "https://cdn.simpleicons.org/amazonaws/232F3E", category: "Cloud & DevOps" },
  { id: 13, rx: 300, ry: 100, duration: 35, logo: "https://cdn.simpleicons.org/kubernetes/326CE5", category: "Cloud & DevOps" },
];

const categories = ["All Technologies", "Front End", "Back End", "Database", "Cloud & DevOps"];

const stackData = [
  { badge: "Our Core Expertise", title: "Cutting-Edge Tech" },
  { badge: "Global Performance", title: "Robust Infrastructure" },
  { badge: "Modern Standards", title: "Modern Architecture" },
  { badge: "Seamless Growth", title: "Digital Innovation" }
];

const TechStack = () => {
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
    <section className="relative w-full min-h-screen bg-[#FDFMFA] flex flex-col items-center pt-16 pb-24 overflow-hidden font-sans">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" 
           style={{ 
             backgroundImage: `linear-gradient(#27B26A 1px, transparent 1px), linear-gradient(90deg, #27B26A 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             transform: 'perspective(1200px) rotateX(60deg) translateY(-15%) scale(2.2)' 
           }} />

      {/* Header Container */}
      <div className="relative z-[150] text-center px-4 max-w-4xl h-[220px] md:h-[260px] flex flex-col items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="bg-[#E7F9EE] text-[#039855] px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#C9EED8] mb-6">
              {stackData[index].badge}
            </span>
            <h2 className="text-[42px] md:text-[54px] font-extrabold text-[#111827] mb-6 tracking-tight leading-[1.1]">
              Accelerating Growth with <br /> 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent">
                {stackData[index].title}
              </span>
            </h2>
          </motion.div>
        </AnimatePresence>
        <p className="text-[#4B5563] text-base md:text-lg max-w-2xl mx-auto opacity-90 mt-2">
          Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 z-[150] mb-16 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3 rounded-full border text-[14px] font-bold transition-all duration-500 ${
              activeTab === cat
                ? "bg-[#12B76A] text-white border-[#12B76A] shadow-xl scale-105"
                : "bg-white text-[#12B76A] border-[#D1FADF] hover:bg-emerald-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative w-full flex justify-center items-center h-[550px] isolate">
        
        {/* Orbits (Lines) - Deepest Layer */}
        <svg className="absolute w-full h-full pointer-events-none z-10" viewBox="0 0 1200 500">
          {[160, 300, 500].map((r, i) => (
            <ellipse 
              key={i} 
              cx="600" cy="250" rx={r} ry={r * 0.35} 
              fill="none" stroke="#059669" strokeWidth="1.5" opacity="0.15" 
            />
          ))}
        </svg> 

        {/* Center Glass Core - Middle Layer (z-100) */}
        <div className="relative z-[100] flex items-center justify-center pointer-events-auto">
          <div className="absolute w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute w-56 h-56 bg-white/30 rounded-full border border-white/60 backdrop-blur-md shadow-2xl" />
          <div className="relative w-48 h-48 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-6 border border-slate-50 group hover:border-emerald-200 transition-all duration-500">
            <h3 className="text-[#111827] font-bold text-[18px] leading-tight text-center mb-3">
              Dousoft<br />Core Stack
            </h3>
            <div className="w-14 h-14 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-inner border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
               <img src="/logo.png" alt="Dousoft Logo" className="w-9 h-9 object-contain" />
            </div>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.2em] mt-4 text-center">
              Next-Gen Tech
            </p>
          </div>
        </div>

        {/* Orbiting Icons - Top Layer (z-120) */}
        {/* Ab icons hamesha Center Core ke upar se guzrenge */}
        <div className="absolute inset-0 z-[120] pointer-events-none overflow-visible">
          <AnimatePresence mode="popLayout">
            {displayIcons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute pointer-events-auto"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '60px',
                  height: '60px',
                  marginLeft: '-30px',
                  marginTop: '-30px',
                  offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
                  animation: `orbit ${icon.duration}s linear infinite`,
                  animationDelay: `-${icon.spreadDelay}s`,
                }}
              >
                <div className="w-full h-full bg-white rounded-full shadow-2xl border border-emerald-50 flex items-center justify-center p-3.5 hover:scale-125 transition-all duration-300 cursor-pointer group ring-1 ring-emerald-100/50">
                  <img src={icon.logo} alt="tech-icon" className="w-full h-full object-contain" />
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-900 text-white text-[11px] py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap z-[200] font-medium shadow-xl">
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
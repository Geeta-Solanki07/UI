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

// --- Data ---
const techIcons: TechIcon[] = [
  { id: 1, rx: 180, ry: 65, duration: 25, logo: "https://cdn.simpleicons.org/react", name: "React", category: "Front End" },
  { id: 2, rx: 180, ry: 65, duration: 25, logo: "https://cdn.simpleicons.org/typescript", name: "TypeScript", category: "Languages" },
  { id: 3, rx: 180, ry: 65, duration: 25, logo: "https://cdn.simpleicons.org/nextdotjs/000000", name: "Next.js", category: "Front End" },
  { id: 4, rx: 320, ry: 110, duration: 35, logo: "https://cdn.simpleicons.org/nodedotjs", name: "Node.js", category: "Back End" },
  { id: 5, rx: 320, ry: 110, duration: 35, logo: "https://cdn.simpleicons.org/tailwindcss", name: "Tailwind CSS", category: "Front End" },
  { id: 6, rx: 320, ry: 110, duration: 35, logo: "https://cdn.simpleicons.org/postgresql", name: "PostgreSQL", category: "Database" },
  { id: 7, rx: 320, ry: 110, duration: 35, logo: "https://cdn.simpleicons.org/docker", name: "Docker", category: "Cloud & DevOps" },
  { id: 8, rx: 320, ry: 110, duration: 35, logo: "https://cdn.simpleicons.org/redis", name: "Redis", category: "Database" },
  { id: 10, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/python", name: "Python", category: "Back End" },
  { id: 11, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/mongodb", name: "MongoDB", category: "Database" },
  { id: 12, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/kubernetes", name: "Kubernetes", category: "Cloud & DevOps" },
  { id: 13, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/terraform", name: "Terraform", category: "Cloud & DevOps" },
  { id: 14, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/googlecloud", name: "GCP", category: "Cloud & DevOps" },
  { id: 15, rx: 500, ry: 175, duration: 45, logo: "https://cdn.simpleicons.org/go", name: "Go", category: "Back End" },
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
    <section className="relative w-full h-screen bg-[#FDFMFA] flex flex-col items-center justify-center overflow-hidden font-sans py-4">
      
      {/* Header Section */}
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

        <p className="text-[#4B5563] text-base md:text-lg max-w-2xl font-medium opacity-80 mt-4">
          Empowering your digital transformation with a world-class selection of tools, frameworks, and infrastructure.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 z-[150] mb-8 bg-white/60 backdrop-blur-xl p-1.5 rounded-2xl border border-emerald-50 shadow-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-xl text-[12px] font-extrabold transition-all duration-500 ${
              activeTab === cat
                ? "bg-emerald-500 text-white shadow-lg"
                : "text-emerald-800/60 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbital Visual System */}
      <div className="relative w-full max-w-[1200px] h-[450px] flex items-center justify-center scale-90 lg:scale-100 flex-grow">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[180, 320, 500].map((r, i) => (
            <React.Fragment key={i}>
              <ellipse cx="600" cy="300" rx={r} ry={r * 0.35} fill="none" stroke="#10B981" strokeWidth="1" opacity="0.1" />
              <ellipse 
                cx="600" cy="300" rx={r} ry={r * 0.35} 
                fill="none" 
                stroke="url(#lineGrad)" 
                strokeWidth="2.5" 
                strokeDasharray="80 160"
                className="animate-electric-flow"
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Central Logo */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(16,185,129,0.1)", "0 0 50px rgba(16,185,129,0.3)", "0 0 20px rgba(16,185,129,0.1)"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-50 w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border-[6px] border-emerald-500 flex items-center justify-center p-6 shadow-2xl overflow-hidden"
        >
          <img src="/logo3.jpeg" alt="Company Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Orbital Icons */}
        <div className="absolute inset-0 z-[120] pointer-events-none flex items-center justify-center">
          <AnimatePresence>
            {displayIcons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute pointer-events-auto"
                style={{
                  width: '56px',
                  height: '56px',
                  offsetPath: `ellipse(${icon.rx}px ${icon.rx * 0.35}px at center)`,
                  animation: `orbit ${icon.duration}s linear infinite`,
                  animationDelay: `-${icon.spreadDelay}s`,
                }}
              >
                <div className="group w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-2.5 hover:border-emerald-500 hover:shadow-emerald-200 transition-all cursor-pointer">
                  <img 
                    src={icon.logo} 
                    alt={icon.name} 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125" 
                  />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-gray-900 text-white text-[10px] py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap z-[300] font-bold">
                    {icon.name}
                  </div>
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
        @keyframes electric-flow {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: -400; }
        }
        :global(.animate-electric-flow) {
          animation: electric-flow 7s linear infinite;
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
          0% { box-shadow: 0 0 5px #039855; }
          50% { box-shadow: 0 0 20px #039855; }
          100% { box-shadow: 0 0 5px #039855; }
        }
        :global(.animate-glow) {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;

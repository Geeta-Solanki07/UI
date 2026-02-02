"use client";

import React from "react";

const techIcons = [
  // Inner Ring
  { id: 1, rx: 160, ry: 50, duration: 25, delay: 0, logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { id: 2, rx: 160, ry: 50, duration: 25, delay: 12.5, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },

  // Middle Ring
  { id: 3, rx: 300, ry: 100, duration: 35, delay: 0, logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { id: 4, rx: 300, ry: 100, duration: 35, delay: 11.6, logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { id: 5, rx: 300, ry: 100, duration: 35, delay: 23.2, logo: "https://cdn.simpleicons.org/svelte/FF3E00" },

  // Outer Ring (8 Icons - Balanced Spacing)
  { id: 6, rx: 500, ry: 180, duration: 50, delay: 0, logo: "https://cdn.simpleicons.org/python/3776AB" },
  { id: 7, rx: 500, ry: 180, duration: 50, delay: 6.25, logo: "https://cdn.simpleicons.org/go/00ADD8" },
  { id: 8, rx: 500, ry: 180, duration: 50, delay: 12.5, logo: "https://cdn.simpleicons.org/java/007396" },
  { id: 9, rx: 500, ry: 180, duration: 50, delay: 18.75, logo: "https://cdn.simpleicons.org/mongodb/47A048" },
  { id: 10, rx: 500, ry: 180, duration: 50, delay: 25, logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { id: 11, rx: 500, ry: 180, duration: 50, delay: 31.25, logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { id: 12, rx: 500, ry: 180, duration: 50, delay: 37.5, logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { id: 13, rx: 500, ry: 180, duration: 50, delay: 43.75, logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
];

const TechStack = () => {
  return (
    <section className="relative w-full bg-[#F4FDF8] flex flex-col items-center justify-start pt-10 pb-20 overflow-hidden font-sans">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle,_#10B981_0%,_#ECFDF5_70%)] opacity-70" />
      </div>

      {/* Header Section - More Compact */}
      <div className="relative z-50 text-center mb-10 px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-[#DFF6E8] text-[#009A4D] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#C9EED8]">
          Technology
        </div>
        <h2 className="text-[38px] md:text-[50px] font-extrabold text-[#111827] mb-4 tracking-tight leading-tight">
          Accelerating Growth with <br /> Cutting-Edge Technologies
        </h2>
        <p className="text-[#4B5563] text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto font-medium">
          Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms to build high-performance digital solutions.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 z-50 mb-16">
        {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map((cat, i) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full border text-[13px] font-bold transition-all duration-300 ${
              i === 0
                ? "bg-[#12B76A] text-white border-[#12B76A] shadow-lg shadow-emerald-200"
                : "bg-white/90 text-[#12B76A] border-[#D1FADF] hover:bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbit Visualization - Centered and Spaced */}
      <div className="relative w-full flex justify-center items-center h-[500px]">
        
        {/* Subtle Orbit Lines */}
     <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1200 500">

  <ellipse
    cx="600"
    cy="250"
    rx="160"
    ry="50"
    fill="none"
    stroke="#059669"
    strokeWidth="1.8"
    opacity="0.45"
  />

  <ellipse
    cx="600"
    cy="250"
    rx="300"
    ry="100"
    fill="none"
    stroke="#047857"
    strokeWidth="1.6"
    opacity="0.35"
  />

  <ellipse
    cx="600"
    cy="250"
    rx="500"
    ry="180"
    fill="none"
    stroke="#065F46"
    strokeWidth="1.4"
    opacity="0.3"
  />

</svg> 

        {/* Center Glass Core */}
        <div className="relative z-50 flex items-center justify-center">
          <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute w-52 h-52 bg-white/40 rounded-full border border-white/50 backdrop-blur-lg shadow-xl" />
          
          <div className="relative w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 border border-white">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-50 flex items-center justify-center mb-2">
               <img src="./logo.png" alt="D Logo" className="w-6 h-6" />
            </div>
            <h3 className="text-[#111827] font-bold text-[16px] leading-tight text-center">Dousoft<br />Core Stack</h3>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.15em] mt-1.5 text-center">Next-Gen Solutions</p>
          </div>
        </div>

        {/* Orbiting Tech Icons */}
        {techIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute z-40"
            style={{
              left: '50%',
              top: '50%',
              width: '46px',
              height: '46px',
              marginLeft: '-23px',
              marginTop: '-23px',
              offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
              animation: `orbit ${icon.duration}s linear infinite`,
              animationDelay: `-${icon.delay}s`,
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-md border border-slate-100/50 flex items-center justify-center p-2.5 hover:scale-115 transition-all cursor-pointer">
              <img src={icon.logo} alt="tech icon" className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
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
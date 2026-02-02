// export default function Hero() {
//   return (
//     <section className="text-center pt-20">
//       <span className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
//         Technology
//       </span>

//       <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
//         Accelerating Growth with <br /> Cutting-Edge Technologies
//       </h1>

//       <p className="mt-4 max-w-2xl mx-auto text-gray-600">
//         Leverage our expertly curated stack of modern frameworks, robust
//         languages, and scalable platforms to build high-performance digital
//         solutions.
//       </p>

//       <div className="flex justify-center gap-3 mt-8 flex-wrap">
//         {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map(
//           (tab, i) => (
//             <button
//               key={i}
//               className={`px-5 py-2 rounded-full border text-sm
//               ${
//                 i === 0
//                   ? "bg-green-600 text-white"
//                   : "border-green-300 text-green-700"
//               }`}
//             >
//               {tab}
//             </button>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";

const techIcons = [
  // Inner Ring
  { id: 1, rx: 160, ry: 50, duration: 25, delay: 5, logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { id: 2, rx: 160, ry: 50, duration: 25, delay: 18, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },

  // Middle Ring
  { id: 3, rx: 280, ry: 90, duration: 35, delay: 0, logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { id: 4, rx: 280, ry: 90, duration: 35, delay: 12, logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { id: 5, rx: 280, ry: 90, duration: 35, delay: 24, logo: "https://cdn.simpleicons.org/svelte/FF3E00" },

  // Outer Ring
  { id: 6, rx: 420, ry: 150, duration: 50, delay: 0, logo: "https://cdn.simpleicons.org/mongodb/47A048" },
  { id: 7, rx: 420, ry: 150, duration: 50, delay: 6.25, logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { id: 8, rx: 420, ry: 150, duration: 50, delay: 12.5, logo: "https://cdn.simpleicons.org/go/00ADD8" },
  { id: 9, rx: 420, ry: 150, duration: 50, delay: 18.75, logo: "https://cdn.simpleicons.org/python/3776AB" },
  { id: 10, rx: 420, ry: 150, duration: 50, delay: 25, logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { id: 11, rx: 420, ry: 150, duration: 50, delay: 31.25, logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { id: 12, rx: 420, ry: 150, duration: 50, delay: 37.5, logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { id: 13, rx: 420, ry: 150, duration: 50, delay: 43.75, logo: "https://cdn.simpleicons.org/java/007396" },
];

const TechStack = () => {
  return (
    <section className="relative w-full bg-[#ECFDF5] flex flex-col items-center pt-14 pb-28 overflow-hidden font-sans">

      {/* Dark Green Radial Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(circle,_#10B981_0%,_#ECFDF5_65%)] opacity-90" />
      </div>

      {/* Header */}
      <div className="relative z-50 text-center mb-12 px-4 max-w-4xl">
        <div className="inline-block bg-[#A7F3D0] text-[#065F46] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#6EE7B7]">
          Technology
        </div>

        <h2 className="text-[40px] md:text-[54px] font-extrabold text-[#064E3B] mb-6 leading-tight">
          Accelerating Growth with <br /> Cutting-Edge Technologies
        </h2>

        <p className="text-[#065F46] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
          Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms to build high-performance digital solutions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 z-50 mb-16">
        {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map((cat, i) => (
          <button
            key={cat}
            className={`px-6 py-2.5 rounded-full border text-[14px] font-bold transition-all duration-300 ${
              i === 0
                ? "bg-[#059669] text-white border-[#059669] shadow-lg shadow-emerald-300"
                : "bg-white/80 text-[#059669] border-[#A7F3D0] hover:bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbit Section */}
      <div className="relative w-full flex justify-center items-center h-[450px]">

        {/* Orbit Lines */}
        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1200 450">
          <ellipse cx="600" cy="225" rx="160" ry="50" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.35" />
          <ellipse cx="600" cy="225" rx="280" ry="90" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.25" />
          <ellipse cx="600" cy="225" rx="420" ry="150" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.18" />
        </svg>

        {/* Center Core */}
        <div className="relative z-50 flex items-center justify-center">
          <div className="absolute w-64 h-64 bg-white/30 rounded-full blur-2xl" />
          <div className="absolute w-52 h-52 bg-white/50 rounded-full border border-white/40 backdrop-blur-md shadow-xl" />

          <div className="relative w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M14 8C19.5 8 23.5 12 23.5 17C23.5 22 19.5 26 14 26" stroke="#059669" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="22" cy="8" r="3.5" fill="#059669" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-[#064E3B] font-bold text-[17px] text-center">
              Dousoft<br />Core Stack
            </h3>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.15em] mt-1.5">
              Next-Gen Solutions
            </p>
          </div>
        </div>

        {/* Orbiting Icons */}
        {techIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute z-40"
            style={{
              left: "50%",
              top: "50%",
              width: "44px",
              height: "44px",
              marginLeft: "-22px",
              marginTop: "-22px",
              offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
              animation: `orbit ${icon.duration}s linear infinite`,
              animationDelay: `-${icon.delay}s`,
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-2.5 hover:scale-115 hover:shadow-xl transition-all duration-300">
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
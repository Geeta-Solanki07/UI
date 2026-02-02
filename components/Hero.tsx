// // export default function Hero() {
// //   return (
// //     <section className="text-center pt-20">
// //       <span className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
// //         Technology
// //       </span>

// //       <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
// //         Accelerating Growth with <br /> Cutting-Edge Technologies
// //       </h1>

// //       <p className="mt-4 max-w-2xl mx-auto text-gray-600">
// //         Leverage our expertly curated stack of modern frameworks, robust
// //         languages, and scalable platforms to build high-performance digital
// //         solutions.
// //       </p>

// //       <div className="flex justify-center gap-3 mt-8 flex-wrap">
// //         {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map(
// //           (tab, i) => (
// //             <button
// //               key={i}
// //               className={`px-5 py-2 rounded-full border text-sm
// //               ${
// //                 i === 0
// //                   ? "bg-green-600 text-white"
// //                   : "border-green-300 text-green-700"
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           )
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import React from "react";

// // const techIcons = [
// //   // Inner Ring
// //   { id: 1, rx: 160, ry: 50, duration: 25, delay: 5, logo: "https://cdn.simpleicons.org/react/61DAFB" },
// //   { id: 2, rx: 160, ry: 50, duration: 25, delay: 18, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },

// //   // Middle Ring
// //   { id: 3, rx: 280, ry: 90, duration: 35, delay: 0, logo: "https://cdn.simpleicons.org/angular/DD0031" },
// //   { id: 4, rx: 280, ry: 90, duration: 35, delay: 12, logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
// //   { id: 5, rx: 280, ry: 90, duration: 35, delay: 24, logo: "https://cdn.simpleicons.org/svelte/FF3E00" },

// //   // Outer Ring
// //   { id: 6, rx: 420, ry: 150, duration: 50, delay: 0, logo: "https://cdn.simpleicons.org/mongodb/47A048" },
// //   { id: 7, rx: 420, ry: 150, duration: 50, delay: 6.25, logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
// //   { id: 8, rx: 420, ry: 150, duration: 50, delay: 12.5, logo: "https://cdn.simpleicons.org/go/00ADD8" },
// //   { id: 9, rx: 420, ry: 150, duration: 50, delay: 18.75, logo: "https://cdn.simpleicons.org/python/3776AB" },
// //   { id: 10, rx: 420, ry: 150, duration: 50, delay: 25, logo: "https://cdn.simpleicons.org/docker/2496ED" },
// //   { id: 11, rx: 420, ry: 150, duration: 50, delay: 31.25, logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
// //   { id: 12, rx: 420, ry: 150, duration: 50, delay: 37.5, logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
// //   { id: 13, rx: 420, ry: 150, duration: 50, delay: 43.75, logo: "https://cdn.simpleicons.org/java/007396" },
// // ];

// // const TechStack = () => {
// //   return (
// //     <section className="relative w-full bg-[#ECFDF5] flex flex-col items-center pt-14 pb-28 overflow-hidden font-sans">

// //       {/* Dark Green Radial Background */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(circle,_#10B981_0%,_#ECFDF5_65%)] opacity-90" />
// //       </div>

// //       {/* Header */}
// //       <div className="relative z-50 text-center mb-12 px-4 max-w-4xl">
// //         <div className="inline-block bg-[#A7F3D0] text-[#065F46] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border border-[#6EE7B7]">
// //           Technology
// //         </div>

// //         <h2 className="text-[40px] md:text-[54px] font-extrabold text-[#064E3B] mb-6 leading-tight">
// //           Accelerating Growth with <br /> Cutting-Edge Technologies
// //         </h2>

// //         <p className="text-[#065F46] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
// //           Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms to build high-performance digital solutions.
// //         </p>
// //       </div>

// //       {/* Tabs */}
// //       <div className="flex flex-wrap justify-center gap-3 z-50 mb-16">
// //         {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map((cat, i) => (
// //           <button
// //             key={cat}
// //             className={`px-6 py-2.5 rounded-full border text-[14px] font-bold transition-all duration-300 ${
// //               i === 0
// //                 ? "bg-[#059669] text-white border-[#059669] shadow-lg shadow-emerald-300"
// //                 : "bg-white/80 text-[#059669] border-[#A7F3D0] hover:bg-white"
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Orbit Section */}
// //       <div className="relative w-full flex justify-center items-center h-[450px]">

// //         {/* Orbit Lines */}
// //         <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1200 450">
// //           <ellipse cx="600" cy="225" rx="160" ry="50" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.35" />
// //           <ellipse cx="600" cy="225" rx="280" ry="90" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.25" />
// //           <ellipse cx="600" cy="225" rx="420" ry="150" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.18" />
// //         </svg>

// //         {/* Center Core */}
// //         <div className="relative z-50 flex items-center justify-center">
// //           <div className="absolute w-64 h-64 bg-white/30 rounded-full blur-2xl" />
// //           <div className="absolute w-52 h-52 bg-white/50 rounded-full border border-white/40 backdrop-blur-md shadow-xl" />

// //           <div className="relative w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4">
// //             <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-2">
// //               <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
// //                 <path d="M14 8C19.5 8 23.5 12 23.5 17C23.5 22 19.5 26 14 26" stroke="#059669" strokeWidth="4.5" strokeLinecap="round" />
// //                 <circle cx="22" cy="8" r="3.5" fill="#059669" stroke="white" strokeWidth="2" />
// //               </svg>
// //             </div>
// //             <h3 className="text-[#064E3B] font-bold text-[17px] text-center">
// //               Dousoft<br />Core Stack
// //             </h3>
// //             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.15em] mt-1.5">
// //               Next-Gen Solutions
// //             </p>
// //           </div>
// //         </div>

// //         {/* Orbiting Icons */}
// //         {techIcons.map((icon) => (
// //           <div
// //             key={icon.id}
// //             className="absolute z-40"
// //             style={{
// //               left: "50%",
// //               top: "50%",
// //               width: "44px",
// //               height: "44px",
// //               marginLeft: "-22px",
// //               marginTop: "-22px",
// //               offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
// //               animation: `orbit ${icon.duration}s linear infinite`,
// //               animationDelay: `-${icon.delay}s`,
// //             }}
// //           >
// //             <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-2.5 hover:scale-115 hover:shadow-xl transition-all duration-300">
// //               <img src={icon.logo} alt="tech icon" className="w-full h-full object-contain" />
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <style jsx>{`
// //         @keyframes orbit {
// //           from { offset-distance: 0%; }
// //           to { offset-distance: 100%; }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default TechStack;


// "use client";

// import React from "react";

// const techIcons = [
//   // Inner Ring
//   { id: 1, rx: 160, ry: 50, duration: 25, delay: 0, logo: "https://cdn.simpleicons.org/react/61DAFB" },
//   { id: 2, rx: 160, ry: 50, duration: 25, delay: 12.5, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },

//   // Middle Ring
//   { id: 3, rx: 300, ry: 100, duration: 35, delay: 0, logo: "https://cdn.simpleicons.org/angular/DD0031" },
//   { id: 4, rx: 300, ry: 100, duration: 35, delay: 11.6, logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
//   { id: 5, rx: 300, ry: 100, duration: 35, delay: 23.2, logo: "https://cdn.simpleicons.org/svelte/FF3E00" },

//   // Outer Ring (8 Icons - Balanced Spacing)
//   { id: 6, rx: 500, ry: 180, duration: 50, delay: 0, logo: "https://cdn.simpleicons.org/python/3776AB" },
//   { id: 7, rx: 500, ry: 180, duration: 50, delay: 6.25, logo: "https://cdn.simpleicons.org/go/00ADD8" },
//   { id: 8, rx: 500, ry: 180, duration: 50, delay: 12.5, logo: "https://cdn.simpleicons.org/java/007396" },
//   { id: 9, rx: 500, ry: 180, duration: 50, delay: 18.75, logo: "https://cdn.simpleicons.org/mongodb/47A048" },
//   { id: 10, rx: 500, ry: 180, duration: 50, delay: 25, logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
//   { id: 11, rx: 500, ry: 180, duration: 50, delay: 31.25, logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
//   { id: 12, rx: 500, ry: 180, duration: 50, delay: 37.5, logo: "https://cdn.simpleicons.org/docker/2496ED" },
//   { id: 13, rx: 500, ry: 180, duration: 50, delay: 43.75, logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
// ];

// const TechStack = () => {
//   return (
//     <section className="relative w-full bg-[#F4FDF8] flex flex-col items-center justify-start pt-10 pb-20 overflow-hidden font-sans">
      
//       {/* Background Radial Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle,_#10B981_0%,_#ECFDF5_70%)] opacity-70" />
//       </div>

//       {/* Header Section - More Compact */}
//       <div className="relative z-50 text-center mb-10 px-4 max-w-4xl mx-auto">
//         <div className="inline-block bg-[#DFF6E8] text-[#009A4D] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#C9EED8]">
//           Technology
//         </div>
//         <h2 className="text-[38px] md:text-[50px] font-extrabold text-[#111827] mb-4 tracking-tight leading-tight">
//           Accelerating Growth with <br /> Cutting-Edge Technologies
//         </h2>
//         <p className="text-[#4B5563] text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto font-medium">
//           Leverage our expertly curated stack of modern frameworks, robust languages, and scalable platforms to build high-performance digital solutions.
//         </p>
//       </div>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 z-50 mb-16">
//         {["Front End", "Back End", "Mobile App", "Database", "Cloud & DevOps"].map((cat, i) => (
//           <button
//             key={cat}
//             className={`px-6 py-2 rounded-full border text-[13px] font-bold transition-all duration-300 ${
//               i === 0
//                 ? "bg-[#12B76A] text-white border-[#12B76A] shadow-lg shadow-emerald-200"
//                 : "bg-white/90 text-[#12B76A] border-[#D1FADF] hover:bg-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Orbit Visualization - Centered and Spaced */}
//       <div className="relative w-full flex justify-center items-center h-[500px]">
        
//         {/* Subtle Orbit Lines */}
//      <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1200 500">

//   <ellipse
//     cx="600"
//     cy="250"
//     rx="160"
//     ry="50"
//     fill="none"
//     stroke="#059669"
//     strokeWidth="1.8"
//     opacity="0.45"
//   />

//   <ellipse
//     cx="600"
//     cy="250"
//     rx="300"
//     ry="100"
//     fill="none"
//     stroke="#047857"
//     strokeWidth="1.6"
//     opacity="0.35"
//   />

//   <ellipse
//     cx="600"
//     cy="250"
//     rx="500"
//     ry="180"
//     fill="none"
//     stroke="#065F46"
//     strokeWidth="1.4"
//     opacity="0.3"
//   />

// </svg> 

//         {/* Center Glass Core */}
//         <div className="relative z-50 flex items-center justify-center">
//           <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-3xl" />
//           <div className="absolute w-52 h-52 bg-white/40 rounded-full border border-white/50 backdrop-blur-lg shadow-xl" />
          
//           <div className="relative w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 border border-white">
//             <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-50 flex items-center justify-center mb-2">
//                <img src="./logo.png" alt="D Logo" className="w-6 h-6" />
//             </div>
//             <h3 className="text-[#111827] font-bold text-[16px] leading-tight text-center">Dousoft<br />Core Stack</h3>
//             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.15em] mt-1.5 text-center">Next-Gen Solutions</p>
//           </div>
//         </div>

//         {/* Orbiting Tech Icons */}
//         {techIcons.map((icon) => (
//           <div
//             key={icon.id}
//             className="absolute z-40"
//             style={{
//               left: '50%',
//               top: '50%',
//               width: '46px',
//               height: '46px',
//               marginLeft: '-23px',
//               marginTop: '-23px',
//               offsetPath: `ellipse(${icon.rx}px ${icon.ry}px at center)`,
//               animation: `orbit ${icon.duration}s linear infinite`,
//               animationDelay: `-${icon.delay}s`,
//             }}
//           >
//             <div className="w-full h-full bg-white rounded-full shadow-md border border-slate-100/50 flex items-center justify-center p-2.5 hover:scale-115 transition-all cursor-pointer">
//               <img src={icon.logo} alt="tech icon" className="w-full h-full object-contain" />
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes orbit {
//           from { offset-distance: 0%; }
//           to { offset-distance: 100%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TechStack;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- TYPES ---------------- */
interface TechIcon {
  id: number;
  rx: number;
  ry: number;
  duration: number;
  logo: string;
  category: string;
}

const techIcons: TechIcon[] = [
  { id: 1, rx: 160, ry: 55, duration: 25, logo: "https://cdn.simpleicons.org/react/61DAFB", category: "Front End" },
  { id: 2, rx: 160, ry: 55, duration: 25, logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D", category: "Front End" },
  { id: 3, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/angular/DD0031", category: "Front End" },
  { id: 4, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/svelte/FF3E00", category: "Front End" },
  { id: 5, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/nodedotjs/339933", category: "Back End" },
  { id: 6, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/python/3776AB", category: "Back End" },
  { id: 7, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/go/00ADD8", category: "Back End" },
  { id: 8, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { id: 9, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/mongodb/47A048", category: "Database" },
  { id: 10, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/redis/DC382D", category: "Database" },
  { id: 11, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/googlecloud/4285F4", category: "Cloud & DevOps" },
  { id: 12, rx: 480, ry: 165, duration: 45, logo: "https://cdn.simpleicons.org/amazonaws/232F3E", category: "Cloud & DevOps" },
  { id: 13, rx: 300, ry: 105, duration: 35, logo: "https://cdn.simpleicons.org/kubernetes/326CE5", category: "Cloud & DevOps" },
];

const categories = ["All Technologies", "Front End", "Back End", "Database", "Cloud & DevOps"];

const headerData = [
  { badge: "Technology Stack", title: "Cutting-Edge Technologies" },
  { badge: "Premium Tech Stack", title: "Modern Architecture" },
];

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Technologies");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % headerData.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const displayIcons = useMemo(() => {
    const filtered = activeTab === "All Technologies" ? techIcons : techIcons.filter((i) => i.category === activeTab);
    return filtered.map((icon) => {
      const sameRing = filtered.filter((i) => i.rx === icon.rx);
      const pos = sameRing.findIndex((i) => i.id === icon.id);
      return { ...icon, spreadDelay: (icon.duration / sameRing.length) * pos };
    });
  }, [activeTab]);

  return (
    <section className="relative min-h-screen w-full bg-[#FDFEFC] overflow-hidden pt-20 pb-28 font-sans flex flex-col items-center">
      
      {/* Header */}
      <div className="z-20 text-center px-4 mb-12">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <span className="inline-block mb-4 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              {headerData[index].badge}
            </span>
            <h1 className="text-[40px] md:text-[54px] font-black text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent">
                {headerData[index].title}
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tabs */}
      <div className="z-20 flex flex-wrap justify-center gap-2 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`rounded-full px-6 py-2 text-xs font-bold transition-all ${
              activeTab === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "border border-emerald-100 text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbit Area */}
      <div className="relative w-full max-w-[1100px] h-[500px] grid place-items-center isolate">
        
        {/* Orbits */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1100 500">
          {[160, 300, 480].map((r) => (
            <ellipse key={r} cx="550" cy="250" rx={r} ry={r * 0.35} fill="none" stroke="#065f46" strokeWidth="1.5" opacity="0.2" />
          ))}
        </svg>

        {/* PERFECT CENTER CORE */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full bg-emerald-400/20 blur-[100px]" />
          {/* <div className="relative w-48 h-48 rounded-full shadow-2xl flex flex-col items-center justify-center p-4"> */}
            {/* <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest mb-2 opacity-70">Expertise</span> */}
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner mb-3">
               <img src="/logo3.jpeg" alt="Logo" className="w-15 h-25 object-contain" />
            </div>
            {/* <h3 className="text-base font-black text-gray-900 tracking-tighter">Dousoft</h3> */}
            {/* <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Tech Hub</p> */}
          {/* </div> */}
        </div>

        {/* Icons */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <AnimatePresence>
            {displayIcons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute pointer-events-auto"
                style={{
                  width: 55, height: 55,
                  offsetPath: `ellipse(${icon.rx}px ${icon.rx * 0.35}px at center)`,
                  animation: `orbit ${icon.duration}s linear infinite`,
                  animationDelay: `-${icon.spreadDelay}s`,
                }}
              >
                <div className="w-full h-full bg-white border border-emerald-50 rounded-xl shadow-md flex items-center justify-center p-3 hover:scale-125 transition-all group">
                  <img src={icon.logo} alt="" className="w-full h-full object-contain" />
                  <div className="absolute -top-8 bg-gray-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {icon.category}
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
      `}</style>
    </section>
  );
};

export default TechStack;








// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Types ---
// interface Tech {
//   name: string;
//   logo: string;
//   color: string;
//   desc: string;
// }

// const techData: Record<string, Tech[]> = {
//   "Front End": [
//     { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB", desc: "High-performance interfaces" },
//     { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000", color: "#000000", desc: "SSR & Edge computing" },
//     { name: "Vue.js", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D", color: "#4FC08D", desc: "Progressive frameworks" },
//   ],
//   "Back End": [
//     { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933", desc: "Scalable server logic" },
//     { name: "Go", logo: "https://cdn.simpleicons.org/go/00ADD8", color: "#00ADD8", desc: "High-concurrency systems" },
//     { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB", desc: "AI & Data processing" },
//   ],
//   "Infrastructure": [
//     { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/232F3E", color: "#FF9900", desc: "Global cloud backbone" },
//     { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED", desc: "Containerized agility" },
//     { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5", color: "#326CE5", desc: "Orchestration at scale" },
//   ],
// };

// const HighEndTechStack: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("Front End");

//   return (
//     <section className="relative w-full min-h-screen bg-[#F8FAFC] py-24 px-6 font-sans overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -z-10" />
      
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <motion.span 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-200"
//           >
//             Our Capability
//           </motion.span>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-6 tracking-tight"
//           >
//             Built with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 italic">Best in Class</span>
//           </motion.h2>
//         </div>

//         {/* Interactive Bento Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* Sidebar Navigation (3 Cols) */}
//           <div className="lg:col-span-4 flex flex-col gap-3">
//             {Object.keys(techData).map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveTab(cat)}
//                 className={`group relative flex items-center justify-between p-6 rounded-3xl transition-all duration-500 border-2 ${
//                   activeTab === cat 
//                     ? "bg-white border-emerald-500 shadow-2xl shadow-emerald-100 scale-105" 
//                     : "bg-slate-50 border-transparent hover:border-slate-200 opacity-70"
//                 }`}
//               >
//                 <span className={`text-xl font-bold ${activeTab === cat ? "text-slate-900" : "text-slate-500"}`}>
//                   {cat}
//                 </span>
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
//                   activeTab === cat ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-400"
//                 }`}>
//                   →
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Display Area (8 Cols) */}
//           <div className="lg:col-span-8 bg-white/60 backdrop-blur-xl border border-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 min-h-[500px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="grid grid-cols-1 md:grid-cols-2 gap-8"
//               >
//                 {techData[activeTab].map((tech, idx) => (
//                   <motion.div
//                     key={tech.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="group flex gap-6 items-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-emerald-50 transition-all border border-transparent hover:border-emerald-50"
//                   >
//                     <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500">
//                       <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold text-slate-900">{tech.name}</h4>
//                       <p className="text-slate-500 text-sm mt-1">{tech.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}

//                 {/* Decorative "Status" Card */}
//                 <div className="md:col-span-2 mt-4 p-8 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl text-white overflow-hidden relative">
//                   <div className="relative z-10">
//                     <h3 className="text-2xl font-bold mb-2">Enterprise Ready</h3>
//                     <p className="text-emerald-50 opacity-90 max-w-md">
//                       Our {activeTab} architecture is optimized for 99.9% uptime and ultra-low latency deployments.
//                     </p>
//                   </div>
//                   <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HighEndTechStack;
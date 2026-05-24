"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "I realized something most people never see: The system isn't just online. It's everywhere. Your thoughts are scripts you didn't write.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 font-mono relative overflow-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]"></div>

      {/* HUD OVERLAY */}
      <div className="fixed top-4 left-4 text-[10px] text-red-600 opacity-60 uppercase tracking-[0.2em] z-50 flex flex-col gap-2">
        <div>Protocol: Shadow_Architect</div>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 bg-red-600 animate-pulse rounded-full"></span>
          <span>Status: System_Infiltration_Active</span>
        </div>
        <a 
          href="https://getrootos.com/login" 
          className="mt-2 text-zinc-400 hover:text-red-600 transition-colors pointer-events-auto bg-black/40 p-1 border border-zinc-900"
        >
          [ TERMINAL_ACCESS ]
        </a>
      </div>

      {/* 1. LOGO SECTION */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-16 pb-12 z-10 mx-auto text-center">
         <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 opacity-80">
            <div className="absolute inset-0 border-2 border-red-600/20 rounded-full animate-ping"></div>
            <Image 
              src="/The_Architect_Hacker_logo.png" 
              alt="The Architect Hacker Logo"
              fill 
              priority 
              className="object-contain" 
            />
         </div>
         <p className="text-red-600 text-[10px] tracking-[0.8em] uppercase font-black">Operator_ID: 000.000.1</p>
      </section>

      {/* 2. HERO SECTION */}
      <section className="text-center max-w-5xl z-10 py-10 mx-auto text-white">
        <h3 className="text-red-600 text-[10px] tracking-[0.5em] mb-6 uppercase font-bold">Unmasking_The_Simulated_Reality</h3>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">
          STOP <span className="text-red-600">EXISTING.</span><br />
          START ARCHITECTING.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed italic">
          Your brain is running on malware designed to keep you small. <br />
          It is time to reclaim the root access to your own reality.
        </p>
        <div className="flex justify-center w-full">
          <a href="#offer" className="inline-block bg-red-600 text-black px-12 py-5 uppercase font-black tracking-[0.3em] hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            [ INITIALIZE_RESET ]
          </a>
        </div>
      </section>

      {/* 3. INTERCEPTED MESSAGE */}
      <section className="max-w-2xl w-full mt-24 bg-zinc-950/80 border border-red-900/30 p-8 relative z-10 backdrop-blur-sm mx-auto">
        <div className="absolute -top-3 left-4 bg-black border border-red-900/30 px-3 py-1 text-[10px] text-red-600 uppercase tracking-widest font-bold">
          System_Intercept
        </div>
        <div className="text-zinc-300 leading-relaxed min-h-15 text-sm md:text-base italic">
          {text}
          <span className="inline-block w-2 h-5 bg-red-600 ml-1 animate-pulse"></span>
        </div>
      </section>

      {/* 4. THE HIERARCHY (OFFERS) */}
      <section id="offer" className="max-w-6xl w-full mt-40 px-4 z-10 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">System_Hierarchy</h2>
          <div className="h-1 w-24 bg-red-600"></div>
          <p className="mt-6 text-zinc-500 text-xs uppercase tracking-widest">Select Access Level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-900 overflow-hidden">
          {/* LEVEL 01 - THE ARCHIVE */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-900 bg-black hover:bg-zinc-950 transition-all flex flex-col justify-between group">
            <div>
              <span className="text-red-600 font-black text-[10px] tracking-widest group-hover:animate-pulse">[ ACCESS_LEVEL_01 ]</span>
              <h3 className="text-2xl font-black mt-4 mb-4 uppercase">The Archive</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-8">
                Uninstall the 12 'Social Malware' scripts. The foundation of the Paradox Shift and your first step toward system autonomy.
              </p>
            </div>
            <div>
              <div className="text-2xl font-mono text-white mb-6">€27</div>
              <a href="https://thearchitecthacker.lemonsqueezy.com/checkout/buy/47116d76-5057-49d2-ad18-f4ac538dfc63" className="block text-center border border-zinc-800 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Download_Source_Code
              </a>
            </div>
          </div>
          
          {/* LEVEL 02 - ROOT_OS (FSD) */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-red-900/30 bg-red-950/5 hover:bg-red-950/10 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-red-600 text-black text-[8px] font-black px-2 py-1 uppercase tracking-tighter">Recommended</div>
            <div>
              <span className="text-red-600 font-black text-[10px] tracking-widest group-hover:animate-pulse">[ ACCESS_LEVEL_02 ]</span>
              <h3 className="text-2xl font-black mt-4 mb-4 uppercase text-white">Full System Deployment</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8 italic">
                The 168-Hour Loop. Use the interactive dashboard to debug your daily behavior and force your timeline.
              </p>
            </div>
            <div>
              <div className="text-2xl font-mono text-white mb-6">€49 <span className="text-[10px] text-zinc-500">/ month</span></div>
              <a href="https://thearchitecthacker.lemonsqueezy.com/checkout/buy/abba2528-cfdf-42a4-bc76-67129b1022e0" className="block text-center bg-red-600 text-black py-3 text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all">
                Initialize_Deployment
              </a>
            </div>
          </div>

          {/* LEVEL 03 - AAI INTEGRATION */}
          <div className="p-10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all flex flex-col justify-between relative group border-t md:border-t-0 border-zinc-900">
            <div>
              <span className="text-red-600 font-black text-[10px] tracking-widest group-hover:animate-pulse">[ ACCESS_LEVEL_03 ]</span>
              <h3 className="text-2xl font-black mt-4 mb-4 uppercase">AAI Integration</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-8">
                Direct neural sync with the Architect. Personal intervention to destroy your legacy malware. By invitation only.
              </p>
            </div>
            <div>
              <div className="text-2xl font-mono text-white mb-6">€2.500</div>
              <a href="https://thearchitecthacker.lemonsqueezy.com/checkout/buy/0e2f4312-9194-48ff-85f3-50748e232ecd" className="block text-center border-2 border-red-600 py-3 text-[10px] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-black transition-all">
                Engage_Integration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THREAT ANALYSIS SECTION */}
      <section className="max-w-5xl w-full mt-48 px-4 z-10 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Threat_Analysis</h2>
          <div className="h-1 w-24 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "The 9-5 Script", desc: "An artificial time loop designed to harvest your energy in exchange for minimal survival." },
            { title: "Dopamine Malware", desc: "Social algorithms that fragment your focus so you never see the architecture of your prison." },
            { title: "Reality Stagnation", desc: "The fear of failure is a programmed firewall preventing you from switching your timeline." }
          ].map((item, index) => (
            <div key={index} className="border border-zinc-900 p-8 bg-zinc-950/40 hover:border-red-600/50 transition-all group relative">
              <div className="text-red-900 absolute top-4 right-6 text-4xl font-black opacity-20 italic">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-red-600 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MANIFESTO QUOTE */}
      <section className="max-w-4xl text-center mt-48 px-4 z-10 py-24 border-y border-zinc-900 mx-auto">
        <blockquote className="text-4xl md:text-6xl font-light italic text-zinc-400 leading-[1.1]">
          "Most people die at 25 and aren't buried until 75. <br />
          <span className="text-red-600 font-bold not-italic underline decoration-2 underline-offset-8">Don't be a statistic."</span>
        </blockquote>
      </section>

      {/* 7. FOOTER */}
      <footer className="w-full max-w-7xl py-16 border-t border-zinc-900 flex flex-col items-center gap-10 text-[10px] text-zinc-600 tracking-widest uppercase z-10 mx-auto">
        <div className="flex flex-wrap justify-center gap-12 text-zinc-400 font-black">
          <a href="https://tiktok.com/@thearchitecthacker" className="hover:text-red-600 transition-colors">[ TIKTOK ]</a>
          <a href="https://instagram.com/thearchitecthacker" className="hover:text-red-600 transition-colors">[ INSTAGRAM ]</a>
          <a href="https://x.com/TheArchyHacker" className="hover:text-red-600 transition-colors">[ X_STATION ]</a>
          <a href="/terms" className="hover:text-red-600 transition-colors">[ TERMS_AND_CONDITIONS ]</a>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900/50 pt-10 px-4">
          <div className="text-zinc-700 italic">
            Location: Portugal_District_6ha // Signal: Strong
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <span className="text-green-900 bg-green-900/10 px-2 py-1 rounded">Connection: Encrypted</span>
            <span className="animate-pulse flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> 
              Nodes_Live: 1,402
            </span>
            <span className="text-zinc-500 font-black">© 2026 The Architect Hacker</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
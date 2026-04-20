"use client";

import React from 'react';
import Image from 'next/image';

// VERANDERD: Naam naar RealityOS
export default function RealityOS() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 font-mono relative overflow-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]"></div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale brightness-50">
        <Image 
          src="/Reprogram_Timeline.jpeg" 
          alt="Timeline Reprogram Visual" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* HEADER HUD */}
      <nav className="w-full max-w-7xl flex justify-between items-center py-6 z-10 border-b border-zinc-900 mx-auto px-4">
        <a href="/" className="text-red-600 text-xs tracking-widest hover:text-white transition-colors group">
          <span className="group-hover:-translate-x-0.75 inline-block transition-transform">←</span> [ EXIT_TO_MAIN_DASHBOARD ]
        </a>
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex gap-4">
          <span className="animate-pulse text-red-900">● SYSTEM_LIVE</span>
          <span>Node: RealityOS_v1.0</span>
        </div>
      </nav>

      {/* LOGO */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-12 pb-8 z-10 mx-auto px-4">
        <div className="relative w-40 h-40 md:w-56 md:h-56 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          <Image 
            src="/The_Architect_Hacker_logo.png" 
            alt="The Architect Hacker Logo"
            fill 
            priority 
            className="object-contain" 
          />
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="max-w-4xl w-full pt-10 pb-20 z-10 text-center mx-auto px-4">
        <h3 className="text-red-600 text-[10px] tracking-[0.5em] mb-4 uppercase">Upgrade_Authorization_Required</h3>
        <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-[0.9] wrap-break-word">
          Reality <span className="text-red-600">OS</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Stop met het consumeren van informatie. Start met het installeren van een nieuw besturingssysteem. De volledige 8-module digitale herprogrammering van je realiteit.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {['CORE_KERNEL', 'BIO_OVERRIDE', 'TIME_EDITOR', 'NET_INFILTR'].map((tag) => (
            <div key={tag} className="border border-zinc-800 py-2 text-[9px] text-zinc-600 tracking-widest uppercase">
              {tag}: <span className="text-green-900">READY</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTERFACE PREVIEW SECTION */}
      <section className="max-w-6xl w-full py-20 z-10 border-y border-zinc-900 bg-zinc-950/30 backdrop-blur-sm mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter">De Cockpit voor je Nieuwe Leven</h2>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              RealityOS is een digitaal framework. Een interactief dashboard waar je jouw dagelijkse output analyseert. De software helpt je malware in je gedrag op te sporen en je focus te herstellen.
            </p>
            <ul className="space-y-4">
              {[
                { t: "Interactieve HUD", d: "Monitor je System Integrity via de digitale interface." },
                { t: "Protocol Assets", d: "Download wekelijks nieuwe assets om je status te upgraden." },
                { t: "Private Node Access", d: "Toegang tot de exclusieve Architect community." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-red-600 mt-1">[{'>'}]</span>
                  <div>
                    <span className="block text-white font-bold uppercase text-xs">{item.t}</span>
                    <span className="text-zinc-500 text-sm">{item.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square border-2 border-red-600/20 bg-black p-4 shadow-[0_0_50px_rgba(220,38,38,0.1)] flex items-center justify-center">
             <div className="text-zinc-800 italic text-[10px] uppercase tracking-widest text-center px-10">
               <span className="animate-pulse mb-4 text-red-900 block">Visualizing_System_Interface...</span>
               The Dashboard for the 1%.
             </div>
          </div>
        </div>
      </section>

      {/* PRICING / ACCESS */}
      <section className="max-w-xl w-full py-32 z-10 text-center mx-auto px-4">
        <div className="border-2 border-red-600 p-8 md:p-12 bg-red-950/5 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">
            Deployment_Status: Soon
          </div>
          <h2 className="text-4xl font-black mb-2 uppercase">RealityOS v1.0</h2>
          <div className="text-zinc-500 text-xs mb-8 uppercase tracking-widest italic text-center">Digital Framework + Lifetime License</div>
          
          <div className="text-5xl font-black text-white mb-8">
            €497
          </div>

          {/* VERANDERD NAAR WAITLIST VOOR DE REVIEW */}
          <button className="w-full border-2 border-red-600 text-red-600 py-5 font-black uppercase tracking-[0.3em] transition-all duration-300 mb-6">
            Join the Waitlist
          </button>
          
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed text-center">
            Status: <span className="text-red-900 italic">Security_Check_In_Progress</span>
          </p>
        </div>
      </section>

      <footer className="w-full max-w-7xl py-12 border-t border-zinc-900 text-center z-10 text-[8px] text-zinc-700 tracking-[0.5em] uppercase mx-auto px-4">
        Reality_Operating_System // Developed by The Architect
      </footer>
    </main>
  );
}
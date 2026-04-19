"use client";

import React from 'react';
import Image from 'next/image';

export default function Masterclass() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 font-mono relative overflow-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]"></div>

      {/* BACKGROUND IMAGE - Image_1: De ultieme transformatie */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale">
        <Image 
          src="/1000070634.png" 
          alt="Timeline Reprogram Visual" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* HEADER HUD */}
      <nav className="w-full max-w-7xl flex justify-between items-center py-6 z-10 border-b border-zinc-900 mx-auto px-4 relative">
        <a href="/" className="text-red-600 text-[10px] tracking-widest hover:text-white transition-colors group">
          <span className="group-hover:translate-x-[-3px] inline-block transition-transform">←</span> [ BACK_TO_DASHBOARD ]
        </a>
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
          Status: Development_Mode // Node: Masterclass_V1
        </div>
      </nav>

      {/* 1. HET LOGO */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-16 pb-12 z-10 mx-auto px-4 relative">
        <div className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
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
      <section className="max-w-4xl w-full pt-10 pb-32 z-10 text-center mx-auto px-4 relative">
        <div className="text-red-600 text-[10px] tracking-[0.6em] uppercase mb-4 animate-pulse">
          Incoming_Transmission...
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter leading-tight break-words">
          The System <span className="text-red-600 font-outline-2">Overhaul.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 italic">
          "Dit is geen cursus. Dit is de volledige herprogrammering van je werkelijkheid. 8 weken om je maatschappelijke scripts te verwijderen en je eigen architectuur te bouwen."
        </p>
      </section>

      {/* CURRICULUM SECTION */}
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 py-20 z-10 border-t border-zinc-900 mx-auto px-4 relative bg-black/40 backdrop-blur-sm">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold uppercase tracking-tighter border-l-4 border-red-600 pl-6 text-white">The_Blueprint</h2>
          
          <div className="space-y-8 font-mono">
            {[
              { phase: "Phase 01", title: "Mental Firewall", desc: "Identificeer en elimineer de angst-protocollen die je groei blokkeren." },
              { phase: "Phase 02", title: "Dopamine Reset", desc: "Krijg volledige controle over je focus en verbreek de verslaving aan goedkope stimulatie." },
              { phase: "Phase 03", title: "Reality Architecture", desc: "Bouw systemen en workflows die rijkdom en vrijheid aantrekken." },
              { phase: "Phase 04", title: "Timeline Mastery", desc: "Leer hoe je beslissingen maakt vanuit je toekomstige zelf." }
            ].map((item, i) => (
              <div key={i} className="group border-b border-zinc-900 pb-6 hover:border-red-600/30 transition-colors">
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest">{item.phase}</span>
                <h3 className="text-xl font-bold uppercase mt-1 group-hover:text-red-600 transition-colors">{item.title}</h3>
                <p className="text-zinc-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WAITLIST CARD */}
        <div className="bg-zinc-950 border border-red-600/20 p-8 md:p-12 flex flex-col justify-center relative shadow-[0_0_50px_rgba(220,38,38,0.05)] h-fit sticky top-10">
          <div className="absolute top-4 right-4 text-[8px] text-red-900 font-bold tracking-widest">STRICTLY_LIMITED</div>
          <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter text-red-600">Access Restricted</h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-mono">
            De Masterclass wordt momenteel geassembleerd. Er worden slechts 50 'Architects' toegelaten tot het eerste cohort om maximale begeleiding te garanderen.
          </p>
          
          <ul className="text-[10px] space-y-3 mb-10 text-zinc-500 uppercase font-mono tracking-widest">
            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-red-600"></span> 8 Weeks of intensive coaching</li>
            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-red-600"></span> Private Discord Infiltration</li>
            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-red-600"></span> Weekly Live Transmissions</li>
          </ul>

          {/* WAITLIST BUTTON - Je kunt hier een mailto link of een Lemon Squeezy Free Product link plaatsen */}
          <a
            href="mailto:architect@thearchitecthacker.com?subject=Masterclass Waitlist Request"
            className="w-full bg-red-600 text-black py-4 font-black uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all text-center shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            [ JOIN_THE_WAITLIST ]
          </a>
          <p className="text-[8px] text-zinc-700 mt-4 text-center uppercase tracking-widest">
            You will be notified when enrollment opens.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl py-20 mt-20 border-t border-zinc-900 text-center z-10 text-[10px] text-zinc-700 tracking-[0.5em] uppercase mx-auto px-4 relative">
        Authorization Required // No Trespassing // © {new Date().getFullYear()} The Architect Hacker
      </footer>

    </main>
  );
}
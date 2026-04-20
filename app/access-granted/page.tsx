"use client";

import React from 'react';
import Image from 'next/image';

export default function AccessGranted() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 font-mono relative overflow-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-red-600/10 blur-[120px] pointer-events-none"></div>

      <section className="max-w-2xl w-full border border-red-600 p-8 md:p-12 bg-zinc-950 shadow-[0_0_50px_rgba(220,38,38,0.2)] text-center relative z-10">
        <div className="absolute -top-3 left-6 bg-black px-3 text-red-600 text-[10px] uppercase font-black tracking-[0.3em] border-x border-red-600">
          Access_Granted
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative w-20 h-20 opacity-80">
            <Image src="/The_Architect_Hacker_logo.png" alt="Logo" fill className="object-contain" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tighter italic">
          Payload_Received
        </h1>
        
        <div className="text-left bg-black border border-zinc-900 p-6 mb-10 text-[11px] md:text-[13px] space-y-3 font-mono">
          <p className="text-green-500">{`> Verifying_Transaction_Hash... [OK]`}</p>
          <p className="text-green-500">{`> Initializing_Source_Code_Download... [OK]`}</p>
          <p className="text-red-600 animate-pulse">{`> WARNING: Reality_Instability_Detected`}</p>
          <p className="text-zinc-500 border-t border-zinc-900 pt-3 mt-3">
            {`Welcome, Architect. De broncode is nu beschikbaar voor jouw lokale systeem. Gebruik deze data om de fundamenten voor je 6ha landgoed in Portugal te leggen.`}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="/The_Paradox_Shift_v1.pdf" 
            download
            className="flex-1 bg-white text-black py-4 uppercase font-black tracking-widest hover:bg-red-600 hover:text-white transition-all text-xs text-center"
          >
            [ DOWNLOAD_SOURCE_CODE ]
          </a>
          <a 
            href="/realityos" // AANGEPAST: Geen masterclass meer
            className="flex-1 border border-red-600 text-red-600 py-4 uppercase font-black tracking-widest hover:bg-red-600 hover:text-black transition-all text-xs text-center"
          >
            [ ENTER_REALITY_OS ]
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-900">
          <p className="text-[9px] text-zinc-600 uppercase tracking-[0.2em] leading-relaxed">
            Gebruik de instructies in de 'Source Code' om je eerste login voor het <br />
            RealityOS Dashboard te configureren.
          </p>
        </div>
      </section>

      {/* BOTTOM DECORATION */}
      <div className="mt-12 text-zinc-800 text-[8px] uppercase tracking-[1em] opacity-50">
        Authorization_Key: {Math.random().toString(16).substring(2, 14).toUpperCase()}
      </div>
    </main>
  );
}
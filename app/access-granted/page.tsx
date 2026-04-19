"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AccessGranted() {
  const [status, setStatus] = useState("INITIALIZING_DECRYPTION...");

  useEffect(() => {
    const messages = [
      "ESTABLISHING_SECURE_CONNECTION...",
      "BYPASSING_SOCIAL_FILTERS...",
      "EXTRACTING_PAYLOAD...",
      "ACCESS_GRANTED_BY_THE_ARCHITECT"
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setStatus(messages[i]);
      i++;
      if (i >= messages.length) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 font-mono relative overflow-hidden">
      
        {/* 1. HET LOGO (Bovenaan gecentreerd) */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-16 pb-12 z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          <Image 
            src="/The_Architect_Hacker_logo.png" 
            alt="The Architect Hacker Logo"
            fill 
            priority 
            className="object-contain" 
          />
        </div>
      </section>

      <section className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <div className="text-red-600 text-xs mb-4 tracking-[0.3em] animate-pulse">
          {status}
        </div>

        <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter leading-tight">
          Welcome to the <span className="text-red-600">Other Side.</span>
        </h1>

        <div className="bg-zinc-950/80 border border-red-600/30 p-8 mb-10 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            De 'Initial Payload' is nu beschikbaar. Dit document is je kompas voor de komende 72 uur. 
            Lees het niet alleen. Infiltreer de concepten.
          </p>

          {/* DOWNLOAD KNOP - Hier linken we direct naar de PDF of LS download link */}
          <a
            href="https://app.lemonsqueezy.com/my-orders" 
            className="inline-block bg-white text-black px-12 py-4 uppercase font-black tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Open Payload.pdf
          </a>
        </div>

        {/* UPSELL TEASER */}
        <div className="mt-12 border-t border-zinc-800 pt-10">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-4">
            Next Objective: System Overhaul Masterclass
          </p>
          <p className="text-gray-500 text-xs italic">
            "De code kennen is één ding. De architect worden is iets heel anders."
          </p>
          <div className="mt-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
            <span className="text-[10px] border border-zinc-700 px-3 py-1">ENROLLMENT_LOCKED</span>
          </div>
        </div>
      </section>

      {/* FOOTER HUD */}
      <div className="fixed bottom-4 left-4 text-[8px] text-zinc-700 uppercase tracking-widest">
        User_Status: Authorized // Payload_ID: PX-99
      </div>
    </main>
  );
}
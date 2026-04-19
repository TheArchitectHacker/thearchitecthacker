//page.tsx - De hoofdpagina van de Architect System website

"use client"; // Interactie vereist (Typewriter effect)

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Next.js Image component voor optimalisatie

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "I realized something most people never see: The system isn't just online. It's everywhere.";
  
  // Typewriter effect voor de story sectie
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center px-6 font-mono relative overflow-hidden">
      
      {/* 1. HET LOGO (Bovenaan gecentreerd) */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-16 pb-12 z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          {/* De Next.js Image Component zorgt voor snelle laadtijd */}
          <Image 
            src="/The_Architect_Hacker_logo.png" // Verwijs naar de afbeelding in de public map
            alt="The Architect Hacker Logo"
            fill // Vult de parent div (64x64 of 80x80)
            priority // Laat dit logo direct inladen
            className="object-contain" // Behoudt de verhoudingen
          />
        </div>
      </section>

      {/* HUD Overlay Elementen */}
      <div className="fixed top-4 left-4 text-[10px] text-red-500 opacity-40 uppercase tracking-[0.2em] z-50">
        Protocol: Shadow_Architect // Phase: Initial_Payload
      </div>

      {/* HERO SECTION */}
      <section className="text-center max-w-3xl z-10 py-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
          You’re not <span className="text-red-600 animate-pulse">stuck.</span><br />
          You’re programmed.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-tight">
          De meeste mensen draaien op scripts die ze nooit hebben geschreven.<br />
          Het is tijd voor een harde reset.
        </p>

        <a
          href="#offer"
          className="inline-block border-2 border-red-600 text-red-600 px-10 py-4 uppercase font-bold tracking-widest hover:bg-red-600 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
        >
          [ EXECUTE_BYPASS ]
        </a>
      </section>

      {/* STORY SECTION met Typewriter */}
      <section className="max-w-2xl w-full mt-24 bg-zinc-950/50 border border-zinc-800 p-8 relative">
        <div className="absolute -top-3 left-4 bg-black px-2 text-[10px] text-zinc-500 uppercase tracking-widest">
          Intercepted_Message
        </div>
        
        <p className="text-gray-300 leading-relaxed min-h-25">
          {text}
          <span className="inline-block w-2 h-5 bg-red-600 ml-1 animate-ping"></span>
        </p>
      </section>

      {/* OFFER SECTION */}
      <section id="offer" className="max-w-xl text-center mt-32 border-2 border-red-600 p-10 bg-red-950/5 shadow-[0_0_40px_rgba(220,38,38,0.1)] mb-20">
        <h2 className="text-3xl font-bold mb-6 tracking-tighter uppercase">
          The_Initial_Payload
        </h2>

        <p className="text-zinc-400 mb-8 italic">
          Een digitaal virus voor je beperkende overtuigingen. 
          De-installeer de maatschappelijke ruis.
        </p>

        <a
          href="#"
          className="block w-full bg-red-600 text-black py-4 uppercase font-black tracking-widest hover:bg-white transition-colors"
        >
          Download Payload
        </a>
        
        <p className="mt-4 text-[10px] text-zinc-600 uppercase">
          Security status: Unverified // Proceed at own risk
        </p>
      </section>

{/* SYSTEM STATUS FOOTER */}
      <footer className="w-full max-w-7xl py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 tracking-widest uppercase">
        <div className="mb-4 md:mb-0">
          Last_Infiltration: {new Date().toLocaleDateString()} // Location: Unknown
        </div>
        <div className="flex gap-8">
          <span className="text-green-900">Connection: Secure</span>
          <span className="animate-pulse">Active_Nodes: 1,402</span>
          <span>© {new Date().getFullYear()} The Architect Hacker</span>
        </div>
      </footer>

    </main>
  );
}
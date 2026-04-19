// page.tsx - De hoofdpagina van The Architect Hacker
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "I realized something most people never see: The system isn't just online. It's everywhere.";
  
  // Typewriter effect
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
      
      {/* HUD OVERLAY */}
      <div className="fixed top-4 left-4 text-[10px] text-red-500 opacity-40 uppercase tracking-[0.2em] z-50 pointer-events-none">
        Protocol: Shadow_Architect // Phase: Initial_Payload
      </div>

      {/* 1. HET LOGO */}
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

      {/* 2. HERO SECTION */}
      <section className="text-center max-w-3xl z-10 py-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase leading-tight">
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

      {/* 3. STORY SECTION (Typewriter) */}
      <section className="max-w-2xl w-full mt-24 bg-zinc-950/50 border border-zinc-800 p-8 relative z-10">
        <div className="absolute -top-3 left-4 bg-black px-2 text-[10px] text-zinc-500 uppercase tracking-widest">
          Intercepted_Message
        </div>
        <p className="text-gray-300 leading-relaxed min-h-[60px]">
          {text}
          <span className="inline-block w-2 h-5 bg-red-600 ml-1 animate-ping"></span>
        </p>
      </section>

      {/* 4. SYSTEM ANALYSIS (De Confrontatie) */}
      <section className="max-w-4xl w-full mt-40 px-4 z-10">
        <h2 className="text-red-600 text-[10px] tracking-[0.5em] uppercase mb-12 text-center font-bold">
          Diagnostic_Scan_Running...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Social Scripts", desc: "Je beslissingen zijn niet van jou. Ze zijn voorgeprogrammeerd door een systeem dat profiteert van je passiviteit." },
            { title: "Dopamine Loops", desc: "Je focus wordt geoogst. Je bent een gebruiker in een algoritme dat is ontworpen om je klein te houden." },
            { title: "Timeline Stagnation", desc: "Je herhaalt dezelfde 24 uur tot je sterft. Dit is geen leven, dit is een 'idle animation'." }
          ].map((item, index) => (
            <div key={index} className="border border-zinc-800 p-6 bg-zinc-950/30 hover:border-red-600/50 transition-colors group">
              <div className="text-red-600 mb-4 font-black">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter group-hover:text-red-600">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE BLUEPRINT VISUAL (Wat ze krijgen) */}
      <section className="max-w-5xl w-full mt-40 flex flex-col md:flex-row items-center gap-12 px-4 z-10">
        <div className="relative w-full md:w-1/2 aspect-[3/4] shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          <Image 
            src="/Paradox_Shift.jpeg" 
            alt="The Paradox Shift E-book Cover"
            fill
            className="object-cover border border-zinc-800"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
            The Paradox Shift:<br />
            <span className="text-red-600 italic">Reality Source Code</span>
          </h2>
          <ul className="space-y-4 text-zinc-400 font-mono text-sm">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">[✓]</span> 
              <span>De-installeer de 12 meest hardnekkige maatschappelijke 'malware' scripts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">[✓]</span> 
              <span>De 'Observer-Method': Hoe je de simulatie ziet terwijl je erin staat.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">[✓]</span> 
              <span>Timeline Jumping: De techniek om beslissingen te maken vanuit je toekomstige zelf.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold">[✓]</span> 
              <span>Identity Hot-swapping: Verander je persona in 72 uur.</span>
            </li>
          </ul>
          <div className="mt-8 p-4 bg-red-600/10 border-l-2 border-red-600 text-[10px] text-red-500 uppercase tracking-widest">
            Warning: This data cannot be unlearned. Proceed with caution.
          </div>
        </div>
      </section>

      {/* 6. THE MANIFESTO */}
      <section className="max-w-3xl text-center mt-40 px-4 z-10">
        <blockquote className="text-2xl md:text-4xl font-light italic text-zinc-300 leading-tight">
          "De meeste mensen sterven op hun 25e, maar worden pas begraven op hun 75e. <span className="text-white font-bold not-italic font-mono">Laat de Architect je niet een van hen maken."</span>
        </blockquote>
      </section>

      {/* 7. OFFER SECTION */}
      <section id="offer" className="max-w-xl w-full text-center mt-40 border-2 border-red-600 p-6 md:p-10 bg-red-950/5 shadow-[0_0_40px_rgba(220,38,38,0.1)] mb-20 z-10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tighter uppercase break-words overflow-hidden leading-tight">
          The_Initial_<br className="block md:hidden" />Payload
        </h2>

        <p className="text-zinc-400 mb-8 italic text-sm leading-relaxed">
          Een digitaal virus voor je beperkende overtuigingen.<br className="hidden md:block" /> 
          De-installeer de maatschappelijke ruis voor slechts €27.
        </p>

        <a
          href="https://thearchitecthacker.lemonsqueezy.com/checkout/buy/ff8b778e-4424-444d-b3a2-12ec3fdd54c6"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-600 text-black py-4 uppercase font-black tracking-widest hover:bg-white transition-all duration-300 text-center text-sm md:text-base shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        >
          [ EXECUTE_PAYLOAD_DOWNLOAD ]
        </a>
        
        <p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          Security status: Unverified // Proceed at own risk
        </p>
      </section>

      {/* 7.5 MASTERCLASS TEASER */}
      <section className="max-w-4xl w-full mb-32 px-6 py-12 border border-zinc-900 bg-zinc-950/20 text-center relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
        
        <h3 className="text-red-600 text-[10px] tracking-[0.4em] mb-4 uppercase">Advanced_Training_Protocol</h3>
        <h2 className="text-2xl md:text-4xl font-black uppercase mb-6 tracking-tighter">
          The System Overhaul Masterclass
        </h2>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-8 font-mono leading-relaxed">
          Van het begrijpen van de code naar het herschrijven van de realiteit. 
          De volledige 8-weekse herprogrammering voor wie de 'Initial Payload' heeft overleefd.
        </p>
        
        <div className="inline-block border border-zinc-800 px-6 py-2 text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
          Status: <span className="text-zinc-400">Restricted_Access</span> // Phase: <span className="text-red-900">Alpha_Testing</span>
        </div>
      </section>

      {/* 8. SYSTEM STATUS & SOCIALS */}
      <footer className="w-full max-w-7xl py-12 border-t border-zinc-900 flex flex-col items-center gap-8 text-[10px] text-zinc-600 tracking-widest uppercase z-10">
        
        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-8 text-zinc-400">
          <a href="https://tiktok.com/@thearchitecthacker" target="_blank" className="hover:text-red-600 transition-colors">[ TIKTOK ]</a>
          <a href="https://instagram.com/thearchitecthacker" target="_blank" className="hover:text-red-600 transition-colors">[ INSTAGRAM ]</a>
          <a href="https://x.com/thearchitecthacker" target="_blank" className="hover:text-red-600 transition-colors">[ X_STATION ]</a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-900/50 pt-8">
          <div className="mb-4 md:mb-0">
            Last_Infiltration: {new Date().toLocaleDateString()} // Location: Unknown
          </div>
          <div className="flex gap-8">
            <span className="text-green-900">Connection: Secure</span>
            <span className="animate-pulse">Active_Nodes: 1,402</span>
            <span>© {new Date().getFullYear()} The Architect Hacker</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
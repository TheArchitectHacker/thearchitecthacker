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
      <div className="fixed top-4 left-4 text-[10px] text-red-600 opacity-60 uppercase tracking-[0.2em] z-50 pointer-events-none flex flex-col gap-1">
        <div>Protocol: Shadow_Architect</div>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 bg-red-600 animate-pulse rounded-full"></span>
          <span>Status: System_Infiltration_Active</span>
        </div>
      </div>

      {/* 1. LOGO */}
      <section className="w-full max-w-7xl flex flex-col items-center pt-16 pb-12 z-10 mx-auto">
        <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
          <Image 
            src="/The_Architect_Hacker_logo.png" 
            alt="The Architect Hacker Logo"
            fill 
            priority 
            className="object-contain" 
          />
        </div>
      </section>

      {/* 2. HERO */}
      <section className="text-center max-w-4xl z-10 py-10 mx-auto text-white">
        <h3 className="text-red-600 text-[10px] tracking-[0.5em] mb-6 uppercase font-bold text-center w-full">Unmasking_The_Simulated_Reality</h3>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">
          Stop <span className="text-red-600">Existing.</span><br />
          Start Architecting.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed italic text-center">
          Je brein draait op malware die is ontworpen om je klein te houden. <br />
          Het is tijd om de root-toegang tot je eigen realiteit op te eisen.
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

      {/* 4. ANALYSIS */}
      <section className="max-w-5xl w-full mt-40 px-4 z-10 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">Threat_Analysis</h2>
          <div className="h-1 w-24 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "The 9-5 Script", desc: "Een kunstmatige tijdlus ontworpen om je energie te oogsten in ruil voor minimale overleving." },
            { title: "Dopamine Malware", desc: "Sociale algoritmes die je focus fragmenteren zodat je nooit de architectuur van je gevangenis ziet." },
            { title: "Reality Stagnation", desc: "De angst om te falen is een geprogrammeerde firewall die je tegenhoudt om je tijdlijn te switchen." }
          ].map((item, index) => (
            <div key={index} className="border border-zinc-900 p-8 bg-zinc-950/40 hover:border-red-600/50 transition-all group relative">
              <div className="text-red-900 absolute top-4 right-6 text-4xl font-black opacity-20 italic">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-red-600 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SOURCE CODE VISUAL */}
      <section className="max-w-6xl w-full mt-48 flex flex-col lg:flex-row items-center gap-16 px-4 z-10 mx-auto">
        <div className="w-full lg:w-1/2 group relative flex flex-col items-center">
          <div className="absolute inset-0 bg-red-600 opacity-10 blur-[100px] pointer-events-none group-hover:opacity-20 transition-opacity"></div>
          <div className="w-full h-auto max-w-125 border border-zinc-900 shadow-2xl overflow-hidden group-hover:border-red-600/50 transition-colors duration-500 bg-zinc-900">
            <Image 
              src="/Paradox_Shift.jpeg" 
              alt="The Paradox Shift E-book Cover"
              width={1000} 
              height={1400} 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="mt-6 w-full max-w-125 bg-zinc-950/90 p-4 border-l-2 border-red-600 backdrop-blur-md text-left z-10">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-red-600 font-black tracking-widest uppercase">File_Type: Source_Code.pdf</span>
              <span className="text-[9px] text-zinc-700 font-mono uppercase italic tracking-tighter">Verified_Source</span>
            </div>
            <span className="text-[10px] text-zinc-300 block font-black uppercase tracking-widest italic leading-relaxed">
              Includes: <span className="text-white underline decoration-red-600 underline-offset-4 tracking-tighter">RealityOS_Alpha_Key</span>
            </span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            The Paradox <br /><span className="text-red-600">Shift</span>
          </h2>
          <p className="text-red-600 mb-8 italic text-lg tracking-tight font-bold underline decoration-red-600 decoration-1 underline-offset-4">"De handleiding voor wie de simulatie wil verlaten."</p>
          <ul className="space-y-6 text-zinc-400 font-mono text-sm uppercase">
            {[
              "De-installeer de 12 'Social Malware' scripts.",
              "Reality Scanning: Leer de patronen van het systeem zien.",
              "Timeline Jumping: Forceer beslissingen vanuit je doel.",
              "Access Key: Activeer je RealityOS Dashboard login."
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-red-600 rotate-45 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-white transition-colors">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. MANIFESTO */}
      <section className="max-w-4xl text-center mt-48 px-4 z-10 py-20 border-y border-zinc-900 mx-auto">
        <blockquote className="text-3xl md:text-5xl font-light italic text-zinc-400 leading-tight">
          "De meeste mensen sterven op hun 25e, maar worden pas begraven op hun 75e. <span className="text-red-600 font-bold not-italic underline decoration-2 underline-offset-8">Word geen statistiek."</span>
        </blockquote>
      </section>

      {/* 7. OFFER */}
      <section id="offer" className="max-w-xl w-full text-center mt-48 border-2 border-red-600 p-8 md:p-14 bg-red-950/5 shadow-[0_0_60px_rgba(220,38,38,0.15)] mb-32 z-10 mx-auto relative">
        <div className="absolute top-0 right-0 bg-red-600 text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">
          Auth_Level_01
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase leading-none">
          Initial_Payload:<br />The_Source_Code
        </h2>
        <p className="text-zinc-400 mb-10 italic text-sm leading-relaxed">
          Krijg de blauwdruk en je eerste <span className="text-white font-bold underline decoration-red-600">Access Key</span> voor het RealityOS Dashboard. <br />
          Start je herprogrammering vandaag.
        </p>
        <div className="flex justify-center w-full">
          <a href="https://thearchitecthacker.lemonsqueezy.com/checkout/buy/47116d76-5057-49d2-ad18-f4ac538dfc63" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 text-black py-5 uppercase font-black tracking-[0.3em] hover:bg-white transition-all duration-300 text-center text-base shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            [ PURCHASE_ACCESS_€27 ]
          </a>
        </div>
        <p className="mt-6 text-[10px] text-zinc-600 uppercase tracking-widest text-center w-full">
          Status: Awaiting_Deployment // One-time Payment
        </p>
      </section>

      {/* 7.5 UPGRADE TEASER */}
      <section className="max-w-5xl w-full mb-48 px-6 py-20 border border-zinc-900 bg-zinc-950/30 text-center relative overflow-hidden z-10 mx-auto">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent"></div>
        <h3 className="text-red-600 text-[10px] tracking-[0.4em] mb-4 uppercase font-bold text-center w-full">Hardware_Upgrade_Detected</h3>
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
          Reality<span className="text-red-600">OS</span> v1.0
        </h2>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-12 font-mono leading-relaxed text-center">
          Stop met het verzamelen van nutteloze data. Installeer de volledige interface om je gedrag te debuggen en je tijdlijn te forceren naar 6ha Portugese grond.
          <span className="block mt-6 text-zinc-300 font-bold italic tracking-wide uppercase text-sm">The software for the 1% is here.</span>
        </p>
        <div className="flex justify-center w-full">
          <a href="/realityos" className="inline-block border-2 border-red-600 bg-red-600/5 px-12 py-5 text-red-600 text-xs uppercase font-black tracking-[0.4em] hover:bg-red-600 hover:text-black transition-all duration-500 group relative">
            <span className="relative z-10">[ VIEW_SYSTEM_REQUIREMENTS ]</span>
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="w-full max-w-7xl py-16 border-t border-zinc-900 flex flex-col items-center gap-10 text-[10px] text-zinc-600 tracking-widest uppercase z-10 mx-auto">
        <div className="flex flex-wrap justify-center gap-12 text-zinc-400">
          <a href="https://tiktok.com/@thearchitecthacker" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            [ TIKTOK ]
          </a>
          <a href="https://instagram.com/thearchitecthacker" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            [ INSTAGRAM ]
          </a>
          <a href="https://x.com/TheArchyHacker" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            [ X_STATION ]
          </a>
          <a href="/terms" className="hover:text-red-600 transition-colors">
  [ TERMS_AND_CONDITIONS ]
</a>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900/50 pt-10 px-4">
          <div className="text-zinc-700 italic text-center md:text-left">
            Location: Portugal_District_6ha // Signal: Strong
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <span className="text-green-900 bg-green-900/10 px-2 py-1 rounded">Connection: Encrypted</span>
            <span className="animate-pulse flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> 
              Nodes_Live: 1,402
            </span>
            <span className="text-zinc-500">© 2026 The Architect Hacker</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
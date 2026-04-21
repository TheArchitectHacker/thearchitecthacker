"use client";

import React, { useEffect, useState } from 'react';

export default function AccessGranted() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuleer een 'decryption' proces voor het hacker effect
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 font-mono relative overflow-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl w-full border border-red-900/50 bg-zinc-950/80 p-10 relative z-10 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,1)]">
        
        {/* TAB LABEL */}
        <div className="absolute -top-3 left-4 bg-black border border-red-900/50 px-3 py-1 text-[10px] text-red-600 uppercase tracking-[0.3em] font-black">
          Transaction_Verified
        </div>

        {loading ? (
          /* DECRYPTION STATE */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-12 h-12 mb-6">
              <span className="absolute inset-0 border-2 border-red-600/20 rounded-full"></span>
              <span className="absolute inset-0 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
            </div>
            <p className="text-red-600 uppercase tracking-[0.4em] text-xs animate-pulse font-bold">
              Decrypting Source Code...
            </p>
            <div className="mt-4 w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 animate-[load_2.5s_ease-in-out]"></div>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white italic">
              Access <span className="text-red-600">Granted</span>
            </h1>
            
            <p className="text-zinc-400 mb-10 leading-relaxed uppercase text-[11px] tracking-widest">
              De betaling is succesvol verwerkt. Je e-mailadres is door het systeem geautoriseerd en toegevoegd aan de <span className="text-white font-bold">RootOS Master Database</span>. Je bent nu officieel een Architect.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              
              {/* STEP 01: THE PDF */}
              <div className="border border-zinc-800 p-8 bg-black/50 text-left relative group hover:border-zinc-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-[10px] text-red-600 uppercase tracking-widest mb-1 font-black">Step 01: The Blueprint</p>
                        <h3 className="text-xl font-bold uppercase tracking-tight">The Paradox Shift (PDF)</h3>
                    </div>
                    <span className="text-[9px] text-zinc-600 font-mono">Size: 4.2MB</span>
                </div>
                <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                    Download de volledige broncode van de simulatie. Bestudeer de patronen voordat je de terminal betreedt.
                </p>
                <a 
                  href="/downloads/The_Paradox_Shift.pdf" 
                  download 
                  className="inline-block w-full border border-zinc-700 text-zinc-300 px-6 py-4 uppercase tracking-[0.2em] text-[10px] font-black hover:bg-white hover:text-black transition-all text-center"
                >
                  [ DOWNLOAD_SOURCE_CODE ]
                </a>
              </div>

              {/* STEP 02: THE SOFTWARE */}
              <div className="border border-red-900/50 p-8 bg-red-950/5 text-left relative shadow-[0_0_30px_rgba(220,38,38,0.05)]">
                <div className="absolute top-2 right-4">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                </div>
                <p className="text-[10px] text-red-600 uppercase tracking-widest mb-1 font-black">Step 02: Execution</p>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">Initialize RootOS</h3>
                <p className="text-zinc-400 text-xs mb-6 leading-relaxed mt-2">
                    Theorie zonder actie is een crash. Log in op de RootOS Terminal om je <span className="text-red-500 font-bold">Core Cleanse</span> te starten en je eerste missies te ontvangen.
                </p>
                <a 
                  href="https://getrootos.com/login" 
                  className="inline-block w-full bg-red-600 text-black px-8 py-5 uppercase font-black tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] text-center text-xs"
                >
                  [ ENTER_THE_TERMINAL ]
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 opacity-40">
                <p className="text-[9px] text-zinc-500 uppercase tracking-[0.5em]">
                    Connection encrypted // Signal: Secure
                </p>
                <div className="flex gap-4">
                    <div className="w-12 h-px bg-zinc-800"></div>
                    <div className="w-12 h-px bg-zinc-800"></div>
                    <div className="w-12 h-px bg-zinc-800"></div>
                </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
"use client";

import React, { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function RealityOSLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("AWAITING_CREDENTIALS");
  
  // Maak de client aan met de omgevingsvariabelen die we in .env.local hebben gezet
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("VERIFYING_ENCRYPTION...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Zorgt dat de link in de mail de gebruiker terugstuurt naar het dashboard
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(`ERROR: ${error.message.toUpperCase()}`);
    } else {
      setMessage("SUCCESS: MAGIC_LINK_INJECTED_INTO_INBOX");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-mono p-6">
      {/* SCANLINES */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.01)_0px,rgba(255,255,255,0.01)_1px,transparent_1px,transparent_3px)]"></div>

      <div className="max-w-md w-full border border-red-600 p-10 bg-zinc-950 shadow-[0_0_50px_rgba(220,38,38,0.1)] relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-red-600 text-[10px] uppercase font-black tracking-widest border border-red-600">
          RealityOS_Gatekeeper
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">Initialize_Session</h2>
          <p className="text-red-600 text-[10px] uppercase tracking-widest animate-pulse h-4">{message}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label className="text-[10px] text-zinc-500 uppercase mb-2 block tracking-widest">Ident_Email</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-zinc-900 p-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-zinc-800"
              placeholder="architect@network.com"
            />
          </div>

          <button 
            disabled={loading}
            className="w-full bg-red-600 text-black py-4 font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "[ PROCESSING... ]" : "[ REQUEST_ACCESS_KEY ]"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-zinc-900 pt-6">
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed">
            Note: Only registered nodes can bypass this firewall. Acquire payload first.
          </p>
        </div>
      </div>
    </div>
  );
}
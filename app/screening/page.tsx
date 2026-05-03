// app/screening/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Typewriter Helper Component ---
const Typewriter = ({ text, onComplete, speed = 30 }: { text: string, onComplete?: () => void, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span>{displayedText}<span className="animate-pulse bg-red-600 inline-block w-2 h-4 ml-1 align-middle"></span></span>;
};

// --- Main Component ---
export default function OperatorScreening() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({
    q1_focus: "",
    q2_timing: "",
    q3_commitment: "",
    q3_doubt_reason: "", // Voor de "twijfel" of "nee" flow
    q4_resistance: "",
    q5_contingency: "",
    q6_expectation: "",
  });

  const updateForm = (key: string, value: string) => setFormData(prev => ({ ...prev, [key]: value }));

  const nextStep = () => {
    if (isTyping) return;
    setIsTyping(true);
    setStep(prev => prev + 1);
  };

  // --- RENDERING VAN DE STAPPEN ---
  return (
    <main className="min-h-screen bg-black text-zinc-400 p-6 md:p-12 font-mono relative overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl z-10 space-y-8">
        
        {/* HEADER */}
        <div className="border-b border-zinc-900 pb-4 mb-8">
          <p className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase">SYSTEM_CORE // CLEARANCE_LEVEL_01</p>
          <h1 className="text-white text-xl font-black uppercase tracking-widest italic mt-2">OPERATOR SCREENING</h1>
        </div>

        {/* STEP 0: INTRO */}
        {step === 0 && (
          <div className="space-y-6">
            <p className="text-sm uppercase leading-relaxed text-zinc-300">
              <Typewriter 
                text="Welkom. Dit is geen standaard inschrijving. We willen alleen Operators die écht klaar zijn om hun broncode te herschrijven. Vul de vragen meedogenloos eerlijk in. Je antwoorden worden gebruikt om je aanvraag te beoordelen." 
                onComplete={() => setIsTyping(false)} 
              />
            </p>
            {!isTyping && (
              <button onClick={nextStep} className="mt-8 border border-red-900 px-6 py-3 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-900/30 transition-all animate-in fade-in duration-500">
                &gt; INITIATE_SCREENING
              </button>
            )}
          </div>
        )}

        {/* STEP 1: FOCUS */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold">
              <Typewriter text="[01/06] Welk gebied in je leven wil je als eerste radicaal transformeren? (Wees specifiek)" onComplete={() => setIsTyping(false)} />
            </p>
            {!isTyping && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <textarea 
                  autoFocus
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[100px] resize-none"
                  placeholder="Typ je target hier..."
                  value={formData.q1_focus}
                  onChange={(e) => updateForm("q1_focus", e.target.value)}
                />
                {formData.q1_focus.length > 5 && (
                  <button onClick={nextStep} className="text-red-600 text-xs font-bold uppercase tracking-widest hover:text-white">&gt; CONFIRM_TARGET</button>
                )}
              </div>
            )}
          </div>
        )}

        {/* STEP 2: TIMING */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold">
              <Typewriter text="[02/06] Waarom is dit precies het juiste moment om RootOS te starten? Wat heeft je hier echt gebracht?" onComplete={() => setIsTyping(false)} />
            </p>
            {!isTyping && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <textarea 
                  autoFocus
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[100px] resize-none"
                  placeholder="Definieer je motivatie..."
                  value={formData.q2_timing}
                  onChange={(e) => updateForm("q2_timing", e.target.value)}
                />
                {formData.q2_timing.length > 5 && (
                  <button onClick={nextStep} className="text-red-600 text-xs font-bold uppercase tracking-widest hover:text-white">&gt; LOG_MOTIVATION</button>
                )}
              </div>
            )}
          </div>
        )}

        {/* STEP 3: COMMITMENT (MULTIPLE CHOICE + LOGIC) */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold leading-relaxed">
              <Typewriter text="[03/06] Ben je bereid om dagelijks (minstens 6 dagen per week) te werken met de Cassius audio’s, logs en 168-uurs deadlines?" onComplete={() => setIsTyping(false)} speed={20} />
            </p>
            
            {!isTyping && (
              <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-500">
                {/* Option 1: Yes */}
                <button 
                  onClick={() => { updateForm("q3_commitment", "Yes"); nextStep(); }}
                  className="w-full text-left border border-zinc-800 p-4 hover:border-red-600 hover:bg-red-950/20 text-zinc-300 text-sm uppercase transition-all"
                >
                  [ ] Ja, ik commit hier volledig aan.
                </button>
                
                {/* Option 2: Doubt */}
                <button 
                  onClick={() => updateForm("q3_commitment", "Doubt")}
                  className={`w-full text-left border ${formData.q3_commitment === "Doubt" ? "border-red-600 bg-red-950/20" : "border-zinc-800"} p-4 text-zinc-300 text-sm uppercase transition-all`}
                >
                  [ ] Ik wil het proberen, maar ik heb twijfels.
                </button>

                {/* Option 3: No */}
                <button 
                  onClick={() => updateForm("q3_commitment", "No")}
                  className={`w-full text-left border ${formData.q3_commitment === "No" ? "border-red-600 bg-red-950/20" : "border-zinc-800"} p-4 text-zinc-300 text-sm uppercase transition-all`}
                >
                  [ ] Nee.
                </button>

                {/* CONDITIONAL: DOUBT */}
                {formData.q3_commitment === "Doubt" && (
                  <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-top-4">
                     <p className="text-red-500 text-xs uppercase font-bold italic">&gt; Systeem waarschuwing: Twijfel is een Echo. Waaraan twijfel je exact?</p>
                     <textarea 
                        autoFocus
                        className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[80px]"
                        placeholder="Log je twijfel..."
                        value={formData.q3_doubt_reason}
                        onChange={(e) => updateForm("q3_doubt_reason", e.target.value)}
                      />
                      {formData.q3_doubt_reason.length > 5 && (
                        <button onClick={nextStep} className="text-red-600 text-xs font-bold uppercase tracking-widest hover:text-white">&gt; PROCEED</button>
                      )}
                  </div>
                )}

                {/* CONDITIONAL: NO */}
                {formData.q3_commitment === "No" && (
                  <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-top-4">
                     <p className="text-red-500 text-xs uppercase font-bold italic">&gt; Systeem diagnose: Je verdedigt de Matrix. Waarom weiger je de regie over je eigen render te nemen?</p>
                     <textarea 
                        autoFocus
                        className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[80px]"
                        placeholder="Verklaar je weerstand..."
                        value={formData.q3_doubt_reason}
                        onChange={(e) => updateForm("q3_doubt_reason", e.target.value)}
                      />
                      {formData.q3_doubt_reason.length > 5 && (
                        <button onClick={nextStep} className="text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-red-600">&gt; PROCEED_ANYWAY</button>
                      )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* STEP 4: RESISTANCE */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold leading-relaxed">
              <Typewriter text="[04/06] Wat is je grootste weerstand of angst tegen dit proces? Hoe denk je daarmee om te gaan als de oude code je probeert terug te trekken?" onComplete={() => setIsTyping(false)} speed={20} />
            </p>
            {!isTyping && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <textarea 
                  autoFocus
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[100px] resize-none"
                  placeholder="Log je firewall strategie..."
                  value={formData.q4_resistance}
                  onChange={(e) => updateForm("q4_resistance", e.target.value)}
                />
                {formData.q4_resistance.length > 5 && (
                  <button onClick={nextStep} className="text-red-600 text-xs font-bold uppercase tracking-widest hover:text-white">&gt; REGISTER_FIREWALL</button>
                )}
              </div>
            )}
          </div>
        )}

        {/* STEP 5: CONTINGENCY (RADIO BUTTONS) */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold leading-relaxed">
              <Typewriter text="[05/06] Als je na 30 dagen nog geen visueel resultaat in de fysieke wereld ziet, wat is dan je protocol?" onComplete={() => setIsTyping(false)} speed={20} />
            </p>
            {!isTyping && (
              <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-500">
                <button 
                  onClick={() => { updateForm("q5_contingency", "Quit"); nextStep(); }}
                  className="w-full text-left border border-zinc-800 p-4 hover:border-red-600 hover:bg-red-950/20 text-zinc-300 text-sm uppercase transition-all"
                >
                  [ ] Systeem-rollback. Ik stop ermee.
                </button>
                <button 
                  onClick={() => { updateForm("q5_contingency", "Blame"); nextStep(); }}
                  className="w-full text-left border border-zinc-800 p-4 hover:border-red-600 hover:bg-red-950/20 text-zinc-300 text-sm uppercase transition-all"
                >
                  [ ] Ik zoek naar een ander systeem dat wel direct werkt.
                </button>
                <button 
                  onClick={() => { updateForm("q5_contingency", "Persist"); nextStep(); }}
                  className="w-full text-left border border-zinc-800 p-4 hover:border-red-600 hover:bg-red-950/20 text-zinc-300 text-sm uppercase transition-all"
                >
                  [ ] Ik blijf de broncode draaien tot de materie de vertraging (latency) inhaalt.
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 6: EXPECTATION & SUBMIT */}
        {step === 6 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <p className="text-sm uppercase text-white font-bold leading-relaxed">
              <Typewriter text="[06/06] Wat verwacht je van RootOS en wat ben je bereid te geven om je nieuwe realiteit definitief te claimen?" onComplete={() => setIsTyping(false)} speed={20} />
            </p>
            {!isTyping && (
              <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                <textarea 
                  autoFocus
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white text-sm focus:border-red-900 focus:outline-none min-h-[120px] resize-none"
                  placeholder="Final statement..."
                  value={formData.q6_expectation}
                  onChange={(e) => updateForm("q6_expectation", e.target.value)}
                />
                
                {formData.q6_expectation.length > 5 && (
                  <button 
                    onClick={nextStep} 
                    className="w-full bg-red-900 text-white px-8 py-5 text-xs font-black uppercase tracking-[0.5em] hover:bg-red-700 transition-all shadow-[0_0_40px_rgba(153,27,27,0.3)] active:scale-95"
                  >
                    &gt; VERSTUUR AANVRAAG
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* STEP 7: SUCCESS / PROCESSING */}
        {step === 7 && (
          <div className="text-center space-y-8 animate-in zoom-in duration-700 pt-12">
            <div className="inline-block border-2 border-red-900 p-8 bg-red-950/20">
               <p className="text-red-500 text-xl font-black uppercase tracking-widest italic animate-pulse mb-4">AANVRAAG ONTVANGEN.</p>
               <div className="space-y-2 text-xs uppercase tracking-widest text-zinc-400">
                 <p>Een Architect zal je aanvraag binnen 24 uur persoonlijk beoordelen.</p>
                 <p>Alleen serieuze Operators met de juiste mindset en commitment krijgen toegang tot de Deployment link.</p>
                 <p className="text-white mt-6 block">Bedankt voor je eerlijkheid.</p>
               </div>
            </div>
            {/* Hier zou je eventueel de data naar je database (Supabase) sturen met een useEffect */}
          </div>
        )}

      </div>

      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none bg-size-[40px_40px] bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] opacity-20" />
    </main>
  );
}
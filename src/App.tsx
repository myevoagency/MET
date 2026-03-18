/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Send, Mail, User, MessageSquare } from "lucide-react";

export default function App() {
  const [screen, setScreen] = useState<"home" | "contact">("home");

  return (
    <div className="flex flex-col min-h-screen antialiased font-sans">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {screen === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl flex flex-col items-center"
            >
              {/* Brand Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mb-16 flex items-center justify-center"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1JNgmN-sn0EQUwv7ucsdYx2EgE-vLwe-o" 
                  alt="MET Business Group Logo" 
                  className="h-24 md:h-32 w-auto object-contain pointer-events-none select-none"
                />
              </motion.div>

              {/* Hero Section */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-10"
              >
                <h1 className="text-brand-dark text-4xl md:text-6xl font-extrabold mb-2 leading-tight">
                  Il futuro della comunicazione<br />
                  <span className="text-brand-blue">ha una nuova forma.</span>
                </h1>
                <p className="text-brand-gray text-sm md:text-lg font-medium mt-4 tracking-widest uppercase">
                  2026. Innovazione, Strategia, Evoluzione.
                </p>
              </motion.section>

              {/* CTA Container */}
              <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full max-w-md"
              >
                <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[40px] shadow-xl shadow-blue-100/50 transition-transform hover:scale-[1.02] duration-300 p-8 md:p-10">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Hai un'idea? 👋
                  </h2>
                  <button
                    onClick={() => setScreen("contact")}
                    className="inline-block text-2xl md:text-3xl font-bold text-brand-blue hover:text-brand-blue/80 transition-colors underline decoration-2 underline-offset-8 cursor-pointer"
                  >
                    Parliamone! 🚀
                  </button>
                </div>

                <div className="mt-10">
                  <a
                    href="mailto:INFO@METBUSINESSGROUP.IT"
                    className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 hover:text-gray-600 transition-colors uppercase"
                  >
                    INFO@METBUSINESSGROUP.IT
                  </a>
                </div>
              </motion.section>
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl px-4"
            >
              <button
                onClick={() => setScreen("home")}
                className="flex items-center gap-2 text-brand-gray hover:text-brand-blue transition-colors mb-8 font-bold uppercase text-xs tracking-widest"
              >
                <ArrowLeft size={16} /> Torna Indietro
              </button>

              <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-[40px] shadow-2xl p-8 md:p-12 text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2"
                >
                  Diamo forma <span className="text-brand-blue">alla tua idea.</span>
                </motion.h2>
                <p className="text-brand-gray mb-10 font-medium">Raccontaci il tuo progetto e scopriamo come farlo evolvere insieme.</p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gray ml-1 flex items-center gap-2">
                      <User size={12} /> Nome Completo
                    </label>
                    <input 
                      type="text" 
                      placeholder="Inserisci il tuo nome"
                      className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gray ml-1 flex items-center gap-2">
                      <Mail size={12} /> Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="la-tua@email.it"
                      className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gray ml-1 flex items-center gap-2">
                      <MessageSquare size={12} /> Messaggio
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Descrivi brevemente la tua idea..."
                      className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-brand-dark hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-3 group">
                    Invia Messaggio <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center">
        <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-[0.2em] uppercase">
          © 2026 MET BUSINESS GROUP. TUTTI I DIRITTI RISERVATI.
        </p>
      </footer>
    </div>
  );
}

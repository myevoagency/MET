/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Updated: 2026-03-18 - Fixed button mailto and typo.
 */

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
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
              <a
                href="mailto:INFO@METBUSINESSGROUP.IT"
                className="inline-block text-2xl md:text-3xl font-bold text-brand-blue hover:text-brand-blue/80 transition-colors underline decoration-2 underline-offset-8 cursor-pointer"
              >
                Parliamone! 🚀
              </a>
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

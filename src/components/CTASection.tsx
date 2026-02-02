"use client";

import { motion } from "framer-motion";
import { Clock, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 md:py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass-card bg-gradient-dark p-8 md:p-20 text-center overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 text-primary-300 text-xs md:text-sm font-bold mb-6 border border-white/20 shadow-glow">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Ma perché ora?
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Perché il momento giusto era ieri, <br className="hidden md:block" />
              il mercato non aspetta.
            </h2>
            <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Avere un sito web oggi è come avere le fondamenta della propria casa: senza di quelle, non puoi costruire nessun piano superiore. Un sito fatto bene è il primo passo per smettere di rincorrere i clienti e iniziare a farti trovare da loro.
            </p>
            
            <div className="flex flex-col items-center justify-between min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
              <div className="mt-4">
                <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 mb-2">Iniziamo!</div>
                <p className="text-gray-400 text-xs md:text-base max-w-[280px] md:max-w-sm mx-auto">
                  Non serve un budget da multinazionale, serve un'idea chiara e un lavoro professionale.
                </p>
              </div>

              <Link
                href="#contatti"
                className="group flex flex-col items-center gap-3 md:gap-4 transition-all hover:scale-110 mb-2"
              >
                <span className="text-white font-bold text-[9px] md:text-xs uppercase tracking-[0.2em]">Raccontami della tua azienda</span>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary-500 border border-primary-400 flex items-center justify-center text-white shadow-glow transition-all ring-4 ring-primary-500/20">
                  <ArrowDown className="w-4 h-4 md:w-6 md:h-6 animate-bounce" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

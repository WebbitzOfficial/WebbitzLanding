"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Bio() {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-gray-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              È il momento di cambiare marcia
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-6">
              Piacere di conoscerti, sono <strong className="text-white">Andrea Pannocchia</strong> e in Webbitz sono il responsabile dello sviluppo siti web per le piccole-medie imprese.
            </p>
            <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
              Nel mio lavoro, così come nella vita, metto al primo posto due valori: <strong className="text-white">trasparenza e professionalità</strong>.
              Non ti parlerò in "informatichese" per confonderti. Ti parlerò in modo chiaro, spiegandoti cosa serve davvero alla tua azienda per crescere online e cosa invece è solo uno spreco di soldi.
            </p>
            
            <div className="space-y-4 max-w-md mx-auto md:mx-0">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-400 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-200 font-medium">Partner che parla la tua lingua</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-400 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-200 font-medium">Focus sul successo misurabile</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-400 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-gray-200 font-medium">Niente sprechi di budget</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="#contatti"
                className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-glow text-sm md:text-base"
              >
                Inizia Ora!
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contatti"
                className="px-6 py-3 font-semibold text-gray-200 border border-gray-500 rounded-xl hover:border-primary-500 hover:text-primary-400 transition-colors w-full sm:w-auto text-center text-sm md:text-base"
              >
                Parlami del tuo progetto
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative z-10 glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
              <div className="aspect-[4/5] bg-gray-700 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 opacity-20" />
                <div className="flex items-center justify-center h-full text-gray-400 italic px-8 text-center">
                  [Immagine di Andrea Pannocchia]
                </div>
              </div>
              <Link
                href="#contatti"
                className="mt-4 btn-primary w-full inline-flex items-center justify-center gap-2 text-sm shadow-glow"
              >
                Inizia Ora!
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

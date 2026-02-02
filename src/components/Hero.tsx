"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden bg-gray-900 border-b border-gray-700">
      <Navbar />
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-pulse" />

      <div className="flex-1 flex items-center pt-8 md:pt-0 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 md:py-2 px-4 md:px-6 rounded-full bg-primary-500/20 text-primary-300 text-base md:text-lg font-bold mb-6 md:mb-8 border border-primary-500/40 shadow-sm">
              Smetti di essere invisibile
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 md:mb-8">
              Se i tuoi clienti non ti trovano online, <br className="hidden sm:block" />
              <span className="text-gradient">sceglieranno il tuo concorrente.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Se oggi un cliente ti cerca su Google e non ti trova (o trova un sito lento e vecchio), è come se avessi la serranda abbassata a metà. È il momento di trasformare la tua presenza online in un motore che genera contatti e fatturato.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contatti"
                className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center shadow-glow text-sm md:text-base"
              >
                Voglio portare la mia azienda online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#chi-siamo"
                className="px-6 py-3 font-semibold text-gray-300 hover:text-primary-400 transition-colors w-full sm:w-auto text-sm md:text-base"
              >
                Scopri di più
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

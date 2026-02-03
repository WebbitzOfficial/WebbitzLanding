"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-6">
      {/* Macchie luminose */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] opacity-80"
          style={{ background: "rgba(232, 80, 2, 0.18)" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "rgba(244, 123, 51, 0.12)" }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        />
        <div
          className="absolute top-1/3 -left-24 w-[400px] h-[400px] rounded-full blur-[110px]"
          style={{ background: "rgba(249, 249, 249, 0.06)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Grazie per averci contattato!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
          Abbiamo ricevuto la tua richiesta. Ti ricontatteremo al più presto per una chiacchierata senza impegno e capire come possiamo aiutarti a portare la tua azienda online.
        </p>
        <p className="text-gray-300 text-sm md:text-base mb-10">
          A presto, il team Webbitz
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 shadow-glow"
        >
          Torna alla home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </main>
  );
}

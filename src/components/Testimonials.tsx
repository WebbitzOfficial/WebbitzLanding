"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import fantozziImg from "@/images/fantozzi.png";
import napoliImg from "@/images/napoli.png";
import scuderiaImg from "@/images/scuderia.png";

const caseStudies = [
  {
    image: fantozziImg,
    title: "Fantozzi",
    description:
      "Sito web vetrina per il Bar Fantozzi: racconta la storia del bar attraverso immagini e contenuti coinvolgenti, con integrazione del sistema di prenotazione online Pienissimo per permettere ai clienti di prenotare tavoli direttamente dal sito.",
    review:
      "Seri e precisi dalla prima chiacchierata alla consegna. Hanno sviluppato il sito rispettando i tempi e ascoltando ogni nostra richiesta. Consigliatissimi e affidabili.",
    author: "Bar Fantozzi",
    role: "Titolari",
  },
  {
    image: napoliImg,
    title: "Napoli Into Core",
    description:
      "Sito web professionale per Napoli Into Core: struttura ricettiva nel cuore di Napoli con prenotazione completa e intuitiva, design moderno che valorizza la bellezza della città partenopea.",
    review:
      "Da quando è online ci funziona benissimo. Le prenotazioni arrivano in modo chiaro, i clienti trovano tutto subito e il sito ci rappresenta come volevamo. Soddisfattissimi.",
    author: "Napoli Into Core",
    role: "B&B Napoli",
  },
  {
    image: scuderiaImg,
    title: "L'Antica Scuderia",
    description:
      "Sito web vetrina per il Ristoro L'Antica Scuderia: design elegante che riflette l'atmosfera del ristorante di alta cucina nel Chianti, valorizzando tradizione toscana e esperienza gastronomica.",
    review:
      "Professionalità e affidabilità rare. Si sono presi cura di ogni dettaglio e il risultato ha superato le aspettative. Un partner di cui fidarsi per il proprio progetto sul web.",
    author: "L'Antica Scuderia",
    role: "Ristoro – Alta cucina Chianti",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Dicono di me
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative w-[calc(100%+4rem)] -mx-8 -mt-8 aspect-video overflow-hidden bg-gray-700 rounded-t-2xl mb-6">
                <Image
                  src={study.image}
                  alt={`Anteprima: ${study.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {study.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {study.description}
              </p>
              <div className="relative pt-4 border-t border-gray-600">
                <Quote className="absolute top-4 right-0 w-8 h-8 text-primary-500/30 -z-10" />
                <p className="text-gray-300 italic text-sm leading-relaxed mb-3">
                  &ldquo;{study.review}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white text-sm">{study.author}</p>
                  <p className="text-xs text-gray-500">{study.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

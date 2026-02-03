"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import fantozziImg from "@/images/fantozzi.png";
import scuderiaImg from "@/images/scuderia.png";
import etabetaImg from "@/images/etabeta.png";
import go2westImg from "@/images/go2west.png";

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
    image: go2westImg,
    title: "Go2West",
    description:
      "Sito web per Go2West, grossista di viaggi: piattaforma B2B che presenta il catalogo pacchetti alle agenzie, area riservata e strumenti per la prenotazione, con un'immagine chiara e professionale nel settore turistico.",
    review:
      "Sito moderno e intuitivo. Le agenzie trovano subito i pacchetti e le condizioni, e noi abbiamo ridotto le richieste ripetitive. Consigliamo Webbitz a chi opera nel turismo.",
    author: "Go2West",
    role: "Grossista di viaggi",
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
  {
    image: etabetaImg,
    title: "Eta Beta Costruzioni",
    description:
      "Sito web per Eta Beta Costruzioni S.R.L.: presenza online professionale per impresa edile, con focus su servizi di costruzione, chiarezza dei contatti e immagine di affidabilità nel settore.",
    review:
      "Ottimo servizio, capacità nel capire le esigenze e i gusti dei clienti. Consiglio a tutti di affidarsi a Webbitz!",
    author: "Eta Beta Costruzioni S.R.L.",
    role: "Costruzioni / Edilizia",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Dicono di noi
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden flex flex-col pt-6 pb-8 pr-6 pl-6"
            >
              <div className="relative w-[calc(100%+3rem)] -mx-6 -mt-6 aspect-video overflow-hidden bg-gray-700 rounded-t-xl mb-6">
                <Image
                  src={study.image}
                  alt={`Anteprima: ${study.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {study.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-3 flex-grow">
                {study.description}
              </p>
              <div className="relative pt-3 border-t border-gray-600">
                <Quote className="absolute top-3 right-0 w-6 h-6 text-primary-500/30 -z-10" />
                <p className="text-gray-200 italic text-sm leading-relaxed mb-2">
                  &ldquo;{study.review}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white text-sm">{study.author}</p>
                  <p className="text-xs text-gray-300">{study.role}</p>
                </div>
                <div className="mt-6 text-right">
                  <Link
                    href="#contatti"
                    className="inline-block text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Vuoi un risultato simile? →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

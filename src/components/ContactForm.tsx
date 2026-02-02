"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contatti" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Raccontami della tua azienda
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Compila il form e ti ricontatterò io stesso per una chiacchierata senza impegno.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 shadow-premium"
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Messaggio inviato!</h3>
              <p className="text-gray-600">Ti ricontatterò al più presto. Grazie!</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-primary-600 font-semibold hover:underline"
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">
                    Nome e Cognome
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Mario Rossi"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-700 ml-1">
                    Nome della tua Azienda
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    placeholder="La tua Azienda Srl"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Hai già un sito web?
                </label>
                <div className="flex gap-4">
                  {["Sì", "No"].map((opt) => (
                    <label
                      key={opt}
                      className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700"
                    >
                      <input type="radio" name="has_website" value={opt} className="hidden" defaultChecked={opt === "No"} />
                      <span className="font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-semibold text-gray-700 ml-1">
                  Qual è il tuo obiettivo principale?
                </label>
                <select
                  id="goal"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all appearance-none bg-white"
                >
                  <option>Avere più clienti</option>
                  <option>Farmi conoscere</option>
                  <option>Vendere online</option>
                </select>
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3 mt-4 disabled:opacity-70"
              >
                {status === "loading" ? "Invio in corso..." : "VOGLIO PORTARE LA MIA AZIENDA ONLINE"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

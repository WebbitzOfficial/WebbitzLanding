"use client";

import { motion } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function getUtmString(): string {
  if (typeof window === "undefined") return "utm_campaign=none&utm_content=none";
  const params = new URLSearchParams(window.location.search);
  const utmCampaign = params.get("utm_campaign")?.trim() || "none";
  const utmContent = params.get("utm_content")?.trim() || "none";
  return `utm_campaign=${encodeURIComponent(utmCampaign)}&utm_content=${encodeURIComponent(utmContent)}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      "name-surname": formData.get("name") ?? "",
      "nome-azienda": formData.get("company") ?? "",
      "ha-sito": formData.get("has_website") ?? "",
      telefono: formData.get("phone") ?? "",
      email: formData.get("email") ?? "",
      obbiettivo: formData.get("goal") ?? "",
      utm: getUtmString(),
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Invio fallito");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Macchie sul lato destro, centrate in verticale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-80" style={{ background: "rgba(232, 80, 2, 0.15)" }} />
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[350px] h-[350px] rounded-full blur-[90px]" style={{ background: "rgba(244, 123, 51, 0.1)" }} />
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: "rgba(255, 255, 255, 0.03)" }} />
        {/* Macchia bianco/grigio chiaro sul lato sinistro */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[450px] h-[450px] rounded-full blur-[110px]" style={{ background: "rgba(249, 249, 249, 0.08)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Raccontaci della tua azienda
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            Compila il form e ti ricontatteremo per una chiacchierata senza impegno.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 md:p-12 rounded-[2rem] border border-gray-600 shadow-premium"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-200 ml-1">
                    Nome e Cognome
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Mario Rossi"
                    className="w-full px-5 py-4 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-200 ml-1">
                    Nome della tua Azienda
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    name="company"
                    placeholder="La tua Azienda Srl"
                    className="w-full px-5 py-4 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-200 ml-1">
                    Numero di telefono
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+39 333 123 4567"
                    className="w-full px-5 py-4 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-200 ml-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="mario.rossi@azienda.it"
                    className="w-full px-5 py-4 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-200 ml-1">
                  Hai già un sito web?
                </label>
                <div className="flex gap-4">
                  {["Sì", "No"].map((opt) => (
                    <label
                      key={opt}
                      className="flex-1 flex items-center justify-center py-4 rounded-xl border border-gray-600 bg-gray-700 text-gray-200 cursor-pointer hover:bg-gray-600 transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-500/20 has-[:checked]:text-white"
                    >
                      <input type="radio" name="has_website" value={opt} className="hidden" defaultChecked={opt === "No"} />
                      <span className="font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-semibold text-gray-200 ml-1">
                  Qual è il tuo obiettivo principale?
                </label>
                <div className="relative">
                  <select
                    id="goal"
                    name="goal"
                    className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-600 bg-gray-700 text-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all appearance-none"
                  >
                    <option>Avere più clienti</option>
                    <option>Farmi conoscere</option>
                    <option>Vendere online</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Qualcosa è andato storto. Riprova o contattaci direttamente.
                </p>
              )}
              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3 mt-4 disabled:opacity-70"
              >
                {status === "loading" ? "Invio in corso..." : "VOGLIO PORTARE LA MIA AZIENDA ONLINE"}
                <Send className="w-5 h-5" />
              </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}

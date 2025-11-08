import React from 'react';
import { Sparkles, MessageSquare, User2 } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-5 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur">
    <div className="shrink-0 rounded-lg bg-neutral-900 text-white p-2">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-neutral-900">{title}</h4>
      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StyleAdvisor = () => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-neutral-900">
            Aurelius – Ihr KI‑Stilexperte
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Diskrete Beratung im Sinne der alten Schule: Silhouetten, Stoffe und Anlässe — präzise
            Vorschläge, kuratiert aus Ihrem persönlichen Vokabular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon={Sparkles}
            title="Kuratiertes Auge"
            desc="Empfehlungen, die auf klassische Proportionen und feine Details achten."
          />
          <Feature
            icon={MessageSquare}
            title="Dialog, kein Lärm"
            desc="Klare Antworten, ruhige Tonlage, fundierte Begründungen."
          />
          <Feature
            icon={User2}
            title="Für Sie gemacht"
            desc="Lernt Ihre Vorlieben – ohne Trends hinterherzulaufen."
          />
        </div>
      </div>
    </section>
  );
};

export default StyleAdvisor;

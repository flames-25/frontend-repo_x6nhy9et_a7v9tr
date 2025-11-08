import React from 'react';

const chapters = [
  {
    title: 'I. Herkunft',
    copy:
      'Wir ehren Materialität. Naturfasern, feines Leder, kalte Metalle — Substanz vor Oberfläche.',
  },
  {
    title: 'II. Haltung',
    copy:
      'Zurückhaltung als Luxus. Schnittführung, die spricht, ohne zu schreien. Zeit als Verbündete.',
  },
  {
    title: 'III. Maß',
    copy:
      'Das rechte Maß in Proportion und Detail. Balancierte Silhouetten, ruhige Farbwelten.',
  },
  {
    title: 'IV. Vermächtnis',
    copy:
      'Stücke, die Patina annehmen und Geschichten bewahren. Für heute — und für später.',
  },
];

const ManifestSection = () => {
  return (
    <section className="relative w-full bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-10">Manifest</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {chapters.map((c) => (
            <div key={c.title} className="bg-white/70 backdrop-blur border border-neutral-200 rounded-xl p-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2">{c.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;

import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSpline = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0e0e0c]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_240px_rgba(0,0,0,0.6)]" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="pointer-events-none text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white/95">
            Maison Aurelius
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl mx-auto">
            Eine digitale Boutique im Old‑Money‑Stil. Handverlesene Klassiker, zeitlose Silhouetten,
            kuratiert mit Besonnenheit und Blick für das Wesentliche.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;

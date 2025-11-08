import React from 'react';
import HeroSpline from './components/HeroSpline';
import ManifestSection from './components/ManifestSection';
import StyleAdvisor from './components/StyleAdvisor';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeroSpline />
      <ManifestSection />
      <StyleAdvisor />
      <footer className="bg-neutral-900 text-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl">Maison Aurelius</div>
          <p className="text-sm text-neutral-400">Eine digitale Boutique – Old Money, neu gedacht.</p>
        </div>
      </footer>
      <MusicPlayer />
    </div>
  );
}

export default App;

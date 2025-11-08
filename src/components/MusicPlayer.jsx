import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward } from 'lucide-react';

const tracks = [
  {
    title: 'Nocturne in E minor',
    src: 'https://images.unsplash.com/photo-1734545812735-db7f12855e1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2N0dXJuZSUyMGluJTIwRSUyMG1pbm9yfGVufDB8MHx8fDE3NjI2MDI0MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Moonlight Prelude',
    src: 'https://images.unsplash.com/photo-1734545812735-db7f12855e1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2N0dXJuZSUyMGluJTIwRSUyMG1pbm9yfGVufDB8MHx8fDE3NjI2MDI0MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.src = tracks[index].src;
    if (playing) audioRef.current.play().catch(() => {});
  }, [index]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const nextTrack = () => {
    setIndex((i) => (i + 1) % tracks.length);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white/90 backdrop-blur px-4 py-2 shadow-lg">
        <button aria-label="Play/Pause" onClick={togglePlay} className="p-2 rounded-full bg-neutral-900 text-white">
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button aria-label="Mute" onClick={toggleMute} className="p-2 rounded-full bg-neutral-100 text-neutral-700">
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button aria-label="Next" onClick={nextTrack} className="p-2 rounded-full bg-neutral-100 text-neutral-700">
          <SkipForward className="h-4 w-4" />
        </button>
        <div className="pl-1 pr-2 text-sm text-neutral-700 truncate max-w-[200px]">
          {tracks[index].title}
        </div>
        <audio ref={audioRef} preload="none" muted={muted} />
      </div>
    </div>
  );
};

export default MusicPlayer;

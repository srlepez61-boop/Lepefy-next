"use client";

import { useEffect, useRef } from "react";
import { usePlayer } from "./LepefyShell";

export default function Player() {
  const { currentSong } = usePlayer();
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .catch(() => {
          /* ignore autoplay errors */
        });
    }
  }, [currentSong]);

  return (
    <div className="player">
      <div className="player-now-playing">
        {currentSong
          ? `Now Playing: ${currentSong.title} – ${currentSong.artist}`
          : "Select a song to start playing."}
      </div>
      <audio ref={audioRef} className="player-audio" controls>
        {currentSong && <source src={currentSong.url} type="audio/mpeg" />}
      </audio>
    </div>
  );
}

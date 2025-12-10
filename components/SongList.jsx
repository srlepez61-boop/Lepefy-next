"use client";

import { usePlayer } from "./LepefyShell";
import { useLibrary } from "../lib/useLibrary";

export default function SongList({ songs }) {
  const { currentSong, setCurrentSong } = usePlayer();
  const { savedIds, toggleSave } = useLibrary();

  if (!songs || songs.length === 0) {
    return <p style={{ color: "#b3b3b3" }}>No songs to show.</p>;
  }

  return (
    <div className="song-list">
      {songs.map((song) => {
        const isSaved = savedIds.includes(song.id);
        const isPlaying = currentSong && currentSong.id === song.id;

        return (
          <div
            key={song.id}
            className="song-card"
            onClick={() => setCurrentSong(song)}
          >
            <img
              src={song.img}
              alt={song.title}
              className="song-cover"
            />
            <div className="song-main">
              <div className="song-title">
                {song.title} {isPlaying ? "▶" : ""}
              </div>
              <div className="song-artist">
                {song.artist} · {song.album}
              </div>
            </div>
            <div className="song-actions">
              <button
                className="heart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave(song.id);
                }}
              >
                {isSaved ? "♥" : "♡"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

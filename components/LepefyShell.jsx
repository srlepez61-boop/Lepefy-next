"use client";

import { createContext, useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";

const PlayerContext = createContext(null);

export function usePlayer() {
  return useContext(PlayerContext);
}

export default function LepefyShell({ children }) {
  const [currentSong, setCurrentSong] = useState(null);

  const value = {
    currentSong,
    setCurrentSong,
  };

  return (
    <PlayerContext.Provider value={value}>
      <div className="app-shell">
        <Sidebar />
        <div className="main-with-player">
          <main className="main-content">{children}</main>
          <Player />
        </div>
      </div>
    </PlayerContext.Provider>
  );
}

"use client";

import { useState } from "react";
import SongList from "../../components/SongList";
import { songs } from "../../lib/songs";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = songs.filter((song) => {
    const q = query.toLowerCase();
    return (
      song.title.toLowerCase().includes(q) ||
      song.artist.toLowerCase().includes(q) ||
      song.album.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <h2 className="page-title">Search</h2>
      <input
        placeholder="Search songs, artists, albums..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          maxWidth: 420,
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid #333",
          background: "#121212",
          color: "white",
          marginBottom: 18,
        }}
      />
      <SongList songs={filtered} />
    </div>
  );
}

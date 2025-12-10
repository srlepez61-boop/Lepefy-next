"use client";

import SongList from "../../components/SongList";
import { songs } from "../../lib/songs";
import { useLibrary } from "../../lib/useLibrary";

export default function LibraryPage() {
  const { savedIds } = useLibrary();

  const savedSongs = songs.filter((s) => savedIds.includes(s.id));

  return (
    <div>
      <h2 className="page-title">Your Library</h2>
      {savedSongs.length === 0 ? (
        <p style={{ color: "#b3b3b3" }}>
          You haven&apos;t saved any songs yet. Tap the ♥ on a track to add it.
        </p>
      ) : (
        <SongList songs={savedSongs} />
      )}
    </div>
  );
}

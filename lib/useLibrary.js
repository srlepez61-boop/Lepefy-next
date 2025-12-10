"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "lepefy-library";

export function useLibrary() {
  const [savedIds, setSavedIds] = useState([]);

  // load from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setSavedIds(JSON.parse(raw));
      } catch {
        setSavedIds([]);
      }
    }
  }, []);

  // save when updated
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return { savedIds, toggleSave };
}

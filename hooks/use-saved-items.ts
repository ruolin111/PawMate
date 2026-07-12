"use client";

import { useCallback, useEffect, useState } from "react";
import {
  hasSavedItem,
  readSavedItems,
  removeSavedItem,
  SAVED_ITEMS_EVENT,
  toggleSavedItem,
  type SavedItems,
  type SavedKind,
} from "@/lib/saved-items";

export function useSavedItems() {
  const [items, setItems] = useState<SavedItems>({ dogs: [], community: [] });

  const refresh = useCallback(() => {
    setItems(readSavedItems());
  }, []);

  useEffect(() => {
    refresh();

    window.addEventListener(SAVED_ITEMS_EVENT, refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener(SAVED_ITEMS_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  const toggle = useCallback((kind: SavedKind, id: string) => {
    const saved = toggleSavedItem(kind, id);
    setItems(readSavedItems());
    return saved;
  }, []);

  const remove = useCallback((kind: SavedKind, id: string) => {
    removeSavedItem(kind, id);
    setItems(readSavedItems());
  }, []);

  const isSaved = useCallback(
    (kind: SavedKind, id: string) => hasSavedItem(kind, id, items),
    [items],
  );

  return { items, isSaved, remove, toggle };
}

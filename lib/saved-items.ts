export type SavedKind = "dog" | "community";

export type SavedItems = {
  dogs: string[];
  community: string[];
};

export const SAVED_ITEMS_EVENT = "pawmate:saved-items-changed";

const STORAGE_KEY = "pawmate.savedItems";

const emptySavedItems: SavedItems = {
  dogs: [],
  community: [],
};

function normalizeSavedItems(value: Partial<SavedItems> | null | undefined): SavedItems {
  return {
    dogs: Array.isArray(value?.dogs) ? Array.from(new Set(value.dogs)) : [],
    community: Array.isArray(value?.community) ? Array.from(new Set(value.community)) : [],
  };
}

function keyForKind(kind: SavedKind) {
  return kind === "dog" ? "dogs" : "community";
}

export function readSavedItems(): SavedItems {
  if (typeof window === "undefined") {
    return emptySavedItems;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return normalizeSavedItems(raw ? JSON.parse(raw) : null);
  } catch {
    return emptySavedItems;
  }
}

export function writeSavedItems(items: SavedItems) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeSavedItems(items)));
  window.dispatchEvent(new Event(SAVED_ITEMS_EVENT));
}

export function hasSavedItem(kind: SavedKind, id: string, items = readSavedItems()) {
  return items[keyForKind(kind)].includes(id);
}

export function toggleSavedItem(kind: SavedKind, id: string) {
  const items = readSavedItems();
  const key = keyForKind(kind);
  const saved = items[key].includes(id);

  writeSavedItems({
    ...items,
    [key]: saved ? items[key].filter((itemId) => itemId !== id) : [...items[key], id],
  });

  return !saved;
}

export function removeSavedItem(kind: SavedKind, id: string) {
  const items = readSavedItems();
  const key = keyForKind(kind);

  writeSavedItems({
    ...items,
    [key]: items[key].filter((itemId) => itemId !== id),
  });
}

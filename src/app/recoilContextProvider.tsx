"use client";

import { RecoilRoot, atom, selectorFamily } from "recoil";

export interface artwork {
    id: string;
    file: File
    title: string;
    tags: string[];
    description: string;
    category: string;
    type: ("Illustration" | "Photography");
    collection: string;
}

export const artworkState = atom<artwork[]>({
    key: "artworkState",
    default: [],
});

export const artworkItem = selectorFamily({
    key: "ArtworkItem",
    get:
      (id: string) =>
      ({ get }) => {
        const artworkList = get(artworkState);
        return artworkList.find((artwork) => artwork.id === id) || null;
      },
    // Define the set function to update an individual todo item
    set:
      (id: string) =>
      ({ set, get }, newValue) => {
        const artworkList = get(artworkState);
        const updatedList = artworkList.map((artwork) =>
          artwork.id === id ? { ...artwork, ...newValue } : artwork
        );
        console.log("updatedList", updatedList);
        set(artworkState, updatedList);
      },
  });

export const collectionState = atom<string[]>({
    key: "collectionState",
    default: ["Motivation saying", "focus coding"],
});

export const selectedArt = atom<string>({
    key: "selectedArt",
    default: "",
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}   
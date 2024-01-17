"use client";

import { RecoilRoot, atom } from "recoil";


export const fileState = atom<File[]>({
    key: "fileState",
    default: [],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}   
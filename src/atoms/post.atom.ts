import { atom } from "jotai";

export const postAtom = atom<
  Array<{ id: string; title: string; content: string }>
>([]);

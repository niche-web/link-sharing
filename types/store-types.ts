import { type Platform } from "@/utils/dummy-data";

export type Link = {
  id: number;
  platform: Platform;
  link?: string;
};

export type GlobalState = { links: Link[] };

export type Action = (globalState: GlobalState, payload?: unknown) => {};

export type Actions = {
  [key: string]: Action | null;
};

export type Listener = React.Dispatch<React.SetStateAction<GlobalState>>;

export type DispatchFunc = (identifier: string, payload?: any) => void;

export type UseStore = (shouldListen?: boolean) => [GlobalState, DispatchFunc];

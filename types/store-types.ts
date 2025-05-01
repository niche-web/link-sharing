import { type Platform } from "@/utils/dummy-data";

export type Link = {
  id: string;
  platform: Platform;
  link?: string;
};

export type User = {
  firstName: string;
  lastName: string;
  email?: string;
  image?: string;
};

export type GlobalState = {
  links: Link[];
  userDetails: User;
};

export type Action = (globalState: GlobalState, payload?: unknown) => {};

export type Actions = {
  [key: string]: Action | null;
};

export type Listener = React.Dispatch<React.SetStateAction<GlobalState>>;

export type DispatchFunc = (identifier: string, payload?: any) => void;

export type UseStore = (shouldListen?: boolean) => [GlobalState, DispatchFunc];

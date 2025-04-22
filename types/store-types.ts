export type GlobalState = {};

export type Action = (globalState: GlobalState, payload?: any[]) => {};

export type Actions = {
  [key: string]: Action | null;
};

export type Listener = React.Dispatch<React.SetStateAction<GlobalState>>;

export type DispatchFunc = (identifier: string, payload?: any) => void;

export type UseStore = (shouldListen?: boolean) => [GlobalState, DispatchFunc];

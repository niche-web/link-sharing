"use client";

import { useState, useEffect } from "react";
import {
  Actions,
  Listener,
  GlobalState,
  DispatchFunc,
  UseStore,
} from "@/types/store-types";

import configureLinksStore from "./links-store";

let globalState: GlobalState = { links: [] };
let listeners: Listener[] = [];
let actions: Actions = {};

const useStore: UseStore = (shouldListen) => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen) listeners.filter((listener) => listener !== setState);
    };
  }, [setState, shouldListen]);

  const dispatch: DispatchFunc = (identifier, payload) => {
    const newState = actions[identifier]
      ? actions[identifier](globalState, payload)
      : {};
    globalState = { ...globalState, ...newState };

    listeners.forEach((listener: Listener) => {
      listener(globalState);
    });
  };
  return [globalState, dispatch];
};

export const initStore = (userActions: Actions, initialState?: {}) => {
  globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...userActions };
};

export default useStore;

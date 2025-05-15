"use client";

import { type Actions, type GlobalState } from "@/types/store-types";
import { initStore } from "@/store/store";
import { useEffect } from "react";

const ConfigureUserStore = () => {
  useEffect(() => {
    const userDetailsActions: Actions = {
      UPDATE_USER_DETAILS: (state: GlobalState, payload: {}) => {
        const updatedUser = { ...state.userDetails };
        return { ...state, userDetails: { ...updatedUser, ...payload } };
      },
    };

    initStore(userDetailsActions, { firstName: "", lastName: "" });
  }, []);

  return null;
};

export default ConfigureUserStore;
{
}

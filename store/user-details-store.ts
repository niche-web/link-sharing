"use client";

import { type Actions, type GlobalState } from "@/types/store-types";
import { initStore } from "@/store/store";
import { useEffect } from "react";

const ConfigureUserStore = () => {
  useEffect(() => {
    const userDetailsActions: Actions = {
      UPDATE_USER_DETAILS: (globalState: GlobalState, payload: {}) => {
        const updatedUser = { ...globalState.userDetails };
        return { ...updatedUser, ...payload };
      },
    };

    initStore(userDetailsActions, { firstName: "", lastName: "" });
  }, []);

  return null;
};

export default ConfigureUserStore;
{
}

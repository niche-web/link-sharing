"use client";

import { type Actions, type GlobalState, type Link } from "@/types/store-types";
import { initStore } from "@/store/store";
import { useEffect } from "react";

const ConfigureLinksStore = () => {
  useEffect(() => {
    const linksActions: Actions = {
      ADD_LINK: (state: GlobalState, link: Link) => {
        if (!link) {
          throw new Error("In 'ADD_LINK' action Payload is required.");
        }
        const prevLinks = [...state.links];
        return {
          ...state,
          links: [link, ...prevLinks],
        };
      },

      UPDATE_LINK: (state: GlobalState, link: Link) => {
        if (!link) {
          throw new Error("In 'UPDATE_LINK' action Payload is required.");
        }
        let prevLinks = [...state.links];
        const linkIndex = prevLinks.findIndex(
          (prevLink) => prevLink.id === link.id
        );
        prevLinks[linkIndex] = link;
        return {
          ...state,
          links: [...prevLinks],
        };
      },

      REMOVE_LINK: (state: GlobalState, id: Link["id"]) => {
        if (!id) {
          throw new Error("In 'REMOVE_LINK' action Payload is required.");
        }
        let prevLinks = [...state.links];
        const filteredLinks = prevLinks.filter(
          (prevLink) => prevLink.id !== id
        );
        console.log(filteredLinks);
        return {
          ...state,
          links: [...filteredLinks],
        };
      },
      MOVE_LINK: (
        state: GlobalState,
        indexes: { fromIndex: number; toIndex: number }
      ) => {
        const { fromIndex, toIndex } = indexes;
        if (!indexes) {
          throw new Error("In 'MOVE_LINK' action Payload is required.");
        }
        let updatedLinks = [...state.links];
        const [movedItem] = updatedLinks.splice(fromIndex, 1);
        updatedLinks.splice(toIndex, 0, movedItem);
        return {
          ...state,
          links: [...updatedLinks],
        };
      },
    };

    initStore(linksActions, { links: [] });
  }, []);

  return null;
};

export default ConfigureLinksStore;

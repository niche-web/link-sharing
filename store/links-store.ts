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
          links: [...prevLinks, link],
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
    };

    initStore(linksActions, { links: [] });
  }, []);

  return null;
};

export default ConfigureLinksStore;

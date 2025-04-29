import { ReactNode, useState, createContext } from "react";
import styles from "./link-wrapper.module.scss";
import useStore from "@/store/store";

export const dropContext = createContext({
  disableDropStyle: () => {},
  enableDropStyle: () => {},
});

const LinkWrapper = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  const [draggingOver, setDraggingOver] = useState<boolean>(false);
  const [enableDropStyle, setEnableDropStyle] = useState<boolean>(true);

  const dispatch = useStore(false)[1];

  const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setDraggingOver(true);
  };

  const dragEnterHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setDraggingOver(true);
  };

  const dropHandler = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const draggedLinkIndex: number = +event.dataTransfer.getData("linkIndex");
    dispatch("MOVE_LINK", { fromIndex: draggedLinkIndex, toIndex: index });
    setDraggingOver(false);
  };
  return (
    <dropContext.Provider
      value={{
        disableDropStyle: () => setEnableDropStyle(false),
        enableDropStyle: () => setEnableDropStyle(true),
      }}
    >
      <li
        className={
          draggingOver && enableDropStyle ? styles["link-wrapper__over"] : ""
        }
        onDragLeave={() => setDraggingOver(false)}
        onDragEnter={dragEnterHandler}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      >
        {children}
      </li>
    </dropContext.Provider>
  );
};
export default LinkWrapper;

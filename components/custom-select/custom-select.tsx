"use client";

import { useRef, useState, useEffect, type ElementType } from "react";
import { platforms } from "@/components/platform";
import PlatformElem from "@/components/platform";
import styles from "./custom-select.module.scss";
import { log } from "console";

type SelectProps = {
  title?: string;
  classes?: string;
  defaultPlatformIndex: number;
  onChange?: (value: string) => void;
};

const Select = ({
  defaultPlatformIndex,
  classes,
  title,
  ...otherProps
}: SelectProps) => {
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedPlatformIndex, setSelectedPlatformIndex] =
    useState<number>(defaultPlatformIndex);
  const [highlightedPlatformIndex, setHighlightedPlatformIndex] = useState<
    number | null
  >(null);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePickOption = (index: number) => {
    setSelectedPlatformIndex(index + 1);
    setPickerOpen(false);
  };

  return (
    <div ref={selectRef} className={`${styles.select} ${classes}`}>
      <label id="select-label" className={styles.select__label}>
        Platform
      </label>
      <button
        type="button"
        className={styles.select__display}
        onClick={() => setPickerOpen((prevValue) => !prevValue)}
      >
        <PlatformElem name={platforms[selectedPlatformIndex - 1]} />
      </button>
      <ul
        className={`${styles.select__picker} ${
          isPickerOpen ? styles["select__picker-open"] : ""
        }`}
      >
        {platforms.map((platform, index) => (
          <li
            onClick={() => handlePickOption(index)}
            key={index}
            className={`${styles.select__option} ${
              selectedPlatformIndex == index + 1
                ? styles["select__option-selected"]
                : ""
            }`}
          >
            <PlatformElem name={platform} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;

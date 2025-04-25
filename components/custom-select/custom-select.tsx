"use client";

import { useRef, useState, useEffect } from "react";
import { platforms } from "@/utils/dummy-data";
import PlatformElem from "@/components/platform";
import { type Platform } from "@/utils/dummy-data";
import styles from "./custom-select.module.scss";
import { platform } from "os";

type SelectProps = {
  title?: string;
  classes?: string;
  platform: Platform;
  onChange?: (value: string) => void;
};

const Select = ({
  platform,
  classes,
  title,
  onChange,
  ...otherProps
}: SelectProps) => {
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(platform);
  const [highlightedPlatformIndex, setHighlightedPlatformIndex] = useState<
    number | null
  >(0);
  const selectRef = useRef<HTMLDivElement>(null);

  //Update the select value every time the platform's value changes
  useEffect(() => {
    setSelectedPlatform(platform);
  }, [platform]);

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
    setSelectedPlatform(platforms[index]);
    onChange?.(platforms[index]);
    setPickerOpen(false);
  };

  // Keyboard support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setPickerOpen(true);
        setHighlightedPlatformIndex((prev) => (prev + 1) % platforms.length);
        break;
      case "Down":
        e.preventDefault();
        setPickerOpen(true);
        setHighlightedPlatformIndex((prev) => (prev + 1) % platforms.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setPickerOpen(true);
        setHighlightedPlatformIndex(
          (prev) => (prev - 1 + platforms.length) % platforms.length
        );
        break;
      case "Up":
        e.preventDefault();
        setPickerOpen(true);
        setHighlightedPlatformIndex(
          (prev) => (prev - 1 + platforms.length) % platforms.length
        );
        break;
      case "Enter":
        e.preventDefault();
        if (isPickerOpen) {
          handlePickOption(highlightedPlatformIndex);
        } else {
          setPickerOpen(true);
        }
        break;
      case "Escape":
        setPickerOpen(false);
        break;
    }
  };
  console.log("platform:", selectedPlatform);

  return (
    <div
      ref={selectRef}
      className={`${styles.select} ${classes}`}
      onKeyDown={handleKeyDown}
    >
      <label id="select-label" className={styles.select__label}>
        Platform
      </label>
      <button
        type="button"
        className={styles.select__display}
        onClick={() => setPickerOpen((prevValue) => !prevValue)}
      >
        <PlatformElem name={selectedPlatform} />
      </button>
      <ul
        className={`${styles.select__picker} ${
          isPickerOpen ? styles["select__picker-open"] : ""
        }`}
      >
        {platforms.map((platform, index) => (
          <li
            key={index}
            onClick={() => handlePickOption(index)}
            onMouseOver={() => setHighlightedPlatformIndex(index)}
            className={`${styles.select__option} ${
              selectedPlatform == platform
                ? styles["select__option-selected"]
                : ""
            } ${
              highlightedPlatformIndex == index
                ? styles["select__option-highlighted"]
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

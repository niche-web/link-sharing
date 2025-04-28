"use client";

import { useRef, useState, useEffect } from "react";
import { platforms } from "@/utils/dummy-data";
import PlatformElem from "@/components/platform";
import { type Platform } from "@/utils/dummy-data";
import styles from "./custom-select.module.scss";
import SelectButton from "@/assets/images/icon-chevron-down.svg?react";

type SelectProps = {
  title?: string;
  classes?: string;
  platform: Platform;
  onChange?: (value: string) => void;
  label?: string;
};

const listBoxId = "custom-select-listbox";

const Select = ({
  platform,
  classes,
  title,
  onChange,
  label,
  ...otherProps
}: SelectProps) => {
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
  const [highlightedPlatformIndex, setHighlightedPlatformIndex] = useState<
    number | null
  >(0);
  const [pickerHeight, setPickerHeight] = useState(0);
  const selectRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !selectRef.current?.contains(event.target as Node) &&
        document.body.contains(event.target as Node)
      ) {
        setPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePickOption = (index: number) => {
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

  return (
    <div
      ref={selectRef}
      className={`${styles.select} ${classes}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isPickerOpen}
      aria-controls={listBoxId}
      aria-activedescendant={
        isPickerOpen ? `option-${highlightedPlatformIndex}` : undefined
      }
      aria-label={label}
    >
      <label id="select-label" className={styles.select__label}>
        {label}
      </label>
      <button
        aria-labelledby="select-label"
        type="button"
        className={styles.select__display}
        onClick={() => setPickerOpen((prevValue) => !prevValue)}
      >
        <PlatformElem name={platform} />
        <span
          aria-hidden={true}
          className={
            isPickerOpen ? styles["select__button-up"] : styles.select__button
          }
        >
          <SelectButton />
        </span>
      </button>
      <ul
        id={listBoxId}
        role="listbox"
        className={`${styles.select__picker} ${
          isPickerOpen ? styles["select__picker-open"] : ""
        }`}
      >
        {platforms.map((platformOption, index) => (
          <li
            id={`option-${index}`}
            role="option"
            aria-selected={index === highlightedPlatformIndex}
            key={index}
            onClick={() => handlePickOption(index)}
            onMouseOver={() => setHighlightedPlatformIndex(index)}
            className={`${styles.select__option} ${
              platformOption === platform
                ? styles["select__option-selected"]
                : ""
            } ${
              highlightedPlatformIndex == index
                ? styles["select__option-highlighted"]
                : ""
            }`}
          >
            <PlatformElem name={platformOption} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;

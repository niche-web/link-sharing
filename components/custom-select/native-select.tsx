"use client";

import { platforms } from "@/components/platform";
import { forwardRef, useRef, useImperativeHandle } from "react";

const NativeSelect = forwardRef(function NativeSelect(props, ref) {
  const selectRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => ({
    get value() {
      return selectRef.current?.value;
    },
    set value(value: string) {
      if (selectRef.current) {
        selectRef.current.value = value;
      }
    },
  }));
  return (
    <div style={{ display: "none" }}>
      <label>Platform</label>
      <select ref={selectRef} {...props} title="Choose platform">
        {platforms.map((platform, index) => (
          <option key={index} value={(index + 1).toString()}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
});
export default NativeSelect;

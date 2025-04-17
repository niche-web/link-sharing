"use client";

import styles from "./picture-picker.module.scss";
import Container from "./UI/container";
import Image from "next/image";
import { useState, useRef } from "react";
import uploadIcon from "@/assets/images/icon-upload-image.svg";

type PicturePickerProps = { classes?: string };

const PicturePicker = ({ classes }: PicturePickerProps) => {
  const [pickedPicture, setPickedPicture] = useState<ArrayBuffer | null>(null);
  return (
    <Container
      rounded
      dark
      padSize="small"
      classes={`${styles["picture-picker"]} ${classes}`}
    >
      <label className={styles.label} htmlFor="picture">
        Picture Profile
      </label>
      <input
        className={styles["picture-picker__input"]}
        type="file"
        accept="image/png image/jpg"
        name="picture"
        id="picture"
      />
      <button className={styles["picture-picker__button"]} type="button">
        {pickedPicture ? (
          <Image src="" alt="" />
        ) : (
          <figure className={styles["picture-picker__button-empty"]}>
            <Image
              src={uploadIcon}
              alt="Upload Icon Image"
              width={40}
              height={40}
            />
            <figcaption>+ Upload Image</figcaption>
          </figure>
        )}
      </button>
      <p className={styles["picture-picker__info"]}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </Container>
  );
};

export default PicturePicker;

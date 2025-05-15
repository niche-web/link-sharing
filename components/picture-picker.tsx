"use client";

import styles from "./picture-picker.module.scss";
import Container from "./UI/container";
import Image from "next/image";
import { useRef } from "react";
import UploadIcon from "@/assets/images/icon-upload-image.svg?react";
import useStore from "@/store/store";

type PicturePickerProps = { classes?: string };

const PicturePicker = ({ classes }: PicturePickerProps) => {
  const [{ userDetails }, dispatch] = useStore(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const pictureText = userDetails.image ? "Change Image" : "+ Upload Image";

  const handlePickPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch("UPDATE_USER_DETAILS", { image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
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
        ref={inputRef}
        className={styles["picture-picker__input"]}
        type="file"
        accept="image/png image/jpg"
        name="picture"
        id="picture"
        onChange={handlePickPicture}
      />
      <button
        className={styles["picture-picker__button"]}
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        {userDetails.image && (
          <div className={styles["picture-picker__button-picture"]}>
            <Image src={userDetails.image} alt="Profile Picture" fill />
          </div>
        )}
        <figure
          className={`${styles["picture-picker__button-empty"]} ${
            userDetails.image
              ? styles["picture-picker__button-empty--hidden"]
              : ""
          }`}
        >
          <UploadIcon />
          <figcaption>{pictureText}</figcaption>
        </figure>
      </button>
      <p className={styles["picture-picker__info"]}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </Container>
  );
};

export default PicturePicker;

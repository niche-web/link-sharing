"use client";

import Button from "./button";
import useStore from "@/store/store";
import styles from "./save-button.module.scss";
import { usePathname } from "next/navigation";
import { Link } from "@/types/store-types";

const SaveButton = () => {
  const pathname = usePathname();
  const { links, userDetails } = useStore(true)[0];

  let disableButton: boolean = false;

  if (pathname === "/index") {
    const invalid = (link: Link) => link.validLink === false;
    disableButton = links.some(invalid) || links.length === 0;
  } else if (pathname === "/profile") {
    disableButton = userDetails.firstName === "" || userDetails.lastName === "";
  }

  return (
    <Button
      buttonstyle="primary"
      classes={styles["save-button"]}
      disabled={disableButton}
    >
      Save
    </Button>
  );
};

export default SaveButton;

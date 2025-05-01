"use client";

import PicturePicker from "./picture-picker";
import Input from "./UI/input";
import styles from "./details-form.module.scss";
import Container from "@/components/UI/container";

const DetailsForm = () => {
  return (
    <section id="details">
      <form className={styles.form}>
        <PicturePicker />
        <Container rounded dark padSize="small" classes={styles.form__controls}>
          <Input
            errorMesage="Can't be empty"
            label="First Name*"
            type="text"
            placeholder="e.g. John"
            required={true}
            title="First Name(required)"
          />
          <Input
            errorMesage="Can't be empty"
            label="Last Name*"
            type="text"
            placeholder="e.g. Appleseed"
            required={true}
            title="Last Name(required)"
          />
          <Input
            errorMesage="Can't be empty"
            label="Email"
            type="email"
            placeholder="e.g. email@example.com"
            title="Email"
          />
        </Container>
      </form>
    </section>
  );
};

export default DetailsForm;

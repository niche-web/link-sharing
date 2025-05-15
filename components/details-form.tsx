"use client";

import PicturePicker from "./picture-picker";
import Input from "./UI/input";
import styles from "./details-form.module.scss";
import Container from "@/components/UI/container";
import useStore from "@/store/store";

const DetailsForm = () => {
  const [{ userDetails }, dispatch] = useStore(false);

  const handleFirstNameUpdate = (value: string) => {
    dispatch("UPDATE_USER_DETAILS", { firstName: value });
  };
  const handleLastNameUpdate = (value: string) => {
    dispatch("UPDATE_USER_DETAILS", { lastName: value });
  };
  const handleEmailUpdate = (value: string) => {
    dispatch("UPDATE_USER_DETAILS", { email: value });
  };

  return (
    <section id="details">
      <form className={styles.form}>
        <PicturePicker />
        <Container rounded dark padSize="small" classes={styles.form__controls}>
          <Input
            label="First Name*"
            type="text"
            placeholder="e.g. John"
            required={true}
            title="First Name(required)"
            initialValue={userDetails.firstName || null}
            onUpdate={handleFirstNameUpdate}
          />
          <Input
            label="Last Name*"
            type="text"
            placeholder="e.g. Appleseed"
            required={true}
            title="Last Name(required)"
            onUpdate={handleLastNameUpdate}
            initialValue={userDetails.lastName || null}
          />
          <Input
            errorMesage="Is not a valid email"
            label="Email"
            type="email"
            placeholder="e.g. email@example.com"
            title="Email"
            onUpdate={handleEmailUpdate}
            initialValue={userDetails.email || null}
          />
        </Container>
      </form>
    </section>
  );
};

export default DetailsForm;

import PicturePicker from "./picture-picker";
import ProfileInput from "./profile-input";
import styles from "./details-form.module.scss";
import Container from "@/components/UI/container";

const DetailsForm = () => {
  return (
    <form className={styles.form}>
      <PicturePicker />
      <Container rounded dark padSize="small" classes={styles.form__controls}>
        <ProfileInput
          label="First Name*"
          type="text"
          placeholder="e.g. John"
          required={true}
          title="First Name(required)"
        />
        <ProfileInput
          label="Last Name*"
          type="text"
          placeholder="e.g. Appleseed"
          required={true}
          title="Last Name(required)"
        />
        <ProfileInput
          label="Email"
          type="email"
          placeholder="e.g. email@example.com"
          title="Email"
        />
      </Container>
    </form>
  );
};

export default DetailsForm;

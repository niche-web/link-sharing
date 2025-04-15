import DetailsForm from "@/components/details-form";

const ProfilePage = () => {
  return (
    <>
      <header>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
      </header>
      <section id="details">
        <DetailsForm />
      </section>
    </>
  );
};

export default ProfilePage;

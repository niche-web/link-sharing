import EmptyIllustration from "@/components/empty-illustration";
import Button from "@/components/UI/button";

const IndexPage = () => {
  return (
    <>
      <article>
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button>+ Add new link</button>
      </article>
      <section id="links">
        <EmptyIllustration />
      </section>
      <footer>
        <Button buttonStyle="primary">Save</Button>
      </footer>
    </>
  );
};

export default IndexPage;

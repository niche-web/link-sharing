import EmptyIllustration from "@/components/empty-illustration";

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
        <button>Save</button>
      </footer>
    </>
  );
};

export default IndexPage;

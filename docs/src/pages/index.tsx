import { Button, Stack } from "components/src";
import PageTitle from "src/components/PageTitle";

const Home = () => {
  return (
    <article>
      <PageTitle
        title="Design System"
        description="Welcome to the design system documentation"
      />
      <p>
        This is an example documentation website build with Next.js, Typescript,
        Vanilla Extract &amp; ContentLayer. See the source on{" "}
        <a href="https://github.com/samuelkraft/design-system">GitHub</a>
      </p>
      <Stack direction="column" space="10px" align="start">
        <h1></h1>
        <p></p>
        <Button href="/design" variant="secondary">
          Get started
        </Button>
      </Stack>
    </article>
  );
};

export default Home;

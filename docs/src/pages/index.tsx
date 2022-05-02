import { Button, Stack } from "components/src";
import PageTitle from "src/components/PageTitle";

const Home = () => {
  return (
    <article>
      <Stack space="10px" direction="column">
        <PageTitle
          title="Design System"
          description="Welcome to the design system documentation"
        />
        <Stack direction="column" space="16px" align="start">
          <p>
            This is an example documentation website build with Next.js,
            Typescript, Vanilla Extract &amp; ContentLayer. See the source on{" "}
            <a href="https://github.com/samuelkraft/design-system">GitHub</a>
          </p>
          <Button href="/design" variant="secondary">
            Get started
          </Button>
        </Stack>
      </Stack>
    </article>
  );
};

export default Home;

import { Stack } from "components/src";

const Home = () => {
  return (
    <section>
      <Stack direction="column" space="10px">
        <h1>Design System</h1>
        <p>
          Welcome to the design system documentation. This is an example
          documentation website build with Next.js, Typescript, Vanilla Extract
          &amp; ContentLayer. See the source on{" "}
          <a href="https://github.com/samuelkraft/design-system">GitHub</a>
        </p>
      </Stack>
    </section>
  );
};

export default Home;

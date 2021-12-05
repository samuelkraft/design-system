import { allComponents } from ".contentlayer/data";
import { InferGetStaticPropsType } from "next";

const Home = ({
  components,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>welcome to the design-system</div>;
};

export function getStaticProps() {
  const components = allComponents;
  return { props: { components } };
}

export default Home;

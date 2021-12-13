import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import { allComponents } from ".contentlayer/data";
import type { Component } from ".contentlayer/types";
import CodeBlock from "../../components/CodeBlock";

const components = {
  code: (props: any) => <CodeBlock {...props} />,
  pre: (props: any) => (
    <pre {...props} style={props.live ? { color: "red" } : { color: "blue" }} />
  ),
};

export default function Page({ component }: { component: Component }) {
  const Component = useMDXComponent(component.body.code);

  return (
    <article>
      <h1>{component.title}</h1>
      <p>{component.description}</p>
      <Component components={components} />
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: allComponents.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const component = allComponents.find((c) => c.slug === params?.slug);
  return { props: { component } };
};

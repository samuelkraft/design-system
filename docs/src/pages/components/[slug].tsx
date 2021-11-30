import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import { allComponents } from ".contentlayer/data";
import type { Component } from ".contentlayer/types";

export default function Page({ component }: { component: Component }) {
  const Component = useMDXComponent(component.body.code);

  return (
    <article>
      <h1>{component.title}</h1>
      <code>{component.description}</code>
      <Component />
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
  const component = allComponents.find((c) => c.slug === params.slug);
  return { props: { component } };
};

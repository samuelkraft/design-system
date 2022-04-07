import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../components/MDX";

import { allComponents } from "contentlayer/generated";
import type { Component } from "contentlayer/generated";
import { Stack } from "components/src";

export default function Page({ component }: { component: Component }) {
  const Component = useMDXComponent(component.body.code, {
    types: component.types,
  });

  return (
    <article>
      <Stack direction="column" space="10px">
        <h1>{component.title}</h1>
        <p>{component.description}</p>
        <Component components={components} />
        <a href={component.sourceLink}>View source</a>
        <a href={component.docsLink}>Edit this page</a>
      </Stack>
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
  const slug = params?.slug?.toString() as string;
  const component = allComponents.find((c) => c.slug === slug);
  return { props: { component } };
};

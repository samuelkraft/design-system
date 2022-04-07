import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../components/MDX";

import { allGuides } from "contentlayer/generated";
import type { Guide } from "contentlayer/generated";
import { Stack } from "components/src";

export default function Page({ guide }: { guide: Guide }) {
  const Component = useMDXComponent(guide.body.code);

  return (
    <article>
      <Stack direction="column" space="10px">
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>
        <Component components={components} />
        <a href={guide.docsLink}>Edit this page</a>
      </Stack>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: allGuides.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString() as string;
  const guide = allGuides.find((c) => c.slug === slug);
  return { props: { guide } };
};

import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "src/components/MDX";

import { allDocs } from "contentlayer/generated";
import type { Doc } from "contentlayer/generated";
import { Stack } from "components/src";
import PageTitle from "src/components/PageTitle";

export default function Page({ doc }: { doc: Doc }) {
  const Component = useMDXComponent(doc.body.code);

  return (
    <article>
      <Stack direction="column" space="10px">
        <PageTitle title={doc.title} description={doc.description} />
        <Component components={components} />
        <a href={doc.docsLink}>Edit this page</a>
      </Stack>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: allDocs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString() as string;
  const doc = allDocs.find((c) => c.slug === slug);
  return { props: { doc } };
};

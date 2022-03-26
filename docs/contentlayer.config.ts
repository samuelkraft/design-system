import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import { rehypeMetaAttribute } from "./src/lib/rehype-meta-attribute";
import { getTypes } from "./src/utils/getTypes";
import { getComponentName, getComponentPaths } from "./src/utils/fs";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      doc._raw.sourceFileName
        .replace(/\.mdx$/, "")
        .replace(/\.docs$/, "")
        .toLowerCase(),
  },
  types: {
    type: "json",
    resolve: (doc) => {
      const slug = doc._raw.sourceFileName
        .replace(/\.mdx$/, "")
        .replace(/\.docs$/, "");
      const pathname = getComponentPaths().find(
        (x) => getComponentName(x) === slug
      ) as string;
      const componentPathname = pathname?.replace("docs.mdx", "tsx");
      return getTypes(componentPathname)[slug];
    },
  },
};

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `**/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "../components/src/components",
  documentTypes: [Component],
  mdx: {
    rehypePlugins: [rehypeMetaAttribute],
  },
});

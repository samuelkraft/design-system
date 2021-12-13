import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import { rehypeMetaAttribute } from "./src/lib/rehype-meta-attribute";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      doc._raw.sourceFileName
        .replace(/\.mdx$/, "")
        .replace(/\.docs$/, "")
        .toLowerCase(),
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

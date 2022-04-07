import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import { rehypeMetaAttribute } from "./src/lib/rehype-meta-attribute";
import { getTypes } from "./src/utils/getTypes";
import {
  getComponentName,
  getComponentPaths,
  getGuideName,
  getGuidePaths,
} from "./src/utils/fs";
import { createGitHubLink } from "./src/utils/github";

const getSlug = (sourceFileName: string) =>
  sourceFileName.replace(/\.mdx$/, "").replace(/\.docs$/, "");
const getPathName = (slug: string) =>
  getComponentPaths().find((x) => getComponentName(x) === slug) as string;

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc._raw.sourceFileName).toLowerCase(),
  },
  types: {
    type: "json",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      const componentPathname = pathname?.replace("docs.mdx", "tsx");
      return getTypes(componentPathname)[slug];
    },
  },
  docsLink: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      return createGitHubLink(pathname.replace(/^\/.*design-system/i, ""));
    },
  },
  sourceLink: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      const componentPathname = pathname?.replace("docs.mdx", "tsx");
      return createGitHubLink(
        componentPathname.replace(/^\/.*design-system/i, "")
      );
    },
  },
};

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `./components/src/components/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields,
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `./docs/src/guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc._raw.sourceFileName).toLowerCase(),
    },
    docsLink: {
      type: "string",
      resolve: (doc) => {
        const slug = getSlug(doc._raw.sourceFileName);
        const pathname = getGuidePaths().find(
          (x) => getGuideName(x) === slug
        ) as string;
        return createGitHubLink(pathname.replace(/^\/.*design-system/i, ""));
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "../",
  contentDirInclude: ["./components/src/components", "./docs/src/guides"],
  documentTypes: [Component, Guide],
  mdx: {
    rehypePlugins: [rehypeMetaAttribute],
  },
});

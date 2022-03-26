import CodeBlock from "./CodeBlock";
import PropsTable from "./PropsTable";
import { Stack } from "components/src";

export const components = {
  code: (props: any) => <CodeBlock {...props} />,
  /* Custom pre component to prevent meta attributes on the pre tag*/
  pre: (props: any) => <pre>{props.children}</pre>,
  PropsTable,
  Stack,
};

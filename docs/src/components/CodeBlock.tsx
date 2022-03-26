import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as styles from "./CodeBlock.css";
import { Button, Heading, Stack } from "components/src";

const scope = { Button, Heading, Stack };

type CodeProps = {
  code: string;
};

const Code = ({ code }: CodeProps) => (
  <LiveProvider code={code} scope={scope}>
    <LivePreview className={styles.preview} />
    <LiveEditor className={styles.editor} />
    <p style={{ color: "red" }}>
      <LiveError />
    </p>
  </LiveProvider>
);

type CodeBlockProps = {
  children: string;
  live?: boolean;
};

const CodeBlock = ({ children, live }: CodeBlockProps) => {
  if (live) {
    return (
      <div className={styles.live}>
        <Code code={children} />
      </div>
    );
  }
  return <>{children}</>;
};

export default CodeBlock;

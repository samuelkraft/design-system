import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as styles from "./CodeBlock.css";
import { Button, Heading } from "components/src";

const scope = { Button, Heading };

type CodeProps = {
  code: string;
};

const Code = ({ code }: CodeProps) => (
  <LiveProvider code={code} scope={scope}>
    <LivePreview />
    <LiveEditor className={styles.editor} />
    <p style={{ color: "red" }}>
      <LiveError />
    </p>
  </LiveProvider>
);

const CodeBlock = ({
  children,
  live = true,
}: {
  children: string;
  live?: boolean;
}) => {
  if (live) {
    return (
      <div className={styles.live}>
        <Code code={children.trim()} />
      </div>
    );
  }
  return <p>{children}</p>;
};

export default CodeBlock;

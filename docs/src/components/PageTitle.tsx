import { Stack } from "components/src";
import { vars } from "src/styles/vars.css";
import * as styles from "./PageTitle.css";

type PageTitleProps = {
  title: string;
  description: string;
  link?: string;
};

const PageTitle = ({ title, description, link }: PageTitleProps) => (
  <Stack direction="column" space={vars.space.large}>
    <Stack
      direction="row"
      space={vars.space.small}
      justify="space-between"
      align="center"
    >
      <h1 className={styles.title}>{title}</h1>
      {link ? <a href={link}>View source on GitHub</a> : <div />}
    </Stack>
    <p className={styles.description}>{description}</p>
  </Stack>
);

export default PageTitle;

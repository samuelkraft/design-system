import { Stack } from "components/src";
import { vars } from "src/styles/vars.css";
import * as styles from "./PageTitle.css";

type PageTitleProps = {
  title: string;
  description: string;
};

const PageTitle = ({ title, description }: PageTitleProps) => (
  <Stack direction="column" space={vars.space.large}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </Stack>
);

export default PageTitle;

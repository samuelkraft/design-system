import { ReactNode } from "react";
import Link from "next/link";
import { allComponents } from ".contentlayer/data";
import * as styles from "./Layout.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <Link href="/">Home</Link>
        {allComponents.map((component) => (
          <Link key={component.title} href={`/components/${component.slug}`}>
            {component.title}
          </Link>
        ))}
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

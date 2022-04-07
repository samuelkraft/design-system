import { ReactNode, useState } from "react";
import Link from "next/link";
import { allComponents, allGuides } from "contentlayer/generated";
import * as styles from "./Layout.css";
import ThemeChanger from "./ThemeChanger";

const searchFilter = (query: string, item: any) =>
  item.title.toLowerCase().includes(query.toLowerCase()) ||
  item.body.raw.toLowerCase().includes(query.toLowerCase());

export const Layout = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");

  const componentResults = allComponents.filter((component) =>
    searchFilter(query, component)
  );
  const guideResults = allGuides.filter((guide) => searchFilter(query, guide));

  const results = [...componentResults, ...guideResults];
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <ThemeChanger />
        <Link href="/">Home</Link>

        <p className={styles.sidebarTitle}>Guides</p>
        {allGuides.map((guide) => (
          <Link key={guide.title} href={`/guides/${guide.slug}`}>
            {guide.title}
          </Link>
        ))}

        <p className={styles.sidebarTitle}>Components</p>
        {allComponents.map((component) => (
          <Link key={component.title} href={`/components/${component.slug}`}>
            {component.title}
          </Link>
        ))}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="search"
        />
      </aside>
      <main className={styles.main}>
        {query ? (
          <>
            {`search results for ${query}`}
            <div>
              {results.map((x) => (
                <div key={x._id} onClick={() => setQuery("")}>
                  <Link href={`/components/${x.slug}`}>{x.title}</Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

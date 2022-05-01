import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components/Layout";
import { lightTheme, darkTheme, purpleTheme } from "../styles/vars.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
        purple: purpleTheme,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

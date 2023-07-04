import React from "react";
import { API } from "@stoplight/elements";
import "@stoplight/elements/styles.min.css";
import useBreakpoint from "../lib/useBreakPoint";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Home(): JSX.Element {
  const size = useBreakpoint();
  return (
    <>
      <header className="header">
        <a href="/" className="header__logo">
          <h1>bradn</h1>
        </a>
      </header>
      <main>
        <BrowserOnly>
          {() => (
            <API
              layout={size === "sm" ? "stacked" : "sidebar"}
              apiDescriptionUrl="/api/v1.yaml"
              router="hash"
            />
          )}
        </BrowserOnly>
        <BrowserOnly>
          {() => (
            <script>
              document.documentElement.setAttribute('data-theme', 'dark')
            </script>
          )}
        </BrowserOnly>
      </main>
    </>
  );
}

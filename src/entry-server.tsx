import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

// Used at build time by scripts/prerender.mjs to write the page's HTML into
// dist/index.html, so the content is there before any JavaScript runs.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

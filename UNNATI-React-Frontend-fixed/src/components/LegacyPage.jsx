import React, { useLayoutEffect } from "react";
import { LEGACY_SCRIPTS } from "../legacySources";

const loadedStyles = new Map();

function installStyles(styles) {
  return styles.map((stylePath) => {
    const href = stylePath.startsWith("/") ? stylePath : `/${stylePath}`;

    // If this stylesheet has already been loaded, reuse it.
    if (loadedStyles.has(href)) {
      return loadedStyles.get(href);
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.unnatiReactStyle = "true";

    document.head.appendChild(link);

    loadedStyles.set(href, link);

    return link;
  });
}

function adaptNavigation(source) {
  return source.replace(
    /(?:window\.)?location\.href\s*=\s*([^;]+);/g,
    "window.__unnatiNavigate($1);"
  );
}

function runLegacySource(source, sourceName) {
  try {
    const execute = new Function(
      adaptNavigation(source) +
        `\n//# sourceURL=unnati-legacy/${sourceName}`
    );

    execute();
  } catch (error) {
    console.error(
      `UNNATI legacy script error in ${sourceName}:`,
      error
    );
  }
}

function runInlineHandlers(root) {
  root.querySelectorAll("[data-legacy-onclick]").forEach((element) => {
    const code = element.getAttribute("data-legacy-onclick");

    const handler = () => {
      try {
        const adapted = adaptNavigation(code);
        new Function(adapted)();
      } catch (error) {
        console.error(
          "UNNATI inline handler error:",
          error
        );
      }
    };

    element.addEventListener("click", handler);
    element.__unnatiInlineHandler = handler;
  });
}

function removeInlineHandlers(root) {
  root.querySelectorAll("[data-legacy-onclick]").forEach((element) => {
    if (element.__unnatiInlineHandler) {
      element.removeEventListener(
        "click",
        element.__unnatiInlineHandler
      );

      delete element.__unnatiInlineHandler;
    }
  });
}

export default function LegacyPage({
  title,
  styles = [],
  scripts = [],
  children,
}) {
  useLayoutEffect(() => {
    document.title = title || "UNNATI";

    // Load the page's CSS only once.
    installStyles(styles);

    scripts.forEach((name) => {
      const source = LEGACY_SCRIPTS[name];

      if (source) {
        runLegacySource(source, name);
      }
    });

    const root = document.getElementById("unnati-page-root");

    if (root) {
      runInlineHandlers(root);
    }

    return () => {
      if (root) {
        removeInlineHandlers(root);
      }
    };
  }, [title, styles, scripts]);

  return (
    <div id="unnati-page-root">
      {children}
    </div>
  );
}
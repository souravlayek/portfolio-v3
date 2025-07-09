import Prism from "prismjs";
import { JSDOM } from "jsdom";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

export function highlight(html: string): string {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const codeBlocks = document.querySelectorAll("pre code[class^='language-']");

  codeBlocks.forEach((codeEl) => {
    const className = codeEl.className || "";
    const langMatch = className.match(/language-(\w+)/);
    if (!langMatch) return;

    const lang = langMatch[1];
    const grammar = Prism.languages[lang];
    if (!grammar) return;

    const originalCode = codeEl.textContent || "";
    const highlighted = Prism.highlight(originalCode, grammar, lang);

    codeEl.innerHTML = highlighted;
  });

  return document.body.innerHTML;
}

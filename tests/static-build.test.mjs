import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("создаёт статическую версию для GitHub Pages", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Металлические навесы под ключ/);
  assert.match(html, /\.\/assets\/[^\"']+\.js/);
  assert.doesNotMatch(html, /src=["']\/assets\//);
  await access(new URL("../dist/works/work-44.jpg", import.meta.url));
  await access(new URL("../dist/favicon.png", import.meta.url));
});

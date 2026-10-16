// Runs after both Vite builds (see "build" in package.json). Renders the app
// with the server bundle and writes the HTML into dist/index.html, so link
// previews, crawlers and tools that don't run JavaScript see the full page.
import fs from 'node:fs'

const indexFile = new URL('../dist/index.html', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)
const ROOT = '<div id="root"></div>'

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const appHtml = render()

const template = fs.readFileSync(indexFile, 'utf8')
if (!template.includes(ROOT)) {
  throw new Error(`prerender: ${ROOT} not found in dist/index.html`)
}
// A function replacement, so "$" in the markup is never treated as a pattern
fs.writeFileSync(indexFile, template.replace(ROOT, () => `<div id="root">${appHtml}</div>`))
fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} KB of HTML into dist/index.html`)

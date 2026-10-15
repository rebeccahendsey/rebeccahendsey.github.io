// Pulls Rebecca's Goodreads shelves from the public RSS feeds and writes
// src/data/books.json. Runs before every build (see .github/workflows/deploy.yml).
// If Goodreads can't be reached, the existing books.json is left untouched so
// the build still succeeds with the last good copy.
import fs from 'node:fs'

const USER_ID = process.env.GOODREADS_USER_ID || '136096794'
const OUT = new URL('../src/data/books.json', import.meta.url)

const decode = (s) =>
  s
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim()

const field = (item, tag) => {
  const m = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  return m ? decode(m[1]) : ''
}

async function shelf(name) {
  const items = []
  for (let page = 1; page <= 20; page++) {
    const url = `https://www.goodreads.com/review/list_rss/${USER_ID}?shelf=${name}&per_page=100&page=${page}`
    const res = await fetch(url, { headers: { 'User-Agent': 'rebeccahendsey.github.io build' } })
    if (!res.ok) throw new Error(`${url} returned ${res.status}`)
    const xml = await res.text()
    const pageItems = xml.match(/<item>[\s\S]*?<\/item>/g) || []
    if (pageItems.length === 0) break
    items.push(...pageItems)
    if (pageItems.length < 100) break
  }
  return items.map((item) => {
    const readAt = field(item, 'user_read_at')
    const added = field(item, 'user_date_added')
    const date = new Date(readAt || added)
    return {
      title: field(item, 'title'),
      author: field(item, 'author_name'),
      year: Number.isNaN(date.getTime()) ? null : date.getFullYear(),
      rating: Number(field(item, 'user_rating')) || 0,
      cover: field(item, 'book_large_image_url') || field(item, 'book_image_url') || undefined,
      url: field(item, 'link') || undefined
    }
  })
}

try {
  const [read, current] = await Promise.all([shelf('read'), shelf('currently-reading')])
  if (read.length === 0) throw new Error('read shelf came back empty')
  const data = {
    source: 'goodreads',
    updated: new Date().toISOString(),
    current: current.map(({ title, author, cover, url }) => ({ title, author, cover, url })),
    books: read.filter((b) => b.year)
  }
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n')
  console.log(`Goodreads: ${data.books.length} read, ${data.current.length} currently reading`)
} catch (err) {
  console.warn(`Goodreads fetch skipped, keeping existing books.json: ${err.message}`)
}

import { useState } from 'react'
import shelf from './data/books.json'

interface Book {
  title: string
  author: string
  year: number | null
  rating: number
  cover?: string
  url?: string
}

const BOOKS = shelf.books as Book[]
const CURRENT = (shelf.current ?? []) as Book[]
const UPDATED = shelf.updated as string | null
const YEARS = [...new Set(BOOKS.map((b) => b.year).filter((y): y is number => !!y))]
  .sort((a, b) => b - a)
  .slice(0, 3)

const SPINE_COLORS = ['spine-sage', 'spine-charcoal', 'spine-cream', 'spine-lilac', 'spine-moss', 'spine-stone']

// Stable pseudo-random number from a title, so each spine keeps its look between builds
function hash(s: string) {
  let h = 0
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return h
}

function Reading() {
  const [year, setYear] = useState(YEARS[0])
  const [open, setOpen] = useState<Book | null>(null)
  const books = BOOKS.filter((b) => b.year === year)
  const thisYear = new Date().getFullYear()

  return (
    <div className="reading">
      <div className="hobby-head">
        <h3>On my <em>shelf.</em></h3>
        <p className="hobby-note">
          {books.length} {books.length === 1 ? 'book' : 'books'} {year === thisYear ? 'so far this year' : `in ${year}`}
          {CURRENT.length > 0 && <> · now reading <i>{CURRENT[0].title}</i></>}
        </p>
      </div>

      <div className="travel-tabs" role="tablist" aria-label="Reading year">
        {YEARS.map((y) => (
          <button
            key={y}
            type="button"
            role="tab"
            aria-selected={y === year}
            className={`pill${y === year ? ' is-on' : ''}`}
            onClick={() => { setYear(y); setOpen(null) }}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="shelf" onMouseLeave={() => setOpen(null)}>
        <ul className="spines">
          {books.map((b) => {
            const h = hash(b.title)
            const fav = b.rating === 5
            return (
              <li key={`${b.title}-${b.author}`}>
                <button
                  type="button"
                  className={`spine ${fav ? 'spine-fav' : SPINE_COLORS[h % SPINE_COLORS.length]}${open === b ? ' is-open' : ''}`}
                  style={{
                    height: `${78 + (h % 23)}%`,
                    width: `${2.6 + Math.min(b.title.length, 34) / 22}rem`
                  }}
                  onMouseEnter={() => setOpen(b)}
                  onFocus={() => setOpen(b)}
                  onClick={() => setOpen(open === b ? null : b)}
                  aria-label={`${b.title} by ${b.author}${fav ? ', five stars' : ''}`}
                >
                  <span className="spine-title">{b.title}</span>
                  {fav && <span className="spine-star" aria-hidden="true">★</span>}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="shelf-board" />
        <div className={`book-card${open ? ' is-on' : ''}`} aria-live="polite">
          {open ? (
            <>
              {open.cover && <img src={open.cover} alt="" />}
              <div>
                <p className="book-title">{open.title}</p>
                <p className="book-author">{open.author}</p>
                {open.rating === 5 && <p className="book-fav">★★★★★ favorite</p>}
              </div>
            </>
          ) : (
            <p className="book-hint">Hover or tap a spine</p>
          )}
        </div>
      </div>

      <p className="hobby-source">
        Synced from{' '}
        <a href="https://www.goodreads.com/user/show/136096794" target="_blank" rel="noopener noreferrer">Goodreads</a>
        {UPDATED && <> · updated {new Date(UPDATED).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</>}
      </p>
    </div>
  )
}

export default Reading

import { useState } from 'react'
import map from './data/travel-map.json'

type ViewKey = 'world' | 'europe' | 'us' | 'northeast'

interface Dot {
  name: string
  region: string
  x: number
  y: number
  home: boolean
}

const VIEWS: { key: ViewKey; label: string }[] = [
  { key: 'world', label: 'World' },
  { key: 'europe', label: 'Europe' },
  { key: 'us', label: 'US' },
  { key: 'northeast', label: 'Northeast' }
]

const DOT_RADIUS: Record<ViewKey, number> = { world: 3, europe: 6, us: 4.5, northeast: 6 }

function Travel() {
  const [view, setView] = useState<ViewKey>('world')
  const [active, setActive] = useState<Dot | null>(null)
  const data = map[view]
  const r = DOT_RADIUS[view]

  return (
    <div className="travel">
      <div className="travel-intro">
        <h3>Places I’ve <em>been.</em></h3>
      </div>

      <div className="travel-tabs" role="tablist" aria-label="Map view">
        {VIEWS.map((v) => (
          <button
            key={v.key}
            type="button"
            role="tab"
            aria-selected={view === v.key}
            className={`pill${view === v.key ? ' is-on' : ''}`}
            onClick={() => { setView(v.key); setActive(null) }}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="map" onMouseLeave={() => setActive(null)}>
        <svg viewBox={`0 0 ${data.width} ${data.height}`} role="img" aria-label={`Map of places Rebecca has visited: ${VIEWS.find((v) => v.key === view)?.label}`}>
          {data.shapes.map((s, i) => (
            <path key={`${s.name}-${i}`} d={s.d} className={s.visited ? 'land is-visited' : 'land'}>
              {s.visited && <title>{s.name}</title>}
            </path>
          ))}
          {(data.dots as Dot[]).map((d) => (
            <g key={`${d.name}-${d.region}`}>
              {d.home && <circle cx={d.x} cy={d.y} r={r * 2.6} className="dot-home" />}
              <circle
                cx={d.x}
                cy={d.y}
                r={active === d ? r * 1.6 : r}
                className="dot"
                tabIndex={0}
                aria-label={d.name === d.region ? d.name : `${d.name}, ${d.region}`}
                onMouseEnter={() => setActive(d)}
                onFocus={() => setActive(d)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(d)}
              />
            </g>
          ))}
        </svg>
        {active && (
          <div
            className="map-tip"
            style={{
              left: `calc(var(--map-pad) + (100% - 2 * var(--map-pad)) * ${active.x / data.width})`,
              top: `calc(var(--map-pad) + (100% - 2 * var(--map-pad)) * ${active.y / data.height})`
            }}
          >
            <strong>{active.name}</strong>
            {active.name !== active.region && <span>{active.region}</span>}
            {active.home && <span>home base</span>}
          </div>
        )}
      </div>

    </div>
  )
}

export default Travel

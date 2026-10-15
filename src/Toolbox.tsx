import icons from './data/tool-icons.json'

interface Tool {
  name: string
  icon?: keyof typeof icons
  mark?: string
}

const TRAYS: { label: string; tools: Tool[] }[] = [
  {
    label: 'Languages & frameworks',
    tools: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
      { name: 'SQL', mark: 'SQL' },
      { name: 'Go', icon: 'go' },
      { name: 'React', icon: 'react' },
      { name: 'Vue', icon: 'vuedotjs' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'Jest', icon: 'jest' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Carbon Design System', mark: 'Cb' }
    ]
  },
  {
    label: 'Tools & platforms',
    tools: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Podman', icon: 'podman' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Kafka', icon: 'apachekafka' },
      { name: 'Travis CI', icon: 'travisci' },
      { name: 'Figma', icon: 'figma' },
      { name: 'IBM Cloud', mark: 'IC' },
      { name: 'Code Engine', mark: 'CE' },
      { name: 'watsonx Orchestrate', mark: 'wx' },
      { name: 'IBM Bob', mark: 'Bob' }
    ]
  }
]

const PRACTICES = [
  'Roadmapping',
  'Stakeholder management',
  'User research',
  'Sprint planning',
  'Agile / Scrum',
  'Cross-functional collaboration',
  'CI/CD',
  'Code review',
  'Artificial intelligence',
  'Prompt engineering',
  'Clear, concise communication'
]

function Toolbox() {
  return (
    <section className="toolbox-wrap">
      <div className="toolbox">
        <div className="toolbox-handle" aria-hidden="true" />
        <div className="toolbox-lid">
          <span className="toolbox-plate">R.H. Tool Co.</span>
        </div>

        {TRAYS.map((tray) => (
          <div key={tray.label} className="tray">
            <p className="tray-label">{tray.label}</p>
            <ul className="tools">
              {tray.tools.map((t) => {
                const icon = t.icon ? icons[t.icon] : null
                return (
                  <li key={t.name} className="tool" style={icon ? ({ '--brand': icon.hex } as React.CSSProperties) : undefined}>
                    <span className="tool-icon" aria-hidden="true">
                      {icon ? (
                        <svg viewBox="0 0 24 24"><path d={icon.path} /></svg>
                      ) : (
                        <span className="tool-mark">{t.mark}</span>
                      )}
                    </span>
                    <span className="tool-name">{t.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}

        <div className="tray tray-practices">
          <p className="tray-label">Practices</p>
          <ul className="labels">
            {PRACTICES.map((p, i) => (
              <li key={p} className="label-tape" style={{ '--tilt': `${((i * 7) % 5) - 2}deg` } as React.CSSProperties}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Toolbox

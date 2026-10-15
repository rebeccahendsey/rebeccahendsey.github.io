interface Role {
  id: string
  title: string
  org: string
  place: string
  start: string
  end: string | null
  bullets: string[]
}

interface School {
  id: string
  degree: string
  school: string
  place: string
  when: string
  status?: string
  coursework: string[]
}

const WORK: Role[] = [
  {
    id: 'pm',
    title: 'Project Manager',
    org: 'IBM',
    place: 'New York, NY',
    start: '2026-09',
    end: null,
    bullets: [
      'Manage client software migration projects within IBM Expert Labs’ Software Migration Project Office (SMPO), coordinating timelines, resources, and delivery across technical teams and client stakeholders'
    ]
  },
  {
    id: 'po',
    title: 'AI Engineer & Product Owner',
    org: 'IBM',
    place: 'New York, NY',
    start: '2024-10',
    end: '2026-09',
    bullets: [
      'Served as product owner of STARS, a client success stories platform with 17K+ unique users and 100K+ lifetime visits, owning the roadmap, gathering stakeholder needs, working cross-functionally, and driving feature adoption across four organizations (Client Engineering, Technology Sales, Expert Labs, and Customer Success)',
      'Designed, developed, and deployed an AI concierge for IBM TechXchange 2025 end-to-end from the React front-end and IBM watsonx Orchestrate agent to the IBM Cloud Code Engine deployment',
      'Built and led front-end development for IBM Agentrix, a multi-agent, agentic AI playground, writing production-quality React components using the IBM Carbon Design System while running the front-end team’s delivery process, including stand-ups, PR reviews, and sprint tracking',
      'Mentored junior engineers through technical guidance and career development support, strengthening team execution across AI initiatives'
    ]
  },
  {
    id: 'dev',
    title: 'Software Developer',
    org: 'IBM Research',
    place: 'Yorktown Heights, NY',
    start: '2022-06',
    end: '2024-10',
    bullets: [
      'Developed and deployed production-quality full-stack applications (React, Node, Go, SQL) used across IBM Research, working in an Agile environment',
      'Built Python workflows to extract and transform researcher activity data (projects, publications, code contributions) from multiple sources, including the GitHub GraphQL API, across 3,600+ profiles, delivering personalized year-end reports via a Kafka-based notification service',
      'Maintained 80%+ test coverage and utilized CI/CD pipelines with GitHub and Travis CI, including pre-commit hooks to detect secrets and dependency vulnerabilities prior to merge'
    ]
  },
  {
    id: 'ra',
    title: 'Research Assistant',
    org: 'Laboratory of Informatics and Data Mining',
    place: 'Bronx, NY',
    start: '2020-02',
    end: '2022-05',
    bullets: [
      'Applied combinatorial fusion analysis (CFA) to various interdisciplinary domains including detecting image preference and predicting judge bias in ice skating competitions, contributing to two IEEE publications'
    ]
  },
  {
    id: 'gwc',
    title: 'Co-President',
    org: 'Girls Who Code College Loops',
    place: 'Bronx, NY',
    start: '2019-09',
    end: '2022-05',
    bullets: [
      'Delivered presentations and created related coding challenges for 50+ members of Fordham’s Girls Who Code',
      'Advocated for female involvement in technology by cultivating a supportive network and inspiring young women to pursue careers in technology'
    ]
  }
]

const SCHOOL: School[] = [
  {
    id: 'columbia',
    degree: 'M.S. in Data Science',
    school: 'Columbia University',
    place: 'New York, NY',
    when: 'Expected Dec 2027',
    status: 'Part-time · in progress',
    coursework: ['Product Management', 'Innovation and Design Lab', 'Probability and Statistics', 'Computer Systems for Data Science']
  },
  {
    id: 'fordham',
    degree: 'B.S. in Computer Science',
    school: 'Fordham University',
    place: 'Bronx, NY',
    when: 'May 2022',
    coursework: ['Computer Algorithms', 'Data Structures', 'Data Mining', 'Database', 'Software Engineering', 'Information Fusion']
  }
]

// Chart runs Jan 2019 to Jan 2028
const FIRST_YEAR = 2019
const LAST_YEAR = 2028
const TOTAL = (LAST_YEAR - FIRST_YEAR) * 12
const NOW = new Date()
const NOW_KEY = `${NOW.getFullYear()}-${String(NOW.getMonth() + 1).padStart(2, '0')}`

const pos = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return Math.min(100, Math.max(0, (((y - FIRST_YEAR) * 12 + (m - 1)) / TOTAL) * 100))
}

const label = (ym: string | null) => {
  if (!ym) return 'Present'
  const [y, m] = ym.split('-').map(Number)
  return new Date(y, m - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const span = (start: string, end: string | null) => ({
  left: `${pos(start)}%`,
  width: `${pos(end ?? NOW_KEY) - pos(start)}%`
})

// Lanes on the chart: IBM roles share one row; overlapping college roles get their own
const WORK_ROWS = [['dev', 'po', 'pm'], ['ra'], ['gwc']]
const SHORT: Record<string, string> = {
  pm: 'Project Manager',
  po: 'AI Eng. & Product Owner',
  dev: 'Software Developer',
  ra: 'Research Assistant',
  gwc: 'Girls Who Code'
}

function Journey() {
  const years = Array.from({ length: LAST_YEAR - FIRST_YEAR }, (_, i) => FIRST_YEAR + i)

  return (
    <section className="journey">
      <div className="gantt-scroll">
        <div className="gantt" role="img" aria-label="Chart of work and education from 2019 to 2027">
          <div className="gantt-years">
            {years.map((y) => (
              <span key={y} style={{ left: `${pos(`${y}-01`)}%` }}>{y}</span>
            ))}
          </div>

          <p className="gantt-lane-label">Work</p>
          {WORK_ROWS.map((row, i) => (
            <div className="gantt-row" key={i}>
              {row.map((id) => {
                const r = WORK.find((w) => w.id === id)!
                return (
                  <a key={id} href={`#role-${id}`} className={`gantt-bar bar-${id}${r.end ? '' : ' bar-now'}`} style={span(r.start, r.end)}>
                    {r.end ? SHORT[id] : <span>{SHORT[id]} →</span>}
                  </a>
                )
              })}
            </div>
          ))}

          <p className="gantt-lane-label">School</p>
          <div className="gantt-row">
            <a href="#school-fordham" className="gantt-bar bar-school bar-fade" style={span(`${FIRST_YEAR}-01`, '2022-05')}>
              Fordham · B.S.
            </a>
            <a href="#school-columbia" className="gantt-bar bar-school bar-dashed" style={span(NOW_KEY, '2027-12')}>
              Columbia · M.S.
            </a>
          </div>

          <div className="gantt-overlay" aria-hidden="true">
            <div className="gantt-today" style={{ left: `${pos(NOW_KEY)}%` }}><span>Today</span></div>
          </div>
        </div>
      </div>

      <div className="journey-cols">
        <div>
          <h3 className="journey-heading">Work</h3>
          <ol className="roles">
            {WORK.map((r) => (
              <li key={r.id} id={`role-${r.id}`} className="role">
                <p className="role-dates">{label(r.start)} – {label(r.end)}</p>
                <h4>{r.title}</h4>
                <p className="role-org">{r.org} · {r.place}</p>
                <ul>
                  {r.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="journey-heading">Education</h3>
          <ol className="schools">
            {SCHOOL.map((s) => (
              <li key={s.id} id={`school-${s.id}`} className="school">
                <p className="role-dates">{s.when}</p>
                <h4>{s.school}</h4>
                <p className="role-org">{s.degree} · {s.place}</p>
                {s.status && <p className="school-status">{s.status}</p>}
                <p className="coursework-label">Coursework</p>
                <ul className="coursework">
                  {s.coursework.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Journey

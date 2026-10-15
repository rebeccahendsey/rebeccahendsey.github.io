import { useRef } from 'react'
import './App.css'

interface Highlight {
  title: string
  role: string
  description: string
  metrics?: string[]
}

interface Job {
  company: string
  title: string
  location: string
  dates: string
  bullets: string[]
}

interface Skill {
  category: string
  items: string[]
}

function App() {
  const aboutRef = useRef<HTMLElement>(null)
  const highlightsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const highlights: Highlight[] = [
    {
      title: 'STARS',
      role: 'Product Owner',
      description:
        'Owned the roadmap for IBM’s internal client success stories platform: gathered stakeholder needs, prioritized features, and drove adoption across Client Engineering, Technology Sales, Expert Labs, and Customer Success.',
      metrics: ['17K+ unique users', '100K+ lifetime visits', '4 organizations']
    },
    {
      title: 'TechXchange 2025 AI Concierge',
      role: 'Designer & Engineer',
      description:
        'Took an AI concierge for IBM TechXchange 2025 from idea to launch end-to-end: the React front-end, the watsonx Orchestrate agent, and the IBM Cloud Code Engine deployment.'
    },
    {
      title: 'IBM Agentrix',
      role: 'Front-end Lead',
      description:
        'Led front-end delivery for a multi-agent, agentic AI playground, running stand-ups, PR reviews, and sprint tracking while building production React components with the Carbon Design System.'
    }
  ]

  const jobs: Job[] = [
    {
      company: 'IBM',
      title: 'Project Manager',
      location: 'New York, NY',
      dates: 'Sep 2026 – Present',
      bullets: [
        'Manage client software migration projects within IBM Expert Labs’ Software Migration Project Office (SMPO), coordinating timelines, resources, and delivery across technical teams and client stakeholders.'
      ]
    },
    {
      company: 'IBM',
      title: 'AI Engineer & Product Owner',
      location: 'New York, NY',
      dates: 'Oct 2024 – Sep 2026',
      bullets: [
        'Product owner of STARS (17K+ users, 100K+ visits): owned the roadmap, gathered stakeholder needs, and drove feature adoption across four organizations.',
        'Designed, built, and deployed an AI concierge for IBM TechXchange 2025 end-to-end.',
        'Led front-end development and the team’s delivery process for IBM Agentrix, a multi-agent AI playground.',
        'Mentored junior engineers through technical guidance and career development support.'
      ]
    },
    {
      company: 'IBM Research',
      title: 'Software Developer',
      location: 'Yorktown Heights, NY',
      dates: 'Jun 2022 – Oct 2024',
      bullets: [
        'Shipped production full-stack applications (React, Node, Go, SQL) used across IBM Research in an Agile environment.',
        'Built Python data workflows across 3,600+ researcher profiles to deliver personalized year-end reports.',
        'Maintained 80%+ test coverage with CI/CD pipelines and pre-merge security checks.'
      ]
    },
    {
      company: 'Laboratory of Informatics and Data Mining',
      title: 'Research Assistant',
      location: 'Bronx, NY',
      dates: 'Feb 2020 – May 2022',
      bullets: [
        'Applied combinatorial fusion analysis to interdisciplinary problems, contributing to two IEEE publications.'
      ]
    },
    {
      company: 'Girls Who Code College Loops, Fordham',
      title: 'Co-President',
      location: 'Bronx, NY',
      dates: 'Sep 2019 – May 2022',
      bullets: [
        'Led presentations and coding challenges for 50+ members and built a supportive network for women in tech.'
      ]
    }
  ]

  const skills: Skill[] = [
    {
      category: 'Product & Delivery',
      items: [
        'Roadmapping',
        'Stakeholder management',
        'User research',
        'Sprint planning',
        'Agile / Scrum',
        'Cross-functional collaboration'
      ]
    },
    {
      category: 'AI & Engineering',
      items: [
        'Generative & agentic AI',
        'Prompt engineering',
        'TypeScript / JavaScript',
        'React, Vue, Node.js',
        'Python & SQL',
        'CI/CD & code review'
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        'Figma',
        'watsonx Orchestrate',
        'IBM Cloud & Code Engine',
        'Git & GitHub',
        'Docker & Podman',
        'PostgreSQL'
      ]
    }
  ]

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <h1>Rebecca Hendsey</h1>
          </div>
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection(aboutRef)}>About</a></li>
            <li><a onClick={() => scrollToSection(highlightsRef)}>Work</a></li>
            <li><a onClick={() => scrollToSection(experienceRef)}>Experience</a></li>
            <li><a onClick={() => scrollToSection(skillsRef)}>Skills</a></li>
            <li><a onClick={() => scrollToSection(contactRef)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <img src="/hero-image.jpeg" alt="Foggy New York City skyline" className="hero-image" />
        <div className="container">
          <div className="hero-content">
            <h1>Product-minded AI engineer</h1>
            <p>
              I turn ambiguous ideas into products people actually use — from roadmap and
              stakeholder alignment through to shipped code.
            </p>
            <div className="hero-actions">
              <a onClick={() => scrollToSection(highlightsRef)} className="btn btn-solid">See my work</a>
              <a onClick={() => scrollToSection(contactRef)} className="btn btn-primary">Get in touch</a>
            </div>
          </div>
        </div>
      </header>

      <section ref={aboutRef} className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I’m a software and AI engineer moving toward product management and product operations.
            Over 4+ years at IBM, I’ve shipped generative AI tools and full-stack applications
            end-to-end — and found that the part I enjoy most is everything around the code: figuring
            out what users need, aligning stakeholders, shaping the roadmap, and getting a team to
            deliver.
          </p>
          <p>
            As product owner of STARS, I grew an internal platform to 17K+ users across four
            organizations. Today I’m a Project Manager in IBM Expert Labs, coordinating client software
            migrations across technical teams and client stakeholders, while completing an M.S. in Data
            Science at Columbia with a focus on product management and innovation.
          </p>
          <p>
            I’m looking for product management and product ops roles where a strong technical
            foundation helps teams make better decisions and ship products people genuinely connect with.
          </p>
        </div>
      </section>

      <section ref={highlightsRef} className="highlights">
        <div className="container">
          <h2>Product Highlights</h2>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <span className="highlight-role">{h.role}</span>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
                {h.metrics && (
                  <ul className="highlight-metrics">
                    {h.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={experienceRef} className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            {jobs.map((job) => (
              <div key={`${job.company}-${job.title}`} className="job">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="job-company">{job.company} · {job.location}</p>
                  </div>
                  <span className="job-dates">{job.dates}</span>
                </div>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="education-heading">Education</h2>
          <div className="timeline">
            <div className="job">
              <div className="job-header">
                <div>
                  <h3>M.S. in Data Science (part-time)</h3>
                  <p className="job-company">Columbia University · New York, NY</p>
                </div>
                <span className="job-dates">Expected Dec 2027</span>
              </div>
              <ul>
                <li>Coursework: Product Management, Innovation and Design Lab, Probability and Statistics, Computer Systems for Data Science</li>
              </ul>
            </div>
            <div className="job">
              <div className="job-header">
                <div>
                  <h3>B.S. in Computer Science</h3>
                  <p className="job-company">Fordham University · Bronx, NY</p>
                </div>
                <span className="job-dates">May 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill">
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Hiring for product management or product ops? I’d love to chat.</p>
          <div className="contact-links">
            <a href="mailto:rebeccahendsey@gmail.com" className="btn btn-primary">Send Email</a>
            <a href="https://github.com/rebeccahendsey" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/rebeccahendsey/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2026 Rebecca Hendsey. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

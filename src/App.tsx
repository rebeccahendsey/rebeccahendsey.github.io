import { useRef } from 'react'
import './App.css'

interface Skill {
  category: string
  items: string[]
}

function App() {
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'SQL', 'C++']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git & GitHub', 'VS Code', 'Docker', 'Podman', 'Code Engine', 'IBM Cloud', 'Figma']
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
            <li><a onClick={() => scrollToSection(skillsRef)}>Skills</a></li>
            <li><a onClick={() => scrollToSection(contactRef)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <img src="/hero-image.jpeg" alt="Hero" className="hero-image" />
        <div className="container">
          <div className="hero-content">
          </div>
        </div>
      </header>

      <section ref={aboutRef} className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I work across AI, data, and product development, with a background in software engineering and a growing interest in design, brand, and user experience. I’m especially drawn to building technology that feels intentional, useful, and well-designed.

            I currently develop data-driven tools at IBM while completing a master’s in Data Science at Columbia University. Over time, I’ve become increasingly interested in the intersection of technology and creativity — particularly consumer products, digital experiences, and brands that shape culture.

            Lately, I’ve been exploring how product, technology, and brand come together to create experiences people genuinely connect with. Long term, I’m interested in building products and brands of my own that combine strong technical foundations with clear identity and purpose.
          </p>
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
          <p>I'd love to hear from you!</p>
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

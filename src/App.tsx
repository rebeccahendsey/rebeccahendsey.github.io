import "./App.css";
import Journey from "./Journey";
import Reading from "./Reading";
import Toolbox from "./Toolbox";
import Travel from "./Travel";

const EMAIL = "rebeccahendsey@gmail.com";
const GITHUB = "https://github.com/rebeccahendsey";

function App() {
  return (
    <>
      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label="Rebecca Hendsey, back to top"
        >
          <span className="brand-mark" aria-hidden="true">
            rh
          </span>
          <span className="brand-name">Rebecca Hendsey</span>
        </a>
        <nav className="topnav" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Timeline</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </nav>
        <a className="btn btn-light" href="#contact">
          Contact{" "}
          <span className="btn-dot" aria-hidden="true">
            ↗
          </span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-top">
          <div className="hero-intro">
            <h1 className="hero-name">
              rebecca
              <br />
              hendsey
            </h1>
            <p className="hero-sub">
              AI/software engineer moving into product, with 4+ years building
              at IBM.
            </p>
          </div>
          <div className="hero-aside">
            <a href="#work" className="btn btn-light">
              Check out my work{" "}
              <span className="btn-dot" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src="/photos/iceland-horses.jpg"
            alt="Icelandic horses grazing in a green field below a mountain"
          />
        </figure>
      </section>

      <section id="about" className="about">
        <h2 className="about-giant">About me</h2>
        <div className="about-text">
          <p className="about-hello">
            Nice to meet you,
            <br />
            <em>I’m Rebecca.</em>
          </p>
          <p className="about-kicker">engineering · product </p>
          <p>
            I studied computer science at Fordham, spent over two years as a
            software developer at IBM Research, then moved into AI engineering
            and product ownership at IBM Client Engineering. Somewhere along the
            way, I noticed I’m most energized by why we’re building something
            and who we’re building it for.
          </p>
          <p>
            So I’m steering my path toward product. Today I’m a project manager
            at IBM Expert Labs, learning to drive delivery across teams and
            client stakeholders, and a part-time M.S. Data Science student at
            Columbia, where I’m focusing my electives on product management and
            innovation.
          </p>
          <p>
            AI has lowered the barrier to building, which means a lot of the
            real work is knowing what’s worth building, why, and what impact
            it’ll have. I want to sit right at the intersection of engineering
            and product.
          </p>
        </div>
      </section>

      <div className="band" id="work">
        <h2>Things I've shaped</h2>
        <p>
          Products I’ve owned, and concepts I’ve taken from idea to prototype.
        </p>
      </div>

      <section className="work">
        <article className="project project-stars">
          <div className="project-copy">
            <p className="project-no">
              No. 01 · IBM Lighthouse · Jan 2026 - May 2026
            </p>
            <h3>STARS</h3>
            <h4>Successful Teams and Reference Stories</h4>
            <p className="project-dek">
              Client success stories platform used across IBM.
            </p>
            <p>
              A platform on IBM Lighthouse where teams across IBM find and share
              client success stories. As its product owner, I ran the roadmap. I
              gathered user and stakeholder needs, worked cross-functionally to
              decide what shipped next, and drove adoption across Client
              Engineering, Technology Sales, Expert Labs, and Customer Success.
            </p>
          </div>
          <dl className="stats">
            <div>
              <dt>
                17K<span>+</span>
              </dt>
              <dd>unique users</dd>
            </div>
            <div>
              <dt>
                100K<span>+</span>
              </dt>
              <dd>lifetime visits</dd>
            </div>
            <div>
              <dt>4</dt>
              <dd>organizations</dd>
            </div>
          </dl>
        </article>

        <article className="project project-pgo">
          <div className="project-copy">
            <p className="project-no">
              No. 02 · Columbia Business School · Aug 2026
            </p>
            <h3>
              Pinterest <em>Go</em>
            </h3>
            <p className="project-dek">Turning inspiration into adventure.</p>
            <p>
              A product concept that turns a Pinterest travel board into a
              bookable itinerary. “I have 40 Pins saved for Kyoto and zero idea
              what to actually book” was the problem; five taps from a saved
              board to a booked trip was the answer.
            </p>
            <p>
              Built by a five-person team for Product Management at CBS.
              Together we wrote the product vision, jobs-to-be-done, business
              model, and Agile plan, and tested a prototype with three users in
              Berlin, London, and New York.{" "}
              <strong>
                I pitched the original concept and led the persona and problem
                framing.
              </strong>
            </p>
            <dl className="stats stats-inline">
              <div>
                <dt>5</dt>
                <dd>taps, board to booking</dd>
              </div>
              <div>
                <dt>$54.4M</dt>
                <dd>est. yearly ad revenue</dd>
              </div>
            </dl>
            <a
              className="project-link"
              href="https://board-to-dream-trip.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the prototype via Lovable →
            </a>
          </div>
          <ol
            className="phones"
            aria-label="Pinterest Go prototype walkthrough"
          >
            {["feed", "boards", "review", "setup", "book"].map((step, i) => (
              <li key={step} className="phone">
                <img
                  src={`/work/pinterest-go-${step}.jpg`}
                  alt={`Pinterest Go prototype, step ${i + 1}: ${step}`}
                  loading="lazy"
                />
                <span>
                  {i + 1} · {step}
                </span>
              </li>
            ))}
          </ol>
        </article>

        <article className="project project-mosaic">
          <div className="mosaic-media">
            <img
              className="mosaic-poster"
              src="/work/mosaic-poster.jpg"
              alt="Mosaic poster: Stop saving. Start living."
              loading="lazy"
            />
            <img
              className="mosaic-proto"
              src="/work/mosaic-prototype.jpg"
              alt="Three Mosaic prototype screens: today’s action, your monthly mosaic, and taste insights"
              loading="lazy"
            />
          </div>
          <div className="project-copy">
            <p className="project-no">
              No. 03 · Columbia Innovation & Design Lab · Jan 2026 - May 2026
            </p>
            <h3>Mosaic</h3>
            <p className="project-dek">Live your board.</p>
            <blockquote className="pullquote">
              Full boards. Empty weekends.
            </blockquote>
            <p>
              We save hundreds of pins, reels, and threads about the life we
              want, then never act on them. Mosaic connects to everything you’ve
              already saved, across Pinterest, Notion, Instagram, Reddit, and
              TikTok, and turns it into one clear action a day. At the end of
              each month it gives you a private portrait of the life you're
              building. No feed, no followers.
            </p>
            <p>
              Began by sketching this idea out. Identified the problem, the
              persona, the poster, and the product. Then built a prototype.
            </p>
            <a
              className="project-link"
              href="https://www.figma.com/make/BBeavtOs66Pjj32RwD0VNr/Mosaic?p=f&t=sBxtjsqPPdD5rKlN-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the prototype via Figma→
            </a>
          </div>
        </article>
      </section>

      <div className="band">
        <h2>Things I've built</h2>
        <p>Tools I designed and coded at IBM, end to end.</p>
      </div>

      <section className="work">
        <article className="project project-concierge">
          <div className="concierge-media">
            <figure className="concierge-video">
              <video
                src="/work/concierge-demo.mp4"
                poster="/work/concierge-demo-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Screen recording of the TechXchange AI Concierge chat"
              />
            </figure>
            <img
              src="/work/concierge-launchpad.jpg"
              alt="The AI Concierge on a kiosk in the TechXchange 2025 LaunchPad area"
              loading="lazy"
            />
            <img
              src="/work/concierge-onsite.jpg"
              alt="AI Concierge screen at the TechXchange venue entrance"
              loading="lazy"
            />
          </div>
          <div className="project-copy">
            <p className="project-no">No. 04 · IBM TechXchange 2025</p>
            <h3>
              TechXchange <em>AI Concierge</em>
            </h3>
            <p>
              An AI assistant that helped IBM TechXchange 2025 attendees find
              sessions, coffee, menus, booths, and their way around the venue. I
              built it end to end, a front end with React and IBM Carbon, a
              watsonx Orchestrate agent running Llama 3 405B, and a Code Engine
              deployment. It lived on kiosks on the show floor.
            </p>
            <ul className="pills">
              <li className="pill">React</li>
              <li className="pill">IBM Carbon</li>
              <li className="pill">watsonx Orchestrate</li>
              <li className="pill">IBM Cloud Code Engine</li>
            </ul>
            <a
              className="project-link"
              href={`${GITHUB}/ibm-txc-ai-concierge`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </article>

        <article className="project project-yearend">
          <div className="project-copy">
            <p className="project-no">No. 05 · IBM Research</p>
            <h3>
              Year-End <em>Summaries</em>
            </h3>
            <p>
              A personalized “year in review” email for IBM researchers, pulling
              publications, patents, projects, GitHub contributions, and more
              from a dozen sources into one, personalized page using Python and
              Go template. Generated for 4,010 researchers across IBM Research
              and sent for multiple cycles.
            </p>
            <dl className="stats stats-inline">
              <div>
                <dt>4,010</dt>
                <dd>researcher reports generated</dd>
              </div>
              <div>
                <dt>1,104</dt>
                <dd>emails sent (to eligible researchers)</dd>
              </div>
            </dl>
            <ul className="pills">
              <li className="pill">Python</li>
              <li className="pill">Go template</li>
              <li className="pill">Kafka</li>
            </ul>
            <a
              className="project-link"
              href={`${GITHUB}/ibm-research-year-end-summaries`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
          <div className="project-media">
            <img
              className="shot"
              src="/work/year-end-email.jpg"
              alt="Example year-end summary email"
              loading="lazy"
            />
          </div>
        </article>

        <p className="more-link">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            More on GitHub →
          </a>
        </p>
      </section>

      <div className="band" id="journey">
        <h2>Timeline</h2>
        <p>Work and school, side by side.</p>
      </div>

      <Journey />

      <div className="band" id="toolkit">
        <h2>Toolkit</h2>
        <p>Languages, tools, and ways of working.</p>
      </div>

      <Toolbox />

      <div className="band" id="hobbies">
        <h2>Off the clock</h2>
        <p>I love reading &amp; traveling</p>
      </div>

      <section className="hobbies">
        <Reading />
        <Travel />
      </section>

      <section id="contact" className="contact">
        <p className="contact-kicker">Contact</p>
        <h2>
          Let’s work <em>together.</em>
        </h2>
        <p className="contact-sub">I’d love to hear what you’re building.</p>
        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <ul className="pills contact-links">
          <li>
            <a
              className="pill pill-light"
              href="https://www.linkedin.com/in/rebeccahendsey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="pill pill-light"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-meta">
          <span>© 2026 Rebecca Hendsey</span>
          <span>Made with &lt;3</span>
        </div>
        <p className="wordmark" aria-hidden="true">
          rebecca hendsey
        </p>
      </footer>
    </>
  );
}

export default App;

import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  ExternalLink,
  Search,
  X,
} from 'lucide-react'
import {
  projects,
  trackCounts,
  trackDescriptions,
  tracks,
  type Project,
  type Track,
} from './projects'

type Filter = 'All' | Track

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? ' brand--footer' : ''}`}
      href="#top"
      aria-label="ISTE NITK, back to the project brochure"
    >
      <span className="brand__mark brand__mark--logo" aria-hidden="true">
        <img src="/iste-nitk-logo.png" alt="" width="44" height="34" />
      </span>
      <span className="brand__name">ISTE NITK</span>
    </a>
  )
}

function SiteHeader({ detail = false }: { detail?: boolean }) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#tracks">Tracks</a>
        <a className="nav-cta" href="#projects">
          {detail ? 'All projects' : 'Browse the brochure'}
          {detail ? (
            <ArrowLeft aria-hidden="true" size={16} />
          ) : (
            <ArrowDownRight aria-hidden="true" size={16} />
          )}
        </a>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer>
      <Brand footer />
      <p>ISTE NITK · Project preview brochure · 2026</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const status = project.detailsAvailable ? 'Full brief' : 'Details coming soon'

  return (
    <a
      className={`project-card-link ${project.featured ? 'project-card-link--featured' : ''}`}
      href={`#/project/${project.code.toLowerCase()}`}
      aria-label={`Open ${project.title}`}
    >
      <article className={`project-card track-${project.track.toLowerCase()}`}>
        <div className="project-card__meta">
          <span>{String(project.id).padStart(2, '0')}</span>
          <span>{project.code}</span>
        </div>
        <div className="project-card__body">
          <div className="project-card__track">
            <span>{project.track}</span>
            <span className="project-card__status" aria-label={`Project status: ${status}`}>
              <span className="project-card__status-dot" aria-hidden="true" />
              {status}
            </span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
        </div>
        <div className="project-card__footer">
          <ul aria-label="Skills and themes">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className="project-card__open" aria-hidden="true">
            View project
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </span>
        </div>
      </article>
    </a>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((candidate) => candidate.code === project.code)
  const previousProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

  return (
    <div className="site-shell detail-shell" id="top">
      <SiteHeader detail />
      <main id="main" className={`project-detail track-${project.track.toLowerCase()}`}>
        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="detail-hero__index" aria-hidden="true">
            {String(project.id).padStart(2, '0')}
          </div>
          <div className="detail-hero__content">
            <a className="detail-back" href="#projects">
              <ArrowLeft aria-hidden="true" size={18} />
              All projects
            </a>
            <div className="detail-hero__meta">
              <span>{project.track}</span>
              <span>{project.code}</span>
              <span>{project.detailsAvailable ? 'Full brief' : 'Details coming soon'}</span>
            </div>
            <h1 id="detail-title" tabIndex={-1}>
              {project.title}
            </h1>
            <p>{project.description}</p>
          </div>
        </section>

        {project.detailsAvailable ? (
          <>
            <section className="detail-overview" aria-labelledby="build-title">
              <div className="section-kicker">
                <span>01</span>
                <span>What you’ll build</span>
              </div>
              <div className="detail-overview__intro">
                <h2 id="build-title">From the first question to something real.</h2>
                <p>
                  You’ll work through the project as a team: understand the problem, make the core
                  decisions, then turn the idea into a result that can be tested, explained and shown.
                </p>
              </div>
              <ol className="detail-steps">
                {project.highlights.map((highlight, step) => (
                  <li key={highlight}>
                    <span>{String(step + 1).padStart(2, '0')}</span>
                    <p>{highlight}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="detail-toolkit" aria-labelledby="toolkit-title">
              <div>
                <p className="detail-label">Your working vocabulary</p>
                <h2 id="toolkit-title">Tools, ideas & skills.</h2>
              </div>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </section>

            {project.people && project.people.length > 0 && (
              <section className="detail-people" aria-labelledby="people-title">
                <div className="section-kicker">
                  <span>02</span>
                  <span>The people guiding it</span>
                </div>
                <div className="detail-people__heading">
                  <h2 id="people-title">Project heads & leads.</h2>
                  <p>
                    Names come from the supplied project briefs. LinkedIn notes only appear where the
                    public profile matched the ISTE NITK identity clearly.
                  </p>
                </div>
                <div className="people-grid">
                  {project.people.map((person) => (
                    <article className="person-card" key={person.name}>
                      <div className="person-card__top">
                        <span className="person-card__initials" aria-hidden="true">
                          {person.name
                            .split(' ')
                            .slice(0, 2)
                            .map((part) => part[0])
                            .join('')}
                        </span>
                        {person.linkedinUrl && (
                          <a
                            href={person.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${person.name} on LinkedIn`}
                          >
                            <ExternalLink aria-hidden="true" size={19} />
                          </a>
                        )}
                      </div>
                      <p className="person-card__role">{person.role}</p>
                      <h3>{person.name}</h3>
                      {person.standoutFact && (
                        <p className="person-card__fact">
                          <span>LinkedIn find</span>
                          {person.standoutFact}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="detail-why" aria-labelledby="why-title">
              <p className="detail-label">Why join this project</p>
              <h2 id="why-title">You won’t just read about it. You’ll help make the decisions.</h2>
              <p>
                The point is not to arrive knowing everything. It is to leave with sharper questions,
                real teamwork experience and a finished piece of work you can explain with confidence.
              </p>
            </section>
          </>
        ) : (
          <section className="coming-soon-panel" aria-labelledby="coming-soon-title">
            <p>Details coming soon</p>
            <h2 id="coming-soon-title">The project is confirmed. The full brief is still being shaped.</h2>
            <div>
              <p>
                We have added the project to the current roster so you can see the full range of work
                planned for this year. The learning path, tools, deliverables and project-head details
                will be published here once the brief is ready.
              </p>
              <a href="#projects">
                Explore the other briefs
                <ArrowRight aria-hidden="true" size={20} />
              </a>
            </div>
          </section>
        )}

        <nav className="detail-pagination" aria-label="Browse project details">
          <a href={`#/project/${previousProject.code.toLowerCase()}`}>
            <span>
              <ArrowLeft aria-hidden="true" size={18} />
              Previous
            </span>
            <strong>{previousProject.title}</strong>
          </a>
          <a href={`#/project/${nextProject.code.toLowerCase()}`}>
            <span>
              Next
              <ArrowRight aria-hidden="true" size={18} />
            </span>
            <strong>{nextProject.title}</strong>
          </a>
        </nav>
      </main>
      <SiteFooter />
    </div>
  )
}

function ProjectNotFound() {
  return (
    <div className="site-shell detail-shell" id="top">
      <SiteHeader detail />
      <main className="not-found" id="main">
        <p>404 · Project not found</p>
        <h1>This brief isn’t in the current roster.</h1>
        <a href="#projects">Return to all projects</a>
      </main>
      <SiteFooter />
    </div>
  )
}

function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredProjects = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesTrack = activeFilter === 'All' || project.track === activeFilter
      const searchable = [
        project.title,
        project.code,
        project.description,
        project.track,
        ...project.highlights,
        ...project.tags,
        ...(project.people?.map((person) => person.name) ?? []),
      ]
        .join(' ')
        .toLowerCase()

      return matchesTrack && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [activeFilter, deferredQuery])

  const clearSearch = () => setQuery('')
  const lastProjectNumber = String(projects.length).padStart(2, '0')

  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              ISTE NITK · Project preview 2026
            </p>
            <h1 id="hero-title">
              These are the projects you’ll help build <em>this year.</em>
            </h1>
            <div className="hero__intro-row">
              <p className="hero__intro">
                Meet the current ISTE NITK project roster. Open any idea to see what the team will
                build, what you can learn and who will guide the work.
              </p>
              <a className="primary-button" href="#projects">
                Explore the projects
                <ArrowDownRight aria-hidden="true" size={20} />
              </a>
            </div>
          </div>

          <aside className="hero-index" aria-label="Project catalog summary">
            <div className="hero-index__header">
              <span>Project index</span>
              <span>01—{lastProjectNumber}</span>
            </div>
            <div className="hero-index__number" aria-hidden="true">
              {projects.length}
            </div>
            <div className="hero-index__tracks">
              {tracks.map((track) => (
                <div className={`index-track track-${track.toLowerCase()}`} key={track}>
                  <span>{track}</span>
                  <span>{String(trackCounts[track]).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
            <div className="hero-index__stamp">
              <Asterisk aria-hidden="true" size={17} />
              A preview for builders
            </div>
          </aside>
        </section>

        <section className="manifesto" aria-label="Our project philosophy">
          <p>Thirty-five current projects.</p>
          <p>Eight ways to find the kind of problem you want to help solve.</p>
        </section>

        <section className="tracks" id="tracks" aria-labelledby="tracks-title">
          <div className="section-kicker">
            <span>01</span>
            <span>The tracks</span>
          </div>
          <div className="tracks__heading">
            <h2 id="tracks-title">
              Eight ways in. <em>No wrong door.</em>
            </h2>
            <p>
              Pick the kind of problem that keeps your brain switched on. Each track gives new
              members a place to learn by doing, with a team around them.
            </p>
          </div>
          <div className="track-list">
            {tracks.map((track, index) => (
              <button
                className={`track-row track-${track.toLowerCase()}`}
                key={track}
                onClick={() => {
                  setActiveFilter(track)
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="track-row__number">0{index + 1}</span>
                <span className="track-row__title">{track}</span>
                <span className="track-row__description">{trackDescriptions[track]}</span>
                <span className="track-row__count">
                  {trackCounts[track]} {trackCounts[track] === 1 ? 'project' : 'projects'}
                </span>
                <ArrowDownRight aria-hidden="true" size={22} />
              </button>
            ))}
          </div>
        </section>

        <section className="project-section" id="projects" aria-labelledby="projects-title">
          <div className="section-kicker section-kicker--light">
            <span>02</span>
            <span>The current roster</span>
          </div>
          <div className="project-section__heading">
            <h2 id="projects-title">Pick a project. Open the brief.</h2>
            <p>
              Search by the tools you want to learn, filter by the kind of problem you want to
              understand, then open a project for the full story.
            </p>
          </div>

          <div className="project-tools">
            <div className="filter-list" role="group" aria-label="Filter projects by track">
              {(['All', ...tracks] as Filter[]).map((filter) => {
                const count = filter === 'All' ? projects.length : trackCounts[filter]
                return (
                  <button
                    aria-pressed={activeFilter === filter}
                    className={activeFilter === filter ? 'is-active' : ''}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                    <span>{count}</span>
                  </button>
                )
              })}
            </div>

            <div className="search-field">
              <label htmlFor="project-search">Search projects</label>
              <Search aria-hidden="true" size={19} />
              <input
                id="project-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try Python, energy, storytelling…"
                type="search"
                value={query}
              />
              {query && (
                <button aria-label="Clear project search" onClick={clearSearch} type="button">
                  <X aria-hidden="true" size={18} />
                </button>
              )}
            </div>
          </div>

          <p className="result-count" aria-live="polite">
            Showing {filteredProjects.length} of {projects.length} projects
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
          </p>

          {filteredProjects.length > 0 ? (
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No project matches that search—yet.</p>
              <button
                onClick={() => {
                  setActiveFilter('All')
                  clearSearch()
                }}
              >
                Reset the project index
              </button>
            </div>
          )}
        </section>

        <section className="fit-section" id="find-your-fit" aria-labelledby="fit-title">
          <div className="section-kicker">
            <span>03</span>
            <span>Before you choose</span>
          </div>
          <div className="fit-section__grid">
            <div>
              <h2 id="fit-title">
                You don’t need to know your track yet. Start with <em>what interests you.</em>
              </h2>
            </div>
            <div className="fit-notes">
              <p>
                <span>01</span>
                Choose the question you’d keep thinking about even after the meeting ends.
              </p>
              <p>
                <span>02</span>
                Come as a learner. Bring what you know and the nerve to ask about what you don’t.
              </p>
              <p>
                <span>03</span>
                The strongest teams mix disciplines. Curiosity is a valid qualification.
              </p>
            </div>
          </div>
          <div className="closing-banner">
            <p>Read closely.</p>
            <p>Ask questions.</p>
            <a href="#projects">
              Revisit the projects
              <ArrowUpRight aria-hidden="true" size={25} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const routeMatch = hash.match(/^#\/project\/([^/?#]+)/)
  const selectedProject = routeMatch
    ? projects.find((project) => project.code.toLowerCase() === decodeURIComponent(routeMatch[1]).toLowerCase())
    : undefined

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (routeMatch) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.title = selectedProject
        ? `${selectedProject.title} — ISTE NITK`
        : 'Project not found — ISTE NITK'
      window.setTimeout(() => document.getElementById('detail-title')?.focus(), 0)
    } else {
      document.title = 'ISTE NITK — Project Preview 2026'
    }
  }, [hash, routeMatch, selectedProject])

  if (routeMatch) {
    return selectedProject ? <ProjectDetail project={selectedProject} /> : <ProjectNotFound />
  }

  return <HomePage />
}

export default App

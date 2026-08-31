import { useDeferredValue, useMemo, useState } from 'react'
import {
  Asterisk,
  ArrowDownRight,
  ArrowUpRight,
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

const trackAbbreviations: Record<Track, string> = {
  Chronicle: 'CHR',
  Concrete: 'CON',
  Crypt: 'CRY',
  Credit: 'CRE',
  Clutch: 'CLU',
  Charge: 'CHA',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card track-${project.track.toLowerCase()} ${
        project.featured ? 'project-card--featured' : ''
      }`}
    >
      <div className="project-card__meta">
        <span>{String(project.id).padStart(2, '0')}</span>
        <span>{trackAbbreviations[project.track]}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__track">
          <span>{project.track}</span>
          <span className="project-card__status" aria-label="Project status: Upcoming brief">
            <span className="project-card__status-dot" aria-hidden="true" />
            Upcoming brief
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
        <ArrowUpRight aria-hidden="true" size={23} strokeWidth={1.8} />
      </div>
    </article>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredProjects = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesTrack = activeFilter === 'All' || project.track === activeFilter
      const searchable = [
        project.title,
        project.description,
        project.track,
        ...project.tags,
      ]
        .join(' ')
        .toLowerCase()

      return matchesTrack && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [activeFilter, deferredQuery])

  const clearSearch = () => setQuery('')

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ISTE NITK, back to top">
          <span className="brand__mark brand__mark--logo" aria-hidden="true">
            <img src="/iste-nitk-logo.png" alt="" width="44" height="34" />
          </span>
          <span className="brand__name">ISTE NITK</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#tracks">Tracks</a>
          <a className="nav-cta" href="#projects">
            Browse the brochure
            <ArrowDownRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              ISTE NITK · Project preview 2026
            </p>
            <h1 id="hero-title">
              Here are a few projects you’ll help build <em>this year.</em>
            </h1>
            <div className="hero__intro-row">
              <p className="hero__intro">
                This brochure offers a preview of what ISTE NITK plans to take on.
                Explore the ideas, understand the tracks and see where you might contribute.
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
              <span>01—21</span>
            </div>
            <div className="hero-index__number" aria-hidden="true">
              21
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
          <p>This isn’t the complete list.</p>
          <p>It’s a closer look at a few projects ISTE NITK will take on—and where new members can contribute.</p>
        </section>

        <section className="tracks" id="tracks" aria-labelledby="tracks-title">
          <div className="section-kicker">
            <span>01</span>
            <span>The tracks</span>
          </div>
          <div className="tracks__heading">
            <h2 id="tracks-title">
              Six ways in. <em>No wrong door.</em>
            </h2>
            <p>
              Pick the kind of problem that keeps your brain switched on. Each track
              gives new members a place to learn by doing, with a team around them.
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
            <span>The briefs</span>
          </div>
          <div className="project-section__heading">
            <h2 id="projects-title">A closer look at the briefs.</h2>
            <p>
              This selection spans six tracks. Search by the tools you want to learn,
              or filter by the kind of problem you want to understand.
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
            Showing {filteredProjects.length} of {projects.length} briefs
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
              <p>No brief matches that search—yet.</p>
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

      <footer>
        <a className="brand brand--footer" href="#top" aria-label="ISTE NITK, back to top">
          <span className="brand__mark brand__mark--logo" aria-hidden="true">
            <img src="/iste-nitk-logo.png" alt="" width="44" height="34" />
          </span>
          <span className="brand__name">ISTE NITK</span>
        </a>
        <p>ISTE NITK · Project preview brochure · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App

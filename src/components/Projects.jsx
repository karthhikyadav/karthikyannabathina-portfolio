import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-label">03 — Selected Work</p>

          <h2 className="section-title">
            Projects I've
            <span> actually built.</span>
          </h2>

          <p className="section-description">
            A selection of applications where I worked across
            frontend interfaces, backend services, databases,
            authentication, real-time communication, and
            infrastructure.
          </p>
        </div>

        <div className="projects__list">
          {featuredProjects.map((project, index) => (
            <article
  className={`project-card ${
    project.id === "tradex" ? "project-card--featured" : ""
  }`}
  key={project.id}
>
              <div className="project-card__number">
                0{index + 1}
              </div>

              <div className="project-card__content">
                <p className="project-card__category">
                  {project.category}
                </p>

                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card__highlights">
                  {project.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
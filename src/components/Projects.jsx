import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="projects__header">
          <p className="section-label">
            03 — Selected Work
          </p>

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


        {/* ================================
            PROJECT GRID
        ================================= */}

        <div className="projects__list">

          {featuredProjects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
            >

              {/* ================================
                  PROJECT IMAGE
              ================================= */}

              {project.image && (
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                </div>
              )}


              {/* ================================
                  PROJECT CONTENT
              ================================= */}

              <div className="project-card__content">

                {/* Number */}

                <div className="project-card__number">
                  0{index + 1}
                </div>


                {/* Category */}

                <p className="project-card__category">
                  {project.category}
                </p>


                {/* Title */}

                <h3 className="project-card__title">
                  {project.title}
                </h3>


                {/* Description */}

                <p className="project-card__description">
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      #{technology}
                    </span>
                  ))}
                </div>


                {/* Highlights */}

                {project.highlights?.length > 0 && (
                  <div className="project-card__highlights">
                    {project.highlights.map((highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

              </div>


              {/* ================================
                  PROJECT BUTTONS
              ================================= */}

              <div className="project-card__links">

                {/* LEFT — LIVE PROJECT */}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    <span>Live Project</span>
                    <FiExternalLink />
                  </a>
                ) : (
                  <span
                    className="project-card__link project-card__link--live project-card__link--disabled"
                  >
                    <span>Live Project</span>
                    <FiExternalLink />
                  </span>
                )}


                {/* RIGHT — GITHUB */}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--github"
                  >
                    <span>GitHub</span>
                    <FiGithub />
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
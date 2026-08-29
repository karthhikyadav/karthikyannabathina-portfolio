import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiDocker,
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__inner">

        {/* ================================
            LEFT CONTENT
        ================================= */}

        <div className="hero__content">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Hi, I'm Karthik</span>
          </div>

          <h1 className="hero__title">
            Building software
            <br />
            that solves{" "}
            <span>real problems.</span>
          </h1>

          <p className="hero__description">
            Full Stack Developer focused on building fast,
            reliable, and thoughtfully designed digital
            products with modern web technologies.
          </p>

          {/* ACTIONS */}

          <div className="hero__actions">

            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              View My Work
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="hero__button hero__button--secondary"
            >
              Get In Touch
            </a>

          </div>

          {/* AVAILABILITY */}

          <div className="hero__availability">
            <span className="hero__availability-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* SOCIALS */}

          <div className="hero__socials">

            <a
              href="https://github.com/karthikyannabathina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/karthik-yannabathina/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>


        {/* ================================
            RIGHT DEVELOPER VISUAL
        ================================= */}

        <div className="hero__visual">

          {/* Orbit */}

          <div className="hero__orbit hero__orbit--one" />
          <div className="hero__orbit hero__orbit--two" />


          {/* Main Code Window */}

          <div className="hero__code-window">

            <div className="hero__window-header">

              <div className="hero__window-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="hero__window-title">
                api.js
              </div>

              <div className="hero__window-status">
                ●
              </div>

            </div>


            <div className="hero__code">

              <div>
                <span className="code-number">01</span>
                <span className="code-keyword">
                  import
                </span>{" "}
                <span className="code-variable">
                  express
                </span>{" "}
                <span className="code-keyword">
                  from
                </span>{" "}
                <span className="code-string">
                  "express"
                </span>
              </div>

              <div>
                <span className="code-number">02</span>
                <span className="code-keyword">
                  import
                </span>{" "}
                <span className="code-variable">
                  mongoose
                </span>{" "}
                <span className="code-keyword">
                  from
                </span>{" "}
                <span className="code-string">
                  "mongoose"
                </span>
              </div>

              <div>
                <span className="code-number">03</span>
              </div>

              <div>
                <span className="code-number">04</span>
                <span className="code-keyword">
                  const
                </span>{" "}
                <span className="code-variable">
                  app
                </span>{" "}
                =
                {" "}
                <span className="code-function">
                  express()
                </span>
              </div>

              <div>
                <span className="code-number">05</span>
                <span className="code-variable">
                  app
                </span>
                .
                <span className="code-function">
                  use
                </span>
                (
                <span className="code-string">
                  "/api"
                </span>
                ,
                {" "}
                <span className="code-variable">
                  router
                </span>
                )
              </div>

              <div>
                <span className="code-number">06</span>
              </div>

              <div>
                <span className="code-number">07</span>
                <span className="code-keyword">
                  export
                </span>{" "}
                <span className="code-keyword">
                  default
                </span>{" "}
                <span className="code-variable">
                  app
                </span>
              </div>

            </div>

          </div>


          {/* Build Status Card */}

          <div className="hero__status-card">

            <div className="hero__status-icon">
              $
            </div>

            <div>
              <span className="hero__status-label">
                build successful
              </span>

              <strong>
                deployment ready
              </strong>
            </div>

          </div>


          {/* Architecture Card */}

          <div className="hero__architecture">

            <div className="hero__card-heading">
              System Architecture
            </div>

            <div className="hero__architecture-body">

              <div className="architecture-node">
                <SiReact />
              </div>

              <div className="architecture-line" />

              <div className="architecture-core">
                <SiNodedotjs />
              </div>

              <div className="architecture-line" />

              <div className="architecture-node">
                <SiMongodb />
              </div>

            </div>

            <div className="hero__architecture-footer">
              <span>Frontend</span>
              <span>Backend</span>
              <span>Database</span>
            </div>

          </div>


          {/* Performance Card */}

          <div className="hero__performance">

            <span className="hero__performance-title">
              Performance
            </span>

            <div className="hero__performance-score">
              <strong>98</strong>
              <span>/100</span>
            </div>

            <span className="hero__performance-label">
              Lighthouse Score
            </span>

            <div className="hero__chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>


          {/* Floating Tech Nodes */}

          <div className="hero__tech hero__tech--react">
            <SiReact />
          </div>

          <div className="hero__tech hero__tech--node">
            <SiNodedotjs />
          </div>

          <div className="hero__tech hero__tech--db">
            <SiMongodb />
          </div>

        </div>

      </div>


      {/* ================================
          TECHNOLOGY STRIP
      ================================= */}

      <div className="hero__technologies">

        <div className="container">

          <p className="hero__technologies-label">
            Technologies & tools I work with
          </p>

          <div className="hero__technology-list">

            <span>
              <SiReact />
              React
            </span>

            <span>
              <SiNodedotjs />
              Node.js
            </span>

            <span>
              <SiExpress />
              Express
            </span>

            <span>
              <SiMongodb />
              MongoDB
            </span>

            <span>
              <SiPostgresql />
              PostgreSQL
            </span>

            <span>
              <SiGit />
              Git
            </span>

            <span>
              <SiDocker />
              Docker
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
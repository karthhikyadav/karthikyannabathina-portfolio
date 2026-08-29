import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiJest,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "React Router", icon: null },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMui },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    number: "02",
    title: "Backend",
    description:
      "Designing APIs, authentication, validation, and server-side systems.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: null },
      { name: "JWT", icon: null },
      { name: "Socket.IO", icon: null },
      { name: "Multer", icon: null },
      { name: "Zod", icon: null },
    ],
  },

  {
    number: "03",
    title: "Databases & Data",
    description:
      "Working with persistent storage, caching, and data modeling.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "Mongoose", icon: null },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },

  {
    number: "04",
    title: "Tools & Infrastructure",
    description:
      "Development, API testing, containerization, and collaboration.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
    ],
  },

  {
    number: "05",
    title: "Testing & Engineering",
    description:
      "Writing maintainable code and building reliable backend systems.",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Unit Testing", icon: null },
      { name: "API Testing", icon: null },
      { name: "Error Handling", icon: null },
      { name: "Validation", icon: null },
      { name: "API Design", icon: null },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        <div className="skills__header">
          <p className="section-label">02 — Skills</p>

          <h2 className="section-title">
            Technologies I use to
            <span> build software.</span>
          </h2>

          <p className="section-description">
            My development stack spans frontend interfaces, backend
            services, databases, real-time systems, and development
            infrastructure.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skill-group"
              key={group.number}
            >
              <div className="skill-group__top">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>

              <p className="skill-group__description">
                {group.description}
              </p>

              <div className="skill-group__list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="skill-item"
                    >
                      {Icon && (
                        <Icon className="skill-item__icon" />
                      )}

                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
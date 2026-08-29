const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Vite",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Designing APIs, authentication, validation, and server-side systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.IO",
      "Multer",
      "Zod",
    ],
  },
  {
    number: "03",
    title: "Databases & Data",
    description: "Working with persistent storage, caching, and data modeling.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    number: "04",
    title: "Tools & Infrastructure",
    description: "Development, API testing, containerization, and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Postman",
      "Swagger",
    ],
  },
  {
    number: "05",
    title: "Testing & Engineering",
    description: "Writing maintainable code and building reliable backend systems.",
    skills: [
      "Jest",
      "Unit Testing",
      "API Testing",
      "Error Handling",
      "Validation",
      "API Design",
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
            <article className="skill-group" key={group.number}>
              <div className="skill-group__top">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>

              <p className="skill-group__description">
                {group.description}
              </p>

              <div className="skill-group__list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
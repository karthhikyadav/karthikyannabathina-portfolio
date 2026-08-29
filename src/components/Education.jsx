function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__header">
          <p className="section-label">04 — Education</p>

          <h2 className="section-title">
            My foundation in
            <span> computer science.</span>
          </h2>

          <p className="section-description">
            Building a strong foundation in computer science while
            developing practical skills in full-stack web development
            and software engineering.
          </p>
        </div>

        <article className="education-card">
          <div className="education-card__year">
            2023 — 2027
          </div>

          <div className="education-card__content">
            <p className="education-card__degree">
              Bachelor of Technology
            </p>

            <h3>Computer Science & Engineering</h3>

            <p className="education-card__university">
              P P Savani University
            </p>

            <p className="education-card__description">
              Final-year Computer Science & Engineering student with
              a strong interest in software development. Developing
              practical experience in full-stack web development,
              backend engineering, databases, data structures &
              algorithms, and modern software development practices.
            </p>

            <div className="education-card__tags">
              <span>Computer Science</span>
              <span>Full-Stack Development</span>
              <span>Data Structures & Algorithms</span>
              <span>Database Systems</span>
              <span>Software Engineering</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
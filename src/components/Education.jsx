function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__header">
          <p className="section-label">04 — Education</p>

          <h2 className="section-title">
            Building my foundation in
            <span> computer science.</span>
          </h2>
        </div>

        <article className="education-card">
          <div className="education-card__year">
            2022 — Present
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
              Currently in my final year, focusing on software
              development, data structures and algorithms,
              web technologies, databases, and backend systems.
            </p>

            <div className="education-card__tags">
              <span>Computer Science</span>
              <span>Web Development</span>
              <span>Data Structures</span>
              <span>Database Systems</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
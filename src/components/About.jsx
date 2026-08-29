function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__header">
          <p className="section-label">01 — About</p>

          <h2 className="section-title">
            I build products with a focus on
            <span> clean engineering.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <p>
              I'm Karthik Yannabathina, a Computer Science student and
              Full Stack Developer interested in building reliable,
              scalable, and user-focused web applications.
            </p>

            <p>
              My primary focus is modern JavaScript development,
              working across the frontend and backend with React,
              Node.js, Express, and database technologies.
            </p>
          </div>

          <div className="about__details">
            <div className="about__item">
              <span>Focus</span>
              <strong>Full Stack Development</strong>
            </div>

            <div className="about__item">
              <span>Frontend</span>
              <strong>React & Modern JavaScript</strong>
            </div>

            <div className="about__item">
              <span>Backend</span>
              <strong>Node.js & Express</strong>
            </div>

            <div className="about__item">
              <span>Databases</span>
              <strong>MongoDB & PostgreSQL</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
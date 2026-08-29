function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          Full Stack Developer
        </p>

        <h1 className="hero__title">
          Building modern web applications
          <span> that solve real problems.</span>
        </h1>

        <p className="hero__description">
          I'm Karthik Yannabathina, a Full Stack Developer focused on
          building scalable and reliable applications with React,
          Node.js, and modern backend technologies.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="button button--primary">
            View Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
          >
            GitHub ↗
          </a>

          <a
  href="https://www.linkedin.com/in/karthik-yannabathina/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn ↗
</a>
        </div>

        <div className="hero__stack">
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
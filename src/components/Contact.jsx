function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__content">
          <p className="section-label">07 — Contact</p>

          <h2 className="contact__title">
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact__description">
            I'm currently looking for opportunities to start my
            career as a software developer. If you're hiring,
            working on an interesting product, or would simply
            like to connect, feel free to reach out.
          </p>

          <a
            href="karthikyannabathina4444@gmail.com"
            className="contact__email"
          >
            Gmail↗
          </a>

          <div className="contact__links">
            <a
              href="https://github.com/karthhikyadav"
              target="_blank"
              rel="noreferrer"
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

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
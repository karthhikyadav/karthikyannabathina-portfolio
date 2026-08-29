const learningTopics = [
  {
    title: "TypeScript",
    description:
      "Improving type safety and building more maintainable React and Node.js applications.",
  },
  {
    title: "Next.js",
    description:
      "Learning modern full-stack React patterns, routing, rendering, and application architecture.",
  },
  {
    title: "Microservices",
    description:
      "Exploring service boundaries, API gateways, authentication, and distributed application design.",
  },
  {
    title: "Apache Kafka",
    description:
      "Learning event-driven architecture, producers, consumers, and asynchronous communication.",
  },
  {
    title: "Prisma",
    description:
      "Exploring type-safe database access and modern data modeling with PostgreSQL.",
  },
  {
    title: "BullMQ",
    description:
      "Learning background jobs, queues, workers, and asynchronous processing with Redis.",
  },
  {
    title: "Kubernetes",
    description:
      "Building foundational knowledge of container orchestration and deployment.",
  },
];

function Learning() {
  return (
    <section id="learning" className="section learning">
      <div className="container">
        <div className="learning__header">
          <p className="section-label">
            06 — Currently Learning
          </p>

          <h2 className="section-title">
            Always
            <span> learning.</span>
          </h2>

          <p className="section-description">
            I'm continuously expanding my backend and
            infrastructure knowledge, with a focus on
            TypeScript, distributed systems, and scalable
            application architecture.
          </p>
        </div>

        <div className="learning__list">
          {learningTopics.map((topic, index) => (
            <article className="learning-item" key={topic.title}>
              <span className="learning-item__number">
                0{index + 1}
              </span>

              <h3>{topic.title}</h3>

              <p>{topic.description}</p>

              <span className="learning-item__arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;
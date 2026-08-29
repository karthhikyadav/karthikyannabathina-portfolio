const codingProfiles = [
  {
    platform: "LeetCode",
    count: "80+",
    label: "Problems Solved",
    description:
      "Practicing data structures and algorithms through problem solving.",
    link: "",
  },
  {
    platform: "HackerRank",
    count: "120+",
    label: "Challenges",
    description:
      "Completed coding challenges through HackerRank and MountBlue.",
    link: "",
  },
  {
    platform: "GeeksforGeeks",
    count: "5",
    label: "Problems Solved",
    description:
      "Additional DSA practice through GeeksforGeeks.",
    link: "",
  },
];

function ProblemSolving() {
  return (
    <section
      id="problem-solving"
      className="section problem-solving"
    >
      <div className="container">
        <div className="problem-solving__header">
          <p className="section-label">
            05 — Problem Solving
          </p>

          <h2 className="section-title">
            I practice
            <span> problem solving.</span>
          </h2>

          <p className="section-description">
            Regular practice with data structures and algorithms
            has helped me improve my problem-solving approach and
            understand how to reason about time and space
            complexity.
          </p>
        </div>

        <div className="coding-grid">
          {codingProfiles.map((profile) => (
            <article
              className="coding-card"
              key={profile.platform}
            >
              <div className="coding-card__top">
                <span>{profile.platform}</span>
                <span>↗</span>
              </div>

              <strong className="coding-card__count">
                {profile.count}
              </strong>

              <p className="coding-card__label">
                {profile.label}
              </p>

              <p className="coding-card__description">
                {profile.description}
              </p>

              {profile.link && (
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="coding-card__link"
                >
                  View Profile ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
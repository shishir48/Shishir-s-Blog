import { Link } from "react-router-dom"
import { posts } from "../data/posts"


function About() {
  return (
    <section className="page-section">

      <div className="home-intro">
        <p className="eyebrow">Software engineer · Node.js · AI tools</p>
        <h1>Shishir Singh</h1>
        <p className="home-bio">
          3 years shipping production software at Eisenvault — backend services,
          an offline-sync desktop app, mobile bug fixes, and local LLM tooling.
          Also ran a gaming café for a year. Writing here about engineering and
          the things worth remembering.
        </p>
        <div className="home-contact">
          <a href="mailto:shishirsingh48@gmail.com">shishirsingh48@gmail.com</a>
          <span>·</span>
          <span>+91 97927 06679</span>
          <span>·</span>
          <span>Noida, India</span>
        </div>
      </div>

      <div className="home-section">
        <p className="home-section-label">Stack</p>
        <p className="home-stack">
          Node.js · Python · Electron · Microservices · REST APIs · LLaMA 2 · Mistral AI · DigitalOcean · Linux
        </p>
      </div>

      <div className="home-section">
        <p className="home-section-label">Writing</p>
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.id} className="post-row">
              <Link to={`/blogs/${post.id}`} className="post-row-link">
                <div className="post-row-meta">
                  <span className="post-row-category">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About

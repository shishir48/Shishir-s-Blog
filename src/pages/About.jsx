import { Link } from "react-router-dom"
import { posts } from "../data/posts"

function About() {
  const featuredPosts = posts.slice(0, 2)

  return (
    <section className="page-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Developer, reader, builder</p>
          <h1>Hello, I am Shishir.</h1>
          <p className="hero-text">
            I am documenting what I am learning about web development, design,
            and building a career with intention. This blog is my place to
            share useful ideas and the lessons I want to remember.
          </p>
          <div className="hero-actions">
            <Link to="/blogs" className="button-primary">
              Explore Posts
            </Link>
            <a className="button-secondary" href="mailto:hello@shishir.dev">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-orb" />
          <p className="panel-label">Currently focused on</p>
          <ul className="focus-list">
            <li>Crafting cleaner React interfaces</li>
            <li>Writing posts that feel useful and human</li>
            <li>Learning through small, shippable projects</li>
          </ul>
        </aside>
      </div>

      <div className="info-grid">
        <article className="profile-card">
          <p className="panel-label">About Me</p>
          <h2>Building taste alongside technical skills</h2>
          <p>
            I enjoy frontend work because it sits between logic and expression.
            The code needs to work, but it also needs to feel clear, deliberate,
            and easy for people to trust.
          </p>
        </article>

        <article className="profile-card">
          <p className="panel-label">Tech Stack</p>
          <h2>What I like working with</h2>
          <div className="pill-row">
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>UI Design</span>
            <span>Responsive CSS</span>
          </div>
        </article>

        <article className="profile-card">
          <p className="panel-label">Featured Writing</p>
          <h2>Recent posts from the blog</h2>
          <div className="mini-post-list">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blogs/${post.id}`} className="mini-post">
                <strong>{post.title}</strong>
                <span>
                  {post.category} · {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About

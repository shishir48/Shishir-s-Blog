import { Link } from "react-router-dom"
import { posts } from "../data/posts"

function Blogs() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Writing</p>
        <h1>Notes on engineering and building things.</h1>
      </div>

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
    </section>
  )
}

export default Blogs

import { Link } from "react-router-dom"
import { posts } from "../data/posts"

function Blogs() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Writing archive</p>
        <h1>Notes on building, learning, and thinking clearly.</h1>
        <p className="section-copy">
          A growing collection of posts about web development, books, and the
          small ideas that shape how I work.
        </p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <Link to={`/blogs/${post.id}`} className="blog-link">
              <div className="blog-card-top">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-card-cover">{post.cover}</div>
              <div className="blog-card-bottom">
                <span>{post.date}</span>
                <span>Read article</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blogs

import { Link } from "react-router-dom"
import { posts } from "../data/posts"

function Blogs() {
  return (
    <section className="page-section">
      <h1>Blog Posts</h1>
      <p>
        Here are the first posts on the site. Click any post to view it on its
        own page.
      </p>
      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <Link to={`/blogs/${post.id}`} className="blog-link">
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

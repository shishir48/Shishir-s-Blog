import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts"

function BlogPost() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <section className="page-section">
        <h1>Post not found</h1>
        <Link to="/blogs" className="back-link">Back to writing</Link>
      </section>
    )
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean)

  return (
    <section className="page-section">
      <article className="post-layout">
        <div className="post-row-meta">
          <span className="post-row-category">{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="post-lead">{post.excerpt}</p>
        <div className="post-body">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <Link to="/blogs" className="back-link">← Back to writing</Link>
    </section>
  )
}

export default BlogPost

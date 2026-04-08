import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts"

function BlogPost() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <section className="page-section">
        <h1>Post not found</h1>
        <p>The requested blog post could not be found.</p>
        <Link to="/blogs">Back to Blogs</Link>
      </section>
    )
  }

  return (
    <section className="page-section">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="blog-card">
        <h2>Summary</h2>
        <p>{post.excerpt}</p>
      </div>
      <Link to="/blogs">← Back to Blogs</Link>
    </section>
  )
}

export default BlogPost

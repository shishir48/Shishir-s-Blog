import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts"

function BlogPost() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))
  const relatedPosts = posts.filter((item) => item.id !== Number(id)).slice(0, 2)

  if (!post) {
    return (
      <section className="page-section">
        <h1>Post not found</h1>
        <p>The requested blog post could not be found.</p>
        <Link to="/blogs" className="back-link">
          Back to Blogs
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section">
      <article className="post-layout">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="post-cover">{post.cover}</div>
        <p className="post-lead">{post.excerpt}</p>
        <p className="post-body">{post.content}</p>

        <blockquote className="post-quote">
          Good writing on a personal site is not about sounding impressive. It
          is about being clear enough that someone else can use what you
          learned.
        </blockquote>

        <div className="profile-card">
          <p className="panel-label">Key takeaway</p>
          <h2>Build the habit of shipping thoughtful work</h2>
          <p>
            Small sites become memorable when design, content, and voice are
            all pulling in the same direction. That is the standard I am trying
            to build toward here.
          </p>
        </div>
      </article>

      <section className="related-posts">
        <div className="section-heading">
          <p className="eyebrow">Keep reading</p>
          <h2>More posts from the archive</h2>
        </div>
        <div className="blog-list compact-list">
          {relatedPosts.map((item) => (
            <article key={item.id} className="blog-card">
              <Link to={`/blogs/${item.id}`} className="blog-link">
                <div className="blog-card-top">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Link to="/blogs" className="back-link">
        Back to all posts
      </Link>
    </section>
  )
}

export default BlogPost

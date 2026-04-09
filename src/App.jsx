import { NavLink, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogPost from "./pages/BlogPost"

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-kicker">Personal site</div>
          <div className="brand">Shishir's Blog</div>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shishir Singh.</p>
        <p>Built with React, Vite, and a lot more personality.</p>
      </footer>
    </div>
  )
}

export default App

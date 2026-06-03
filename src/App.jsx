import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header glass-panel">
        <div className="logo">
          <img src="http://static1.squarespace.com/static/5efa92d1d9c6646ba455737e/t/5feb707e8b1e5a550899cf72/1609265282935/hcf-logo-one-color-rgb.png?format=1500w" alt="Hungry Chicken Farms Logo" style={{ height: '50px', verticalAlign: 'middle' }} />
        </div>
        <nav className="nav-links">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#produce" className="nav-link">Produce</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero-title">Fresh from the earth.</h1>
          <p className="hero-subtitle">
            Sustainable farming for a healthier community. We bring the best of nature directly to your table.
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </section>

        <section id="about" className="features">
          <div className="feature-card glass-panel">
            <div className="feature-icon">🌱</div>
            <h3 className="feature-title">100% Organic</h3>
            <p className="feature-desc">Grown with love, without synthetic pesticides or fertilizers. Pure nature in every bite.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">🚜</div>
            <h3 className="feature-title">Local Community</h3>
            <p className="feature-desc">Supporting local ecosystems and bringing the community closer to the source of their food.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">☀️</div>
            <h3 className="feature-title">Sustainable Practices</h3>
            <p className="feature-desc">Using renewable energy and water conservation techniques to protect our planet's future.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} hcf.farm. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

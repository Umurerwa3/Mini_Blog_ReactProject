import type { CSSProperties } from 'react'
import './Header.css'

const logoStyle: CSSProperties = {
  fontWeight: 700,
  letterSpacing: '0.02em',
}

function Header() {
  return (
    <header className="header">
      <span className="header__logo" style={logoStyle}>
        Dev<span className="header__logo-accent">Insights</span>
      </span>
      <nav className="header__nav" aria-label="Primary">
        <a href="#new-post" className="header__nav-link">
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header

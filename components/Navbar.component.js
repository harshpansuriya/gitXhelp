import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="navbar-title">
        figuring <i class="fa-brands fa-git-alt fa-lg"></i>
        </div>
      </div>
      <div className="navbar-btn">
        <label for="navbar-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="navbar-links">
        <a>Git</a>
        <a>Github</a>
      </div>
    </div>
  )
}

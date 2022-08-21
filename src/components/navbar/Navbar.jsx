import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <a className="navbar-brand" href="/products">Products</a>
      </div>
    </nav>
  )
}

export default Navbar
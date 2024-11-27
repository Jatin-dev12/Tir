import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
    <img src={logos} alt="Logo" style={{ marginTop: "10px" }} />
    <ul>
      <li style={{ color: 'white', marginTop: "10px" }}>Home</li>
      <li style={{ color: 'white', marginTop: "10px" }}>Portfolio</li>
      <li style={{ color: 'white', marginTop: "10px" }}>Blogs</li>
      <li style={{ color: 'white', marginTop: "10px" }}>About Us</li>
      <button style={{ paddingTop: '10px', paddingRight: '16px', paddingBottom: '10px', paddingLeft: '16px', backgroundColor: '#FF7F32', borderRadius: "8px", color: "white", border: "none" }}>
        Contact Us
      </button>
    </ul>
  </nav>
    )
}

export default Navbar
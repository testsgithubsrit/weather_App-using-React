import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark py-4 fixed-top">
    <div className="container-fluid ">
      <Link className="navbar-brand " to="/">weatherApp</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item custom-hover-effect">
          <Link className="nav-link active" to="/">Home</Link>
          </li>

          <li className="nav-item custom-hover-effect">

            <Link className="nav-link active" to="/about">About</Link>
          </li>
          <li className="nav-item custom-hover-effect">
            <Link className="nav-link active" to="/weather">Weather</Link>
          </li>     

        </ul>

      </div>
    </div>
  </nav>
  
    </>
  )
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import 'react-bootstrap-icons'
const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top py-3 mb-2">
        <div className="container px-4 px-lg-5">
        <i className="fa-solid fa-globe fa-2xl text-white mr-2"></i>
          <Link className="navbar-brand text-light" >
            Library
          </Link>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item ">
              <Link className="nav-link text-light" to={'/'}>
            <i className="fas fa-book-open mx-1"></i>
            <span>Books</span>
        </Link>
              </li>
              <li className="nav-item">
        <Link className="nav-link text-light" to={'/addbook'}>
            <i className="fas fa-plus mx-1"></i>
            <span>Add Books</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link text-light" to={'/allbooks'}>
            <i className="fas fa-list mx-1"></i>
            <span>View All Books</span>
        </Link>
    </li>
   
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Topbar
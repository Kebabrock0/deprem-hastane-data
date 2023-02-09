import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mersinPage">
              Mersin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kayseriPage">
              Kayseri
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adanaPage">
              Adana
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ankaraPage">
              Ankara
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tumIllerPage">
              Tüm iller
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

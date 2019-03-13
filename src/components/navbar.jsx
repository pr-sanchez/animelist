import React from "react";
const Navbar = ({ count }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      AnimeList{" "}
      <span className="badge badge-pill badge-secondary">{count}</span>
    </a>
    <a
      className="nav-link"
      target="_blank"
      href="https://github.com/pr-sanchez/animelist"
    >
      Github
    </a>
  </nav>
);
export default Navbar;

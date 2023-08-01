import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "#fff" }}>
      <h2>EEPlus Energy Tracker</h2>
      <ul
        style={{ listStyle: "none", display: "flex", justifyContent: "center" }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/pieChart"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Pie Chart
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/barGraph"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Bar Graph
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/lineGraph"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Line Graph
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/treemap" style={{ color: "#fff", textDecoration: "none" }}>
            Tree Map
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

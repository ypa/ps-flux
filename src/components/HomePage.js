import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight courses</h1>
      <p>React, Flux and React-router for untra-responsive web apps</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;

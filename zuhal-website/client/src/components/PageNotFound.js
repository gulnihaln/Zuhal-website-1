import React from "react";
import "./styles/PageNotFound.css";

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="error--container">
      <h1 className="title">404</h1>

      <h4 className="sub-heading">Page Not Found</h4>

      <p className="error--paragraph">
        We're sorry, but the page you're looking for doesn't exist...
      </p>

      <Link className="home--link" to="/">
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;

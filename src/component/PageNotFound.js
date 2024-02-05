import React from "react";
import image from "../assets/img.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="card1">
      <div className="card">
        <div className="msg">
          <p>Oops - Page Not Found !</p>
        </div>
        <div className="img-card">
          <img src={image} alt="img" />
        </div>
        <div className="btn-card">
          <Link to="/">Go Back To Word Counter</Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

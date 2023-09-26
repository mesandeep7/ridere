import React from "react";
import "./MyNavbar.css";
import logoridere from "./images/logoridere.png";
import { Slide } from "react-awesome-reveal";

function MyNavbar() {
  return (
    <header data-bs-theme="light">
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <div className="container">
        <Slide direction="left" delay={600} duration={800} triggerOnce>

            <a className="navbar-brand" href="#">
              <img
                src={logoridere}
                alt="Logo Ridere"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </Slide>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="nav-link active mx-2 link-with-underline"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-2 link-with-underline"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-2 link-with-underline"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-2 link-with-underline"
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-2 link-with-underline"
                  aria-current="page"
                  href="#"
                >
                  FAQs
                </a>
              </li>
            </ul>

            <button type="button" className="btn btn-dark">
              Sign-up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyNavbar;

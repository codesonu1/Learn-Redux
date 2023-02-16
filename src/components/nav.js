import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const state = useSelector((state) => state.amount);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            Bank of Sonu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  about
                </a>
              </li>
            </ul>
            <button className="btn btn-primary disabled text-uppercase">
              total current balance:{state}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Quick Ecomm
          </a>
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
                <Link className="nav-link active" aria-current="page" href="/">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">
                Products
                </Link>
                
              </li>
              
              <li className="nav-item">
                <Link href={"/about-us"} className="nav-link">About us</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

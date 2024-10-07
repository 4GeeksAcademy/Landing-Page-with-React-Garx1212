import React from "react";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light d-flex justify-content-beteew" href="#">Start Boostrap</a>
          
          <button className="navbar-toggler text-light" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#">
                    Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                    Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                    Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">
                    Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        );
};
export default Navbar;
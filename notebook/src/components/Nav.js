import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


export default function Nav() {
  let navigate = useNavigate();
  const handelLogout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notebook
          </Link>
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
                <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""} `} to="/about">About</Link>
              </li>
            </ul>
             {!localStorage.getItem('token')?<form className="d-flex" role="search">
              <Link to="/login" className="btn btn-primary mx-2" role="button">login</Link>
              <Link to="/signup" className="btn btn-primary mx-2" role="button">Sign up</Link>
            </form>
              : <button className="btn btn-primary" onClick={handelLogout}>  Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  );
}

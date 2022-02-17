import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';
import logo from './logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link class="navbar-brand border-none" to="/">
            {/* MERN */}
            <img
                alt=''
                src={logo}
                width='50'
                height='50'
                className='d-inline-block align-top'
              />
              <span className=" badge mt-3 ml-2 ">Test</span>
          </Link>
          {/* <Navbar.Brand>
              <img
                alt=''
                src={logo}
                width='50'
                height='50'
                className='d-inline-block align-top'
              />
            </Navbar.Brand> */}
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* <li class="nav-item active">
                <Link class="nav-link" to="#">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li> */}
              <li class="nav-item">
                <Link
                  className="nav-link ml-5 text-success"
                  to="/login"
                >
                  Sign In
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link ml-5  text-success"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

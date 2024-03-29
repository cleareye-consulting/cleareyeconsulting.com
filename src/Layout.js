import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/images/favicon.svg'
import mailIcon from './assets/images/mail.svg'
import phoneIcon from './assets/images/phone.svg'
import facebookIcon from './assets/images/facebook_1.svg'
import twitterIcon from './assets/images/twitter.svg'
import linkedInIcon from './assets/images/linkedin.svg'

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-none">
            <Link className="navbar-brand mr-5" to="/" id="navbar-banner">
              <img src={logo} height="65" alt="ClearEye Consulting" /> ClearEye Consulting
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-3">
                  <Link className="nav-link text-primary" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link text-primary" to="/approach">
                    Approach
                  </Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link text-primary" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">{this.props.children}</div>
        </main>
        <footer className="bg-light">
          <section className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-left pt-2">
                  <Link className="nav-link text-primary pe-3" to="/">
                    Home
                  </Link>
                  <Link className="nav-link text-primary pe-3" to="/privacy">
                    Privacy
                  </Link>
                  <Link className="nav-link text-primary" to="/terms">
                    Terms
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 text-md-end my-2">
                <span className="navbar-text me-2 me-md-0">
                  <img src={mailIcon} alt="email" />
                  &nbsp;<a href="mailto:info@cleareyeconsulting.com">info@cleareyeconsulting.com</a>
                </span>
                <span className="navbar-text ms-md-3 me-2 me-md-0">
                  <img src={phoneIcon} alt="phone" />
                  &nbsp;<a href="tel:+1-423-651-0178">423-651-0178</a>
                </span>
                <span className="navbar-text ms-md-3 me-2 me-md-0">
                  <a href="https://www.facebook.com/cleareyeconsulting" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" src={facebookIcon} alt="facebook"></img>
                  </a>
                </span>
                <span className="navbar-text ms-md-3 me-2 me-md-0">
                  <a href="https://twitter.com/ClearEyeCnsltg" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" src={twitterIcon} alt="facebook"></img>
                  </a>
                </span>
                <span className="navbar-text ms-md-3">
                  <a href="https://www.linkedin.com/company/cleareyeconsulting/" target="_blank" rel="noopener noreferrer">
                    <img width="24" height="24" src={linkedInIcon} alt="facebook"></img>
                  </a>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start"></div>
              <div className="d-flex justify-content-end"></div>
            </div>
          </section>
          <section className="bg-dark text-light text-center">Copyright &copy; 2019 ClearEye Consulting, LLC</section>
        </footer>
      </div>
    )
  }
}

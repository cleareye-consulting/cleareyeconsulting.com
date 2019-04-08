import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import mailIcon from './assets/images/mail.svg';
import phoneIcon from './assets/images/phone.svg';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-none">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} height="175" width="200" alt="ClearEye Consulting" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="capabilities">Capabilities</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="platforms">Platforms</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="industries">Industries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-primary" to="why">Why Choose ClearEye?</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </header>
                <hr />
                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
                <footer className="bg-light">
                    <section className="my-3 py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8">
                                    <h3>Let's talk!</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    We offer an initial consultation at no charge. Are you within a couple of hours of Chattanooga (Atlanta, Nashville, Knoxville, Huntsville, Birmingham)?  We'd be happy to drive out to your office. Otherwise, we'll set up a video call at a time that works for you.
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-item nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-item nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-item nav-link" to="/privacy">Privacy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-item nav-link" to="/terms">Terms</Link>
                                    </li>
                                </ul>
                                <span className="navbar-text ml-3">
                                    <img src={mailIcon} alt="email" />&nbsp;<a href="mailto:info@cleareyeconsulting.com">info@cleareyeconsulting.com</a>
                                </span>
                                <span className="navbar-text ml-3">
                                    <img src={phoneIcon} alt="phone" />&nbsp;<a href="tel:+1-423-651-0178">423-651-0178</a>
                                </span>
                            </div>
                        </nav>
                    </section>
                    <section className="bg-dark text-light text-center">
                        Copyright &copy; 2019 ClearEye Consulting, LLC
                    </section>
                </footer>
            </div >
        );
    }
}
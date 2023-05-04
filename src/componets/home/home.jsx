import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home2 from '../home/home';
import About from '../about/aboutUs';
import MyCode from '../form/Form';
import Contact from '../contact/contact';

import "../home/styles.css"

function Home() {
    return (
        <Router>
            <div>
                <section className="section bottom-section">
                    <label>
                        <input type="checkbox"/>
                        <span className="menu">
                            <span className="hamburger"></span>
                        </span>
                        <ul>
                            <li>
                                <Link to="/Home2">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/mycode">My-Code</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <Routes>
                            <Route path="/"
                                element={<Home2/>}/>
                            <Route path="/about"
                                element={<About/>}/>
                            <Route path="/mycode"
                                element={<MyCode/>}/>
                            <Route path="/contact"
                                element={<Contact/>}/>
                        </Routes>
                    </label>
                    <div className="content-container content-theme-light">
                        <div className="content-inner">
                            <div className="content-center">
                                <h1>My-Address</h1>
                                <p>My
                                    <a href="http://finestpixels.com/" target="_blank">Privacy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="entire-body">
                    <section className="content-section-1">
                        <div className="content-section-1-punchline"></div>
                        <div className="body-content">
                            <h1>How many people/businesses have my address?</h1>
                        </div>
                    </section>

                </main>

            </div>
        </Router>
    )
}

export default Home;

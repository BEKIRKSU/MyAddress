import React from 'react';
import '../home/styles.css';

function Home() {
  return (
    <div>
      <section className="section bottom-section">
        <label>
          <input type="checkbox" />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
              <a href="/Home2">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/mycode">My-Code</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </label>
        <div className="content-container content-theme-light">
          <div className="content-inner">
            <div className="content-center">
              <h1>My-Address</h1>
              <p>
                My
                <a href="http://finestpixels.com/" target="_blank" rel="noreferrer">Privacy</a>

              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="entire-body">
        <section className="content-section-1">
          <div className="content-section-1-punchline"></div>
          <div className="body-content">
            <h1>A Revolutionary, Safe and Private strucutre to deliveries. There are over 450million deliveries per year in the UK. </h1>
            <img src="MyProject-1.jpg" alt="Envelope with MyAddressCode"/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

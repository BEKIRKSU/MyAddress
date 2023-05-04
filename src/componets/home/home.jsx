import React from 'react'
import "../home/styles.css"

function Home() {
  return (
    <div>    
    <section class="section bottom-section">
      <label>
        <input type="checkbox"/>
        <span class="menu"> <span class="hamburger"></span> </span>
        <ul>
          <li> <a href="index.html">Home</a> </li>
          <li> <a href="about.html">About</a> </li>
          <li> <a href="my-code.html">My-Code</a> </li>
          <li> <a href="contact-us.html">Contact Us</a> </li>
        </ul>
      </label>

    <div class="content-container content-theme-light">
      <div class="content-inner">
        <div class="content-center">
          <h1>My-Address</h1>
          <p>My <a href="http://finestpixels.com/" target="_blank">Privacy</a></p>
        </div>
      </div>
    </div>
  </section>

<main class="entire-body">
  <section class="content-section-1">
    <div class="content-section-1-punchline"> </div>
    <div class="body-content">
        <h1>How many people/businesses have my address?</h1>
    </div>
  </section>

</main>

</div>
  )
}


export default Home;

import { useEffect, useRef, useState } from 'react'
import BSCarousel from '../components/BSCarousel'
import { useInView } from "react-intersection-observer";



function Landing() {
  // const elementScroll = document.getElementById("scroll-appear")


  const { ref: myRef, inView: myElementIsVisible, entry } = useInView()


  return (
    <div className='container'>

      <div className="landing-text">
        <div className="first-message">
          <h1>What are we ?</h1>
          <h3>Share your meal with other <strong><em>batch cooker</em></strong> so you don't eat the same thing all week </h3>
        </div>

        <div className="second-message">
          <img src="" alt="" />
          <h1>So basically...</h1>
          <h2>Cook one meal eat 5 differents</h2>
        </div>

        <div className={myElementIsVisible ? "third-message-show" : "third-message-hidden"} ref={myRef} id='scroll-appear'>
          <ul>
            <li><h1>DISCOVER</h1></li>
            <li><h1>MEET</h1></li>
            <li><h1>LEARN</h1></li>
            <li><h1>FEAST</h1></li>
          </ul>
        </div>
      </div>


      <BSCarousel />

      <br />
      <br />
      <br />

      <a href="/index" className="button-std access">ACCESS</a>
    </div>
  );
}

export default Landing;

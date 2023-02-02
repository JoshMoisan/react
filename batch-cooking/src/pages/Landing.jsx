import { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";

import BSCarousel from '../components/BSCarousel'
import HistoryCard from '../components/HistoryCard'

import diagramme from "../images/diagramme.png";



function Landing() {
  const { ref: myRef, inView: myElementIsVisible} = useInView()



  return (
    <div className='container'>

      <div className="landing-text">
        <div className="first-message">
          <h1>What are <em>we</em> ?</h1>
          <h3>Share your meal with other <strong>batch cooker</strong> <u>so you don't eat the same thing all week</u></h3>
        </div>

        <div className="second-message">
          <div className="second-message-diagram">
            <h1>So basically...</h1>
            <h2>Cook one meal eat 5 different</h2>
            <img src={diagramme} alt="diagramme" />
          </div>
          <div className="second-message-history">
            <HistoryCard
            title = "Good way to make friends"
            description = "I'm new in this neighboor, everybody so friendly"
             />
            <HistoryCard
            title = "Can't get enough of Layla's chicken burger !"
            description = "She won't give me the secret"
             />
            <HistoryCard
            title = "Loveddd it"
            description = "5 stars join, join @Little-Haiti"
             />
            <HistoryCard
            title = "I've been waiting for that "
            description = "I had this idea 3-4 years ago"
             />
          </div>
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

import React from 'react'
import BSCarousel from '../components/BSCarousel'


function Landing() {

  return (
    <div>

      <div className="landing-title">
        <h1>What is it ?</h1>
      </div>


      <BSCarousel />
      <br />
      <br />
      <br />
      <a href="/index" className="button-std access" style={{margin: "0 auto"}}>Access</a>
    </div>
  );
}

export default Landing;

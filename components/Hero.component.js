import React from "react";

function Hero() {
  return (
    <header className='header'>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-5 col-xs-5">
                <i className="fa-brands fa-git-alt fa-10x"></i>
              </div>
              <div className="col-md-9 content-box hero-content">
                {/* <span></span> */}
                <h1>Here to help you <br/> figure out git & github</h1>
                <br/>
                <h3>What do you want to do</h3>
                <div className='row'>
                  <input className='search' placeholder='rebase'/>
                  <button className='search-btn'>
                  <i className="fa-solid fa-magnifying-glass fa-lg" style={{color: "white"}}></i>
                  </button>
                </div>
                <br/>
                <span>Scroll down to learn more about git</span>

              </div>
            </div>
          </div>
        </section>
      </header>
  );
}

export default Hero;
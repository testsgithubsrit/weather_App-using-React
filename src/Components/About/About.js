import React from 'react';

const About = () => {
  return (
    <>
      <div className="container-fluid about-header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              {/* Right side div */}
              <div className="col-md-6 col-12 about_header_right about">
                <img src="images/girl.png" alt="" className="pic" />
              </div>

              {/* Left side div */}
              <div className="col-md-6 col-12 main_header_left">
                <p>Welcome to the Weather App</p>
                <h3>
                  Hey, I am Neha Kumari and I am a{' '}
                  <span className="text-co">full-stack web developer.</span>
                </h3>
                <a href="https://www.linkedin.com/in/neha-k-b28487278" target="_blank" rel="noopener noreferrer">
                  <button>Check me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
